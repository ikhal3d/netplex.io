/* ──────────────────────────────────────────────────────────────
   Netplex.io - product showcase builders
   buildFabric()   : two physical hosts stitched into one topology
   buildPipeline() : the image pipeline stepper (no CLI)
   buildThemes()   : 6 live theme preview tiles
   ────────────────────────────────────────────────────────────── */
(function (global) {

  /* ── shared glyphs ── */
  var G = {
    router: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8l4 4-4 4M16 12l-4 4-4-4"/></svg>',
    sw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="8.5" width="19" height="7" rx="1.5"/><path d="M6.5 12h.01M9.5 12h.01M12.5 12h.01"/></svg>',
    srv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="7.5" rx="1.5"/><rect x="3.5" y="13" width="17" height="7.5" rx="1.5"/><path d="M7 7.2h.01M7 16.7h.01"/></svg>',
    host: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="3.5" width="19" height="13" rx="1.5"/><path d="M8.5 20.5h7M12 16.5v4M6 7h6M6 10h3"/></svg>'
  };

  function miniNode(hue, nm, ip) {
    var bg = 'color-mix(in srgb, ' + hue + ' 15%, var(--surface-3))';
    var bd = 'color-mix(in srgb, ' + hue + ' 38%, transparent)';
    var glyph = nm.indexOf('SRV') > -1 ? G.srv : (nm.indexOf('R') === 0 ? G.router : G.sw);
    return '<div class="fab-node">' +
      '<span class="fb-badge" style="background:' + bg + ';border:1px solid ' + bd + ';color:' + hue + '">' + glyph + '</span>' +
      '<span class="fb-meta"><span class="fb-nm">' + nm + '</span><span class="fb-ip mono">' + ip + '</span></span>' +
      '<span class="fb-dot"></span></div>';
  }

  /* ── DISTRIBUTED FABRIC: two hosts, one topology ── */
  global.buildFabric = function (host) {
    if (!host) return;
    var hostA = '#5fb7ff', hostB = '#41c178';
    var html =
      '<div class="fab">' +
        '<div class="fab-host" style="--hg:' + hostA + '">' +
          '<div class="fab-hd"><span class="fab-pc" style="color:' + hostA + '">' + G.host + '</span>' +
            '<span class="fab-h-meta"><b>host-01</b><span class="mono">lab-rig · 8 vCPU</span></span>' +
            '<span class="fab-cpu"><i style="width:34%"></i></span><span class="fab-pct mono">34%</span></div>' +
          '<div class="fab-nodes">' +
            miniNode('#84b135', 'R1', '10.0.0.1') +
            miniNode('#1ba0d7', 'SW-A', '10.10.0.1') +
          '</div>' +
        '</div>' +
        '<div class="fab-gap">' +
          '<svg viewBox="0 0 120 60" preserveAspectRatio="none"><path d="M2 30 H118" stroke="var(--border-bright)" stroke-width="1.4" fill="none"/><path d="M2 30 H118" stroke="var(--accent)" stroke-width="1.8" fill="none" class="flow" style="stroke-dasharray:4 5"/></svg>' +
          '<span class="fab-tunnel mono">VXLAN · vni 1010</span>' +
        '</div>' +
        '<div class="fab-host" style="--hg:' + hostB + '">' +
          '<div class="fab-hd"><span class="fab-pc" style="color:' + hostB + '">' + G.host + '</span>' +
            '<span class="fab-h-meta"><b>host-02</b><span class="mono">media-pc · 4 vCPU</span></span>' +
            '<span class="fab-cpu"><i style="width:61%"></i></span><span class="fab-pct mono">61%</span></div>' +
          '<div class="fab-nodes">' +
            miniNode('#1ba0d7', 'SW-B', '10.10.0.2') +
            miniNode('#a78bfa', 'WEB-SRV', '10.40.0.6') +
          '</div>' +
        '</div>' +
      '</div>';
    host.innerHTML = html;
  };

  /* ── IMAGE PIPELINE: laid-out steps, no CLI ── */
  var STEPS = ['Uploaded', 'Extracted', 'Detected', 'Converted', 'Permissions', 'Organised', 'Tested', 'Ready'];
  global.buildPipeline = function (host) {
    if (!host) return;
    var pills = STEPS.map(function (s, i) {
      return '<div class="pl-step" data-i="' + i + '"><span class="pl-chip">' + s + '</span></div>';
    }).join('<span class="pl-conn"></span>');
    host.innerHTML =
      '<div class="pl-row">' +
        '<div class="pl-file"><span class="pl-fic">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>' +
        '</span><span class="pl-fmeta"><b>csr1000v.qcow2</b><span class="mono">Cisco · CSR 1000v · 1.4 GB</span></span>' +
        '<span class="pl-status"><i></i><span class="pl-stxt mono">Queued</span></span></div>' +
        '<div class="pl-steps">' + pills + '</div>' +
      '</div>';
    var steps = host.querySelectorAll('.pl-step');
    var statusEl = host.querySelector('.pl-status');
    var stxt = host.querySelector('.pl-stxt');
    var cur = 0;
    function tick() {
      steps.forEach(function (st, i) {
        st.classList.remove('active', 'done');
        if (i < cur) st.classList.add('done');
        else if (i === cur) st.classList.add('active');
      });
      if (cur < STEPS.length) {
        statusEl.classList.remove('ok');
        stxt.textContent = 'Stage ' + (cur + 1) + ' of ' + STEPS.length + ' · ' + STEPS[cur];
      } else {
        statusEl.classList.add('ok');
        stxt.textContent = 'Ready · boot-tested in 41s';
      }
      cur++;
      if (cur > STEPS.length) { cur = 0; setTimeout(tick, 1400); return; }
      setTimeout(tick, cur === STEPS.length ? 1800 : 720);
    }
    tick();
  };

  /* ── 6 LIVE THEME TILES ── */
  var THEMES = [
    { id: 'midnight', name: 'Midnight', tag: 'dark',  bg: '#0a0b0e', s1: '#16181f', s2: '#1c1f27', bd: '#262932', tx: '#f1f2f5', t2: '#868a93' },
    { id: 'graphite', name: 'Graphite', tag: 'dark',  bg: '#121214', s1: '#17171a', s2: '#1c1c20', bd: '#2b2b30', tx: '#ebebef', t2: '#787e8c' },
    { id: 'obsidian', name: 'Obsidian', tag: 'dark',  bg: '#050507', s1: '#131316', s2: '#1a1a1f', bd: '#222227', tx: '#f6f6f8', t2: '#888890' },
    { id: 'cloud',    name: 'Cloud',    tag: 'light', bg: '#f5f7fa', s1: '#ffffff', s2: '#eef1f6', bd: '#dde2ea', tx: '#141821', t2: '#69707e' },
    { id: 'paper',    name: 'Paper',    tag: 'light', bg: '#f6f5f1', s1: '#ffffff', s2: '#efeee8', bd: '#e0ded6', tx: '#1b1b1e', t2: '#70717a' },
    { id: 'sand',     name: 'Sand',     tag: 'light', bg: '#eae8e0', s1: '#f5f3ec', s2: '#e1dfd4', bd: '#d0cdbf', tx: '#1f1f1e', t2: '#73746e' }
  ];
  global.buildThemes = function (host) {
    if (!host) return;
    host.innerHTML = THEMES.map(function (t) {
      return '<div class="theme-tile">' +
        '<div class="tt-mock" style="background:' + t.bg + ';border-color:' + t.bd + '">' +
          '<div class="tt-bar" style="background:' + t.s1 + ';border-color:' + t.bd + '">' +
            '<span class="tt-dot" style="background:#ff7a45"></span>' +
            '<span class="tt-line" style="background:' + t.t2 + ';width:34px"></span>' +
            '<span class="tt-btn" style="background:#ff7a45"></span>' +
          '</div>' +
          '<div class="tt-body">' +
            '<div class="tt-card" style="background:' + t.s2 + ';border-color:' + t.bd + '"><span class="tt-chip" style="background:#1ba0d7"></span><span class="tt-tx" style="background:' + t.tx + '"></span></div>' +
            '<div class="tt-card" style="background:' + t.s2 + ';border-color:' + t.bd + '"><span class="tt-chip" style="background:#a78bfa"></span><span class="tt-tx" style="background:' + t.t2 + '"></span></div>' +
            '<div class="tt-card" style="background:' + t.s2 + ';border-color:' + t.bd + '"><span class="tt-chip" style="background:#41c178"></span><span class="tt-tx" style="background:' + t.t2 + '"></span></div>' +
          '</div>' +
        '</div>' +
        '<div class="tt-foot"><span class="tt-name">' + t.name + '</span><span class="tt-tag">' + t.tag + '</span></div>' +
      '</div>';
    }).join('');
  };

})(window);
