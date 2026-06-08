/* ──────────────────────────────────────────────────────────────
   netplex.io - Knowledge Base content.
   Wiki-style: categories → articles. Bodies are real, concise HTML.
   Rendered by kb.html (index + article reader + search).
   ────────────────────────────────────────────────────────────── */
(function (global) {
  var I = {
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12l8.73-5.04M12 22V12"/></svg>',
    swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/></svg>'
  };

  function note(t){ return '<div class="kb-callout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg><p>'+t+'</p></div>'; }
  function warn(t){ return '<div class="kb-callout warn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg><p>'+t+'</p></div>'; }

  var CATS = [
    {
      id: 'start', icon: I.rocket, title: 'Getting started',
      desc: 'Install netplex., create your first lab, and learn the canvas in ten minutes.',
      articles: [
        { id: 'install', title: 'Install netplex. on your machine', tag: 'Setup', read: '4 min',
          body:
            '<p>netplex. runs as a single appliance you install on a Linux host (bare metal or a VM with nested virtualisation). There is no client to install - once it\u2019s running you reach the whole product from your browser.</p>'+
            '<h2>Requirements</h2>'+
            '<ul><li>A 64-bit Linux host with KVM available (<code>/dev/kvm</code> present)</li><li>4 vCPU and 8 GB RAM minimum; more for larger labs</li><li>20 GB free disk for the base install, plus space for your images</li></ul>'+
            note('Running inside a VM? Enable nested virtualisation on the hypervisor first, or QEMU nodes will refuse to boot.')+
            '<h2>Install</h2>'+
            '<div class="kb-pre"><span class="cm"># one-line installer - review it first, then run</span>\ncurl -fsSL https://get.netplex.io | sudo bash\n\n<span class="cm"># the installer prints your local URL when it finishes</span>\n<span class="cm">→ netplex. is up at https://&lt;host-ip&gt;</span></div>'+
            '<h2>First sign-in</h2>'+
            '<p>Open the printed URL, create the admin account, and you\u2019re on the canvas. Pick a theme and accent from the appearance gear - your choice follows you across the whole product.</p>'
        },
        { id: 'first-lab', title: 'Build your first lab', tag: 'Tutorial', read: '6 min',
          body:
            '<p>A <em>lab</em> is a topology of nodes and links on the canvas. Let\u2019s build a two-router OSPF lab.</p>'+
            '<h2>1 · Add nodes</h2><p>Drag two routers from the node palette onto the canvas. Each node is created from a <strong>device kind</strong> backed by an image you\u2019ve uploaded (see the Images section).</p>'+
            '<h2>2 · Draw a link</h2><p>Hover a node\u2019s edge and drag to the other node. Pick the interface on each end. Choose a link style - Curve, Arc, Ortho or Straight - from the toolbar.</p>'+
            '<h2>3 · Start &amp; console in</h2><p>Select both nodes and press <span class="kbd">Start</span>. When the status dots turn green, double-click a node to open an integrated console - no PuTTY, no SecureCRT.</p>'+
            note('Type once, send to many: select multiple consoles and enable group-send to broadcast a command to every node at once.')
        },
        { id: 'canvas', title: 'The canvas, links & packet flow', tag: 'Concepts', read: '5 min',
          body:
            '<p>The canvas is the product. It\u2019s a circuit-board surface designed for dense reading: nodes are compact landscape cards with a role-hued badge, a name and an IP, and a status dot.</p>'+
            '<h2>Link styles</h2><p>Every link can be drawn as Curve, Arc, Ortho or Straight; parallel links between the same pair fan out so you can see each one.</p>'+
            '<h2>Live flow</h2><p>Links animate to show relative activity - you see traffic <em>move</em>, rather than invented Gbps numbers. Tap any link to capture packets live with Wireshark right on the wire.</p>'+
            '<h2>Export</h2><p>Export a topology to SVG, PNG (2×) or JSON. The JSON is Visio / draw.io friendly, so diagrams stay in sync with the lab.</p>'
        }
      ]
    },
    {
      id: 'migrate', icon: I.swap, title: 'Migrating from EVE-NG',
      desc: 'Bring your EVE-NG, PNETLAB or GNS3 labs across in about thirty seconds.',
      articles: [
        { id: 'import-eve', title: 'Import an EVE-NG .unl lab', tag: 'Migration', read: '3 min',
          body:
            '<p>netplex. imports EVE-NG topologies directly. Same node types, better everything.</p>'+
            '<h2>Steps</h2><ol><li>Export your lab from EVE-NG as a <code>.unl</code> file (or grab it from <code>/opt/unetlab/labs</code>).</li><li>In netplex., choose <strong>Import → EVE-NG (.unl)</strong> and drop the file.</li><li>Map any device kinds the importer can\u2019t auto-match to your uploaded images.</li></ol>'+
            note('GNS3 (.gns3project) and containerlab YAML import the same way - pick the matching importer.')+
            '<h2>What carries over</h2><p>Nodes, links, interface assignments and positions. Configs that were saved in the EVE lab come across; anything held only in a running node\u2019s RAM does not.</p>'
        },
        { id: 'why-switch', title: 'netplex. vs EVE-NG: what changes', tag: 'Reference', read: '4 min',
          body:
            '<p>EVE-NG Community is free but was designed in 2007. netplex. Community is also free - with a React canvas, live terminal, packet capture, animated topology and an API included.</p>'+
            '<h2>Things you stop doing</h2><ul><li>SSH-ing in to run <code>fixpermissions</code></li><li>Juggling image files by hand</li><li>Opening an external terminal to reach a node</li></ul>'+
            '<h2>Things you gain on Pro</h2><ul><li>Per-node snapshots and git auto-backup on every stop</li><li>A Terraform provider and an Ansible collection</li><li>Full tc/netem QoS on every link</li></ul>'+
            warn('EVE-NG Pro is licensed to one server MAC address - a reinstall means a relicence call. netplex. licences run anywhere.')
        }
      ]
    },
    {
      id: 'images', icon: I.box, title: 'Images & the pipeline',
      desc: 'Upload vendor images and let the pipeline classify, convert and boot-test them.',
      articles: [
        { id: 'pipeline', title: 'How the image pipeline works', tag: 'Concepts', read: '5 min',
          body:
            '<p>Drop an image and walk away. The pipeline runs eight stages - Uploaded, Extracted, Detected, Converted, Permissions, Organised, Tested, Ready - and shows you every step. No CLI.</p>'+
            '<h2>Auto-classify</h2><p>Each upload is matched against 140+ device kinds across 70+ vendors and given a human name - never <code>vios-adventerprisek9-m.SPA…</code>.</p>'+
            '<h2>Disk-guarded</h2><p>An upload is refused before it can fill your disk, with a precise message: \u201cOnly 8.2 GB free \u2014 needs \u226510 GB.\u201d</p>'+
            '<h2>Boot-tested</h2><p>Every image boots headless before it\u2019s marked Ready. If it fails you get what happened, why, and what to do - plus \u201cemail me the fix.\u201d</p>'
        },
        { id: 'microvm', title: 'MicroVM nodes (Kata / Firecracker)', tag: 'Pro', read: '4 min',
          body:
            '<p>MicroVMs give you lightweight Linux nodes that boot in well under a second.</p>'+
            '<h2>What ships free</h2><p>Alpine MicroVM is a free, built-in image - perfect for hosts, clients and traffic generators in any tier that supports MicroVM nodes.</p>'+
            '<h2>Building your own</h2><p>You can build an Ubuntu MicroVM from the documented process. Vendor images remain user-provided - you supply the licensed binary, netplex. handles packaging.</p>'+
            note('ESXi nested labs are supported technically, but no ESXi images ship - it\u2019s licensed software, so document the requirement and provide your own.')
        }
      ]
    },
    {
      id: 'automation', icon: I.code, title: 'Automation & API',
      desc: 'Scoped keys, the REST + WebSocket API, Terraform and Ansible.',
      articles: [
        { id: 'api-keys', title: 'API keys & scopes', tag: 'Pro', read: '4 min',
          body:
            '<p>Everything the UI does is an API call. Pro issues scoped keys so a token only does what you grant it.</p>'+
            '<h2>Pro scopes</h2><ul><li><code>labs:read</code> · <code>labs:write</code></li><li><code>images:read</code> · <code>images:write</code></li></ul>'+
            '<h2>Enterprise adds</h2><ul><li><code>admin:read</code> · <code>admin:write</code></li><li><code>audit:read</code> and team-scoped keys</li></ul>'+
            '<div class="kb-pre"><span class="cm"># create a write-scoped key, then call the API</span>\ncurl -H "Authorization: Bearer $NETPLEX_KEY" \\\n     https://&lt;host&gt;/api/v1/labs</div>'
        },
        { id: 'terraform', title: 'Terraform provider', tag: 'Pro', read: '5 min',
          body:
            '<p>Manage labs as code. The provider wires netplex. into your existing pipeline.</p>'+
            '<div class="kb-pre"><span class="kw">resource</span> <span class="st">"netplex_lab"</span> <span class="st">"campus"</span> {\n  name   = <span class="st">"ENT-CAMPUS-WAN"</span>\n  import = <span class="st">"./campus.unl"</span>\n  scope  = [<span class="st">"labs:write"</span>, <span class="st">"images:read"</span>]\n}</div>'+
            '<p>Run <code>netplex apply</code> (or <code>terraform apply</code>) and your topology provisions itself, with git backup armed on every stop. An Ansible collection covers config push across the whole fleet.</p>'
        }
      ]
    },
    {
      id: 'classroom', icon: I.cap, title: 'Classroom & teaching',
      desc: 'Isolated student pods, rosters, and freeze / reset / grade.',
      articles: [
        { id: 'pods', title: 'Student pods & isolation', tag: 'Classroom', read: '4 min',
          body:
            '<p>One instructor seat covers a class. Each student works in an isolated pod - one live lab per pod - sealed off from the others.</p>'+
            '<h2>Run the room</h2><ul><li>Roster management to enrol the class</li><li>Freeze the whole room, reset to a clean topology, or grade from a snapshot</li><li>$449/year ÷ 50 students = $9/student/year</li></ul>'+
            note('Students get individual Community access free with a verified school email - Classroom is for the instructor-run, graded environment.')
        }
      ]
    },
    {
      id: 'licence', icon: I.shield, title: 'Licensing & reliability',
      desc: 'Fingerprinting, the grace window, and why a blip never kills a lab.',
      articles: [
        { id: 'fingerprint', title: 'Enterprise licence & hardware migration', tag: 'Enterprise', read: '3 min',
          body:
            '<p>Enterprise is available as either a subscription or a perpetual licence, hardware-locked to the appliance via MAC + TPM fingerprinting - so there is no renewal risk if you choose perpetual.</p>'+
            '<h2>Moving hardware</h2><p>There\u2019s a 30-day grace period on migration. The CLI command <code>netplex licence rekey</code> opens a support ticket automatically so a move never strands you.</p>'+
            warn('A licensing blip never hard-blocks a running lab. Reliability beats DRM zeal - always.')
        }
      ]
    }
  ];

  global.KB = { CATS: CATS };
})(window);
