/* ──────────────────────────────────────────────────────────────
   netplex.io - supported-vendor / ecosystem wall.
   Renders real monochrome brand logos (Simple Icons CDN) tinted to a
   neutral that reads on every theme; brightens on hover. If a logo
   can't load it falls back to a clean brand-hued monogram, so the
   grid is never blank. netplex. ships 140+ device kinds / 70+ vendors.
   ────────────────────────────────────────────────────────────── */
(function (global) {
  var BASE = 'https://cdn.simpleicons.org/';

  // nm = label · slug = Simple Icons slug · mg = monogram fallback · c = brand hue
  var VENDORS = [
    { nm: 'Cisco',       slug: 'cisco',            mg: 'C',   c: '#1ba0d7' },
    { nm: 'Juniper',     slug: 'juniper',          mg: 'J',   c: '#84b135', noLogo: true },
    { nm: 'Fortinet',    slug: 'fortinet',         mg: 'F',   c: '#ee2e24' },
    { nm: 'Palo Alto',   slug: 'paloaltonetworks', mg: 'PA',  c: '#f04e23' },
    { nm: 'Arista',      slug: 'arista',           mg: 'A',   c: '#f37029', noLogo: true },
    { nm: 'Huawei',      slug: 'huawei',           mg: 'H',   c: '#e40521' },
    { nm: 'Nokia',       slug: 'nokia',            mg: 'N',   c: '#1f5fae' },
    { nm: 'MikroTik',    slug: 'mikrotik',         mg: 'MT',  c: '#5d7a89' },
    { nm: 'Ubiquiti',    slug: 'ubiquiti',         mg: 'UI',  c: '#2a72d4' },
    { nm: 'NVIDIA',      slug: 'nvidia',           mg: 'nv',  c: '#76b900' },
    { nm: 'VMware',      slug: 'vmware',           mg: 'vm',  c: '#607078' },
    { nm: 'Dell',        slug: 'dell',             mg: 'D',   c: '#0085c3' },
    { nm: 'Linux',       slug: 'linux',            mg: 'L',   c: '#f0a30a' },
    { nm: 'Docker',      slug: 'docker',           mg: 'd',   c: '#2496ed' },
    { nm: 'Kubernetes',  slug: 'kubernetes',       mg: 'k8s', c: '#326ce5' },
    { nm: 'Ansible',     slug: 'ansible',          mg: 'A',   c: '#1a1918' },
    { nm: 'Terraform',   slug: 'terraform',        mg: 'tf',  c: '#7b42bc' },
    { nm: 'Proxmox',     slug: 'proxmox',          mg: 'PV',  c: '#e57000' },
    { nm: 'Ubuntu',      slug: 'ubuntu',           mg: 'U',   c: '#e95420' },
    { nm: 'Red Hat',     slug: 'redhat',           mg: 'rh',  c: '#ee0000' },
    { nm: 'pfSense',     slug: 'pfsense',          mg: 'pf',  c: '#2a3b8f' },
    { nm: 'OPNsense',    slug: 'opnsense',         mg: 'O',   c: '#d94f00' },
    { nm: 'WireGuard',   slug: 'wireguard',        mg: 'wg',  c: '#88171a' },
    { nm: 'VyOS',        slug: 'vyos',             mg: 'vy',  c: '#38a3d1', noLogo: true }
  ];

  function monogram(v) {
    return '<span class="vlogo"><span class="vmark">' + v.mg + '</span></span>';
  }

  global.buildVendors = function (host, cap) {
    if (!host) return;
    var list = cap ? VENDORS.slice(0, cap) : VENDORS;
    host.classList.add('vendor-wall');
    host.innerHTML = list.map(function (v, i) {
      if (v.noLogo) {
        return '<div class="vendor" title="' + v.nm + '">' + monogram(v) +
          '<span class="vname">' + v.nm + '</span></div>';
      }
      return '<div class="vendor" title="' + v.nm + '">' +
        '<span class="vlogo" data-i="' + i + '">' +
          '<img src="' + BASE + v.slug + '" alt="' + v.nm + '" />' +
        '</span>' +
        '<span class="vname">' + v.nm + '</span>' +
      '</div>';
    }).join('');
    // graceful fallback to a monogram if a logo 404s or stalls
    host.querySelectorAll('.vlogo').forEach(function (slot) {
      if (slot.dataset.i === undefined) return;
      var v = list[+slot.dataset.i];
      var img = slot.querySelector('img');
      if (!img) return;
      var done = false;
      function fail() { if (done) return; done = true; slot.outerHTML = monogram(v); }
      function ok() { done = true; }
      img.addEventListener('error', fail);
      img.addEventListener('load', ok);
      if (img.complete && img.naturalWidth > 0) ok();
      setTimeout(function () { if (!done && !(img.complete && img.naturalWidth > 0)) fail(); }, 8000);
    });
  };
  global.NETPLEX_VENDOR_COUNT = VENDORS.length;
})(window);
