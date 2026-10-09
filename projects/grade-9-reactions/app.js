(() => {
  'use strict';
  const app = document.getElementById('app');
  const games = window.REACTION_GAMES;
  const storageKey = 'genius-g9-reactions-v1';
  let saved = {};
  try { const value = JSON.parse(localStorage.getItem(storageKey) || '{}'); if(value && typeof value === 'object' && !Array.isArray(value)) saved = value; } catch {}
  let game, round = 0, score = 0, attempts = 0, selected = [], solved = false, reviewing = [];
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const button = (label, attrs = '', cls = '') => `<button class="${cls}" ${attrs}>${label}</button>`;
  const shuffled = values => {
    const result = values.map((value,index)=>({value,index}));
    for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
    return result;
  };
  function navigate() {
    const id = new URLSearchParams(location.search).get('game');
    game = games.find(g => g.id === id);
    round = score = attempts = 0; selected = []; solved = false; reviewing = [];
    if(game) renderTask(); else renderHome();
  }
  function renderHome() {
    document.title = 'Reaction Lab · Grade 9';
    app.innerHTML = `<span class="eyebrow">GRADE 9 · LESSON 1</span><h1>Reaction Lab</h1><p class="intro">Choose one short mission. Build equations, predict observations, and follow the electrons.</p><p class="note">Each game has 4 challenges and takes about 3–5 minutes. Use taps, clicks or keyboard buttons. These are virtual activities.</p><section class="grid" aria-label="Reaction games">${games.map(g => `<article class="card"><span class="eyebrow">${escape(g.group)}</span><h2>${escape(g.title)}</h2><p>${escape(g.description)}</p><p class="meta">4 challenges · 12 points</p>${Number.isFinite(saved[g.id]) ? `<p class="badge">Best score: ${saved[g.id]}/12</p>` : ''}<a class="button" href="?game=${g.id}">Play mission</a></article>`).join('')}</section>`;
  }
  function renderTask() {
    selected = []; solved = false; attempts = 0;
    const task = game.tasks[round];
    document.title = `${game.title} · Reaction Lab`;
    let activity = '';
    if(task.kind === 'build' || task.kind === 'order') {
      activity = `<p class="meta">${task.kind === 'order' ? 'Tap the metals in order. Tap a placed tile to remove it.' : 'Tap tiles to build the equation. Tap a placed tile to remove it. You can reuse +.'}</p><div id="slots" class="slots" aria-label="Your answer"></div><div class="bank">${shuffled(task.bank).map(({value,index}) => button(escape(value), `data-tile="${index}"`, 'tile')).join('')}</div><div class="actions">${button('Check answer','id="check"')}${button('Clear tiles','id="clear"','secondary')}</div>`;
    } else {
      if(task.kind === 'transfer') activity += `<div class="transfer"><div class="atom"><strong>${escape(task.left)}</strong>Electron donor?</div><div class="electron">2e⁻</div><div class="atom"><strong>${escape(task.right)}</strong>Electron acceptor?</div></div>`;
      activity += `<div class="choices">${shuffled(task.options).map(({value,index}) => button(escape(value),`data-choice="${index}"`,'choice')).join('')}</div>`;
    }
    app.innerHTML = `<div class="game"><a href="index.html">All G9 missions</a><div class="topline"><span class="eyebrow">${escape(game.group)}</span><span id="score">${score}/12 points</span></div><h1>${escape(game.title)}</h1><div class="topline"><span>Challenge ${round+1} of ${game.tasks.length}</span><span class="meta">${escape(game.pattern)}</span></div><progress class="progress" max="${game.tasks.length}" value="${round}" aria-label="Mission progress"></progress><section class="panel"><h2 id="prompt" tabindex="-1">${escape(task.prompt)}</h2>${task.equation ? `<div class="equation">${escape(task.equation)}</div>` : ''}${activity}<div class="actions">${button('Show hint','id="hint"','secondary')}</div><div id="feedback" role="status" aria-live="polite"></div><div id="next-area"></div></section></div>`;
    app.querySelectorAll('[data-choice]').forEach(b => b.addEventListener('click', () => check(Number(b.dataset.choice) === task.answer)));
    app.querySelectorAll('[data-tile]').forEach(b => b.addEventListener('click', () => {
      if(solved) return;
      const value = task.bank[Number(b.dataset.tile)];
      if(value !== '+' && selected.includes(value)) return;
      if(selected.length >= task.answer.length) return;
      selected.push(value); renderSlots();
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
      if(!reviewing.includes(round)) reviewing.push(round);
      feedback.innerHTML = `<div class="feedback retry"><strong>Try again</strong><p>${escape(task.hint)}</p><p class="meta">You can change your answer and check again.</p></div>`;
      return;
    }
    solved = true;
    const earned = Math.max(1, 4-attempts); score += earned;
    document.getElementById('score').textContent = `${score}/12 points`;
    feedback.innerHTML = `<div class="feedback success"><strong>Correct · +${earned} points</strong><p>${escape(task.explain)}</p></div>`;
    app.querySelectorAll('button').forEach(b => {b.disabled=true;});
    document.getElementById('next-area').innerHTML = `<div class="actions">${button(round===game.tasks.length-1 ? 'See result' : 'Next challenge','id="next"')}</div>`;
    document.getElementById('next').addEventListener('click', () => {round++;if(round===game.tasks.length) finish();else renderTask();});
    document.getElementById('next').focus();
  }
  function finish() {
    const previous = Number.isFinite(saved[game.id]) ? saved[game.id] : 0;
    saved[game.id] = Math.max(previous,score);
    let persisted = true;
    try {localStorage.setItem(storageKey,JSON.stringify(saved));} catch {persisted=false;}
    app.innerHTML = `<div class="game result"><span class="eyebrow">MISSION COMPLETE</span><h1>${escape(game.title)}</h1><p class="score">${score}/12</p><p>${score===12 ? 'Every challenge solved on the first try.' : 'Mission complete. Replay to practise and improve your score.'}</p><p class="meta">Best score: ${saved[game.id]}/12${persisted ? ' · Saved on this device' : ' · Saving is unavailable in this browser'}</p>${reviewing.length ? `<h2>Practise these ideas</h2><ul>${reviewing.map(i=>`<li>${escape(game.tasks[i].explain)}</li>`).join('')}</ul>` : ''}<div class="actions">${button('Replay mission','id="replay"')}<a class="button secondary" href="index.html">Choose another mission</a><a class="button secondary" href="../../index.html">Games hub</a></div></div>`;
    document.getElementById('replay').addEventListener('click',navigate);
  }
  navigate();
})();
