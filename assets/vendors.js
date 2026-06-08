/* ──────────────────────────────────────────────────────────────
   netplex.io - vendor ecosystem marquee.
   Renders colourful local SVG logos in a two-row continuously-
   scrolling marquee (top scrolls left, bottom scrolls right).
   Falls back to a brand-hued monogram if a logo stalls or 404s.
   ────────────────────────────────────────────────────────────── */
(function (global) {

  // nm = display label · slug = local icons/{slug}/logo.svg · mg = monogram fallback
  var VENDORS = [
    // ── Network & Security ──
    { nm: 'Cisco',        slug: 'cisco',            mg: 'CI' },
    { nm: 'Juniper',      slug: 'junipernetworks',  mg: 'JN' },
    { nm: 'Fortinet',     slug: 'fortinet',         mg: 'FT' },
    { nm: 'Palo Alto',    slug: 'paloaltonetworks', mg: 'PA' },
    { nm: 'Arista',       slug: 'arista',           mg: 'AR' },
    { nm: 'Nokia',        slug: 'nokia',            mg: 'NK' },
    { nm: 'Huawei',       slug: 'huawei',           mg: 'HW' },
    { nm: 'MikroTik',     slug: 'mikrotik',         mg: 'MT' },
    { nm: 'Aruba',        slug: 'aruba',            mg: 'AU' },
    { nm: 'Check Point',  slug: 'checkpoint',       mg: 'CP' },
    { nm: 'F5',           slug: 'f5',               mg: 'F5' },
    { nm: 'VyOS',         slug: 'vyos',             mg: 'VY' },
    { nm: 'OPNsense',     slug: 'opnsense',         mg: 'OP' },
    // ── Linux Distributions ──
    { nm: 'Ubuntu',       slug: 'ubuntu',           mg: 'UB' },
    { nm: 'Debian',       slug: 'debian',           mg: 'DB' },
    { nm: 'Fedora',       slug: 'fedora',           mg: 'FD' },
    { nm: 'Red Hat',      slug: 'redhat',           mg: 'RH' },
    { nm: 'Alpine Linux', slug: 'alpinelinux',      mg: 'AL' },
    { nm: 'Arch Linux',   slug: 'archlinux',        mg: 'AC' },
    { nm: 'CentOS',       slug: 'centos',           mg: 'CE' },
    { nm: 'Kali Linux',   slug: 'kalilinux',        mg: 'KL' },
    { nm: 'Rocky Linux',  slug: 'rockylinux',       mg: 'RL' },
    { nm: 'AlmaLinux',    slug: 'almalinux',        mg: 'AM' },
    { nm: 'NixOS',        slug: 'nixos',            mg: 'NX' },
    { nm: 'Manjaro',      slug: 'manjaro',          mg: 'MJ' },
    { nm: 'openSUSE',     slug: 'opensuse',         mg: 'OS' },
    { nm: 'Linux Mint',   slug: 'linuxmint',        mg: 'LM' },
    { nm: 'Gentoo',       slug: 'gentoo',           mg: 'GT' },
    // ── DevOps & Automation ──
    { nm: 'Docker',       slug: 'docker',           mg: 'DO' },
    { nm: 'Kubernetes',   slug: 'kubernetes',       mg: 'K8' },
    { nm: 'Ansible',      slug: 'ansible',          mg: 'AN' },
    { nm: 'Terraform',    slug: 'terraform',        mg: 'TF' },
    { nm: 'Helm',         slug: 'helm',             mg: 'HM' },
    { nm: 'Prometheus',   slug: 'prometheus',       mg: 'PR' },
    { nm: 'Grafana',      slug: 'grafana',          mg: 'GR' },
    { nm: 'Git',          slug: 'git',              mg: 'GT' },
    { nm: 'Nginx',        slug: 'nginx',            mg: 'NX' },
    { nm: 'Proxmox',      slug: 'proxmox',          mg: 'PX' },
    // ── Languages & Databases ──
    { nm: 'Python',       slug: 'python',           mg: 'PY' },
    { nm: 'Ruby',         slug: 'ruby',             mg: 'RB' },
    { nm: 'Go',           slug: 'go',               mg: 'GO' },
    { nm: 'JavaScript',   slug: 'javascript',       mg: 'JS' },
    { nm: 'TypeScript',   slug: 'typescript',       mg: 'TS' },
    { nm: 'PostgreSQL',   slug: 'postgresql',       mg: 'PG' },
    { nm: 'MySQL',        slug: 'mysql',            mg: 'MY' },
    { nm: 'Redis',        slug: 'redis',            mg: 'RD' },
  ];

  function _monogram(v) {
    return '<span class="vmark">' + v.mg + '</span>';
  }

  function _tile(v, idx, ariaHidden) {
    return '<div class="vchip" title="' + v.nm + '"' +
      (ariaHidden ? ' aria-hidden="true"' : '') + '>' +
      '<span class="vlogo" data-i="' + idx + '">' +
        '<img src="icons/' + v.slug + '/logo.svg" alt="' + v.nm + '">' +
      '</span>' +
    '</div>';
  }

  function _wireFallbacks(host, list) {
    host.querySelectorAll('.vlogo[data-i]').forEach(function (slot) {
      var v   = list[+slot.dataset.i];
      var img = slot.querySelector('img');
      if (!img || !v) return;
      var done = false;
      function fail() {
        if (done) return;
        done = true;
        img.style.display = 'none';
        slot.insertAdjacentHTML('beforeend', _monogram(v));
      }
      function ok() { done = true; }
      img.addEventListener('error', fail);
      img.addEventListener('load',  ok);
      // SVGs without explicit width/height always report naturalWidth=0;
      // treat img.complete as successful load (error handler covers failures).
      if (img.complete) ok();
      setTimeout(function () { if (!done) fail(); }, 6000);
    });
  }

  global.buildVendors = function (host, cap) {
    if (!host) return;
    var list = cap ? VENDORS.slice(0, cap) : VENDORS;

    // Split by index parity so each row has a distinct mix of vendors
    var top = list.filter(function (_, i) { return i % 2 === 0; });
    var bot = list.filter(function (_, i) { return i % 2 !== 0; });

    // Render each set twice for seamless CSS loop (track = 2× wide, -50% loops back)
    function buildRow(set) {
      var first  = set.map(function (v) { return _tile(v, list.indexOf(v), false); }).join('');
      var second = set.map(function (v) { return _tile(v, list.indexOf(v), true);  }).join('');
      return first + second;
    }

    host.innerHTML =
      '<div class="vmq" aria-label="Supported vendors and ecosystem">' +
        '<div class="vmq-row vmq-row--left"><div class="vmq-track">'  + buildRow(top) + '</div></div>' +
        '<div class="vmq-row vmq-row--right"><div class="vmq-track">' + buildRow(bot) + '</div></div>' +
      '</div>';

    _wireFallbacks(host, list);
  };

  global.NETPLEX_VENDOR_COUNT = VENDORS.length;

})(window);
