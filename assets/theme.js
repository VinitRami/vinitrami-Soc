/* Runs before first paint so the page never flashes the wrong theme.
   A saved choice wins; otherwise the system setting; otherwise dark. */
(function () {
  var t = null;
  try { t = localStorage.getItem('vr-theme'); } catch (e) { /* storage blocked: fall through */ }
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', t);
})();
