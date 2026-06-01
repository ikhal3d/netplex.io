/* ──────────────────────────────────────────────────────────────
   Netplex.io — reusable mini topology snippet
   Matches the real product: compact landscape node cards (role-hued
   icon badge + name/IP + status dot, selected node accent-ringed),
   dashed curved links with flowing packets and small interface
   labels. No throughput numbers — link colour = relative activity.
   ────────────────────────────────────────────────────────────── */
(function (global) {
  var GLYPH = {
    router: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8l4 4-4 4M16 12l-4 4-4-4"/></svg>',
    switchL3: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="8" width="19" height="8" rx="1.5"/><path d="M7 5.5l2.5-2.5 2.5 2.5M9.5 3v3M17 18.5l-2.5 2.5-2.5-2.5M14.5 21v-3"/></svg>',
    switchL2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="8.5" width="19" height="7" rx="1.5"/><path d="M6.5 12h.01M9.5 12h.01M12.5 12h.01"/></svg>',
    firewall: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4" width="17" height="16" rx="1.5"/><path d="M3.5 9.3h17M3.5 14.6h17M9 4v5.3M15 4v5.3M6.2 9.3v5.3M12 9.3v5.3M17.8 9.3v5.3M9 14.6V20M15 14.6V20"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="7.5" rx="1.5"/><rect x="3.5" y="13" width="17" height="7.5" rx="1.5"/><path d="M7 7.2h.01M7 16.7h.01"/></svg>',
    host: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="12.5" rx="1.5"/><path d="M8.5 20.5h7M12 16.5v4"/></svg>'
  };

  // node defs within a 540×370 canvas. landscape cards 108×36.
  var NODES = [
    { id: 'isp1',  x: 6,   y: 56,  role: 'router',   hue: '#84b135', nm: 'ISP-1',     ip: '203.0.113.1' },
    { id: 'isp2',  x: 6,   y: 278, role: 'router',   hue: '#84b135', nm: 'ISP-2',     ip: '198.51.100.1' },
    { id: 'fwa',   x: 156, y: 30,  role: 'firewall', hue: '#ee5a55', nm: 'FW-EDGE-A',  ip: '10.0.1.1' },
    { id: 'fwb',   x: 156, y: 300, role: 'firewall', hue: '#ee5a55', nm: 'FW-EDGE-B',  ip: '10.0.2.1' },
    { id: 'core',  x: 216, y: 167, role: 'switchL3', hue: '#1ba0d7', nm: 'CORE-1',     ip: '10.10.0.1', sel: true },
    { id: 'dist1', x: 410, y: 44,  role: 'switchL2', hue: '#1ba0d7', nm: 'DIST-1',     ip: '10.20.1.1' },
    { id: 'dist2', x: 410, y: 300, role: 'switchL2', hue: '#1ba0d7', nm: 'DIST-2',     ip: '10.20.2.1' },
    { id: 'web',   x: 410, y: 167, role: 'server',   hue: '#a78bfa', nm: 'WEB-SRV',    ip: '10.40.0.6' }
  ];
  var NW = 108, NH = 38;
  var byId = {};
  NODES.forEach(function (n) { byId[n.id] = n; });
  function cx(n) { return n.x + NW / 2; }
  function cy(n) { return n.y + NH / 2; }

  // links: [a, b, kind]  kind: data (blue flow) · mgmt (orange dashed flow) · idle (grey static)
  var LINKS = [
    ['isp1', 'fwa',   'mgmt'],
    ['isp2', 'fwb',   'mgmt'],
    ['fwa',  'core',  'data'],
    ['fwb',  'core',  'data'],
    ['core', 'dist1', 'data'],
    ['core', 'dist2', 'data'],
    ['core', 'web',   'idle'],
    ['dist1','web',   'idle']
  ];
  var KIND = {
    data: { col: 'var(--info)',   flow: true,  dash: '0.4 6' },
    mgmt: { col: 'var(--accent)', flow: true,  dash: '4 5' },
    idle: { col: 'var(--traffic-idle)', flow: false, dash: null }
  };

  // a couple of interface labels (realistic, no rates)
  var IFACES = [
    { lk: ['fwa', 'core'],  t: 'Gi0/1' },
    { lk: ['core', 'dist1'], t: 'Te1/1' },
    { lk: ['core', 'web'],  t: 'Gi0/3' }
  ];

  function bezier(a, b) {
    var x1 = cx(a), y1 = cy(a), x2 = cx(b), y2 = cy(b);
    var mx = (x1 + x2) / 2;
    return 'M' + x1 + ' ' + y1 + ' C ' + mx + ' ' + y1 + ', ' + mx + ' ' + y2 + ', ' + x2 + ' ' + y2;
  }

  global.buildTopology = function (host) {
    if (!host) return;
    host.classList.add('topo');
    host.style.position = 'relative';

    var paths = '';
    LINKS.forEach(function (lk, i) {
      var a = byId[lk[0]], b = byId[lk[1]], k = KIND[lk[2]];
      var d = bezier(a, b);
      paths += '<path d="' + d + '" stroke="var(--border-bright)" stroke-width="1.3" fill="none" opacity="0.7"/>';
      if (k.flow) {
        paths += '<path d="' + d + '" stroke="' + k.col + '" stroke-width="1.5" fill="none" class="flow" ' +
          'style="stroke-dasharray:' + k.dash + ';animation-delay:' + (i * 0.12) + 's;opacity:.9"/>';
      } else {
        paths += '<path d="' + d + '" stroke="' + k.col + '" stroke-width="1.2" fill="none" opacity="0.5"/>';
      }
    });
    var svg = '<svg viewBox="0 0 540 370" preserveAspectRatio="none">' + paths + '</svg>';

    var ifaceHtml = '';
    IFACES.forEach(function (f) {
      var a = byId[f.lk[0]], b = byId[f.lk[1]];
      var px = cx(a) * 0.74 + cx(b) * 0.26;
      var py = cy(a) * 0.74 + cy(b) * 0.26;
      ifaceHtml += '<div class="iface" style="left:' + (px - 10) + 'px;top:' + (py - 12) + 'px">' + f.t + '</div>';
    });

    var nodesHtml = '';
    NODES.forEach(function (n, i) {
      var bg = 'color-mix(in srgb, ' + n.hue + ' 15%, var(--surface-3))';
      var bd = 'color-mix(in srgb, ' + n.hue + ' 38%, transparent)';
      nodesHtml += '<div class="node' + (n.sel ? ' sel' : '') + '" style="left:' + n.x + 'px;top:' + n.y + 'px">' +
        '<span class="badge" style="background:' + bg + ';border:1px solid ' + bd + ';color:' + n.hue + '">' + GLYPH[n.role] + '</span>' +
        '<span class="meta"><span class="nm">' + n.nm + '</span><span class="ip mono">' + n.ip + '</span></span>' +
        '<span class="st"></span>' +
        '</div>';
    });

    var hud = '<div class="hud-chip"><span class="d"></span>ENT-CAMPUS-WAN · running</div>';
    var legend = '<div class="legend">' +
      '<span><i style="background:var(--info)"></i>data</span>' +
      '<span><i style="background:var(--accent)"></i>mgmt</span>' +
      '<span><i style="background:var(--traffic-idle)"></i>idle</span>' +
      '</div>';
    var minimap = '<div class="minimap"></div>';

    host.innerHTML = svg + nodesHtml + ifaceHtml + hud + legend + minimap;
  };
})(window);
