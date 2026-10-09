(() => {
  'use strict';
  const preferenceKey = 'genius-g9-sound';
  let enabled = true, context, master, voiceTimer;
  try { enabled = localStorage.getItem(preferenceKey) !== 'off'; } catch {}
  const control = document.getElementById('sound-toggle');
  function updateControl() {
    control.textContent = enabled ? 'Sound: on' : 'Sound: off';
    control.setAttribute('aria-pressed', String(enabled));
  }
  function unlock() {
    if (!enabled) return;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      if (!context) {
        context = new Audio();
        master = context.createGain();
        master.gain.value = 0.22;
        master.connect(context.destination);
      }
      if (context.state === 'suspended') context.resume().catch(() => {});
    } catch { /* Sound support must never block a mission. */ }
  }
  function stop() {
    clearTimeout(voiceTimer);
    try { window.speechSynthesis?.cancel(); } catch {}
  }
  function tone(frequency, offset, duration, type = 'sine', volume = 0.55) {
    if (!enabled || !context || context.state !== 'running') return;
    try {
      const oscillator = context.createOscillator();
      const envelope = context.createGain();
      const start = context.currentTime + offset;
      oscillator.type = type;
      oscillator.frequency.value = frequency;
      envelope.gain.setValueAtTime(0, start);
      envelope.gain.linearRampToValueAtTime(volume, start + 0.015);
      envelope.gain.exponentialRampToValueAtTime(0.001, start + duration);
      oscillator.connect(envelope);
      envelope.connect(master);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.02);
      oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); };
    } catch {}
  }
  function effect(name) {
    if (!enabled) return;
    unlock();
    if (name === 'tap') tone(520, 0, 0.07, 'sine', 0.18);
    if (name === 'correct') [523.25, 659.25, 783.99].forEach((f,i) => tone(f, i * 0.09, 0.22));
    if (name === 'retry') { tone(260, 0, 0.15, 'triangle', 0.4); tone(220, 0.12, 0.2, 'triangle', 0.4); }
    if (name === 'finish') {
      [523.25, 659.25, 783.99, 1046.5].forEach((f,i) => tone(f, i * 0.15, i === 3 ? 0.65 : 0.24, 'triangle'));
      [523.25, 659.25, 783.99].forEach(f => tone(f, 0.48, 0.65, 'sine', 0.2));
    }
  }
  function speakScore(score) {
    if (!enabled || !window.speechSynthesis || !window.SpeechSynthesisUtterance) return;
    try {
      window.speechSynthesis.cancel();
      const praise = score === 12 ? 'Perfect score! Outstanding work!' : score >= 9 ? 'Great work, scientist!' : 'Mission complete! Keep practising, scientist!';
      const utterance = new SpeechSynthesisUtterance(`${praise} Your score is ${score} out of 12.`);
      utterance.lang = 'en-US';
      utterance.rate = 0.92;
      utterance.pitch = 1.08;
      utterance.volume = 0.9;
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => /^en[-_]/i.test(v.lang) && /natural|aria|jenny|samantha|google/i.test(v.name)) || voices.find(v => /^en[-_]/i.test(v.lang));
      if (voice) utterance.voice = voice;
      window.speechSynthesis.speak(utterance);
    } catch {}
  }
  function celebrate(score) {
    stop();
    effect('finish');
    if (enabled) voiceTimer = setTimeout(() => speakScore(score), 1200);
  }
  control.addEventListener('click', () => {
    enabled = !enabled;
    try { localStorage.setItem(preferenceKey, enabled ? 'on' : 'off'); } catch {}
    if (!enabled) { stop(); if (master) master.gain.value = 0; }
    else { unlock(); if (master) master.gain.value = 0.22; effect('tap'); }
    updateControl();
  });
  document.addEventListener('pointerdown', unlock, {capture:true});
  document.addEventListener('keydown', unlock, {capture:true});
  window.addEventListener('pagehide', stop);
  updateControl();
  window.ReactionAudio = { effect, celebrate, stop, speakScore };
})();
