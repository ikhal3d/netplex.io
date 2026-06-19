/* ──────────────────────────────────────────────────────────────
   Netplex.io - Appearance picker (Theme + Accent), mirrors the app.
   Retints the whole live site and persists to localStorage so the
   visitor's choice carries across every page - priming them for the
   product. Toggle the gear ([data-appearance-trigger]) in the nav.
   ────────────────────────────────────────────────────────────── */
(function () {
  var THEMES = [
    { id: 'cloud',    name: 'Cloud',    bg: 'linear-gradient(135deg,#ffffff 0%,#eef1f6 100%)', bd: '#dde2ea' },
    { id: 'paper',    name: 'Paper',    bg: 'linear-gradient(135deg,#ffffff 0%,#efeee8 100%)', bd: '#e0ded6' },
    { id: 'sand',     name: 'Sand',     bg: 'linear-gradient(135deg,#f5f3ec 0%,#d7d4c7 100%)', bd: '#cac7b8' },
    { id: 'graphite', name: 'Graphite', bg: 'linear-gradient(135deg,#222227 0%,#121214 100%)', bd: '#33333a' },
    { id: 'midnight', name: 'Midnight', bg: 'linear-gradient(135deg,#1c1f27 0%,#0a0b0e 100%)', bd: '#343845' },
    { id: 'obsidian', name: 'Obsidian', bg: 'linear-gradient(135deg,#1a1a1f 0%,#050507 100%)', bd: '#313138' }
  ];
  var ACCENTS = [
    { id: 'orange',  hex: '#ff7a45' },
    { id: 'blue',    hex: '#3d8bff' },
    { id: 'green',   hex: '#2fb574' },
    { id: 'magenta', hex: '#e0529c' },
    { id: 'amber',   hex: '#e8b24a' },
    { id: 'indigo',  hex: '#6c6cf2' }
  ];
  var KT = 'netplex.theme', KA = 'netplex.accent';
  var root = document.documentElement;

  function curTheme() { return root.dataset.theme || 'midnight'; }
  function curAccent() { return root.dataset.accent || 'orange'; }

  function setTheme(id) {
    if (id === 'midnight') delete root.dataset.theme; else root.dataset.theme = id;
    try { localStorage.setItem(KT, id); } catch (e) {}
    sync();
  }
  function setAccent(id) {
    if (id === 'orange') delete root.dataset.accent; else root.dataset.accent = id;
    try { localStorage.setItem(KA, id); } catch (e) {}
    sync();
  }
  function reset() { setTheme('midnight'); setAccent('orange'); }

  var panel, scrim;
  function sync() {
    if (!panel) return;
    var t = curTheme(), a = curAccent();
    panel.querySelectorAll('.ap-theme').forEach(function (el) { el.classList.toggle('on', el.dataset.id === t); });
    panel.querySelectorAll('.ap-acc').forEach(function (el) { el.classList.toggle('on', el.dataset.id === a); });
  }

  function build() {
    scrim = document.createElement('div'); scrim.className = 'ap-scrim';
    panel = document.createElement('div'); panel.className = 'ap-panel'; panel.setAttribute('role', 'dialog');
    var themesHtml = THEMES.map(function (t) {
      return '<div class="ap-theme" data-id="' + t.id + '"><div class="ap-sw" style="background:' + t.bg + ';border-color:' + t.bd + '"><span class="dot"></span></div><span class="ap-tname">' + t.name + '</span></div>';
    }).join('');
    var accHtml = ACCENTS.map(function (a) {
      return '<span class="ap-acc" data-id="' + a.id + '" style="background:' + a.hex + ';color:' + a.hex + '" title="' + a.id + '"></span>';
    }).join('');
    panel.innerHTML =
      '<div class="ap-head"><h4>Appearance</h4><button class="x" aria-label="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button></div>' +
      '<div class="ap-label">Theme</div><div class="ap-themes">' + themesHtml + '</div>' +
      '<div class="ap-divider"></div>' +
      '<div class="ap-label">Accent</div><div class="ap-accents">' + accHtml + '</div>' +
      '<div class="ap-note">Your theme &amp; accent follow you across netplex.</div>' +
      '<button class="btn btn-outline ap-reset">Reset to defaults</button>';
    document.body.appendChild(scrim);
    document.body.appendChild(panel);

    panel.querySelectorAll('.ap-theme').forEach(function (el) {
      el.addEventListener('click', function () { setTheme(el.dataset.id); });
    });
    panel.querySelectorAll('.ap-acc').forEach(function (el) {
      el.addEventListener('click', function () { setAccent(el.dataset.id); });
    });
    panel.querySelector('.x').addEventListener('click', close);
    panel.querySelector('.ap-reset').addEventListener('click', reset);
    scrim.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    sync();
  }

  function open() { panel.classList.add('open'); scrim.classList.add('open'); sync(); }
  function close() { panel.classList.remove('open'); scrim.classList.remove('open'); }
  function toggle() { panel.classList.contains('open') ? close() : open(); }

  function init() {
    build();
    panel.addEventListener('click', function (e) { e.stopPropagation(); });
    document.querySelectorAll('[data-appearance-trigger]').forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); toggle(); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.Appearance = { setTheme: setTheme, setAccent: setAccent, open: open, close: close, reset: reset };
})();
