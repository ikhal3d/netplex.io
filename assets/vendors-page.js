// Static vendor wall for vendors.html
// Splits VENDORS into two groups and renders icon+name tiles.

var NETWORK_VENDORS = [
  { name: 'Cisco',              slug: 'cisco'            },
  { name: 'Juniper',            slug: 'junipernetworks'  },
  { name: 'Fortinet',           slug: 'fortinet'         },
  { name: 'Palo Alto Networks', slug: 'paloaltonetworks' },
  { name: 'Arista',             slug: 'arista'           },
  { name: 'Nokia',              slug: 'nokia'            },
  { name: 'Huawei',             slug: 'huawei'           },
  { name: 'MikroTik',           slug: 'mikrotik'         },
  { name: 'Aruba',              slug: 'aruba'            },
  { name: 'Check Point',        slug: 'checkpoint'       },
  { name: 'F5',                 slug: 'f5'               },
  { name: 'VyOS',               slug: 'vyos'             },
  { name: 'OPNsense',           slug: 'opnsense'         },
];

var LINUX_VENDORS = [
  { name: 'Ubuntu',       slug: 'ubuntu'      },
  { name: 'Debian',       slug: 'debian'      },
  { name: 'Fedora',       slug: 'fedora'      },
  { name: 'Red Hat',      slug: 'redhat'      },
  { name: 'Alpine Linux', slug: 'alpinelinux' },
  { name: 'Arch Linux',   slug: 'archlinux'   },
  { name: 'CentOS',       slug: 'centos'      },
  { name: 'Kali Linux',   slug: 'kalilinux'   },
  { name: 'Rocky Linux',  slug: 'rockylinux'  },
  { name: 'AlmaLinux',    slug: 'almalinux'   },
  { name: 'NixOS',        slug: 'nixos'       },
  { name: 'Manjaro',      slug: 'manjaro'     },
  { name: 'openSUSE',     slug: 'opensuse'    },
  { name: 'Linux Mint',   slug: 'linuxmint'   },
  { name: 'Gentoo',       slug: 'gentoo'      },
];

function _vInitialsStatic(name) {
  var words = name.trim().split(/\s+/);
  return words.length >= 2
    ? (words[0][0] + words[1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();
}

function _buildWall(host, list) {
  var html = '';
  list.forEach(function (v) {
    html +=
      '<div class="vendor" title="' + v.name + '">' +
        '<span class="vlogo" data-slug="' + v.slug + '">' +
          '<img src="icons/' + v.slug + '/logo.svg" alt="' + v.name + '" loading="lazy">' +
        '</span>' +
        '<span class="vname">' + v.name + '</span>' +
      '</div>';
  });
  host.innerHTML = html;

  // Fallback wiring
  host.querySelectorAll('.vlogo').forEach(function (cell) {
    var img  = cell.querySelector('img');
    var slug = cell.dataset.slug;
    var allV = NETWORK_VENDORS.concat(LINUX_VENDORS);
    var vendor = allV.find(function (v) { return v.slug === slug; });
    var inits  = vendor ? _vInitialsStatic(vendor.name) : '??';
    var done   = false;

    function fallback() {
      if (done) return;
      done = true;
      img.style.display = 'none';
      var mark = document.createElement('span');
      mark.className   = 'vmark';
      mark.textContent = inits;
      cell.appendChild(mark);
    }

    var timer = setTimeout(fallback, 3000);
    img.addEventListener('load',  function () { clearTimeout(timer); },           { once: true });
    img.addEventListener('error', function () { clearTimeout(timer); fallback(); }, { once: true });
  });
}

_buildWall(document.getElementById('vendorWallNetwork'), NETWORK_VENDORS);
_buildWall(document.getElementById('vendorWallLinux'),   LINUX_VENDORS);
