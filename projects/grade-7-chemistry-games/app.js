const missions = [
  {
    icon:"🧪", title:"Matter Scanner", intro:"Review matter, chemistry, and physical versus chemical changes.",
    questions:[
      ["What does chemistry study?",["Matter, its changes, and reactions","Only animals and plants","Planets and galaxies","Music and sports"],0,"Chemistry studies matter, its properties, changes, and reactions."],
      ["Which statement about matter is correct?",["It has mass and occupies space","It has no mass","It is always visible","Sound is matter"],0,"Matter has mass and occupies space."],
      ["Which is a chemical change?",["Rusting iron","Melting ice","Dissolving sugar","Cutting paper"],0,"Rusting produces a new substance, so it is a chemical change."],
      ["Which example is NOT matter?",["Sound energy","Air","Water","Iron"],0,"Sound is energy; it does not have mass and volume like matter."],
      ["Adding sugar to water is usually…",["A physical change","A chemical change","Nuclear change","No change at all"],0,"Sugar dissolves without forming a new substance."]
    ]
  },
  {
    icon:"🔗", title:"Molecule Match", intro:"Identify atoms, elements, and different kinds of molecules from their structures.",
    questions:[
      ["A molecule made of one atom is called…",["Monoatomic","Diatomic","Polyatomic","Compound"],0,"Mono means one."],
      ["H₂ is best described as…",["A diatomic element molecule","A compound","A single atom","A polyatomic compound"],0,"It contains two atoms of the same element."],
      ["A pure substance formed from different elements chemically combined is a…",["Compound","Element","Mixture","Atom"],0,"A compound contains two or more different elements chemically combined."],
      ["The building and structure unit of matter is the…",["Atom","Element","Mixture","Energy level"],0,"Atoms are the basic building units of matter."],
      ["O₃ is a…",["Polyatomic element molecule","Diatomic molecule","Compound","Monoatomic molecule"],0,"O₃ has three atoms of the same element."]
    ]
  },
  {
    icon:"🗂️", title:"Element Sorter", intro:"Sort elements using shine, conductivity, reactivity, and physical state.",
    questions:[
      ["Aluminum is shiny and conducts heat and electricity. It is a…",["Metal","Nonmetal","Metalloid","Noble gas"],0,"These are typical metallic properties."],
      ["Silicon is a shiny gray semiconductor. It is a…",["Metalloid","Metal","Noble gas","Nonmetal"],0,"Semiconducting behavior is typical of metalloids."],
      ["Helium is a colorless, inactive gas. It is a…",["Noble gas","Metal","Metalloid","Reactive nonmetal"],0,"Helium belongs to the noble gases."],
      ["Which set contains only metals?",["Iron, gold, mercury","Oxygen, sulfur, carbon","Silicon, boron, neon","Bromine, helium, gold"],0,"Iron, gold, and mercury are metals."],
      ["All metalloids are normally…",["Solids","Liquids","Gases","Plasma"],0,"The metalloids listed in the course are solids."],
      ["Which metal is liquid at room temperature?",["Mercury","Iron","Gold","Aluminum"],0,"Mercury is the familiar liquid metal."]
    ]
  },
  {
    icon:"⚗️", title:"Symbol Sprint", intro:"Recall element symbols and repair incorrect symbol cards before time runs out.",
    questions:[
      ["What is the correct symbol for Hydrogen?",["H","Hy","He","Hg"],0,"Hydrogen is H; He is helium and Hg is mercury."],
      ["Which pair is correct?",["Magnesium — Mg","Manganese — Mg","Zinc — Zi","Bromine — B"],0,"Magnesium uses Mg; manganese is Mn."],
      ["Which symbol belongs to silver?",["Ag","Au","Si","S"],0,"Ag comes from the Latin name argentum."],
      ["Which symbol belongs to gold?",["Au","Ag","G","Go"],0,"Gold uses Au."],
      ["Which correction repairs a worksheet mistake?",["Lithium: Li, not L","Nitrogen: N, not Ni","Calcium: Ca, not C","All choices"],3,"Lithium is Li, nitrogen is N, and calcium is Ca."],
      ["Which symbol belongs to lead?",["Pb","Ld","Le","P"],0,"Lead uses Pb."]
    ]
  },
  {
    icon:"🧩", title:"Formula Factory", intro:"Build formulas and count atoms and elements inside compounds.",
    questions:[
      ["One carbon atom and two oxygen atoms form…",["CO₂","C₂O","CO","C₂O₂"],0,"CO₂ contains 1 carbon and 2 oxygen atoms."],
      ["Two hydrogen atoms and one oxygen atom form…",["H₂O","HO₂","H₂O₂","OH"],0,"Water is H₂O."],
      ["One sodium atom and one chlorine atom form…",["NaCl","Na₂Cl","NaCl₂","NCl"],0,"Sodium chloride has a 1:1 ratio."],
      ["How many total atoms are in Mg(OH)₂?",["5","3","4","6"],0,"1 Mg + 2 O + 2 H = 5 atoms."],
      ["How many different elements are in Al₂(SO₄)₃?",["3","2","4","5"],0,"The elements are Al, S, and O."],
      ["How many atoms are in NaOH?",["3","2","1","4"],0,"There is one Na, one O, and one H."]
    ]
  },
  {
    icon:"⚛️", title:"Atom Decoder", intro:"Label subatomic particles and decode atomic number and mass number cards.",
    questions:[
      ["Which particle revolves around the nucleus?",["Electron","Proton","Neutron","Nucleus"],0,"Electrons occupy energy levels around the nucleus."],
      ["The nucleus contains…",["Protons and neutrons","Only electrons","Electrons and neutrons","Only protons"],0,"Protons and neutrons are found in the nucleus."],
      ["Which particle has a negative charge?",["Electron","Proton","Neutron","Nucleus"],0,"Electrons are negatively charged."],
      ["Why is an atom neutral?",["Protons equal electrons","Neutrons equal electrons","It has no particles","Protons have no charge"],0,"Equal positive and negative charges cancel."],
      ["An atom has atomic number 20 and mass number 40. Its neutrons =",["20","40","60","10"],0,"Neutrons = mass number − atomic number = 20."],
      ["The number written at the lower left of an element symbol is the…",["Atomic number","Mass number","Electron shell","Ion charge"],0,"Standard nuclear notation places atomic number at lower left."]
    ]
  },
  {
    icon:"🌀", title:"Electron Orbit", intro:"Apply 2n², distribute electrons, and spot impossible configurations.",
    questions:[
      ["Using 2n², the maximum electrons in level 2 is…",["8","2","18","32"],0,"2 × 2² = 8."],
      ["Using 2n², the maximum electrons in level 3 is…",["18","8","32","6"],0,"2 × 3² = 18."],
      ["The electron distribution of oxygen (atomic number 8) is…",["2, 6","4, 4","8","2, 8"],0,"Two fill the first level and six enter the second."],
      ["The electron distribution of carbon (atomic number 6) is…",["2, 4","4, 2","6, 0","2, 6"],0,"Carbon has 2 electrons in level 1 and 4 in level 2."],
      ["The electron distribution of aluminum (atomic number 13) is…",["2, 8, 3","2, 7, 4","8, 5","2, 8, 8"],0,"Aluminum distributes as 2, 8, 3."],
      ["Which first energy level is impossible?",["3 electrons","2 electrons","1 electron","0 electrons"],0,"The first energy level can hold at most 2 electrons."]
    ]
  },
  {
    icon:"⚡", title:"Ion Showdown", intro:"Use valence electrons to identify metals, positive ions, and negative ions.",
    questions:[
      ["Which atom is a metal?",["Li (2,1)","He (2)","H (1)","O (2,6)"],0,"Lithium tends to lose its one valence electron."],
      ["An atom that loses electrons becomes a…",["Positive ion","Negative ion","Neutral atom","Noble gas"],0,"Losing negative charge leaves a positive ion."],
      ["An atom that gains electrons becomes a…",["Negative ion","Positive ion","Neutral atom","Metal atom"],0,"Gaining electrons gives a net negative charge."],
      ["An element with a full outer energy level tends to…",["Neither lose nor gain electrons","Lose all electrons","Gain protons","Become a metal"],0,"A full outer level is stable."],
      ["Which element tends to gain electrons?",["Oxygen","Sodium","Lithium","Helium"],0,"Oxygen needs two electrons to complete its outer level."],
      ["Na with distribution 2,8,1 is classified as a…",["Metal","Noble gas","Nonmetal","Metalloid"],0,"Sodium loses one outer electron easily and is a metal."]
    ]
  }
];

const $ = id => document.getElementById(id);
const state = { id:"", name:"", score:0, mission:0, question:0, answered:0, startedAt:0, elapsed:0, timer:null, locked:false, sound:true, finished:false };
const totalQuestions = missions.reduce((n,m)=>n+m.questions.length,0);
const studentView=$("studentView"), teacherView=$("teacherView");

function formatTime(seconds){const m=Math.floor(seconds/60),s=seconds%60;return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`}
function uid(){return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}
function toast(message){const el=$("toast");el.textContent=message;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200)}
function speak(text){if(!state.sound||!window.speechSynthesis)return; speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.rate=1.03;u.volume=.7;speechSynthesis.speak(u)}

async function syncSession(status="playing"){
  if(!state.id)return;
  const payload={id:state.id,name:state.name,score:state.score,elapsed:state.elapsed,mission:state.finished?8:state.mission+1,status,startedAt:state.startedAt,updatedAt:Date.now()};
  localStorage.setItem("genius-current-session",JSON.stringify(payload));
  try{await fetch("/api/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});}catch{}
}

function openJoin(){$("joinModal").classList.remove("hidden");setTimeout(()=>$('nameInput').focus(),50)}
function closeJoin(){$("joinModal").classList.add("hidden")}
function startGame(name){
  Object.assign(state,{id:uid(),name:name.trim(),score:0,mission:0,question:0,answered:0,startedAt:Date.now(),elapsed:0,finished:false,locked:false});
  closeJoin();$("welcomeScreen").classList.add("hidden");$("finishScreen").classList.add("hidden");$("gameScreen").classList.remove("hidden");
  $("playerLabel").textContent=state.name;$("playerInitial").textContent=state.name.charAt(0).toUpperCase();
  clearInterval(state.timer);state.timer=setInterval(()=>{state.elapsed=Math.floor((Date.now()-state.startedAt)/1000);$("timeLabel").textContent=formatTime(state.elapsed);if(state.elapsed%3===0)syncSession()},1000);
  syncSession();renderGame();speak(`Welcome ${state.name}. Start the chemistry challenge.`);
}

function renderRail(){
  $("missionRail").innerHTML=missions.map((m,i)=>`<div class="mission-button ${i===state.mission?'active':''} ${i<state.mission?'done':''} ${i>state.mission?'locked':''}"><span>${i<state.mission?'✓':m.icon}</span><div><small>MISSION ${i+1}</small><b>${m.title}</b></div></div>`).join("");
}

function renderGame(){
  const mission=missions[state.mission],q=mission.questions[state.question];
  renderRail();$("missionKicker").textContent=`MISSION ${state.mission+1} OF ${missions.length}`;$("missionTitle").textContent=`${mission.icon} ${mission.title}`;$("missionIntro").textContent=mission.intro;
  $("scoreLabel").textContent=state.score.toLocaleString();$("timeLabel").textContent=formatTime(state.elapsed);
  const progress=Math.round(state.answered/totalQuestions*100);$("progressLabel").textContent=`${progress}%`;$("progressBar").style.width=`${progress}%`;
  $("feedback").className="feedback";$("feedback").textContent="";state.locked=false;
  $("questionArea").innerHTML=`<div class="question-meta"><span>QUESTION ${state.question+1} / ${mission.questions.length}</span><span>${totalQuestions-state.answered} questions left</span></div><h3 class="question-text">${q[0]}</h3><div class="answers">${q[1].map((a,i)=>`<button class="answer" data-answer="${i}"><span class="key">${String.fromCharCode(65+i)}</span>${a}</button>`).join("")}</div>`;
  document.querySelectorAll(".answer").forEach(btn=>btn.addEventListener("click",()=>chooseAnswer(Number(btn.dataset.answer))));
}

function chooseAnswer(index){
  if(state.locked)return;state.locked=true;const q=missions[state.mission].questions[state.question],correct=q[2],buttons=[...document.querySelectorAll(".answer")];
  buttons.forEach((b,i)=>{b.disabled=true;if(i===correct)b.classList.add("correct");if(i===index&&i!==correct)b.classList.add("wrong")});
  const ok=index===correct;if(ok){state.score+=100;speak("Correct");}else{state.score=Math.max(0,state.score-20);speak("Try again next question");}
  state.answered++;$("scoreLabel").textContent=state.score.toLocaleString();const feedback=$("feedback");feedback.className=`feedback show ${ok?'good':'bad'}`;feedback.innerHTML=`${ok?'✓ Correct!':'✕ Not quite.'} ${q[3]} <button class="primary next-button" id="nextQuestionBtn">${isLastQuestion()?'Finish mission':'Next question'} →</button>`;
  $("nextQuestionBtn").addEventListener("click",advance);syncSession();
}
function isLastQuestion(){return state.question===missions[state.mission].questions.length-1}
function advance(){
  if(!isLastQuestion()){state.question++;renderGame();return}
  if(state.mission<missions.length-1){state.mission++;state.question=0;toast(`Mission ${state.mission} complete — next lab unlocked!`);renderGame();syncSession();return}
  finishGame();
}
async function finishGame(){
  state.finished=true;clearInterval(state.timer);state.elapsed=Math.floor((Date.now()-state.startedAt)/1000);await syncSession("finished");$("gameScreen").classList.add("hidden");$("finishScreen").classList.remove("hidden");$("finishName").textContent=state.name;$("finishScore").textContent=state.score.toLocaleString();$("finishTime").textContent=formatTime(state.elapsed);speak("Challenge complete. Brilliant work!");
  try{const rows=await fetch("/api/sessions").then(r=>r.json());const rank=rows.findIndex(x=>x.id===state.id)+1;$("finishRank").textContent=rank?`#${rank}`:"—"}catch{}
}

function showTeacher(){studentView.classList.add("hidden");teacherView.classList.remove("hidden");connectDashboard()}
function renderDashboard(rows){
  const now=Date.now();rows=rows.map(x=>({...x,status:x.status==="playing"&&now-x.updatedAt>15000?"offline":x.status}));
  $("studentCount").textContent=rows.length;$("activeCount").textContent=rows.filter(x=>x.status==="playing").length;$("finishedCount").textContent=rows.filter(x=>x.status==="finished").length;$("topScore").textContent=rows[0]?.score?.toLocaleString()||"0";
  $("emptyBoard").classList.toggle("hidden",rows.length>0);$("leaderboardBody").innerHTML=rows.map((x,i)=>`<tr><td>${i<3?["🥇","🥈","🥉"][i]:i+1}</td><td><div class="student-cell"><span class="student-avatar">${escapeHtml(x.name.charAt(0).toUpperCase())}</span>${escapeHtml(x.name)}</div></td><td><span class="progress-mini"><i style="width:${Math.round(x.mission/8*100)}%"></i></span>${x.mission}/8</td><td>${x.score.toLocaleString()}</td><td>${formatTime(x.elapsed)}</td><td><span class="status-pill ${x.status}">${x.status==="finished"?'Finished':x.status==="offline"?'Offline':'Playing'}</span></td></tr>`).join("");
}
function connectDashboard(){
  fetch("/api/sessions").then(r=>r.json()).then(renderDashboard).catch(()=>{});const source=new EventSource("/api/events");source.onmessage=e=>{renderDashboard(JSON.parse(e.data));$("connectionBadge").textContent="● Connected";$("connectionBadge").className="connected"};source.onerror=()=>{$("connectionBadge").textContent="● Reconnecting…"};
  setInterval(()=>fetch("/api/sessions").then(r=>r.json()).then(renderDashboard).catch(()=>{}),5000);
}

$("openJoinBtn").addEventListener("click",openJoin);$("closeJoinBtn").addEventListener("click",closeJoin);$("joinModal").addEventListener("click",e=>{if(e.target===$("joinModal"))closeJoin()});
$("joinForm").addEventListener("submit",e=>{e.preventDefault();const name=$("nameInput").value.trim();if(name.length<2)return toast("Please enter your full name");startGame(name)});
$("playAgainBtn").addEventListener("click",()=>{location.href="/"});$("soundBtn").addEventListener("click",()=>{state.sound=!state.sound;$("soundBtn").textContent=state.sound?"🔊 Sound":"🔇 Muted"});
$("resetBoardBtn").addEventListener("click",async()=>{if(!confirm("Clear all students and results for this round?"))return;await fetch("/api/reset",{method:"POST"});toast("Leaderboard reset")});
if(new URLSearchParams(location.search).get("view")==="teacher")showTeacher();
