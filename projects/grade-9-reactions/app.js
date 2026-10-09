(() => {
  'use strict';
  const app = document.getElementById('app');
  const lesson2 = new URLSearchParams(location.search).get('lesson') === '2';
  const games = lesson2 ? window.COMBUSTION_GAMES : window.REACTION_GAMES;
  const lessonTitle = lesson2 ? 'Combustion & Clean Air' : 'Reaction Lab';
  const homeHref = lesson2 ? 'index.html?lesson=2' : 'index.html';
  const missionHref = id => `?${lesson2 ? 'lesson=2&' : ''}game=${id}`;
  const scenes = ['Dry and wet paper near a candle, virtual lab','Blue and yellow burner flames, with soot above the yellow flame','Magnesium ribbon burning above a heatproof surface','Rice straw burning in a field, releasing dark smoke','Vehicle exhaust and an electric bus in a city','A factory gas scrubber with alkaline spray'];
  const picture = scene => Number.isInteger(scene) ? `<figure class="scene scene-${scene}" role="img" aria-label="${scenes[scene]}"><figcaption>${scenes[scene]}</figcaption></figure>` : '';
  const storageKey = 'genius-g9-reactions-v1';
  let saved = {};
  try { const value = JSON.parse(localStorage.getItem(storageKey) || '{}'); if(value && typeof value === 'object' && !Array.isArray(value)) saved = value; } catch {}
  let game, round = 0, score = 0, attempts = 0, selected = [], solved = false, reviewing = [];
  let transitionTimer, countdownTimer;
  const audio = window.ReactionAudio;
  function clearTransition() {
    clearTimeout(transitionTimer);
    clearInterval(countdownTimer);
  }
  window.addEventListener('pagehide', clearTransition);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const button = (label, attrs = '', cls = '') => `<button class="${cls}" ${attrs}>${label}</button>`;
  const shuffled = values => {
    const result = values.map((value,index)=>({value,index}));
    for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
    return result;
  };
  function navigate() {
    clearTransition();
    audio?.stop();
    document.querySelector('.teacher-brand small').textContent = `Grade 9 · ${lessonTitle}`;
    document.querySelector('footer').innerHTML = `<strong>Genius in Science · Mr. Elsayed Osman</strong><br>Lesson ${lesson2 ? '2 · Combustion Reactions and Environmental Pollution' : '1 · Types of Chemical Reactions'} · Virtual activities`;
    const id = new URLSearchParams(location.search).get('game');
    game = games.find(g => g.id === id);
    round = score = attempts = 0; selected = []; solved = false; reviewing = [];
    if(game) renderTask(); else renderHome();
  }
  function renderHome() {
    if(lesson2) {
      document.title = `${lessonTitle} · Grade 9`;
      app.innerHTML = `<nav class="lesson-tabs" aria-label="Grade 9 lessons"><a href="index.html">Lesson 1 · Reactions</a><a href="?lesson=2" aria-current="page">Lesson 2 · Combustion</a></nav><span class="eyebrow">GRADE 9 · LESSON 2</span><h1>${lessonTitle}</h1><p class="intro">Choose a topic, then play one of its two short missions. Explore pictures, match clues, build equations and control a virtual burner.</p><p class="note">4 challenges per mission · 12 points · sound and automatic progression. All experiments are virtual.</p><div class="topics">${window.COMBUSTION_TOPICS.map(t=>`<section class="topic"><div class="topic-image">${picture(t.scene)}</div><div class="topic-content"><h2>${escape(t.title)}</h2><p>${escape(t.description)}</p><div class="topic-games">${t.games.map(g=>`<article class="mini-game"><h3>${escape(g.title)}</h3><p>${escape(g.description)}</p>${Number.isFinite(saved[g.id])?`<p class="badge">Best score: ${saved[g.id]}/12</p>`:''}<a class="button" href="${missionHref(g.id)}">Play mission</a></article>`).join('')}</div></div></section>`).join('')}</div>`;
      return;
    }
    document.title = 'Reaction Lab · Grade 9';
    app.innerHTML = `<span class="eyebrow">GRADE 9 · LESSON 1</span><h1>Reaction Lab</h1><p class="intro">Choose one short mission. Build equations, predict observations, and follow the electrons.</p><p class="note">Each game has 4 challenges and takes about 3–5 minutes. Use taps, clicks or keyboard buttons. These are virtual activities.</p><section class="grid" aria-label="Reaction games">${games.map(g => `<article class="card"><span class="eyebrow">${escape(g.group)}</span><h2>${escape(g.title)}</h2><p>${escape(g.description)}</p><p class="meta">4 challenges · 12 points</p>${Number.isFinite(saved[g.id]) ? `<p class="badge">Best score: ${saved[g.id]}/12</p>` : ''}<a class="button" href="?game=${g.id}">Play mission</a></article>`).join('')}</section>`;
    app.insertAdjacentHTML('afterbegin','<nav class="lesson-tabs" aria-label="Grade 9 lessons"><a href="index.html" aria-current="page">Lesson 1 · Reactions</a><a href="?lesson=2">Lesson 2 · Combustion</a></nav>');
  }
  function renderTask() {
    clearTransition();
    selected = []; solved = false; attempts = 0;
    const task = game.tasks[round];
    document.title = `${game.title} · Reaction Lab`;
    let activity = '';
    if(task.kind === 'build' || task.kind === 'order') {
      activity = `<p class="meta">${task.kind === 'order' ? 'Tap the cards in the correct order. Tap a placed tile to remove it.' : 'Tap tiles to build the equation. Tap a placed tile to remove it. You can reuse +.'}</p><div id="slots" class="slots" aria-label="Your answer"></div><div class="bank">${shuffled(task.bank).map(({value,index}) => button(escape(value), `data-tile="${index}"`, 'tile')).join('')}</div><div class="actions">${button('Check answer','id="check"')}${button('Clear tiles','id="clear"','secondary')}</div>`;
    } else if(task.kind === 'match' || task.kind === 'sort') {
      const entries = task.kind === 'match' ? task.pairs : task.items;
      const labels = task.kind === 'match' ? task.pairs.map(p=>p[1]) : task.categories;
      activity = `<p class="meta">${escape(task.hint)}</p><div class="pair-board"><div class="pair-column">${shuffled(entries).map(({value,index})=>button(escape(value[0]),`data-item="${index}"`,'choice')).join('')}</div><div class="pair-column">${shuffled(labels).map(({value,index})=>button(escape(value),`data-target="${index}"`,'choice')).join('')}</div></div><p id="pair-progress" class="meta">0 of ${entries.length} cards solved</p>`;
    } else if(task.kind === 'burner') {
      activity = `<div class="burner-control"><label for="air-control">Air opening</label><input id="air-control" type="range" min="0" max="2" value="0" step="1"><output id="burner-reading" for="air-control">Closed · insufficient oxygen · yellow flame · soot</output><div id="burner-model" class="burner-model limited"><span id="flame-label">Yellow flame</span><div class="flame-mark" aria-hidden="true"></div><span id="soot-label">Soot forms</span></div><p class="meta">This model compares limited and abundant oxygen. It does not measure a real burner.</p>${button('Check my burner','id="check-burner"')}</div>`;
    } else {
      if(task.kind === 'transfer') activity += `<div class="transfer"><div class="atom"><strong>${escape(task.left)}</strong>Electron donor?</div><div class="electron">2e⁻</div><div class="atom"><strong>${escape(task.right)}</strong>Electron acceptor?</div></div>`;
      activity += `<div class="choices ${task.kind==='hotspot'?'picture-choices':''}">${(task.kind==='hotspot'?task.options.map((value,index)=>({value,index})):shuffled(task.options)).map(({value,index}) => button(escape(value),`data-choice="${index}"`,'choice')).join('')}</div>`;
    }
    app.innerHTML = `<div class="game"><a href="index.html">All G9 missions</a><div class="topline"><span class="eyebrow">${escape(game.group)}</span><span id="score">${score}/12 points</span></div><h1>${escape(game.title)}</h1><div class="topline"><span>Challenge ${round+1} of ${game.tasks.length}</span><span class="meta">${escape(game.pattern)}</span></div><progress class="progress" max="${game.tasks.length}" value="${round}" aria-label="Mission progress"></progress><section class="panel"><h2 id="prompt" tabindex="-1">${escape(task.prompt)}</h2>${task.equation ? `<div class="equation">${escape(task.equation)}</div>` : ''}${activity}<div class="actions">${button('Show hint','id="hint"','secondary')}</div><div id="feedback" role="status" aria-live="polite"></div><div id="next-area"></div></section></div>`;
    app.querySelector('.game>a').href = homeHref;
    if(Number.isInteger(task.scene)) document.getElementById('prompt').insertAdjacentHTML('afterend',picture(task.scene));
    if(task.kind==='match' || task.kind==='sort') wirePairs(task);
    if(task.kind==='burner') {
      const air=document.getElementById('air-control');
      air.addEventListener('input',()=>{
        const full=air.value==='2';
        document.getElementById('burner-reading').textContent=full?'Fully open · abundant oxygen · blue flame · no soot':`${air.value==='0'?'Closed':'Partly open'} · insufficient oxygen · yellow flame · soot`;
        document.getElementById('burner-model').className=`burner-model ${full?'abundant':'limited'}`;
        document.getElementById('flame-label').textContent=full?'Blue flame':'Yellow flame';
        document.getElementById('soot-label').textContent=full?'No soot':'Soot forms';
        audio?.effect('tap');
      });
      document.getElementById('check-burner').addEventListener('click',()=>check(air.value==='2'));
    }
    app.querySelectorAll('[data-choice]').forEach(b => b.addEventListener('click', () => check(Number(b.dataset.choice) === task.answer)));
    app.querySelectorAll('[data-tile]').forEach(b => b.addEventListener('click', () => {
      if(solved) return;
      const value = task.bank[Number(b.dataset.tile)];
      if(value !== '+' && selected.includes(value)) return;
      if(selected.length >= task.answer.length) return;
      selected.push(value); renderSlots();
      audio?.effect('tap');
    }));
    document.getElementById('check')?.addEventListener('click', () => check(JSON.stringify(selected) === JSON.stringify(task.answer)));
    document.getElementById('clear')?.addEventListener('click', () => {if(!solved) {selected=[];renderSlots();}});
    document.getElementById('hint').addEventListener('click', () => {
      if(solved) return;
      document.getElementById('feedback').innerHTML = `<div class="feedback hint">${escape(task.hint)}</div>`;
    });
    if(task.bank) renderSlots();
    if(round > 0) document.getElementById('prompt').focus();
  }
  function wirePairs(task) {
    const entries=task.kind==='match'?task.pairs:task.items;
    let active=null, completed=new Set();
    app.querySelectorAll('[data-item]').forEach(b=>b.addEventListener('click',()=>{
      if(solved || completed.has(Number(b.dataset.item)))return;
      active=Number(b.dataset.item);
      app.querySelectorAll('[data-item]').forEach(x=>x.classList.toggle('selected',x===b));
      audio?.effect('tap');
    }));
    app.querySelectorAll('[data-target]').forEach(b=>b.addEventListener('click',()=>{
      if(solved || active===null)return;
      const target=Number(b.dataset.target);
      const correct=task.kind==='match'?target===active:target===entries[active][1];
      if(!correct){check(false);return;}
      const item=app.querySelector(`[data-item="${active}"]`);
      item.disabled=true;item.classList.remove('selected');item.classList.add('correct');
      if(task.kind==='match'){b.disabled=true;b.classList.add('correct');}
      completed.add(active);active=null;
      document.getElementById('feedback').textContent='';
      document.getElementById('pair-progress').textContent=`${completed.size} of ${entries.length} cards solved`;
      if(completed.size===entries.length)check(true);else audio?.effect('tap');
    }));
  }
  function renderSlots() {
    document.getElementById('slots').innerHTML = selected.length ? selected.map((v,i) => button(escape(v),`data-remove="${i}" aria-label="Remove ${escape(v)}"`,'slot')).join('') : '<span class="empty">Your answer goes here</span>';
    app.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => {if(!solved){selected.splice(Number(b.dataset.remove),1);renderSlots();}}));
    app.querySelectorAll('[data-tile]').forEach(b => {const v=game.tasks[round].bank[Number(b.dataset.tile)];b.disabled=solved || (v!=='+' && selected.includes(v));});
    document.getElementById('check').disabled = solved || selected.length === 0;
  }
  function check(correct) {
    if(solved) return;
    const task = game.tasks[round];
    attempts++;
    const feedback = document.getElementById('feedback');
    if(!correct) {
      audio?.effect('retry');
      if(!reviewing.includes(round)) reviewing.push(round);
      feedback.innerHTML = `<div class="feedback retry"><strong>Try again</strong><p>${escape(task.hint)}</p><p class="meta">You can change your answer and check again.</p></div>`;
      return;
    }
    solved = true;
    audio?.effect('correct');
    const earned = Math.max(1, 4-attempts); score += earned;
    document.getElementById('score').textContent = `${score}/12 points`;
    feedback.innerHTML = `<div class="feedback success"><strong>Correct · +${earned} points</strong><p>${escape(task.explain)}</p></div>`;
    app.querySelectorAll('button, input').forEach(b => {b.disabled=true;});
    document.querySelector('.progress').value = round + 1;
    document.getElementById('next-area').innerHTML = `<div class="auto-next"><span id="countdown">${round===game.tasks.length-1 ? 'Your result' : 'Next challenge'} in 3 seconds</span>${button('Pause auto-next','id="pause-next"','secondary')}</div>`;
    let paused = false;
    const pause = document.getElementById('pause-next');
    function schedule() {
      clearTransition();
      let seconds = 3;
      const label = round === game.tasks.length-1 ? 'Your result' : 'Next challenge';
      document.getElementById('countdown').textContent = `${label} in ${seconds} seconds`;
      countdownTimer = setInterval(() => {
        seconds--;
        document.getElementById('countdown').textContent = `${label} in ${seconds} ${seconds===1?'second':'seconds'}`;
      }, 1000);
      transitionTimer = setTimeout(() => {
        clearTransition();
        round++;
        if(round===game.tasks.length) finish(); else renderTask();
      }, 3000);
    }
    pause.addEventListener('click', () => {
      paused = !paused;
      if(paused) {
        clearTransition();
        document.getElementById('countdown').textContent = 'Paused · take your time to read';
        pause.textContent = 'Resume auto-next';
      } else { pause.textContent = 'Pause auto-next'; schedule(); }
    });
    feedback.tabIndex = -1;
    feedback.focus({preventScroll:true});
    feedback.scrollIntoView({block:'nearest',behavior:'auto'});
    schedule();
  }
  function finish() {
    clearTransition();
    const previous = Number.isFinite(saved[game.id]) ? saved[game.id] : 0;
    saved[game.id] = Math.max(previous,score);
    let persisted = true;
    try {localStorage.setItem(storageKey,JSON.stringify(saved));} catch {persisted=false;}
    app.innerHTML = `<div class="game result"><span class="eyebrow">MISSION COMPLETE</span><h1 id="result-title" tabindex="-1">${escape(game.title)}</h1><div class="score-stage"><span class="result-label">${score===12 ? 'PERFECT SCORE' : score>=9 ? 'GREAT WORK, SCIENTIST' : 'MISSION ACCOMPLISHED'}</span><p class="score" aria-label="Your score is ${score} out of 12">${score}/12</p><p>${score===12 ? 'Every challenge solved on the first try.' : 'Mission complete. Replay to practise and improve your score.'}</p>${button('Hear my score','id="hear-score"','secondary')}</div><p class="meta">Best score: ${saved[game.id]}/12${persisted ? ' · Saved on this device' : ' · Saving is unavailable in this browser'}</p>${reviewing.length ? `<h2>Practise these ideas</h2><ul>${reviewing.map(i=>`<li>${escape(game.tasks[i].explain)}</li>`).join('')}</ul>` : ''}<div class="actions">${button('Replay mission','id="replay"')}<a class="button secondary" href="index.html">Choose another mission</a><a class="button secondary" href="../../index.html">Games hub</a></div></div>`;
    document.getElementById('replay').addEventListener('click',navigate);
    app.querySelector('.result .actions a').href = homeHref;
    document.getElementById('hear-score').addEventListener('click', () => audio?.celebrate(score));
    document.getElementById('result-title').focus();
    audio?.celebrate(score);
  }
  navigate();
})();
