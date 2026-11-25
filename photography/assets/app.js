/* Vinit Rami Photographs: the 3D camera, the playback, the lens portfolio, the About spread and the darkroom. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  var hero = document.getElementById('hero');
  var $ = function (id) { return document.getElementById(id); };
  var ICONS = {"speaker-high": "<svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M154.64,26.61a6,6,0,0,0-6.32.65L77.94,82H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V32A6,6,0,0,0,154.64,26.61ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.07V90.93l60-46.66Zm50.53-108.85a38,38,0,0,1,0,50.24,6,6,0,1,1-9-7.94,26,26,0,0,0,0-34.37,6,6,0,0,1,9-7.93ZM246,128a77.86,77.86,0,0,1-19.86,52,6,6,0,1,1-8.94-8,66,66,0,0,0,0-88,6,6,0,1,1,8.94-8A77.86,77.86,0,0,1,246,128Z\"/></svg>", "speaker-slash": "<svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M52.44,36A6,6,0,0,0,43.56,44L78,81.94l-.08.06H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V169.92L203.56,220a6,6,0,0,0,8.88-8.08ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.07V90.93l.11-.08L146,156.72Zm41.5-66.53a26,26,0,0,0,0-34.37,6,6,0,1,1,9-7.93,38,38,0,0,1,0,50.24,6,6,0,0,1-9-7.94ZM107.41,66.68a6,6,0,0,1,1.06-8.42l39.85-31A6,6,0,0,1,158,32v74.83a6,6,0,0,1-12,0V44.27L115.83,67.73A6,6,0,0,1,107.41,66.68ZM246,128a77.86,77.86,0,0,1-19.86,52,6,6,0,1,1-8.94-8,66,66,0,0,0,0-88,6,6,0,1,1,8.94-8A77.86,77.86,0,0,1,246,128Z\"/></svg>", "camera": "<svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z\"/></svg>", "device-mobile-camera": "<svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18Zm10,198a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V40A10,10,0,0,1,80,30h96a10,10,0,0,1,10,10ZM138,60a10,10,0,1,1-10-10A10,10,0,0,1,138,60Z\"/></svg>"};
  var DIAL_ICONS = {"lightning-slash": "M56.88,31.93A12,12,0,1,0,39.12,48.07L75.9,88.52,39.23,127.81a12,12,0,0,0,4.31,19.33l51.18,20.47L84.13,238.22a12,12,0,0,0,20.64,10l58.9-63.11,35.45,39a12,12,0,0,0,17.76-16.14ZM113.6,203.55l6.27-41.77a12,12,0,0,0-7.41-12.92L68.74,131.37l23.35-25,55.38,60.92ZM111.41,68.06a12,12,0,0,1-.59-17L151.23,7.81a12,12,0,0,1,20.64,10L161.28,88.39l51.18,20.47a12,12,0,0,1,4.31,19.33l-16.82,18a12,12,0,0,1-17.55-16.38l4.86-5.21-43.72-17.49a12,12,0,0,1-7.41-12.92l6.27-41.77-14,15A12,12,0,0,1,111.41,68.06Z", "user": "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z", "mountains": "M160,80a32,32,0,1,0-32-32A32,32,0,0,0,160,80Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,160,40Zm94.32,153.88L199.76,101.8A19.85,19.85,0,0,0,182.55,92h0a19.83,19.83,0,0,0-17.2,9.8l-18.7,31.55-37.42-63.5a20,20,0,0,0-34.46,0L1.66,193.91A12,12,0,0,0,12,212H244a12,12,0,0,0,10.32-18.12ZM92,87.87,108.57,116H75.43ZM33,188l28.28-48h61.44L151,188Zm145.86,0L160.56,157l22-37.1L222.94,188Z", "baby": "M92,144a16,16,0,1,1,16-16A16,16,0,0,1,92,144Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,112Zm-14.4,49.85a41,41,0,0,1-43.2,0,12,12,0,1,0-12.8,20.3,65,65,0,0,0,68.8,0,12,12,0,1,0-12.8-20.3ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84.08,84.08,0,0,0-82-83.95c-9.46,14.2-10,27.28-10,28A8,8,0,0,0,136,72a12,12,0,0,1,24,0,32,32,0,0,1-64,0c0-.63.1-10.48,5-23.52A84,84,0,1,0,212,128Z", "person-simple-run": "M152,92a36,36,0,1,0-36-36A36,36,0,0,0,152,92Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,152,44Zm76,93.4a12,12,0,0,1-7,10.91,66,66,0,0,1-21.47,3.78c-14,0-34.25-3.82-59.77-19a177,177,0,0,1-10.27,21C153.12,162.83,188,183.8,188,232a12,12,0,0,1-24,0c0-18.69-6.95-33.06-21.26-43.94-9.16-7-19.55-11-27.43-13.34-.81,1-1.64,2-2.5,2.95-20,22.87-44.82,34.76-72.25,34.76a97.33,97.33,0,0,1-9.75-.49,12,12,0,1,1,2.39-23.88c52.3,5.22,77.48-45.92,85.79-67.75C84.8,102.46,63.74,118.78,63.51,119a12,12,0,0,1-15-18.72C50.08,99,88,69.44,142.75,106.62c43.1,29.31,68.1,19.92,68.5,19.76a12,12,0,0,1,16.75,11Z", "flower": "M215.64,128a44,44,0,0,0-43.82-75.9,44,44,0,0,0-87.64,0A44,44,0,0,0,40.36,128a44,44,0,0,0,43.82,75.89,44,44,0,0,0,87.64,0A44,44,0,0,0,215.64,128ZM108,128a20,20,0,1,1,20,20A20,20,0,0,1,108,128Zm72.35-53.32a20,20,0,1,1,20,34.64c-2.65,1.53-10.52,4.88-30.1,6.42a44.08,44.08,0,0,0-10.52-18.18C170.86,81.36,177.7,76.21,180.35,74.68ZM128,36a20,20,0,0,1,20,20c0,3.06-1,11.55-9.49,29.28a43.79,43.79,0,0,0-21,0C109,67.55,108,59.06,108,56A20,20,0,0,1,128,36ZM48.33,82a20,20,0,0,1,27.32-7.32c2.65,1.53,9.49,6.68,20.62,22.88a44.08,44.08,0,0,0-10.52,18.18c-19.58-1.54-27.45-4.89-30.1-6.42A20,20,0,0,1,48.33,82Zm27.32,99.32a20,20,0,1,1-20-34.64c2.65-1.53,10.52-4.88,30.1-6.42a44.08,44.08,0,0,0,10.52,18.18C85.14,174.64,78.3,179.79,75.65,181.32ZM128,220a20,20,0,0,1-20-20c0-3.06,1-11.55,9.49-29.28a43.79,43.79,0,0,0,21,0C147,188.45,148,196.94,148,200A20,20,0,0,1,128,220Zm79.67-46a20,20,0,0,1-27.32,7.32c-2.65-1.53-9.49-6.68-20.62-22.88a44.08,44.08,0,0,0,10.52-18.18c19.58,1.54,27.45,4.89,30.1,6.42A20,20,0,0,1,207.67,174Z", "moon-stars": "M244,96a12,12,0,0,1-12,12H220v12a12,12,0,0,1-24,0V108H184a12,12,0,0,1,0-24h12V72a12,12,0,0,1,24,0V84h12A12,12,0,0,1,244,96ZM144,60h4v4a12,12,0,0,0,24,0V60h4a12,12,0,0,0,0-24h-4V32a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24Zm75.81,90.38A12,12,0,0,1,222,162.3,100,100,0,1,1,93.7,34a12,12,0,0,1,15.89,13.6A85.12,85.12,0,0,0,108,64a84.09,84.09,0,0,0,84,84,85.22,85.22,0,0,0,16.37-1.59A12,12,0,0,1,219.81,150.38ZM190,172A108.13,108.13,0,0,1,84,66,76,76,0,1,0,190,172Z"};

  var P = {
    'london-lamps': ['Three lamps and a clock tower', 'Galaxy S23', '20251028_150732.JPG', '1/833  F2.4  ISO 32'],
    'statue-seagull': ['A seagull takes the statue', 'Galaxy S23', '20251105_142504.JPG', '1/170  F2.4  ISO 25'],
    'gta-ferrari': ['Pink Ferrari, behind glass', 'Galaxy S23', '20261114_200903.JPG', '1/50  F1.8  ISO 320'],
    'unity-river': ['Statue of Unity, Gujarat', 'Nikon D5200', 'DSC_0159.JPG', '1/400  F11  ISO 200  27mm'],
    'unity-bloom': ['Through the frangipani, Gujarat', 'Nikon D5200', 'DSC_0164.JPG', '1/320  F10  ISO 200  29mm'],
    'birds-rail': ['Four on a rail', 'Nikon D5200', 'DSC_0274.JPG', '1/100  F5.6  ISO 400  55mm'],
    'big-ben': ['Big Ben, under weather', '', '', ''], 'burlington-arcade': ['Arcade of chandeliers, London', '', '', ''],
    'spire-autumn': ['Spire and red leaves', '', '', ''], 'red-brick': ['Red brick, blue sky', '', '', ''],
    'glass-tower': ['Glass and grey', '', '', ''], 'dusk-block': ['Last light on the block', '', '', ''],
    'cat': ['Afternoon nap', '', '', ''], 'street-food': ['Toppings, mid-air', '', '', ''],
    'marina-bay': ['Marina Bay, lit, Singapore', '', '', ''], 'night-building': ['Lit windows', '', '', ''],
    'moon': ['Half moon', '', '', ''], 'candle': ['One flame', '', '', ''], 'overthinking': ['Stop overthinking', '', '', ''],
    'lego-night': ['Small car, big night', '', '', ''], 'monk-temple': ['Little monk, big temple', '', '', ''],
    'rolls-royce': ['Spectre, under lights', '', '', ''], 'bmw-showroom': ['The 6, recrafted', '', '', ''], 'f1-showroom': ['Black and gold', '', '', '']
  };
  var ALT = {
    'london-lamps': 'Victorian street lamps leading to the Elizabeth Tower in London.', 'statue-seagull': 'A bronze statue with a seagull perched on top.',
    'gta-ferrari': 'A pink Ferrari on display behind a shop window.', 'unity-river': 'The Statue of Unity over a river valley in haze.',
    'unity-bloom': 'The Statue of Unity seen past white frangipani flowers.', 'birds-rail': 'Four small birds in a row on a metal rail.',
    'big-ben': 'The Elizabeth Tower clock face against a cloudy sky.', 'burlington-arcade': 'A covered arcade with chandeliers and a red carpet.',
    'spire-autumn': 'A stone spire framed by red autumn leaves.', 'red-brick': 'A red-brick building rising into a blue sky.',
    'glass-tower': 'The corner of a glass office building under an overcast sky.', 'dusk-block': 'An apartment block lit orange by the last sun.',
    'cat': 'A white and ginger cat asleep on a paved path.', 'street-food': 'A hand scattering toppings onto a pancake on a griddle.',
    'marina-bay': 'Marina Bay Sands lit up at night over the water.', 'night-building': 'An office building at night with warm-lit windows.',
    'moon': 'A half moon in a black sky.', 'candle': 'A single tea-light flame in darkness.', 'overthinking': 'A candle in front of a red sign that reads stop overthinking.',
    'lego-night': 'A yellow toy supercar in front of a misty night road scene.', 'monk-temple': 'A smiling monk figurine in front of a blurred temple roof.',
    'rolls-royce': 'A white Rolls-Royce Spectre on a lit display stand.', 'bmw-showroom': 'A dark blue BMW at a launch display.', 'f1-showroom': 'A black and gold Formula 1 car on display.'
  };
  var ALL = Object.keys(P);

  /* the D5200 mode dial, clockwise from AUTO */
  var MODES = [
    { mark: 'AUTO', name: 'Auto', sub: 'Everything on the card', set: ALL },
    { icon: 'lightning-slash', name: 'Auto, flash off', sub: 'Low light, no flash', set: ['candle', 'overthinking', 'night-building', 'moon'] },
    { icon: 'user', name: 'Portrait', sub: 'Faces, and the odd statue', set: ['statue-seagull', 'burlington-arcade', 'monk-temple', 'cat'] },
    { icon: 'mountains', name: 'Landscape', sub: 'Wide and far', set: ['unity-river', 'unity-bloom', 'marina-bay', 'big-ben', 'spire-autumn', 'london-lamps'] },
    { icon: 'baby', name: 'Child', sub: 'Nothing shot here yet', set: [] },
    { icon: 'person-simple-run', name: 'Sports', sub: 'Fast things, standing still', set: ['f1-showroom', 'rolls-royce', 'bmw-showroom', 'gta-ferrari', 'lego-night'] },
    { icon: 'flower', name: 'Close up', sub: 'Small things, up close', set: ['candle', 'monk-temple', 'street-food', 'birds-rail', 'overthinking'] },
    { icon: 'moon-stars', name: 'Night portrait', sub: 'After dark', set: ['night-building', 'marina-bay', 'moon', 'lego-night'] },
    { mark: 'SCENE', name: 'Scene', sub: 'Food and pets', set: ['street-food', 'cat'] },
    { mark: 'EFFECTS', name: 'Effects', sub: 'Before and after the edit', set: 'edit' },
    { mark: 'M', name: 'Manual', sub: 'Shot on the Nikon', set: ['unity-river', 'unity-bloom', 'birds-rail'] },
    { mark: 'A', name: 'Aperture priority', sub: 'Shallow focus', set: ['monk-temple', 'lego-night', 'candle', 'gta-ferrari'] },
    { mark: 'S', name: 'Shutter priority', sub: 'Caught mid-moment', set: ['street-food', 'birds-rail', 'statue-seagull'] },
    { mark: 'P', name: 'Programmed auto', sub: 'City and street', set: ['red-brick', 'glass-tower', 'dusk-block', 'big-ben', 'burlington-arcade', 'spire-autumn', 'london-lamps'] }
  ];

  var PLACE = { 'unity-river': 'Gujarat, India', 'unity-bloom': 'Gujarat, India', 'marina-bay': 'Singapore', 'big-ben': 'London', 'london-lamps': 'London', 'burlington-arcade': 'London' };
  var N = MODES.length, STEP = Math.PI * 2 / N;
  function count(m) { return m.set === 'edit' ? 'Original and edit' : m.set.length ? m.set.length + (m.set.length === 1 ? ' frame' : ' frames') : 'Empty'; }
  function mod(n, m) { return ((n % m) + m) % m; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function swap(el) { if (!el) return; el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); }

  /* ---------- sound: everything is synthesised, nothing is downloaded ---------- */
  var ac = null, master = null, soundOn = true;
  function actx() {
    if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); master = ac.createGain(); master.gain.value = 0.9; master.connect(ac.destination); } catch (e) { ac = null; } }
    if (ac && ac.state === 'suspended') ac.resume();
    return ac;
  }
  function noise(at, dur, freq, gain, type) {
    var a = actx(); if (!a || !soundOn) return;
    var len = Math.ceil(a.sampleRate * dur), buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    var s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    s.buffer = buf; f.type = type || 'bandpass'; f.frequency.value = freq; f.Q.value = 0.9; g.gain.value = gain;
    s.connect(f); f.connect(g); g.connect(master); s.start(a.currentTime + at);
  }
  function tone(at, dur, f0, f1, gain, type) {
    var a = actx(); if (!a || !soundOn) return;
    var t = a.currentTime + at, o = a.createOscillator(), g = a.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(f0, t); if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.05);
  }
  function motor(dur, up) {
    var a = actx(); if (!a || !soundOn) return;
    var t = a.currentTime, o = a.createOscillator(), lfo = a.createOscillator(), lg = a.createGain(), f = a.createBiquadFilter(), g = a.createGain();
    o.type = 'sawtooth'; o.frequency.setValueAtTime(up ? 92 : 138, t); o.frequency.linearRampToValueAtTime(up ? 138 : 92, t + dur);
    lfo.frequency.value = 38; lg.gain.value = 6; lfo.connect(lg); lg.connect(o.frequency);
    f.type = 'lowpass'; f.frequency.value = 650;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.06); g.gain.setValueAtTime(0.09, t + dur - 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(f); f.connect(g); g.connect(master); o.start(t); lfo.start(t); o.stop(t + dur + 0.05); lfo.stop(t + dur + 0.05);
    noise(0, dur, 1900, 0.05); noise(dur - 0.03, 0.03, 2600, 0.35);
  }
  var SND = {
    shutter: function () { noise(0, 0.045, 2600, 0.9); noise(0.075, 0.06, 1500, 0.7); },
    tick: function () { noise(0, 0.012, 4200, 0.35); },
    tap: function () { tone(0, 0.05, 2200, 1500, 0.06); noise(0, 0.012, 5200, 0.12, 'highpass'); },
    blip: function () { tone(0, 0.09, 880, 1320, 0.05); },
    whoosh: function () { noise(0, 0.42, 900, 0.22); noise(0.05, 0.3, 2400, 0.08); },
    charge: function () { tone(0, 0.7, 1500, 7800, 0.035); },
    pop: function () { noise(0, 0.04, 700, 0.7, 'lowpass'); tone(0, 0.08, 220, 110, 0.22, 'triangle'); },
    fire: function () { noise(0, 0.16, 5200, 0.45, 'highpass'); tone(0, 0.05, 3200, 900, 0.05); },
    fold: function () { noise(0, 0.05, 500, 0.5, 'lowpass'); tone(0, 0.06, 160, 90, 0.18, 'triangle'); },
    beep: function () { tone(0, 0.08, 1760, 0, 0.06, 'square'); tone(0.14, 0.08, 1760, 0, 0.06, 'square'); },
    focus: function () { tone(0, 0.05, 2900, 0, 0.07); tone(0.09, 0.05, 2900, 0, 0.07); }
  };
  function setSound(on) {
    soundOn = on; var b = $('sound'); b.setAttribute('aria-pressed', on ? 'true' : 'false');
    $('soundTxt').textContent = on ? 'Sound on' : 'Sound off';
    $('soundIco').innerHTML = on ? ICONS['speaker-high'] : ICONS['speaker-slash'];
  }
  $('sound').addEventListener('click', function () { setSound(!soundOn); if (soundOn) SND.blip(); });

  /* ---------- tactile buttons: ripple, press sound, a little magnetism ---------- */
  document.addEventListener('pointerdown', function (e) {
    var b = e.target.closest && e.target.closest('.pill, .round, .ghost');
    if (!b) return;
    actx(); SND.tap();
    if (reduce) return;
    var r = b.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2.2, k = document.createElement('span');
    k.className = 'rip'; k.style.width = k.style.height = s + 'px'; k.style.left = (e.clientX - r.left - s / 2) + 'px'; k.style.top = (e.clientY - r.top - s / 2) + 'px';
    b.appendChild(k); setTimeout(function () { k.remove(); }, 700);
  });
  if (finePointer && !reduce) {
    document.addEventListener('pointermove', function (e) {
      var b = e.target.closest && e.target.closest('.pill');
      document.querySelectorAll('.pill.mag').forEach(function (p) { if (p !== b) { p.classList.remove('mag'); p.style.removeProperty('--mx'); p.style.removeProperty('--my'); } });
      if (!b) return;
      var r = b.getBoundingClientRect(); b.classList.add('mag');
      b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1) + 'px');
      b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1) + 'px');
    });
  }

  /* ---------- page state ---------- */
  var state = 'front', idx = 0, list = ALL.slice(), pos = 0, split = 0.5;
  var HINTS = {
    front: ['D5200 / 18-55mm', 'Drag to turn it'],
    dial: ['Mode dial', 'Pick what to see'],
    back: ['Playback', 'Swipe or use arrows'],
    full: ['Full view', 'Swipe for more']
  };
  function setHint() { var h = HINTS[state]; if ($('edState1').textContent !== h[0]) { $('edState1').textContent = h[0]; $('edState2').textContent = h[1]; swap($('edState1').closest('.ed')); } }
  function photoMeta(id) { var p = P[id]; return [p[1], p[3]].filter(Boolean).join(' / ').replace(/\s{2,}/g, ' '); }
  function setReadout() {
    var m = MODES[idx];
    $('modeName').textContent = m.name; $('modeSub').textContent = m.sub + ' / ' + count(m); swap($('dialReadout'));
  }
  function setPlay() {
    var m = MODES[idx];
    $('toRoom').hidden = m.set !== 'edit';
    if (m.set === 'edit') { $('playTitle').textContent = 'Before and after the edit'; $('playSub').textContent = 'Effects / drag across the screen'; }
    else if (!list.length) { $('playTitle').textContent = 'Nothing on the card'; $('playSub').textContent = m.name + ' / turn the dial'; }
    else {
      var id = list[pos];
      $('playTitle').textContent = P[id][0]; $('playSub').textContent = m.name + ' / ' + (pos + 1) + '/' + list.length;
      $('fullTitle').textContent = P[id][0]; $('fullMeta').textContent = photoMeta(id) || m.name;
    }
    swap($('playReadout')); updateDetails();
  }

  /* ---------- photo data sheet ---------- */
  function parseSet(s) {
    var o = {}, m; if (!s) return o;
    if ((m = s.match(/1\/\d+/))) o.s = m[0];
    if ((m = s.match(/F(\d+(?:\.\d+)?)/))) o.a = 'f/' + m[1];
    if ((m = s.match(/ISO\s*(\d+)/))) o.i = m[1];
    if ((m = s.match(/(\d+)mm/))) o.f = m[1] + 'mm';
    return o;
  }
  function setDD(id, v) { var el = $(id); el.textContent = v || 'Not recorded'; el.classList.toggle('na', !v); }
  var AN = {};
  function analyse(id, cb) {
    if (AN[id]) { cb(AN[id]); return; }
    var im = new Image(); im.decoding = 'async';
    im.onload = function () {
      var w = 96, h = Math.max(1, Math.round(96 * im.naturalHeight / im.naturalWidth)), c = document.createElement('canvas'); c.width = w; c.height = h;
      var g = c.getContext('2d'); g.drawImage(im, 0, 0, w, h);
      var d; try { d = g.getImageData(0, 0, w, h).data; } catch (e) { return; }
      var H = [new Array(64).fill(0), new Array(64).fill(0), new Array(64).fill(0), new Array(64).fill(0)], B = {}, lsum = 0;
      for (var i = 0; i < d.length; i += 4) {
        var r = d[i], gg = d[i + 1], b = d[i + 2], l = Math.round(0.2126 * r + 0.7152 * gg + 0.0722 * b);
        H[0][r >> 2]++; H[1][gg >> 2]++; H[2][b >> 2]++; H[3][l >> 2]++; lsum += l;
        var k = (r >> 5) * 64 + (gg >> 5) * 8 + (b >> 5), e = B[k] || (B[k] = [0, 0, 0, 0]); e[0]++; e[1] += r; e[2] += gg; e[3] += b;
      }
      var cand = Object.keys(B).map(function (k) { var e = B[k]; return [e[0], e[1] / e[0], e[2] / e[0], e[3] / e[0]]; }).sort(function (a, b) { return b[0] - a[0]; });
      var pal = [];
      for (var j = 0; j < cand.length && pal.length < 5; j++) {
        var c2 = cand[j], far = pal.every(function (p) { return Math.abs(p[0] - c2[1]) + Math.abs(p[1] - c2[2]) + Math.abs(p[2] - c2[3]) > 70; });
        if (far) pal.push([c2[1], c2[2], c2[3]]);
      }
      var mean = lsum / (d.length / 4);
      AN[id] = { hist: H, pal: pal, tone: mean < 70 ? 'Low key' : mean > 170 ? 'High key' : 'Mid tones' };
      cb(AN[id]);
    };
    im.src = 'img/' + id + '-s.webp';
  }
  function hex(c) { return '#' + c.map(function (v) { return ('0' + Math.round(v).toString(16)).slice(-2); }).join('').toUpperCase(); }
  var histAnim = 0;
  function drawHist(an) {
    var cv = $('dHist'), g = cv.getContext('2d'), W = cv.width, Hh = cv.height, t0 = performance.now(), dark = state === 'full' && window.innerWidth > 860;
    cancelAnimationFrame(histAnim);
    var max = 1; an.hist.forEach(function (h) { h.forEach(function (v) { if (v > max) max = v; }); });
    var cols = ['rgba(225,60,60,.55)', 'rgba(60,180,90,.55)', 'rgba(70,110,230,.55)'];
    (function frame(now) {
      var k = reduce ? 1 : Math.min(1, (now - t0) / 650), e = 1 - Math.pow(1 - k, 3);
      g.clearRect(0, 0, W, Hh);
      g.fillStyle = dark ? 'rgba(255,255,255,.06)' : 'rgba(17,17,17,.05)'; g.fillRect(0, 0, W, Hh);
      g.strokeStyle = dark ? 'rgba(255,255,255,.15)' : 'rgba(17,17,17,.12)'; g.lineWidth = 1;
      for (var q = 1; q < 4; q++) { g.beginPath(); g.moveTo(W * q / 4, 0); g.lineTo(W * q / 4, Hh); g.stroke(); }
      g.globalCompositeOperation = dark ? 'lighter' : 'multiply';
      for (var c = 0; c < 4; c++) {
        g.fillStyle = c < 3 ? cols[c] : (dark ? 'rgba(255,255,255,.35)' : 'rgba(17,17,17,.35)');
        g.beginPath(); g.moveTo(0, Hh);
        for (var i = 0; i < 64; i++) { var y = Hh - Math.pow(an.hist[c][i] / max, 0.6) * Hh * 0.95 * e; g.lineTo(i / 63 * W, y); }
        g.lineTo(W, Hh); g.closePath(); g.fill();
      }
      g.globalCompositeOperation = 'source-over';
      if (k < 1) histAnim = requestAnimationFrame(frame);
    })(performance.now());
  }
  function updateDetails() {
    var m = MODES[idx], det = $('details');
    var id = m.set === 'edit' ? 'night-building' : list[pos];
    if (!id) { $('dTitle').textContent = 'Nothing on the card'; return; }
    var p = P[id], st = parseSet(p[3]);
    $('dFrame').textContent = m.set === 'edit' ? 'Frame 01 / 02' : 'Frame ' + pad(pos + 1) + ' / ' + pad(list.length);
    $('dMode').textContent = m.name; $('dNum').textContent = m.set === 'edit' ? '01' : pad(pos + 1);
    $('dTitle').textContent = m.set === 'edit' ? 'Lit windows, before the edit' : p[0];
    $('dPlaceRow').hidden = !PLACE[id]; $('dPlace').textContent = PLACE[id] || '';
    var phone = /Galaxy/.test(p[1]);
    $('dCam').textContent = p[1] || 'Camera not recorded'; $('dCamIco').innerHTML = phone ? ICONS['device-mobile-camera'] : ICONS.camera;
    setDD('dS', st.s); setDD('dA', st.a); setDD('dI', st.i); setDD('dF', st.f);
    $('dFile').textContent = p[2] ? p[2] : '';
    swap(det);
    analyse(id, function (an) {
      if ((m.set === 'edit' ? 'night-building' : list[pos]) !== id) return;
      drawHist(an); $('dTone').textContent = an.tone;
      /* built with DOM calls, not an HTML string, so the page runs under a strict Content-Security-Policy */
      var pal = $('dPal'); pal.textContent = '';
      an.pal.forEach(function (c, i) { var s = document.createElement('span'), sw = document.createElement('i'), b = document.createElement('b'); s.style.setProperty('--d', i); sw.style.background = hex(c); b.textContent = hex(c); s.appendChild(sw); s.appendChild(b); pal.appendChild(s); });
      swap(det);
    });
  }
  $('infoBtn').addEventListener('click', function () { var o = $('details').classList.toggle('open'); this.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  $('fInfo').addEventListener('click', function () { if (window.innerWidth <= 860) $('details').classList.toggle('open'); else $('details').classList.toggle('hide-full'); });

  var about = $('about');
  if ('IntersectionObserver' in window && !reduce) {
    about.classList.add('arm');
    new IntersectionObserver(function (es, o) { es.forEach(function (e) { if (e.isIntersecting) { about.classList.add('in'); o.disconnect(); } }); }, { rootMargin: '0px 0px -22% 0px' }).observe(about);
  }

  var toastT = 0;
  function toast(txt, rec) {
    var t = $('toast'); $('toastTxt').textContent = txt; t.classList.toggle('rec', !!rec); t.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('on'); }, rec ? 2600 : 1500);
  }

  /* ---------- 3D ---------- */
  var canvas = $('gl'), T = window.THREE, renderer = null;
  try { if (T) renderer = new T.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }); } catch (e) { renderer = null; }
  hero.classList.add('ready');
  route();
  if (!renderer) { canvas.style.display = 'none'; noGLFallback(); return; }

  function setupRenderer(r) {
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    r.outputEncoding = T.sRGBEncoding; r.toneMapping = T.ACESFilmicToneMapping; r.toneMappingExposure = 1.0;
    r.physicallyCorrectLights = true; r.shadowMap.enabled = true; r.shadowMap.type = T.PCFSoftShadowMap; r.setClearColor(0x000000, 0);
  }
  setupRenderer(renderer);
  var scene = new T.Scene();
  var pmrem = new T.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new T.RoomEnvironment(), 0.04).texture;
  var cam = new T.PerspectiveCamera(24, 1, 0.5, 600);
  function studioLights(sc) {
    var key = new T.DirectionalLight(0xffffff, 2.2);
    key.position.set(-10, 18, 14); key.castShadow = true; key.shadow.mapSize.set(2048, 2048);
    (function (c) { c.left = -12; c.right = 12; c.top = 12; c.bottom = -12; c.near = 2; c.far = 70; })(key.shadow.camera);
    key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03;
    sc.add(key);
    var rim = new T.DirectionalLight(0xffffff, 1.6); rim.position.set(14, 7, -16); sc.add(rim);
    var under = new T.DirectionalLight(0xffffff, 0.35); under.position.set(0, -10, 8); sc.add(under);
    return key;
  }
  studioLights(scene);

  function rnd(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  /* tileable pebble bump as a normal map, used only by the fallback model */
  function pebbleNormal(size, count, rmin, rmax, strength, seed) {
    var r = rnd(seed), c = document.createElement('canvas'); c.width = c.height = size;
    var g = c.getContext('2d'); g.fillStyle = '#000'; g.fillRect(0, 0, size, size);
    for (var i = 0; i < count; i++) {
      var x = r() * size, y = r() * size, rad = rmin + r() * (rmax - rmin);
      for (var ox = -1; ox <= 1; ox++) for (var oy = -1; oy <= 1; oy++) {
        var cx = x + ox * size, cy = y + oy * size;
        if (cx < -rad || cy < -rad || cx > size + rad || cy > size + rad) continue;
        var gr = g.createRadialGradient(cx, cy, 0, cx, cy, rad);
        gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(0.7, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, rad, 0, Math.PI * 2); g.fill();
      }
    }
    var h = g.getImageData(0, 0, size, size).data, out = g.createImageData(size, size), o = out.data;
    function Hh(x, y) { return h[((mod(y, size)) * size + mod(x, size)) * 4] / 255; }
    for (var y = 0; y < size; y++) for (var x = 0; x < size; x++) {
      var dx = (Hh(x + 1, y) - Hh(x - 1, y)) * strength, dy = (Hh(x, y + 1) - Hh(x, y - 1)) * strength;
      var l = Math.sqrt(dx * dx + dy * dy + 1), k = (y * size + x) * 4;
      o[k] = (-dx / l * 0.5 + 0.5) * 255; o[k + 1] = (dy / l * 0.5 + 0.5) * 255; o[k + 2] = (1 / l * 0.5 + 0.5) * 255; o[k + 3] = 255;
    }
    g.putImageData(out, 0, 0);
    var t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.anisotropy = 8; return t;
  }

  function PM(o) { return new T.MeshPhysicalMaterial(o); }
  var V2 = function (a, b) { return new T.Vector2(a, b); };
  var mat = {
    body: PM({ color: 0x0e0e0f, roughness: 0.56, clearcoat: 0.22, clearcoatRoughness: 0.42, envMapIntensity: 0.55 }),
    plastic: PM({ color: 0x101011, roughness: 0.38, clearcoat: 0.35, clearcoatRoughness: 0.3, envMapIntensity: 0.7 }),
    gloss: PM({ color: 0x0a0a0b, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 0.85 }),
    rubber: PM({ color: 0x0c0c0d, roughness: 0.9, envMapIntensity: 0.45 }),
    ribs: PM({ color: 0x0c0c0d, roughness: 0.78, envMapIntensity: 0.6 }),
    chrome: PM({ color: 0xe2e2e2, metalness: 1, roughness: 0.15 }),
    steel: PM({ color: 0xa4a4a6, metalness: 1, roughness: 0.32 }),
    darkmetal: PM({ color: 0x2a2a2c, metalness: 0.9, roughness: 0.3 }),
    inner: PM({ color: 0x050506, roughness: 0.75, side: T.DoubleSide }),
    blades: PM({ color: 0x0d0d0f, metalness: 0.6, roughness: 0.45 }),
    glass: PM({ color: 0xffffff, metalness: 0, roughness: 0, transmission: 1, thickness: 0.6, ior: 1.6, clearcoat: 1, clearcoatRoughness: 0,
      iridescence: 1, iridescenceIOR: 1.35, iridescenceThicknessRange: [140, 420], envMapIntensity: 1.6, specularIntensity: 1 }),
    coated: PM({ color: 0x08090b, roughness: 0.05, clearcoat: 1, iridescence: 1, iridescenceIOR: 1.6, iridescenceThicknessRange: [200, 600], envMapIntensity: 1.4 }),
    eyeglass: PM({ color: 0x050607, roughness: 0.04, clearcoat: 1, envMapIntensity: 1.3 }),
    lamp: PM({ color: 0xcfc6b6, roughness: 0.3, clearcoat: 0.8, transmission: 0.2, thickness: 0.2 }),
    red: PM({ color: 0x8e1610, roughness: 0.4, clearcoat: 0.5, emissive: 0xff2010, emissiveIntensity: 0 }),
    gold: PM({ color: 0xc9a24a, metalness: 1, roughness: 0.3 }),
    black: PM({ color: 0x030303, roughness: 1 }),
    flashlens: PM({ color: 0xdedbd2, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.2, emissive: 0xffffff, emissiveIntensity: 0, transmission: 0.1, thickness: 0.1 }),
    ringface: PM({ color: 0x0e0e0f, roughness: 0.5 })
  };
  var MATMAP = { m_body: 'body', m_rubber: 'rubber', m_plastic: 'plastic', m_gloss: 'gloss', m_ribs: 'ribs', m_chrome: 'chrome', m_steel: 'steel', m_darkmetal: 'darkmetal',
    m_inner: 'inner', m_blades: 'blades', m_glass: 'glass', m_coated: 'coated', m_eyeglass: 'eyeglass', m_lamp: 'lamp', m_red: 'red', m_gold: 'gold', m_black: 'black', m_flashlens: 'flashlens', m_ringface: 'ringface' };

  var model = new T.Group(), rig = new T.Group();
  rig.add(model); scene.add(rig);
  function add(geo, m, x, y, z, parent, name) {
    var me = new T.Mesh(geo, m); me.position.set(x || 0, y || 0, z || 0); me.castShadow = true; me.receiveShadow = true;
    if (name) me.name = name; (parent || model).add(me); return me;
  }
  function lathe(pts, segs) { return new T.LatheGeometry(pts.map(function (p) { return new T.Vector2(p[0], p[1]); }), segs || 128); }
  function rbox(w, h, d, r) { return new T.RoundedBoxGeometry(w, h, d, 4, r); }
  function knurl(r, h, ribs, amp) {
    var g = new T.CylinderGeometry(r, r, h, ribs * 4, 1, true), p = g.attributes.position;
    for (var i = 0; i < p.count; i++) {
      var x = p.getX(i), z = p.getZ(i), a = Math.atan2(z, x), f = 0.5 + 0.5 * Math.cos(a * ribs);
      var s = (r - amp * (1 - Math.pow(f, 0.6))) / Math.hypot(x, z); p.setX(i, x * s); p.setZ(i, z * s);
    }
    g.computeVertexNormals(); return g;
  }
  function textTex(w, h, draw) {
    var c = document.createElement('canvas'); c.width = w; c.height = h; var g = c.getContext('2d'); draw(g, w, h);
    var t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; t.anisotropy = 8; return t;
  }
  function decal(tex, w, h, rough) {
    var m = new T.MeshStandardMaterial({ map: tex, transparent: true, roughness: rough || 0.5, metalness: 0, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    var me = new T.Mesh(new T.PlaneGeometry(w, h), m); me.renderOrder = 2; return me;
  }
  function label(text, w, h, px, weight, family, color, italic) {
    return decal(textTex(Math.round(w * 160), Math.round(h * 160), function (g, cw, ch) {
      g.fillStyle = color || '#f2f2f2'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.font = (italic ? 'italic ' : '') + (weight || 600) + ' ' + px + 'px ' + (family || 'Geist, system-ui, sans-serif');
      g.fillText(text, cw / 2, ch / 2);
    }), w, h);
  }

  var MX = 0.55, MY = -0.3, FZ = 2.4, BZ = -2.4, LENS_BASE = new T.Vector3(MX, MY, FZ + 0.22);
  var NODE = {}, REST = {};

  /* ---------- the rear screen ---------- */
  var LW = 1800, LH = 1200, lcan = document.createElement('canvas'); lcan.width = LW; lcan.height = LH;
  var lc = lcan.getContext('2d');
  var lcdTex = new T.CanvasTexture(lcan); lcdTex.encoding = T.sRGBEncoding; lcdTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  var lcd = { mode: 'off', t0: 0 };
  var IMG = {};
  function img(src) {
    if (!IMG[src]) { var im = new Image(); im.decoding = 'async'; im.onload = function () { drawLCD(); }; im.src = src; IMG[src] = im; }
    return IMG[src];
  }
  function srcFor(id) { return 'img/' + id + (state === 'full' ? '' : '-s') + '.webp'; }
  function osdBar(top, l, r) {
    lc.save(); lc.font = '500 40px "Geist Mono", ui-monospace, monospace'; lc.fillStyle = '#f2f2f2'; lc.textBaseline = 'middle';
    if (!top) { var gr = lc.createLinearGradient(0, LH - 160, 0, LH); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,0.65)'); lc.fillStyle = gr; lc.fillRect(0, LH - 160, LW, 160); lc.fillStyle = '#f2f2f2'; }
    lc.shadowColor = 'rgba(0,0,0,0.8)'; lc.shadowBlur = 6;
    var y = top ? 56 : LH - 56; lc.textAlign = 'left'; lc.fillText(l, 48, y); lc.textAlign = 'right'; lc.fillText(r, LW - 48, y); lc.restore();
  }
  function contain(im, g, W, H) {
    g = g || lc; W = W || LW; H = H || LH;
    var s = Math.min(W / im.naturalWidth, H / im.naturalHeight), w = im.naturalWidth * s, h = im.naturalHeight * s;
    g.drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
    return { x: (W - w) / 2, y: (H - h) / 2, w: w, h: h };
  }
  function drawLCD() {
    var m = MODES[idx];
    lc.fillStyle = '#040405'; lc.fillRect(0, 0, LW, LH);
    if (lcd.mode === 'info') {
      lc.fillStyle = '#0b0d14'; lc.fillRect(0, 0, LW, LH);
      lc.save(); lc.translate(LW / 2, LH / 2 - 110); lc.fillStyle = '#ffffff';
      if (m.mark) { lc.font = '600 150px Geist, system-ui, sans-serif'; lc.textAlign = 'center'; lc.textBaseline = 'middle'; lc.fillText(m.mark, 0, 0); }
      else if (DIAL_ICONS[m.icon]) { lc.scale(0.9, 0.9); lc.translate(-128, -128); lc.fill(new Path2D(DIAL_ICONS[m.icon])); }
      lc.restore();
      lc.fillStyle = '#ffffff'; lc.textAlign = 'center'; lc.textBaseline = 'middle';
      lc.font = '500 64px "Geist Mono", ui-monospace, monospace'; lc.fillText(m.name.toUpperCase(), LW / 2, LH / 2 + 110);
      lc.fillStyle = '#cfd3dc'; lc.font = '500 54px "Geist Mono", ui-monospace, monospace'; lc.fillText('[ ' + (m.set === 'edit' ? 2 : m.set.length) + ' ]', LW / 2, LH / 2 + 210);
    } else if (lcd.mode === 'photo') {
      if (m.set === 'edit') { drawEffects(); }
      else if (!list.length) {
        lc.fillStyle = '#e6e6e6'; lc.textAlign = 'center'; lc.textBaseline = 'middle';
        lc.font = '500 58px "Geist Mono", ui-monospace, monospace'; lc.fillText('NO IMAGES ON THIS CARD', LW / 2, LH / 2 - 40);
        lc.fillStyle = '#9a9ea8'; lc.font = '500 44px "Geist Mono", ui-monospace, monospace'; lc.fillText(m.name.toUpperCase() + ' / TURN THE DIAL', LW / 2, LH / 2 + 50);
      } else {
        var id = list[pos], im = img(srcFor(id)), sm = IMG['img/' + id + '-s.webp'];
        if (im.complete && im.naturalWidth) contain(im); else if (sm && sm.complete && sm.naturalWidth) contain(sm);
        osdBar(true, m.name.toUpperCase(), (pos + 1) + '/' + list.length);
        osdBar(false, P[id][2] || P[id][0], (P[id][3] || '').replace(/\s{2,}/g, ' '));
      }
    } else if (lcd.mode === 'rec') {
      lc.fillStyle = '#0a0a0b'; lc.fillRect(0, 0, LW, LH);
      lc.fillStyle = '#d7261e'; lc.beginPath(); lc.arc(110, 90, 26, 0, Math.PI * 2); lc.fill();
      lc.fillStyle = '#f2f2f2'; lc.font = '500 48px "Geist Mono", ui-monospace, monospace'; lc.textBaseline = 'middle'; lc.fillText('REC  00:00:0' + Math.min(9, Math.floor((performance.now() - lcd.t0) / 1000)), 160, 92);
      lc.strokeStyle = 'rgba(255,255,255,.5)'; lc.lineWidth = 3; lc.strokeRect(LW / 2 - 150, LH / 2 - 100, 300, 200);
    }
    lcdTex.needsUpdate = true;
  }
  function drawEffects() {
    var im = img('img/night-building-s.webp'); if (!(im.complete && im.naturalWidth)) return;
    var x = Math.round(LW * split);
    lc.save(); grade(lc, im, 1, LW, LH); lc.restore();
    lc.save(); lc.beginPath(); lc.rect(0, 0, x, LH); lc.clip(); lc.fillStyle = '#040405'; lc.fillRect(0, 0, x, LH); contain(im); lc.restore();
    lc.fillStyle = '#ffffff'; lc.fillRect(x - 3, 0, 6, LH); lc.beginPath(); lc.arc(x, LH / 2, 34, 0, Math.PI * 2); lc.fill();
    osdBar(true, 'EFFECTS', '1/2'); osdBar(false, 'ORIGINAL', editImg && editImg.naturalWidth ? 'EDIT' : 'PREVIEW GRADE');
  }
  /* the edit: the real edited file when it exists, otherwise a clearly labelled preview grade */
  var HAS_EDIT = false; /* set to true once img/night-building-edit.webp is published */
  var editImg = null;
  if (HAS_EDIT) { editImg = new Image(); editImg.onload = function () { drawLCD(); if (DR) DR.draw(); }; editImg.onerror = function () { editImg = null; }; editImg.src = 'img/night-building-edit.webp'; }
  function grade(g, im, k, W, H) {
    if (editImg && editImg.naturalWidth) { contain(editImg, g, W, H); return; }
    g.filter = 'brightness(' + (1 + 0.22 * k) + ') contrast(' + (1 + 0.2 * k) + ') saturate(' + (1 + 0.35 * k) + ')';
    var rc = contain(im, g, W, H); g.filter = 'none';
    g.save(); g.beginPath(); g.rect(rc.x, rc.y, rc.w, rc.h); g.clip();
    g.globalCompositeOperation = 'soft-light'; g.fillStyle = 'rgba(255,165,80,' + (0.32 * k) + ')'; g.fillRect(rc.x, rc.y, rc.w, rc.h);
    g.globalCompositeOperation = 'source-over';
    var cx = rc.x + rc.w / 2, cy = rc.y + rc.h / 2, v = g.createRadialGradient(cx, cy, Math.min(rc.w, rc.h) * 0.35, cx, cy, Math.max(rc.w, rc.h) * 0.7);
    v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,' + (0.45 * k) + ')');
    g.fillStyle = v; g.fillRect(rc.x, rc.y, rc.w, rc.h); g.restore();
  }
  var lcdTimers = [];
  function lcdSeq(steps) { lcdTimers.forEach(clearTimeout); lcdTimers = []; steps.forEach(function (s) { lcdTimers.push(setTimeout(function () { lcd.mode = s[1]; lcd.t0 = performance.now(); drawLCD(); }, reduce ? 0 : s[0])); }); }
  function powerOn() { if (reduce) { lcd.mode = 'photo'; drawLCD(); return; } lcd.mode = 'power'; lcd.t0 = performance.now(); lcdSeq([[420, 'info'], [1500, 'photo']]); }
  function drawPower(now) {
    var k = Math.min(1, (now - lcd.t0) / 380), sx = Math.min(1, k * 2.2), sy = Math.max(0.01, (k - 0.45) / 0.55);
    lc.fillStyle = '#040405'; lc.fillRect(0, 0, LW, LH);
    if (k < 1) { lc.fillStyle = 'rgba(244,246,255,' + (1 - Math.max(0, (k - 0.75) * 4)) + ')'; var w = LW * sx, h = Math.max(6, LH * sy); lc.fillRect((LW - w) / 2, (LH - h) / 2, w, h); }
    lcdTex.needsUpdate = true;
  }
  function blinkTo() { if (reduce) { drawLCD(); return; } lcd.mode = 'black'; drawLCD(); lcdSeq([[80, 'photo']]); }

  /* ---------- the mode dial face ---------- */
  function drawDialFace(c, w) {
    var gr = c.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    gr.addColorStop(0, '#1a1a1c'); gr.addColorStop(1, '#0d0d0e'); c.fillStyle = gr; c.fillRect(0, 0, w, w);
    c.strokeStyle = 'rgba(255,255,255,0.035)'; for (var r = 20; r < w / 2; r += 6) { c.beginPath(); c.arc(w / 2, w / 2, r, 0, Math.PI * 2); c.stroke(); }
    var R = w * 0.37;
    for (var k = 0; k < N; k++) {
      var m = MODES[k], a = -Math.PI / 2 + k * STEP;
      c.save(); c.translate(w / 2 + Math.cos(a) * R, w / 2 + Math.sin(a) * R); c.rotate(a + Math.PI / 2);
      c.fillStyle = k < 2 ? '#43b06b' : '#f1f1f1';
      if (m.mark) { var fs = m.mark.length > 4 ? 50 : m.mark.length > 1 ? 62 : 96; c.font = '600 ' + fs + 'px Geist, system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(m.mark, 0, 0); }
      else if (DIAL_ICONS[m.icon]) { c.scale(0.36, 0.36); c.translate(-128, -128); c.fill(new Path2D(DIAL_ICONS[m.icon])); }
      c.restore();
    }
  }

  /* ---------- printed details, screen, wordmark: added on top of either model ---------- */
  function decorate(a) {
    var bandTex = textTex(2048, 64, function (c, w, h) {
      c.fillStyle = '#121213'; c.fillRect(0, 0, w, h); c.fillStyle = '#ededed'; c.textBaseline = 'middle';
      c.font = '600 30px Geist, system-ui, sans-serif'; c.textAlign = 'center';
      ['18', '24', '35', '45', '55'].forEach(function (t, i) { c.fillText(t, 120 + i * 62, h / 2); });
      c.font = '500 24px Geist, system-ui, sans-serif'; c.fillText('DX  18-55mm  1:3.5-5.6  VR', 820, h / 2);
      c.fillStyle = '#d9d9d9'; c.fillRect(1250, h / 2 - 2, 18, 4);
    });
    bandTex.wrapS = T.RepeatWrapping;
    add(new T.CylinderGeometry(3.0, 3.0, 0.5, 128, 1, true), PM({ color: 0xffffff, map: bandTex, roughness: 0.4, clearcoat: 0.4 }), 0, 3.82, 0, a.zoomLocal).rotation.y = -Math.PI * 0.6;
    var ringTex = textTex(1024, 1024, function (c, w) {
      c.fillStyle = '#0e0e0f'; c.fillRect(0, 0, w, w); c.fillStyle = '#d8d8d8'; c.font = '500 30px Geist, system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      var txt = 'DX  18-55mm  1:3.5-5.6 G  VR    Ø 55mm', R = 440;
      for (var i = 0; i < txt.length; i++) { var an = -Math.PI * 0.95 + i * 0.052; c.save(); c.translate(w / 2 + Math.cos(an) * R, w / 2 + Math.sin(an) * R); c.rotate(an + Math.PI / 2); c.fillText(txt[i], 0, 0); c.restore(); }
    });
    var ring = add(new T.RingGeometry(2.28, 2.67, 128), PM({ color: 0xffffff, map: ringTex, roughness: 0.45, polygonOffset: true, polygonOffsetFactor: -2 }), 0, 6.506, 0, a.innerLocal, 'ringText'); ring.rotation.x = -Math.PI / 2;
    var face = add(new T.CircleGeometry(1.16, 96), PM({ color: 0xffffff, map: textTex(1024, 1024, drawDialFace), roughness: 0.55, clearcoat: 0.25 }), 0, 0.74, 0, a.dial, 'dialFace'); face.rotation.x = -Math.PI / 2;
    var idxMark = new T.Mesh(new T.CircleGeometry(0.11, 3), new T.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.5, polygonOffset: true, polygonOffsetFactor: -4 }));
    idxMark.rotation.x = -Math.PI / 2; idxMark.rotation.z = -Math.PI / 2; idxMark.position.set(-3.75, 3.405, -1.9); model.add(idxMark);
    var screen = new T.Mesh(new T.PlaneGeometry(7.2, 4.8), new T.MeshBasicMaterial({ map: lcdTex, toneMapped: false }));
    screen.position.set(1.35, -0.6, BZ - 0.476); screen.rotation.y = Math.PI; screen.name = 'screen'; screen.userData.part = 'screen'; model.add(screen);
    var glassM = PM({ color: 0x000000, roughness: 0.06, clearcoat: 1, transparent: true, blending: T.AdditiveBlending, depthWrite: false, envMapIntensity: 0.55 });
    var sg = new T.Mesh(new T.PlaneGeometry(7.5, 5.1), glassM); sg.position.set(1.35, -0.6, BZ - 0.48); sg.rotation.y = Math.PI; sg.userData.part = 'screen'; model.add(sg);
    var word = label('Nikon', 2.4, 0.8, 92, 700, 'Geist, system-ui, sans-serif', '#f4f4f4', true); word.position.set(MX, 3.72, FZ + 0.006); model.add(word);
    var mdl = label('D5200', 1.1, 0.36, 36, 600); mdl.position.set(4.85, 2.55, FZ + 0.006); model.add(mdl);
    [[-3.3, 2.55, 'AE-L', 0.45], [4.4, 2.75, 'MENU', 0.44], [5.4, 2.75, '▶', 0.44], [-4.65, -2.5, 'i', -0.42], [-3.3, -2.5, 'DEL', -0.42]].forEach(function (b) {
      var lb = label(b[2], 0.9, 0.26, 30, 600); lb.position.set(b[0], b[1] + b[3], BZ - 0.003); lb.rotation.y = Math.PI; model.add(lb);
    });
    var okl = label('OK', 0.6, 0.3, 40, 600); okl.userData.part = 'ok'; okl.position.set(-3.95, -0.55, BZ - 0.225); okl.rotation.y = Math.PI; model.add(okl);
    var rl = label('REC', 0.6, 0.2, 28, 600, null, '#e8e8e8'); rl.rotation.x = -Math.PI / 2; rl.position.set(-3.4, 3.41, 2.32); model.add(rl);
    if (NODE.flashHead) {
      var arm = add(rbox(3.0, 1, 0.42, 0.08), mat.plastic, MX, 5.2, 0.72); arm.scale.y = 0.001; arm.visible = false; NODE.flashArm = arm;
      var fl = new T.PointLight(0xffffff, 0, 60, 2); fl.position.set(0, -0.4, 2.6); NODE.flashHead.add(fl); NODE.flashLight = fl;
    }
  }

  /* the Blender model: AO baked per part, skin normals on the body and grip */
  function loadModel(done) {
    if (!T.GLTFLoader) { done(false); return; }
    var tl = new T.TextureLoader();
    function tx(n) { var t = tl.load('model/' + n + '.webp'); t.flipY = false; t.anisotropy = 8; return t; }
    function onModel(g) {
      g.scene.children.slice().forEach(function (node) {
        var part = node.name; NODE[part] = node; REST[part] = { p: node.position.clone(), r: node.rotation.clone() };
        node.userData.part = part;
        var ao = tx(part + '_ao'), nrm = (part === 'body' || part === 'rubber') ? tx(part + '_nrm') : null;
        node.traverse(function (o) {
          if (!o.isMesh) return;
          var key = ((o.material && o.material.name) || '').split('.')[0], base = mat[MATMAP[key]] || mat.plastic, m = base.clone();
          if (key !== 'm_glass' && key !== 'm_coated' && key !== 'm_flashlens') { m.aoMap = ao; m.aoMapIntensity = 1; o.geometry.setAttribute('uv2', o.geometry.attributes.uv); }
          if (nrm) { m.normalMap = nrm; m.normalScale = V2(1, 1); }
          if (key === 'm_flashlens') NODE.flashMat = m;
          if (key === 'm_red') NODE.recMat = m;
          o.material = m; o.castShadow = key !== 'm_glass'; o.receiveShadow = key !== 'm_glass';
          o.userData.part = part; o.userData.mat = key;
        });
        model.add(node);
      });
      var zl = new T.Group(); zl.rotation.x = Math.PI / 2; NODE.zoomRing.add(zl);
      var il = new T.Group(); il.rotation.x = Math.PI / 2; NODE.lensInner.add(il);
      decorate({ zoomLocal: zl, innerLocal: il, dial: NODE.modeDial });
      done(true);
    }
    fetch('model/d5200.glb').then(function (r) { if (!r.ok) throw new Error('model'); return r.arrayBuffer(); }).then(function (buf) {
      new T.GLTFLoader().parse(buf, '', onModel, function () { done(false); });
    }).catch(function () { done(false); });
  }

  /* the code-built model, used if the Blender file cannot load */
  function buildFallback() {
    var leatherN = pebbleNormal(512, 5200, 1.6, 3.4, 1.6, 11); leatherN.repeat.set(0.62, 0.62);
    mat.body.normalMap = leatherN; mat.body.normalScale = V2(0.24, 0.24);
    var s = new T.Shape(), L = -5.0, R = 5.9, B = -3.4, Tp = 3.0;
    s.moveTo(L + 0.9, B); s.lineTo(R - 0.9, B); s.quadraticCurveTo(R, B, R, B + 0.9); s.lineTo(R, Tp - 0.7); s.quadraticCurveTo(R, Tp, R - 0.8, Tp);
    s.lineTo(3.55, Tp); s.quadraticCurveTo(3.25, Tp, 3.05, Tp + 0.35); s.lineTo(2.35, 4.5); s.quadraticCurveTo(2.2, 4.8, 1.9, 4.8);
    s.lineTo(-0.8, 4.8); s.quadraticCurveTo(-1.1, 4.8, -1.25, 4.5); s.lineTo(-1.95, Tp + 0.35); s.quadraticCurveTo(-2.15, Tp, -2.45, Tp);
    s.lineTo(L + 0.8, Tp); s.quadraticCurveTo(L, Tp, L, Tp - 0.7); s.lineTo(L, B + 0.9); s.quadraticCurveTo(L, B, L + 0.9, B);
    var bg = new T.ExtrudeGeometry(s, { depth: 3.9, bevelEnabled: true, bevelThickness: 0.45, bevelSize: 0.4, bevelSegments: 7, curveSegments: 24 }); bg.translate(0, 0, -1.95);
    add(bg, mat.body, 0, 0, 0, null, 'body').userData.part = 'body';
    add(rbox(2.9, 7.0, 6.9, 0.9), mat.rubber, -4.3, -0.3, 1.1).userData.part = 'body';
    var lens = new T.Group(); lens.position.copy(LENS_BASE); lens.rotation.x = Math.PI / 2; model.add(lens);
    add(lathe([[2.62, 0], [2.9, 0.2], [2.9, 0.95]]), mat.gloss, 0, 0, 0, lens).userData.part = 'lensFixed';
    add(knurl(3.1, 2.6, 120, 0.075), mat.ribs, 0, 2.25, 0, lens).userData.part = 'zoomRing';
    add(lathe([[2.98, 4.07], [2.98, 5.5], [3.1, 6.3], [2.66, 6.5]]), mat.gloss, 0, 0, 0, lens).userData.part = 'lensInner';
    var fe = add(new T.SphereGeometry(6, 96, 24, 0, Math.PI * 2, 0, 0.39), mat.glass, 0, 0.503, 0, lens); fe.userData = { part: 'lensInner', mat: 'm_glass' };
    add(rbox(7.9, 5.7, 0.5, 0.2), mat.plastic, 1.35, -0.65, BZ - 0.22);
    var turn = new T.Group(); turn.position.set(-3.75, 3.6, -0.35); model.add(turn); NODE.modeDial = turn;
    add(knurl(1.2, 0.72, 64, 0.06), mat.plastic, 0, 0.36, 0, turn).userData.part = 'modeDial';
    decorate({ zoomLocal: lens, innerLocal: lens, dial: turn });
  }

  /* ---------- contact shadow on the studio floor ---------- */
  function contactShadow(r, sc, floorY, size) {
    var SH = { w: size, h: size, camH: 14, blur: 3.4, dark: 1.0, opacity: 0.62 };
    var group = new T.Group(); group.position.y = floorY; sc.add(group);
    var rt = new T.WebGLRenderTarget(512, 512), rtBlur = new T.WebGLRenderTarget(512, 512); rt.texture.generateMipmaps = false; rtBlur.texture.generateMipmaps = false;
    var planeGeo = new T.PlaneGeometry(SH.w, SH.h).rotateX(Math.PI / 2);
    var plane = new T.Mesh(planeGeo, new T.MeshBasicMaterial({ map: rt.texture, opacity: SH.opacity, transparent: true, depthWrite: false }));
    plane.renderOrder = 1; plane.scale.y = -1; group.add(plane);
    var blurPlane = new T.Mesh(planeGeo); blurPlane.visible = false; group.add(blurPlane);
    var shCam = new T.OrthographicCamera(-SH.w / 2, SH.w / 2, SH.h / 2, -SH.h / 2, 0, SH.camH); shCam.rotation.x = Math.PI / 2; group.add(shCam);
    var depthMat = new T.MeshDepthMaterial(); depthMat.userData.darkness = { value: SH.dark };
    depthMat.onBeforeCompile = function (sh) { sh.uniforms.darkness = depthMat.userData.darkness; sh.fragmentShader = 'uniform float darkness;\n' + sh.fragmentShader.replace('gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );', 'gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );'); };
    depthMat.depthTest = false; depthMat.depthWrite = false;
    var hB = new T.ShaderMaterial(T.HorizontalBlurShader), vB = new T.ShaderMaterial(T.VerticalBlurShader); hB.depthTest = vB.depthTest = false;
    function blur(amount) {
      blurPlane.visible = true;
      blurPlane.material = hB; hB.uniforms.tDiffuse.value = rt.texture; hB.uniforms.h.value = amount / 256;
      r.setRenderTarget(rtBlur); r.render(blurPlane, shCam);
      blurPlane.material = vB; vB.uniforms.tDiffuse.value = rtBlur.texture; vB.uniforms.v.value = amount / 256;
      r.setRenderTarget(rt); r.render(blurPlane, shCam);
      blurPlane.visible = false;
    }
    return {
      plane: plane, SH: SH,
      render: function () {
        plane.visible = false; sc.overrideMaterial = depthMat;
        var a = r.getClearAlpha(); r.setClearAlpha(0);
        r.setRenderTarget(rt); r.clear(); r.render(sc, shCam);
        sc.overrideMaterial = null; blur(SH.blur); blur(SH.blur * 0.4);
        r.setRenderTarget(null); r.setClearAlpha(a); plane.visible = true;
      }
    };
  }
  var floor = contactShadow(renderer, scene, -7.0, 34);

  /* ---------- poses and framing ---------- */
  var V3 = function (x, y, z) { return new T.Vector3(x, y, z); };
  var POSES = {
    front: { rx: 0.16, ry: 0.5, rz: -0.09, anchor: V3(0.4, 0.4, 1.6), size: 8.6, frac: 0.66, yoff: 0.14, xoff: 0, float: 1, shadow: 1, elev: 0.1 },
    dial: { rx: 1.02, ry: 0.15, rz: 0, anchor: V3(-3.75, 4.3, -0.35), size: 2.7, frac: 0.56, yoff: -0.14, xoff: 0, float: 0.35, shadow: 0, elev: 0 },
    back: { rx: 0.1, ry: Math.PI - 0.26, rz: 0.04, anchor: V3(0.5, 0.4, -2.4), size: 7.2, frac: 0.6, yoff: 0.12, xoff: -0.12, float: 0.6, shadow: 1, elev: 0.08 },
    full: { rx: 0, ry: Math.PI, rz: 0, anchor: V3(1.35, -0.6, -2.9), size: 0, frac: 0.7, yoff: -0.03, xoff: -0.21, float: 0, shadow: 0, elev: 0, screen: true }
  };
  var KEYS = ['rx', 'ry', 'rz', 'size', 'frac', 'yoff', 'xoff', 'float', 'shadow', 'elev'];
  var cur = { anchor: V3(0.4, 0.4, 1.6), screenK: 0 };
  KEYS.forEach(function (k) { cur[k] = POSES.front[k]; }); cur.ry = 0.5 + (reduce ? 0 : -2.2);
  function snapshot() { var o = { anchor: cur.anchor.clone(), screenK: cur.screenK }; KEYS.forEach(function (k) { o[k] = cur[k]; }); return o; }
  var from = snapshot(), to = POSES.front, tStart = performance.now(), tDur = reduce ? 1 : 1900;
  var user = { yaw: 0, pitch: 0, vy: 0, vp: 0, idleUntil: 0 };
  function goPose(name, dur) {
    from = snapshot(); to = POSES[name]; tStart = performance.now(); tDur = reduce ? 1 : (dur || 1250);
    var total = from.ry + user.yaw; user.yaw = 0; user.vy = 0;
    var d = mod(total - to.ry + Math.PI, Math.PI * 2) - Math.PI; from.ry = to.ry + d;
    from.rx += user.pitch; user.pitch = 0; user.vp = 0;
  }
  /* smooth both ends, so a move never jerks to a start or a stop */
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function lerp(a, b, k) { return a + (b - a) * k; }
  /* springs for the lift on click, the lens zoom, the flash and the buttons */
  function spring(k, d) { return { x: 0, v: 0, t: 0, k: k, d: d }; }
  function stepSpring(s, dt) { var a = (s.t - s.x) * s.k - s.v * s.d; s.v += a * dt; s.x += s.v * dt; if (reduce) { s.x = s.t; s.v = 0; } }
  var lift = spring(90, 13), zoomS = spring(40, 12), flashS = spring(70, 11), shutS = spring(400, 28), recS = spring(400, 28);

  var W = 1, H = 1;
  function resize() { var r = hero.getBoundingClientRect(); W = Math.max(1, r.width); H = Math.max(1, r.height); renderer.setSize(W, H, false); cam.aspect = W / H; cam.updateProjectionMatrix(); }
  window.addEventListener('resize', resize); resize();

  var tmp = V3(0, 0, 0), look = V3(0, 0, 0), idleSway = 0, lastT = performance.now();
  function frame(now) {
    var dt = Math.min(0.05, (now - lastT) / 1000); lastT = now;
    var k = Math.min(1, (now - tStart) / tDur), e = ease(k);
    KEYS.forEach(function (p) { cur[p] = lerp(from[p], to[p], e); });
    cur.screenK = lerp(from.screenK, to.screen ? 1 : 0, e);
    cur.anchor.copy(from.anchor).lerp(to.anchor, e);
    [lift, zoomS, flashS, shutS, recS].forEach(function (s) { stepSpring(s, dt); });

    if (!dragging) { user.yaw += user.vy; user.pitch += user.vp; user.vy *= 0.93; user.vp *= 0.9; }
    user.pitch = Math.max(-0.85, Math.min(0.85, user.pitch));
    var t = now / 1000, idle = (!reduce && state === 'front' && now > user.idleUntil) ? Math.sin(t * 0.45) * 0.22 : 0;
    idleSway += (idle - idleSway) * 0.03;
    var bob = reduce ? 0 : (Math.sin(t * 1.1) * 0.24 + Math.sin(t * 0.47 + 1) * 0.1) * cur.float;
    rig.rotation.set(cur.rx + user.pitch - lift.x * 0.12, cur.ry + user.yaw + idleSway, cur.rz + (reduce ? 0 : Math.sin(t * 0.8) * 0.02 * cur.float), 'YXZ');
    rig.position.y = bob + lift.x * 1.1;
    rig.scale.setScalar(1 + lift.x * 0.035);
    animateParts(now);
    rig.updateMatrixWorld(true);

    tmp.copy(cur.anchor).applyMatrix4(model.matrixWorld);
    var tanY = Math.tan(cam.fov * Math.PI / 360), tanX = tanY * cam.aspect;
    var narrow = cam.aspect < 0.9, frac = narrow ? Math.min(0.92, cur.frac + 0.24) : cur.frac;
    var dSphere = Math.max(cur.size / (frac * tanY), cur.size / (frac * tanX)) || 0;
    var dScreen = Math.max(3.6 / (frac * tanX), 2.4 / (frac * tanY));
    var dist = lerp(dSphere, dScreen, cur.screenK) * (1 - 0.06 * zoomS.x * (state === 'front' ? 1 : 0));
    var yo = (narrow ? cur.yoff * 0.6 : cur.yoff) * dist * tanY, xo = narrow ? 0 : -cur.xoff * dist * tanX;
    look.set(tmp.x + xo, tmp.y + yo, tmp.z);
    cam.position.set(look.x, look.y + Math.sin(cur.elev) * dist, look.z + Math.cos(cur.elev) * dist); cam.lookAt(look);
    floor.plane.material.opacity = floor.SH.opacity * cur.shadow;
    if (lcd.mode === 'power') drawPower(now);
    if (lcd.mode === 'rec' && now - lcd.lastRec > 250) { lcd.lastRec = now; drawLCD(); }
    if (effSweep) runSweep(now);
  }

  function animateParts(now) {
    if (NODE.lensInner) {
      NODE.lensInner.position.z = REST.lensInner.p.z + 1.6 * zoomS.x;
      NODE.zoomRing.rotation.z = REST.zoomRing.r.z - 0.95 * zoomS.x;
    }
    if (NODE.flashHead) {
      var f = Math.max(0, flashS.x);
      NODE.flashHead.position.y = REST.flashHead.p.y + 1.05 * f; NODE.flashHead.position.z = REST.flashHead.p.z + 0.12 * f; NODE.flashHead.rotation.x = -0.08 * f;
      NODE.flashArm.visible = f > 0.01; NODE.flashArm.scale.y = Math.max(0.001, 1.05 * f); NODE.flashArm.position.y = 5.2 + 0.525 * f;
      var burst = Math.max(0, 1 - (now - flashFiredAt) / 140);
      if (NODE.flashMat) NODE.flashMat.emissiveIntensity = burst * 8;
      if (NODE.flashLight) NODE.flashLight.intensity = burst * 900;
    }
    if (NODE.shutterBtn) NODE.shutterBtn.position.y = REST.shutterBtn.p.y - 0.08 * shutS.x;
    if (NODE.recBtn) { NODE.recBtn.position.y = REST.recBtn.p.y - 0.06 * recS.x; if (NODE.recMat) NODE.recMat.emissiveIntensity = recording ? (Math.sin(now / 120) > 0 ? 1.4 : 0.15) : 0; }
  }

  /* ---------- camera actions ---------- */
  function setState(s) {
    state = s; hero.setAttribute('data-state', s); setHint();
    if (s !== 'back' && s !== 'full') { $('details').classList.remove('open'); $('infoBtn').setAttribute('aria-expanded', 'false'); }
    canvas.setAttribute('aria-label', {
      front: 'A black Nikon D5200 floating in a grey studio. Drag to turn it.',
      dial: 'The mode dial on top of the camera, set to ' + MODES[idx].name + '.',
      back: 'The back of the camera, its screen showing ' + (list.length ? P[list[pos]][0] : 'no photos') + '.',
      full: 'The camera screen filling the view, showing ' + (list.length ? P[list[pos]][0] : 'no photos') + '.'
    }[s]);
  }
  function flashBlack() { var b = $('blink'); b.classList.remove('go'); void b.offsetWidth; if (!reduce) b.classList.add('go'); }
  function pickUp() {
    SND.shutter(); SND.whoosh();
    lift.t = 1; setTimeout(function () { lift.t = 0; }, reduce ? 0 : 520);
    setTimeout(function () { flashBlack(); setState('dial'); goPose('dial', 1500); setReadout(); }, reduce ? 0 : 380);
  }
  function putDown() { setState('front'); goPose('front', 1400); SND.whoosh(); }
  var dialAngle = 0, dialTarget = 0;
  function turnTo(i) {
    var curI = dialTarget / STEP, d = mod(i - curI, N); if (d > N / 2) d -= N;
    dialTarget = (curI + d) * STEP; idx = mod(i, N); SND.tick(); setReadout(); setState(state);
  }
  function step(d) { turnTo(idx + d); }
  function showOnScreen() {
    var m = MODES[idx]; list = m.set === 'edit' ? [] : m.set.slice(); pos = 0; split = 0.5;
    setState('back'); goPose('back', 1600); setPlay(); SND.whoosh();
    lcd.mode = 'off'; drawLCD(); lcdSeq([]); setTimeout(function () { powerOn(); SND.blip(); }, reduce ? 0 : 700);
    if (m.set === 'edit') setTimeout(startSweep, reduce ? 0 : 2400);
    list.slice(0, 3).forEach(function (id) { img('img/' + id + '-s.webp'); });
  }
  function move(d) {
    if (MODES[idx].set === 'edit' || list.length < 2) return;
    pos = mod(pos + d, list.length); SND.tick(); setPlay(); setState(state); blinkTo();
    img('img/' + list[mod(pos + d, list.length)] + (state === 'full' ? '' : '-s') + '.webp');
  }
  function openFull() { if (!list.length && MODES[idx].set !== 'edit') return; setState('full'); goPose('full', 1200); lcd.mode = 'photo'; drawLCD(); SND.whoosh(); updateDetails(); $('fClose').focus({ preventScroll: true }); }
  function closeFull() { setState('back'); goPose('back', 1000); drawLCD(); updateDetails(); $('zoom').focus({ preventScroll: true }); }

  var zoomed = false;
  function toggleZoom() {
    if (!NODE.lensInner) return;
    zoomed = !zoomed; zoomS.t = zoomed ? 1 : 0; motor(0.85, zoomed);
    toast(zoomed ? 'Zoom 55mm' : 'Zoom 18mm');
  }
  var flashFiredAt = -1e9, flashTimer = 0, recording = false, recTimer = 0;
  function fireFlash(kind) {
    if (kind === 'rec') {
      recS.t = 1; setTimeout(function () { recS.t = 0; }, 140);
      recording = !recording; SND.beep();
      if (recording) { toast('Recording', true); clearTimeout(recTimer); recTimer = setTimeout(function () { recording = false; }, 4000); if (state === 'back') { lcd.mode = 'rec'; lcd.t0 = performance.now(); lcd.lastRec = 0; lcdSeq([[3800, 'photo']]); } }
      else { toast('Stopped'); return; }
    } else { shutS.t = 1; setTimeout(function () { shutS.t = 0; }, 130); }
    var up = flashS.x > 0.6;
    if (!up) { flashS.t = 1; SND.pop(); SND.charge(); }
    clearTimeout(flashTimer);
    setTimeout(function () {
      flashFiredAt = performance.now(); SND.fire(); SND.shutter();
      var fx = $('flashfx'), p = V3(MX, 5.2, FZ + 0.5).applyMatrix4(model.matrixWorld).project(cam);
      fx.style.setProperty('--fx', ((p.x + 1) / 2 * 100).toFixed(1) + '%'); fx.style.setProperty('--fy', ((1 - p.y) / 2 * 100).toFixed(1) + '%');
      fx.classList.remove('go'); void fx.offsetWidth; if (!reduce) fx.classList.add('go');
      if (kind !== 'rec') toast('Flash fired');
      flashTimer = setTimeout(function () { flashS.t = 0; SND.fold(); }, 2600);
    }, up ? 60 : (reduce ? 0 : 620));
  }

  /* through the lens: the photo the viewer finds by clicking the front glass */
  var lv = $('lensview'), lvBack = null, page = 0, PAGES = 12;
  var PAGE_ALT = ['Cover: Photographer Portfolio, Vinit Rami, intermediate photographer, beside a church spire and red autumn leaves.',
    'Introduction: Vinit Mayurkumar Rami on capturing meaningful moments, beside Big Ben.',
    'My Works: the moon, a cafe sign, four birds on a rail and the Statue of Unity through flowers.',
    'Illusion and event photography: props in front of TV backgrounds and luxury cars at launch events.',
    'The Art of Storytelling: a glass building, a plane in a blue sky, London street lamps and a statue with a seagull.',
    'The Art of Capturing Emotions: the Statue of Unity, a Ferris wheel, a block at dusk and Singapore at night.',
    'The Enchanted Forest: a peacock, the Supertrees and the Singapore skyline at night.',
    'Skills and expertise: Adobe Creative Suite, Sketch, Figma, HTML and CSS, beside a candle and a monk figurine.',
    'Few more: a chandelier-lit arcade and a black and gold Formula 1 car.',
    'Testimonials, beside desserts and a candle-lit Stop Overthinking sign.',
    "Let's connect: email and social media handle.",
    "Closing note: always excited to collaborate on new projects."];
  function pageSrc(i) { return 'pdf/page-' + pad(i + 1) + '.webp'; }
  function setPage(i, dir) {
    page = mod(i, PAGES);
    var im = $('lvPage'), txt = 'Page ' + (page + 1) + ' of ' + PAGES + '. ' + PAGE_ALT[page];
    function put() { im.src = pageSrc(page); im.alt = 'Portfolio page ' + (page + 1) + ' of ' + PAGES + ': ' + PAGE_ALT[page]; $('lvCount').textContent = pad(page + 1) + ' / ' + PAGES; $('lvLive').textContent = txt; im.classList.remove('turn'); }
    if (!dir || reduce) put(); else { im.style.setProperty('--tdir', (dir > 0 ? -40 : 40) + 'px'); im.classList.add('turn'); setTimeout(put, 170); SND.tick(); }
    var pre = new Image(); pre.src = pageSrc(mod(page + 1, PAGES));
  }
  $('lvPrev').addEventListener('click', function () { setPage(page - 1, -1); });
  $('lvNext').addEventListener('click', function () { setPage(page + 1, 1); });
  (function () {
    var sx = null, book = $('lvBook');
    book.addEventListener('pointerdown', function (e) { sx = e.clientX; });
    book.addEventListener('pointerup', function (e) { if (sx === null) return; var dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 50) setPage(page + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1); });
  })();
  function lensPreview(e) {
    var r = hero.getBoundingClientRect();
    lv.style.setProperty('--lx', e ? (e.clientX - r.left) + 'px' : '50%'); lv.style.setProperty('--ly', e ? (e.clientY - r.top) + 'px' : '50%');
    lvBack = document.activeElement; setPage(0); lv.hidden = false; void lv.offsetWidth; lv.classList.add('open');
    SND.focus(); setTimeout(SND.shutter, 260); $('lvClose').focus({ preventScroll: true });
  }
  function closeLens() { lv.classList.remove('open'); lv.hidden = true; SND.tap(); if (lvBack && lvBack.focus) lvBack.focus({ preventScroll: true }); }
  $('lvClose').addEventListener('click', closeLens);

  var effSweep = null;
  function startSweep() { if (reduce || MODES[idx].set !== 'edit' || state === 'front') return; effSweep = { t0: performance.now() }; }
  function runSweep(now) {
    var k = (now - effSweep.t0) / 2200; if (k >= 1) { effSweep = null; split = 0.5; drawLCD(); return; }
    split = 0.5 + Math.sin(k * Math.PI * 2) * 0.35 * (1 - k * 0.3); if (lcd.mode === 'photo') drawLCD();
  }

  $('pickUp').addEventListener('click', pickUp);
  $('toFront').addEventListener('click', putDown);
  $('dialPrev').addEventListener('click', function () { step(-1); });
  $('dialNext').addEventListener('click', function () { step(1); });
  $('toBack').addEventListener('click', showOnScreen);
  $('prev').addEventListener('click', function () { move(-1); });
  $('next').addEventListener('click', function () { move(1); });
  $('zoom').addEventListener('click', openFull);
  $('toDial').addEventListener('click', function () { lcd.mode = 'off'; drawLCD(); setState('dial'); goPose('dial', 1400); setReadout(); SND.whoosh(); });
  $('fPrev').addEventListener('click', function () { move(-1); });
  $('fNext').addEventListener('click', function () { move(1); });
  $('fClose').addEventListener('click', closeFull);

  document.addEventListener('keydown', function (e) {
    if ($('main').hidden) return;
    if (e.target.closest && e.target.closest('input, textarea')) return;
    if (!lv.hidden) { if (e.key === 'Escape') closeLens(); else if (e.key === 'ArrowRight') setPage(page + 1, 1); else if (e.key === 'ArrowLeft') setPage(page - 1, -1); return; }
    var r = hero.getBoundingClientRect(); if (r.bottom < 80) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      var d = e.key === 'ArrowRight' ? 1 : -1;
      if (state === 'dial') { step(d); e.preventDefault(); } else if (state === 'back' || state === 'full') { move(d); e.preventDefault(); }
    } else if (e.key === 'Escape') { if (state === 'full') closeFull(); else if (state === 'back') $('toDial').click(); else if (state === 'dial') putDown(); }
    else if (e.key === 'Enter' && document.activeElement === canvas) { if (state === 'front') pickUp(); else if (state === 'dial') showOnScreen(); else if (state === 'back') openFull(); }
    else if ((e.key === 'z' || e.key === 'Z') && document.activeElement === canvas) toggleZoom();
    else if ((e.key === 'f' || e.key === 'F') && document.activeElement === canvas) fireFlash('shutter');
  });

  /* ---------- pointer: drag to turn, click a part to use it ---------- */
  var ray = new T.Raycaster(), ndc = V2(0, 0), dragging = false, down = null, dialAcc = 0, effDrag = false;
  function hit(e) {
    var r = canvas.getBoundingClientRect(); ndc.set((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, cam); var h = ray.intersectObject(model, true);
    for (var i = 0; i < h.length; i++) if (h[i].object.visible) return h[i];
    return null;
  }
  function what(h) {
    if (!h) return null;
    var o = h.object, mk = o.userData.mat, part = o.userData.part;
    while (!part && o.parent) { o = o.parent; part = o.userData.part; }
    if (h.object.name === 'ringText' || h.object.name === 'dialFace') mk = h.object.name;
    if (part === 'lensInner' && /m_glass|m_coated|m_ringface|m_inner|m_blades|m_black|ringText/.test(mk || '')) return 'glass';
    if (part === 'lensInner' || part === 'zoomRing' || part === 'lensFixed') return 'zoom';
    if (part === 'shutterBtn') return 'shutter';
    if (part === 'recBtn') return 'rec';
    if (part === 'modeDial') return 'dial';
    if (part === 'screen') return 'screen';
    if (part === 'ok') return 'ok';
    if (part === 'plastic' && h.point) { var dm = model.worldToLocal(h.point.clone()).distanceTo(V3(-3.95, -0.55, -2.55)); if (dm < 0.5) return 'ok'; if (dm < 1.15) return 'msel'; }
    return 'body';
  }
  var TIPS = { zoom: 'Zoom 18 / 55', glass: 'Open the portfolio', shutter: 'Fire the flash', rec: 'Record', dial: 'Turn the dial', screen: 'Full view', ok: 'Full view', msel: 'Next photo', body: 'Pick it up' };
  var tip = $('tip'), lastHover = 0;
  canvas.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    actx();
    down = { x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, t: performance.now() }; dialAcc = 0; effDrag = false;
    if (state === 'back' && MODES[idx].set === 'edit') { var h = hit(e); if (h && what(h) === 'screen' && h.uv) { effDrag = true; effSweep = null; split = h.uv.x; drawLCD(); } }
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', function (e) {
    if (!down) {
      if (!finePointer || state === 'full') return;
      var now = performance.now(); if (now - lastHover < 60) return; lastHover = now;
      var w = what(hit(e)), r = hero.getBoundingClientRect(), label = w && (state !== 'back' || w !== 'body') && (state !== 'dial' || w !== 'body') ? TIPS[w] : '';
      canvas.classList.toggle('point', !!label);
      if (label) { tip.textContent = label; tip.style.setProperty('--tx', (e.clientX - r.left + 16) + 'px'); tip.style.setProperty('--ty', (e.clientY - r.top + 16) + 'px'); tip.classList.add('on'); } else tip.classList.remove('on');
      return;
    }
    var dx = e.clientX - down.lx, dy = e.clientY - down.ly; down.lx = e.clientX; down.ly = e.clientY;
    if (!dragging && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) { dragging = true; canvas.classList.add('dragging'); tip.classList.remove('on'); }
    if (!dragging) return;
    if (effDrag) { var h = hit(e); if (h && what(h) === 'screen' && h.uv) { split = Math.max(0, Math.min(1, h.uv.x)); drawLCD(); } return; }
    if (state === 'dial') { dialAcc += dx; while (Math.abs(dialAcc) > 34) { step(dialAcc > 0 ? 1 : -1); dialAcc -= Math.sign(dialAcc) * 34; } return; }
    if (state === 'full') return;
    user.vy = dx * 0.009; user.vp = dy * 0.006; user.yaw += user.vy; user.pitch += user.vp; user.idleUntil = performance.now() + 4000;
  });
  canvas.addEventListener('pointerleave', function () { tip.classList.remove('on'); canvas.classList.remove('point'); });
  function up(e) {
    if (!down) return;
    var moved = dragging, dx = e.clientX - down.x; dragging = false; canvas.classList.remove('dragging');
    if (state === 'full' && moved && Math.abs(dx) > 50) move(dx < 0 ? 1 : -1);
    if (!moved) click(e);
    down = null;
  }
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', function () { dragging = false; down = null; canvas.classList.remove('dragging'); });
  canvas.addEventListener('dblclick', function () { user.yaw = 0; user.pitch = 0; user.vy = user.vp = 0; });
  function click(e) {
    var h = hit(e), w = what(h);
    if (state === 'full') { var r = canvas.getBoundingClientRect(), x = (e.clientX - r.left) / r.width; if (x < 0.3) move(-1); else if (x > 0.7) move(1); return; }
    if (w === 'shutter' || w === 'rec') { fireFlash(w); return; }
    if (w === 'zoom') { toggleZoom(); return; }
    if (w === 'glass') { lensPreview(e); return; }
    if (state === 'front') { if (h) pickUp(); return; }
    if (state === 'dial') { if (w === 'dial') step(1); return; }
    if (state === 'back') {
      if (w === 'screen') { if (MODES[idx].set !== 'edit') openFull(); return; }
      if (w === 'ok') { openFull(); return; }
      if (w === 'msel') { var p = model.worldToLocal(h.point.clone()); move(p.x < -3.95 ? 1 : -1); }
    }
  }
  var wheelAcc = 0;
  canvas.addEventListener('wheel', function (e) {
    if (state !== 'dial') return;
    e.preventDefault(); wheelAcc += e.deltaY + e.deltaX;
    if (Math.abs(wheelAcc) > 40) { step(wheelAcc > 0 ? 1 : -1); wheelAcc = 0; }
  }, { passive: false });

  /* ---------- loop ---------- */
  var visible = true, raf = 0, parts = false;
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible && !raf && parts) raf = requestAnimationFrame(loop); }, { threshold: 0.01 }).observe(hero);
  function loop(now) {
    raf = 0; if (!visible || !parts || $('main').hidden) return;
    dialAngle += (dialTarget - dialAngle) * (reduce ? 1 : 0.16);
    if (NODE.modeDial) NODE.modeDial.rotation.y = (REST.modeDial ? REST.modeDial.r.y : 0) + dialAngle;
    frame(now);
    if (cur.shadow > 0.01) floor.render();
    renderer.render(scene, cam);
    if (!hero.classList.contains('gl-ready')) hero.classList.add('gl-ready');
    raf = requestAnimationFrame(loop);
  }
  setState('front'); setReadout();
  function init() {
    if (parts) return; parts = true;
    loadModel(function (ok) { if (!ok) buildFallback(); drawLCD(); tStart = performance.now(); lastT = tStart; if (!raf) raf = requestAnimationFrame(loop); });
  }
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(init); setTimeout(init, 1500); } else init();

  /* ---------- darkroom: a desktop monitor running the edit ---------- */
  var DR = null;
  function startDarkroom() {
    if (!DR) DR = buildDarkroom();
    if (DR) DR.start();
  }
  function buildDarkroom() {
    var cv = $('dr'), r;
    try { r = new T.WebGLRenderer({ canvas: cv, antialias: true, alpha: true, powerPreference: 'high-performance' }); } catch (e) { return null; }
    setupRenderer(r);
    var sc = new T.Scene(), pm = new T.PMREMGenerator(r); sc.environment = pm.fromScene(new T.RoomEnvironment(), 0.04).texture;
    studioLights(sc);
    var c3 = new T.PerspectiveCamera(26, 1, 0.5, 600);
    var desk = new T.Group(); sc.add(desk);
    var alu = PM({ color: 0xbdbdc0, metalness: 1, roughness: 0.32 }), black = PM({ color: 0x0b0b0c, roughness: 0.4, clearcoat: 0.6, clearcoatRoughness: 0.2, envMapIntensity: 0.7 });
    var SW = 1920, SHh = 1080, scv = document.createElement('canvas'); scv.width = SW; scv.height = SHh;
    var sg = scv.getContext('2d'), stex = new T.CanvasTexture(scv); stex.encoding = T.sRGBEncoding; stex.anisotropy = r.capabilities.getMaxAnisotropy();
    function m(geo, mt, x, y, z) { var o = new T.Mesh(geo, mt); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; desk.add(o); return o; }
    m(rbox(17.2, 10.4, 0.55, 0.3), black, 0, 10.3, 0);
    m(rbox(15.6, 8.8, 0.9, 0.9), black, 0, 10.4, -0.6);
    var scr = m(new T.PlaneGeometry(16.4, 9.225), new T.MeshBasicMaterial({ map: stex, toneMapped: false }), 0, 10.42, 0.28); scr.name = 'drScreen'; scr.castShadow = false;
    var gl2 = new T.Mesh(new T.PlaneGeometry(16.6, 9.4), PM({ color: 0x000000, roughness: 0.05, clearcoat: 1, transparent: true, blending: T.AdditiveBlending, depthWrite: false, envMapIntensity: 0.5 }));
    gl2.position.set(0, 10.42, 0.29); desk.add(gl2);
    /* the stand: one bent aluminium plate. The foot sits flat on the desk and the arm leans up behind the monitor to a hinge on its back. */
    var prof = new T.Shape();
    prof.moveTo(1.1, 0); prof.lineTo(-2.15, 0);
    prof.quadraticCurveTo(-2.8, 0, -2.67, 0.6);
    prof.lineTo(-1.64, 8.05);
    prof.quadraticCurveTo(-1.56, 8.36, -1.33, 8.2);
    prof.lineTo(-2.35, 0.7);
    prof.quadraticCurveTo(-2.42, 0.3, -2.05, 0.3);
    prof.lineTo(1.1, 0.3);
    prof.quadraticCurveTo(1.27, 0.15, 1.1, 0);
    var standGeo = new T.ExtrudeGeometry(prof, { depth: 3.1, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 4, curveSegments: 18 });
    standGeo.rotateY(-Math.PI / 2); standGeo.translate(1.55, 0.06, 0); standGeo.computeVertexNormals();
    m(standGeo, alu, 0, 0, 0);
    var hinge = m(new T.CylinderGeometry(0.34, 0.34, 3.3, 40), alu, 0, 8.25, -1.42); hinge.rotation.z = Math.PI / 2;
    m(rbox(3.6, 2.4, 0.2, 0.08), alu, 0, 8.6, -1.12);
    var kb = m(rbox(13.5, 0.36, 4.3, 0.2), alu, 0, 0.18, 6.0);
    var keyGeo = rbox(0.72, 0.14, 0.72, 0.1), keyMat = PM({ color: 0x151517, roughness: 0.55, clearcoat: 0.2 });
    var keys = new T.InstancedMesh(keyGeo, keyMat, 15 * 5), mm = new T.Matrix4(), ki = 0;
    for (var row = 0; row < 5; row++) for (var col = 0; col < 15; col++) { mm.makeTranslation(-5.95 + col * 0.85, 0.42, 4.3 + row * 0.85); keys.setMatrixAt(ki++, mm); }
    keys.castShadow = keys.receiveShadow = true; desk.add(keys);
    var mouse = m(new T.SphereGeometry(1, 48, 24), PM({ color: 0xe9e9e7, roughness: 0.35, clearcoat: 0.6 }), 9.6, 0.35, 6.2); mouse.scale.set(0.95, 0.38, 1.55);
    var shadow = contactShadow(r, sc, 0, 46); shadow.SH.blur = 2.6; shadow.plane.material.opacity = 0.5;

    /* ---- the develop engine: a real per-pixel grade, and a histogram of whatever the screen shows ---- */
    /* [name, target value of the edit, range, decimals] */
    var ADJ = [['Exposure', 0.35, 2, 2], ['Contrast', 18, 100, 0], ['Highlights', -42, 100, 0], ['Shadows', 38, 100, 0], ['Whites', 12, 100, 0], ['Blacks', -16, 100, 0], ['Temperature', 6, 100, 0], ['Vibrance', 14, 100, 0], ['Clarity', 10, 100, 0], ['Vignette', -28, 100, 0]];
    var vals = ADJ.map(function () { return 0; });
    var state2 = { split: 0.5, k: 0, t0: 0, playing: false, running: false, focus: -1, hover: -1, drag: -1 };
    var photo = { x: 24, y: 76, w: 1400, h: 930 }, PX = 1448, PWd = SW - PX - 24;
    var orig = new Image(), dev = null, dirtyGrade = true, dirty = true;
    var NC = 48, HB = 64;
    orig.onload = function () { setupDev(); }; orig.src = 'img/night-building.webp';
    function mkCanvas(w, h) { var c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
    function setupDev() {
      var s = Math.min(photo.w / orig.naturalWidth, photo.h / orig.naturalHeight), w = Math.round(orig.naturalWidth * s), h = Math.round(orig.naturalHeight * s);
      var rc = { x: Math.round((photo.w - w) / 2), y: Math.round((photo.h - h) / 2), w: w, h: h };
      var oc = mkCanvas(w, h), og = oc.getContext('2d'); og.drawImage(orig, 0, 0, w, h);
      var src; try { src = og.getImageData(0, 0, w, h); } catch (e) { return; }
      /* a soft luminance map for Clarity (local contrast): downsample, then let the browser blur it back up */
      var bw = Math.max(8, Math.round(w / 14)), bh = Math.max(8, Math.round(h / 14)), bc = mkCanvas(bw, bh), bg = bc.getContext('2d');
      bg.imageSmoothingQuality = 'high'; bg.drawImage(oc, 0, 0, bw, bh);
      var uc = mkCanvas(w, h), ug = uc.getContext('2d'); ug.imageSmoothingQuality = 'high'; ug.drawImage(bc, 0, 0, w, h);
      var ud = ug.getImageData(0, 0, w, h).data, blurL = new Float32Array(w * h), vmap = new Float32Array(w * h);
      var r0 = 0.35 * Math.min(w, h), r1 = 0.7 * Math.max(w, h), cx = w / 2, cy = h / 2;
      for (var y = 0, i = 0; y < h; y++) for (var x = 0; x < w; x++, i++) {
        blurL[i] = (0.2126 * ud[i * 4] + 0.7152 * ud[i * 4 + 1] + 0.0722 * ud[i * 4 + 2]) / 255;
        var d = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy)); vmap[i] = Math.max(0, Math.min(1, (d - r0) / (r1 - r0)));
      }
      var gc = mkCanvas(w, h);
      dev = { rc: rc, src: src, out: gc.getContext('2d').createImageData(w, h), gc: gc, gg: gc.getContext('2d'), oc: oc, blurL: blurL, vmap: vmap,
        orig: colHist(src.data, w, h), grad: null };
      dirtyGrade = true; draw();
    }
    /* per-column-group histograms, summed left to right, so any split position reads off in constant time */
    function colHist(d, w, h, into) {
      var H = into || new Float32Array((NC + 1) * 4 * HB); H.fill(0);
      for (var y = 0; y < h; y += 2) for (var x = 0; x < w; x += 2) {
        var i = (y * w + x) * 4, gi = ((x * NC / w) | 0) + 1, o = gi * 4 * HB, rr = d[i], g = d[i + 1], b = d[i + 2];
        H[o + (rr >> 2)]++; H[o + HB + (g >> 2)]++; H[o + 2 * HB + (b >> 2)]++; H[o + 3 * HB + (((0.2126 * rr + 0.7152 * g + 0.0722 * b) | 0) >> 2)]++;
      }
      for (var gI = 1; gI <= NC; gI++) for (var j = 0; j < 4 * HB; j++) H[gI * 4 * HB + j] += H[(gI - 1) * 4 * HB + j];
      return H;
    }
    function sst(a, b, x) { var t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
    function regrade() {
      if (!dev) return;
      var real = editImg && editImg.naturalWidth, v = vals.map(function (x, i) { return real ? x - ADJ[i][1] : x; });
      if (real && !dev.edit) { var ec = mkCanvas(dev.rc.w, dev.rc.h), eg = ec.getContext('2d'); eg.drawImage(editImg, 0, 0, dev.rc.w, dev.rc.h); try { dev.edit = eg.getImageData(0, 0, dev.rc.w, dev.rc.h); } catch (e) { dev.edit = null; } }
      var sd = (real && dev.edit ? dev.edit : dev.src).data, od = dev.out.data, n = dev.rc.w * dev.rc.h;
      var t = v[6] / 100, ex = Math.pow(2, v[0] * 0.7), gR = ex * (1 + t * 0.22), gG = ex * (1 + t * 0.03), gB = ex * (1 - t * 0.22);
      var lut = new Float32Array(256), ct = 1 + v[1] / 100 * 0.9;
      for (var q = 0; q < 256; q++) {
        var L = q / 255, yv = L + v[2] / 100 * 0.25 * sst(0.5, 1, L) + v[3] / 100 * 0.25 * (1 - sst(0, 0.5, L)) + v[4] / 100 * 0.12 * sst(0.7, 1, L) + v[5] / 100 * 0.12 * (1 - sst(0, 0.3, L));
        lut[q] = (0.5 + (yv - 0.5) * ct - L) * 255;
      }
      var cl = v[8] / 100 * 1.4, vib = v[7] / 100 * 1.6, vg = -v[9] / 100 * 1.6, bl = dev.blurL, vm = dev.vmap;
      for (var p = 0, i = 0; p < n; p++, i += 4) {
        var R = sd[i] * gR, G = sd[i + 1] * gG, B = sd[i + 2] * gB;
        var Lc = 0.2126 * R + 0.7152 * G + 0.0722 * B, li = Lc < 0 ? 0 : Lc > 255 ? 255 : Lc | 0, Ln = li / 255;
        var off = lut[li] + (Ln - bl[p]) * cl * 4 * Ln * (1 - Ln) * 255;
        R += off; G += off; B += off; Lc += off;
        var mx = R > G ? (R > B ? R : B) : (G > B ? G : B), mn = R < G ? (R < B ? R : B) : (G < B ? G : B), f = 1 + vib * (1 - Math.max(0, Math.min(1, (mx - mn) / 255)));
        R = Lc + (R - Lc) * f; G = Lc + (G - Lc) * f; B = Lc + (B - Lc) * f;
        var vv = 1 - vg * vm[p]; R *= vv; G *= vv; B *= vv;
        od[i] = R; od[i + 1] = G; od[i + 2] = B; od[i + 3] = 255;
      }
      dev.gg.putImageData(dev.out, 0, 0);
      dev.grad = colHist(od, dev.rc.w, dev.rc.h, dev.grad);
      dirtyGrade = false;
    }
    function rowY(i) { return 300 + i * 68; }
    function fmt(a, v) { var s = a[3] ? v.toFixed(a[3]) : String(Math.round(v)); return (v > 0 ? '+' : '') + (s === '-0' ? '0' : s); }
    function draw() {
      if (dirtyGrade) regrade();
      var g = sg;
      g.fillStyle = '#18181a'; g.fillRect(0, 0, SW, SHh);
      g.fillStyle = '#0f0f10'; g.fillRect(0, 0, SW, 56);
      g.fillStyle = '#e8e8e8'; g.font = '500 24px Geist, system-ui, sans-serif'; g.textBaseline = 'middle'; g.fillText('Darkroom', 28, 28);
      g.fillStyle = '#8b8e95'; g.font = '400 22px "Geist Mono", ui-monospace, monospace'; g.fillText('night-building.jpg   /   Lit windows', 170, 29);
      g.textAlign = 'right'; g.fillText('Before  |  After', SW - 28, 29); g.textAlign = 'left';
      g.fillStyle = '#0b0b0c'; g.fillRect(photo.x, photo.y, photo.w, photo.h);
      var sx = Math.round(photo.w * state2.split);
      if (dev) {
        var rc = dev.rc, X = photo.x + rc.x, Y = photo.y + rc.y;
        g.drawImage(dev.gc, X, Y);
        g.save(); g.beginPath(); g.rect(photo.x, photo.y, sx, photo.h); g.clip(); g.drawImage(dev.oc, X, Y); g.restore();
        g.fillStyle = '#ffffff'; g.fillRect(photo.x + sx - 2, photo.y, 4, photo.h);
        g.beginPath(); g.arc(photo.x + sx, photo.y + photo.h / 2, 26, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#111'; g.font = '600 22px Geist, system-ui, sans-serif'; g.textAlign = 'center'; g.fillText('↔', photo.x + sx, photo.y + photo.h / 2 + 1); g.textAlign = 'left';
        g.font = '500 20px "Geist Mono", ui-monospace, monospace'; g.fillStyle = 'rgba(255,255,255,.85)';
        g.fillText('BEFORE', photo.x + 20, photo.y + 32); g.textAlign = 'right'; g.fillText(editImg && editImg.naturalWidth ? 'AFTER' : 'AFTER  /  PREVIEW GRADE', photo.x + photo.w - 20, photo.y + 32); g.textAlign = 'left';
      }
      var px = PX, pw = PWd;
      g.fillStyle = '#202023'; g.fillRect(px, 76, pw, 930);
      g.fillStyle = '#e8e8e8'; g.font = '600 26px Geist, system-ui, sans-serif'; g.fillText('Develop', px + 22, 112);
      g.fillStyle = '#141416'; g.fillRect(px + 22, 140, pw - 44, 120);
      if (dev && dev.grad) {
        /* the histogram of exactly what is on screen: before pixels left of the line, graded pixels right of it */
        var s = Math.max(0, Math.min(1, (sx - dev.rc.x) / dev.rc.w)) * NC, g0 = Math.floor(s), fr = s - g0, g1 = Math.min(NC, g0 + 1), B4 = 4 * HB;
        var O = dev.orig, Gd = dev.grad, H = new Float32Array(B4);
        for (var j = 0; j < B4; j++) {
          var o = O[g0 * B4 + j] + (O[g1 * B4 + j] - O[g0 * B4 + j]) * fr, gl = Gd[g0 * B4 + j] + (Gd[g1 * B4 + j] - Gd[g0 * B4 + j]) * fr;
          H[j] = o + (Gd[NC * B4 + j] - gl);
        }
        var mx = 1; for (var c0 = 0; c0 < 4; c0++) for (var b0 = 1; b0 < HB - 1; b0++) if (H[c0 * HB + b0] > mx) mx = H[c0 * HB + b0];
        ['rgba(225,60,60,.5)', 'rgba(60,180,90,.5)', 'rgba(70,110,230,.5)', 'rgba(255,255,255,.3)'].forEach(function (col, c) {
          g.fillStyle = col; g.beginPath(); g.moveTo(px + 22, 260);
          for (var i = 0; i < HB; i++) g.lineTo(px + 22 + i / (HB - 1) * (pw - 44), 260 - Math.min(1, Math.pow(H[c * HB + i] / mx, 0.6)) * 112);
          g.lineTo(px + 22 + pw - 44, 260); g.closePath(); g.globalCompositeOperation = 'lighter'; g.fill(); g.globalCompositeOperation = 'source-over';
        });
      }
      ADJ.forEach(function (a, i) {
        var y = rowY(i), v = vals[i], on = i === state2.drag || i === state2.hover || i === state2.focus;
        if (i === state2.focus) { g.strokeStyle = '#ffffff'; g.lineWidth = 2; g.strokeRect(px + 10, y - 22, pw - 20, 64); }
        g.fillStyle = on ? '#ffffff' : '#c9cbd0'; g.font = '400 21px Geist, system-ui, sans-serif'; g.fillText(a[0], px + 22, y);
        g.textAlign = 'right'; g.font = '500 21px "Geist Mono", ui-monospace, monospace'; g.fillStyle = '#ffffff';
        g.fillText(fmt(a, v), px + pw - 22, y); g.textAlign = 'left';
        var tx = px + 22, tw = pw - 44, cx = tx + tw / 2 + (v / a[2]) * (tw / 2);
        g.fillStyle = '#3a3a3e'; g.fillRect(tx, y + 22, tw, 4);
        g.fillStyle = '#e8e8e8'; g.fillRect(Math.min(tx + tw / 2, cx), y + 22, Math.abs(cx - (tx + tw / 2)), 4);
        g.beginPath(); g.arc(cx, y + 24, on ? 14 : 11, 0, Math.PI * 2); g.fill();
      });
      g.fillStyle = '#0f0f10'; g.fillRect(0, SHh - 60, SW, 60);
      g.fillStyle = '#8b8e95'; g.font = '400 20px "Geist Mono", ui-monospace, monospace'; g.textBaseline = 'middle';
      g.fillText('Lit windows   /   ' + (editImg && editImg.naturalWidth ? 'your edit' : 'preview grade') + '   /   drag the line or any slider, double-click to reset', 28, SHh - 30);
      stex.needsUpdate = true; dirty = true;
    }
    var resizedAt = 0;
    function resize2() {
      var w = window.innerWidth, h = Math.max(1, cv.getBoundingClientRect().height || window.innerHeight); r.setSize(w, h, false); c3.aspect = w / h; c3.updateProjectionMatrix();
      /* a fixed camera: the monitor stays put */
      var tanV = Math.tan(c3.fov * Math.PI / 360), phone = c3.aspect < 1, dd = Math.max(50, 9.9 / (tanV * c3.aspect));
      if (phone) { c3.position.set(0.8, 13, dd); c3.lookAt(0, 6.4, 0); } else { c3.position.set(4.5, 13, dd); c3.lookAt(1.2, 9.4, 0); }
      resizedAt = 0; dirty = true;
    }
    window.addEventListener('resize', resize2);
    var ndc2 = V2(0, 0), ray2 = new T.Raycaster(), lastTick = 0;
    function uvAt(e) { var b = cv.getBoundingClientRect(); ndc2.set((e.clientX - b.left) / b.width * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); ray2.setFromCamera(ndc2, c3); var h = ray2.intersectObject(scr); return h.length ? { x: h[0].uv.x * SW, y: (1 - h[0].uv.y) * SHh } : null; }
    function hit(p) {
      if (!p) return null;
      if (p.x >= photo.x && p.x <= photo.x + photo.w && p.y >= photo.y && p.y <= photo.y + photo.h) return { split: true };
      if (p.x >= PX && p.x <= PX + PWd) for (var i = 0; i < ADJ.length; i++) if (p.y >= rowY(i) - 24 && p.y <= rowY(i) + 44) return { adj: i };
      return null;
    }
    function setSplit(p) { state2.split = Math.max(0, Math.min(1, (p.x - photo.x) / photo.w)); $('drSplit').value = Math.round(state2.split * 100); draw(); }
    function setAdj(i, v, sound) {
      var a = ADJ[i], st = a[3] ? 0.05 : 1; v = Math.max(-a[2], Math.min(a[2], Math.round(v / st) * st));
      if (sound && Math.floor(v / (st * 5)) !== Math.floor(vals[i] / (st * 5)) && performance.now() - lastTick > 40) { SND.tick(); lastTick = performance.now(); }
      vals[i] = v; syncInputs(i); dirtyGrade = true; draw();
    }
    function fromX(i, x) { var tx = PX + 22, tw = PWd - 44; return (x - (tx + tw / 2)) / (tw / 2) * ADJ[i][2]; }
    cv.addEventListener('pointerdown', function (e) {
      var p = uvAt(e), h = hit(p); if (!h) return;
      state2.playing = false; cv.setPointerCapture(e.pointerId);
      if (h.split) { state2.drag = 'split'; setSplit(p); SND.tick(); } else { state2.drag = h.adj; setAdj(h.adj, fromX(h.adj, p.x), true); }
    });
    cv.addEventListener('pointermove', function (e) {
      var p = uvAt(e);
      if (state2.drag === 'split') { if (p) setSplit(p); return; }
      if (typeof state2.drag === 'number' && state2.drag >= 0) { if (p) setAdj(state2.drag, fromX(state2.drag, p.x), true); return; }
      var h = hit(p), hv = h && typeof h.adj === 'number' ? h.adj : -1;
      cv.style.cursor = h ? 'ew-resize' : '';
      if (hv !== state2.hover) { state2.hover = hv; draw(); }
    });
    function endDrag() { if (state2.drag !== -1) { state2.drag = -1; draw(); } }
    cv.addEventListener('pointerup', endDrag); cv.addEventListener('pointercancel', endDrag);
    cv.addEventListener('pointerleave', function () { if (state2.hover !== -1) { state2.hover = -1; cv.style.cursor = ''; draw(); } });
    cv.addEventListener('dblclick', function (e) { var h = hit(uvAt(e)); if (h && typeof h.adj === 'number') { setAdj(h.adj, 0, false); SND.tap(); } });
    $('drSplit').addEventListener('input', function () { state2.playing = false; state2.split = this.value / 100; draw(); });
    $('drPlay').addEventListener('click', function () { play(); });
    /* keyboard: one real range input per slider (visually hidden); focus draws a ring on the monitor */
    var box = $('drAdj'), inputs = ADJ.map(function (a, i) {
      var inp = document.createElement('input'); inp.type = 'range'; inp.min = -a[2]; inp.max = a[2]; inp.step = a[3] ? 0.05 : 1; inp.value = 0; inp.setAttribute('aria-label', a[0]);
      inp.addEventListener('input', function () { state2.playing = false; setAdj(i, +inp.value, false); });
      inp.addEventListener('focus', function () { state2.focus = i; draw(); });
      inp.addEventListener('blur', function () { if (state2.focus === i) { state2.focus = -1; draw(); } });
      box.appendChild(inp); return inp;
    });
    function syncInputs(i) { if (i == null) { inputs.forEach(function (inp, j) { inp.value = vals[j]; }); } else inputs[i].value = vals[i]; }
    function play() {
      state2.k = 0; state2.t0 = performance.now(); state2.playing = true;
      /* browsers only allow sound after a click or key press, so the automatic first run plays silently */
      if (!navigator.userActivation || navigator.userActivation.hasBeenActive) motor(0.5, true);
    }
    var rafD = 0;
    function loopD(now) {
      rafD = 0; if ($('darkroom').hidden) { state2.running = false; return; }
      if (state2.playing) {
        var kk = Math.min(1, (now - state2.t0) / 2600); state2.k = reduce ? 1 : kk;
        state2.split = reduce ? 0.5 : 0.5 + Math.sin(kk * Math.PI * 2) * 0.32 * (1 - kk);
        ADJ.forEach(function (a, i) { var q = Math.max(0, Math.min(1, state2.k * 1.6 - i * 0.07)); vals[i] = a[1] * (1 - Math.pow(1 - q, 3)); });
        syncInputs(); dirtyGrade = true;
        $('drSplit').value = Math.round(state2.split * 100); draw();
        if (state2.k >= 1) { state2.playing = false; ADJ.forEach(function (a, i) { vals[i] = a[1]; }); syncInputs(); dirtyGrade = true; draw(); }
      }
      if (dirty) { if (resizedAt < 2) { shadow.render(); resizedAt++; } r.render(sc, c3); dirty = false; }
      rafD = requestAnimationFrame(loopD);
    }
    return {
      draw: function () { if (dev) dev.edit = null; dirtyGrade = true; draw(); },
      start: function () { resize2(); $('drNote').hidden = !!(editImg && editImg.naturalWidth); if (!state2.running) { state2.running = true; play(); rafD = requestAnimationFrame(loopD); } },
      state: function () { return { split: state2.split, vals: vals.slice(), playing: state2.playing, hist: dev && dev.grad ? 1 : 0 }; },
      toClient: function (x, y) { var v = new T.Vector3((x / SW - 0.5) * 16.4, (0.5 - y / SHh) * 9.225, 0); scr.localToWorld(v); v.project(c3); var b = cv.getBoundingClientRect(); return { x: b.left + (v.x + 1) / 2 * b.width, y: b.top + (1 - v.y) / 2 * b.height }; },
      knob: function (i) { return { x: PX + 22 + (PWd - 44) / 2 + vals[i] / ADJ[i][2] * (PWd - 44) / 2, y: rowY(i) + 24 }; }, track: function (i, f) { return { x: PX + 22 + (PWd - 44) * f, y: rowY(i) + 24 }; },
      setAdj: setAdj, setSplit: function (s) { state2.split = s; draw(); }, hist: function () { var c = sg.getImageData(PX + 22, 140, PWd - 44, 120).data, sum = 0; for (var i = 0; i < c.length; i += 4) sum += c[i] + c[i + 1] + c[i + 2]; return sum; }
    };
  }

  /* ---------- routes: the camera page and the darkroom ---------- */
  function route() {
    var dr = location.hash === '#darkroom';
    $('main').hidden = dr; $('darkroom').hidden = !dr; $('darkroom').classList.toggle('go', dr);
    if (dr) { window.scrollTo(0, 0); if (booted && window.THREE && renderer) startDarkroom(); }
    else if (parts && !raf && typeof loop === 'function') raf = requestAnimationFrame(loop);
  }
  window.addEventListener('hashchange', route);
  /* the early route() call near the top only swaps the views; the darkroom is built once every helper above exists */
  var booted = true;
  route();

  window.__cam = { state: function () { return state; }, pickUp: pickUp, showOnScreen: showOnScreen, openFull: openFull, step: step, user: user, toggleZoom: toggleZoom, fireFlash: fireFlash, lensPreview: lensPreview, nodes: NODE, dr: function () { return DR; } };

  function noGLFallback() {
    var fb = document.querySelector('.fallback');
    function show() { setPlay(); if (list.length) { fb.src = 'img/' + list[pos] + '.webp'; fb.alt = ALT[list[pos]]; fb.style.transform = 'translate(-50%, -50%)'; fb.style.width = 'min(80vw, 900px)'; } }
    function to(s) { hero.setAttribute('data-state', s); state = s; setHint(); }
    $('zoom').hidden = true;
    $('pickUp').addEventListener('click', function () { to('dial'); setReadout(); });
    $('dialPrev').addEventListener('click', function () { idx = mod(idx - 1, N); setReadout(); });
    $('dialNext').addEventListener('click', function () { idx = mod(idx + 1, N); setReadout(); });
    $('toBack').addEventListener('click', function () { var m = MODES[idx]; list = m.set === 'edit' ? ['night-building'] : m.set.slice(); pos = 0; to('back'); show(); });
    $('prev').addEventListener('click', function () { if (list.length) { pos = mod(pos - 1, list.length); show(); } });
    $('next').addEventListener('click', function () { if (list.length) { pos = mod(pos + 1, list.length); show(); } });
    $('toDial').addEventListener('click', function () { to('dial'); });
    $('toFront').addEventListener('click', function () { to('front'); fb.src = 'img/cam-front-free.webp'; fb.alt = 'A black Nikon D5200 with no strap.'; fb.removeAttribute('style'); });
  }
})();
