/* ──────────────────────────────────────────────────────────────
   netplex.io - vendor ecosystem marquee.
   Renders colourful local SVG logos in a two-row continuously-
   scrolling marquee (top scrolls left, bottom scrolls right).
   Falls back to a brand-hued monogram if a logo stalls or 404s.
   ────────────────────────────────────────────────────────────── */
(function (global) {

  // nm = display label · slug = local icons/{slug}/logo.svg · mg = monogram fallback
  var VENDORS = [
    { nm: 'Cisco',        slug: 'cisco',            mg: 'CI' },
    { nm: 'Ubuntu',       slug: 'ubuntu',           mg: 'UB' },
    { nm: 'Fortinet',     slug: 'fortinet',         mg: 'FT' },
    { nm: 'Debian',       slug: 'debian',           mg: 'DB' },
    { nm: 'Palo Alto',    slug: 'paloaltonetworks', mg: 'PA' },
    { nm: 'Fedora',       slug: 'fedora',           mg: 'FD' },
    { nm: 'Arista',       slug: 'arista',           mg: 'AR' },
    { nm: 'Red Hat',      slug: 'redhat',           mg: 'RH' },
    { nm: 'Nokia',        slug: 'nokia',            mg: 'NK' },
    { nm: 'Alpine Linux', slug: 'alpinelinux',      mg: 'AL' },
    { nm: 'Juniper',      slug: 'junipernetworks',  mg: 'JN' },
    { nm: 'Arch Linux',   slug: 'archlinux',        mg: 'AC' },
    { nm: 'Huawei',       slug: 'huawei',           mg: 'HW' },
    { nm: 'Kali Linux',   slug: 'kalilinux',        mg: 'KL' },
    { nm: 'MikroTik',     slug: 'mikrotik',         mg: 'MT' },
    { nm: 'Rocky Linux',  slug: 'rockylinux',       mg: 'RL' },
    { nm: 'Aruba',        slug: 'aruba',            mg: 'AU' },
    { nm: 'AlmaLinux',    slug: 'almalinux',        mg: 'AM' },
    { nm: 'Check Point',  slug: 'checkpoint',       mg: 'CP' },
    { nm: 'NixOS',        slug: 'nixos',            mg: 'NX' },
    { nm: 'F5',           slug: 'f5',               mg: 'F5' },
    { nm: 'Manjaro',      slug: 'manjaro',          mg: 'MJ' },
    { nm: 'VyOS',         slug: 'vyos',             mg: 'VY' },
    { nm: 'openSUSE',     slug: 'opensuse',         mg: 'OS' },
    { nm: 'OPNsense',     slug: 'opnsense',         mg: 'OP' },
    { nm: 'CentOS',       slug: 'centos',           mg: 'CE' },
    { nm: 'Linux Mint',   slug: 'linuxmint',        mg: 'LM' },
    { nm: 'Gentoo',       slug: 'gentoo',           mg: 'GT' },
  ];

  function _monogram(v) {
    return '<span class="vmark">' + v.mg + '</span>';
  }

  function _tile(v, idx, ariaHidden) {
    return '<div class="vchip" title="' + v.nm + '"' +
      (ariaHidden ? ' aria-hidden="true"' : '') + '>' +
      '<span class="vlogo" data-i="' + idx + '">' +
        '<img src="icons/' + v.slug + '/logo.svg" alt="' + v.nm + '" loading="lazy">' +
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
      if (img.complete && img.naturalWidth > 0) ok();
      setTimeout(function () { if (!done && !(img.complete && img.naturalWidth > 0)) fail(); }, 3000);
    });
  }

  global.buildVendors = function (host, cap) {
    if (!host) return;
    var list = cap ? VENDORS.slice(0, cap) : VENDORS;

    // Split by index parity so each row has a distinct mix of vendors
    var top = list.filter(function (_, i) { return i % 2 === 0; });
    var bot = list.filter(function (_, i) { return i % 2 !== 0; });

    // Render each set twice for seamless CSS loop (track is 2× wide, animation drives -50% → 0)
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
