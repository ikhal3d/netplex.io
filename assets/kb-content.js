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
    cap:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    lock:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    globe:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    award:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
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
        },
        { id: 'import-gns3', title: 'Import a GNS3 project', tag: 'Migration', read: '3 min',
          body:
            '<p>GNS3 stores a lab as a <code>.gns3</code> project folder (topology JSON plus per-node working directories). netplex. reads it directly - choose <strong>Import → GNS3 project</strong> and drop the folder or its zipped export.</p>'+
            '<h2>What maps across</h2><ul><li>QEMU nodes map straight to netplex. QEMU/KVM kinds</li><li>Docker nodes map to container nodes</li><li>Dynamips IOS routers map to the matching IOS kind once you supply the image</li><li>Links, port assignments and canvas positions are preserved</li></ul>'+
            note('GNS3 appliance templates (.gns3a) describe where to fetch an image, not the image itself. Upload the binary once and the pipeline classifies it - no per-project re-import.')+
            '<h2>Things GNS3 did that you can stop doing</h2><ul><li>Running a separate GNS3 VM - netplex. is the appliance</li><li>Installing a local client - everything is in the browser</li><li>Hand-wiring a cloud node for internet - use a built-in NAT/cloud node</li></ul>'
        },
        { id: 'migration-checklist', title: 'Pre-migration checklist', tag: 'Migration', read: '2 min',
          body:
            '<p>A two-minute pass before you move a lab across saves a re-import.</p>'+
            '<h2>Before you export</h2><ul><li>Save running configs to startup (<code>write memory</code>) - RAM-only state does not travel</li><li>Note which device kinds each node uses so you can map them on the other side</li><li>Have the licensed vendor binaries ready to upload - labs reference images, they don’t embed them</li></ul>'+
            '<h2>After you import</h2><ul><li>Resolve any unmatched kinds against your uploaded images</li><li>Boot the lab once and confirm every node reaches Ready</li><li>Take a snapshot so you have a clean baseline to reset to</li></ul>'+
            warn('Images are never bundled into an exported lab - on EVE-NG, GNS3 or netplex. You always supply your own licensed binaries.')
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
        },
        { id: 'qemu-fixups', title: 'Automatic image fix-ups (no more fixpermissions)', tag: 'Concepts', read: '4 min',
          body:
            '<p>On EVE-NG you SSH in and run <code>/opt/unetlab/wrappers/unl_wrapper -a fixpermissions</code> after every image change. netplex. does the equivalent automatically, on upload, as pipeline stages.</p>'+
            '<h2>What the pipeline fixes for you</h2><ul><li><strong>Convert</strong> - raw, <code>.vmdk</code> or <code>.ova</code> disks are converted to <code>qcow2</code> where needed</li><li><strong>Permissions</strong> - ownership and mode are set so the node can boot; you never touch the filesystem</li><li><strong>Organised</strong> - the image lands in the right kind directory with a human name</li></ul>'+
            note('Because fix-ups run on upload rather than at boot, the first start of a node is not slowed down by a permissions sweep.')+
            '<h2>If a fix-up can\u2019t complete</h2><p>The pipeline stops at the failing stage and tells you exactly what happened and what to do - rather than booting a broken node and leaving you to guess.</p>'
        },
        { id: 'docker-nodes', title: 'Custom Docker images as nodes', tag: 'Pro', read: '3 min',
          body:
            '<p>Any Docker image can be a node - tools, servers, clients or your own app - on tiers that allow custom Docker.</p>'+
            '<h2>Bring an image</h2><ul><li>Pull or push the image to the host\u2019s container store</li><li>Register it as a node kind with the interfaces it should expose</li><li>Drop it on the canvas and wire it like any other node</li></ul>'+
            '<div class="kb-pre"><span class="cm"># example: a throwaway tools box on the lab network</span>\nnetplex node add --kind docker --image nicolaka/netshoot --name tools-1</div>'+
            warn('Containerlab auto-pulls images from public registries; netplex. keeps images local and explicit so an offline lab stays reproducible.')
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
        },
        { id: 'rest-quickstart', title: 'REST + WebSocket API quickstart', tag: 'Pro', read: '4 min',
          body:
            '<p>The same API drives the UI, so anything you can click you can script. REST for actions, WebSocket for live events (console streams, link-flow, node state).</p>'+
            '<div class="kb-pre"><span class="cm"># list labs</span>\ncurl -H "Authorization: Bearer $NETPLEX_KEY" https://&lt;host&gt;/api/v1/labs\n\n<span class="cm"># start a node</span>\ncurl -X POST -H "Authorization: Bearer $NETPLEX_KEY" \\\n     https://&lt;host&gt;/api/v1/labs/$LAB/nodes/$NODE/start</div>'+
            '<h2>Live events over WebSocket</h2><p>Subscribe to <code>/api/v1/events</code> to receive node state changes and per-link traffic as they happen - the same feed the canvas animates from.</p>'+
            note('EVE-NG Pro has a REST API; GNS3 has one too. netplex. adds scoped keys and a live WebSocket event stream so tooling reacts to the lab instead of polling it.')
        },
        { id: 'ansible', title: 'Ansible collection', tag: 'Pro', read: '4 min',
          body:
            '<p>The Ansible collection manages both the lab fabric (nodes, links, lifecycle) and pushes device config across the fleet in one play.</p>'+
            '<div class="kb-pre"><span class="cm"># inventory built from the live lab, then config push</span>\n- hosts: core\n  tasks:\n    - name: configure OSPF\n      cisco.ios.ios_config:\n        lines:\n          - router ospf 1\n          - network 10.0.0.0 0.255.255.255 area 0</div>'+
            '<p>Pair it with a dynamic inventory sourced from the API so the playbook always targets the nodes that actually exist in the lab.</p>'
        },
        { id: 'cicd', title: 'Lab-as-code in CI/CD', tag: 'Pro', read: '4 min',
          body:
            '<p>Treat a topology like any other artefact: provision it fresh on every commit, run checks against it, tear it down.</p>'+
            '<h2>A typical pipeline</h2><ol><li>Terraform/CLI provisions the lab from the repo</li><li>Ansible pushes the candidate config</li><li>Tests assert reachability, routing tables and policy</li><li>The lab is snapshotted on pass, torn down on finish</li></ol>'+
            note('Because labs are code wired to git, a red pipeline catches breakage before it reaches production - the workflow EVE-NG and GNS3 never shipped out of the box.')
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
        },
        { id: 'exams', title: 'Create exams, assignments & labs', tag: 'Classroom', read: '3 min',
          body:
            '<p>Build an assessment once and push it to every student in a click. Each student gets their own isolated copy.</p>'+
            '<h2>Set one up</h2><ol><li>Pick a template topology (or start from a lab you’ve built)</li><li>Set a time limit and a due window</li><li>Choose which tools students may use - terminal, capture, internet</li><li>Publish to the roster; every pod is provisioned from the same baseline</li></ol>'+
            note('Because every pod starts from the same snapshot, grading is apples-to-apples - no “it worked on my machine.”')
        },
        { id: 'monitor-live', title: 'Monitor the room live', tag: 'Classroom', read: '2 min',
          body:
            '<p>See the whole class at a glance and drop into any workstation without interrupting the student.</p>'+
            '<h2>During a session</h2><ul><li>A live grid shows each student’s state - submitted, in progress, needs help</li><li>Open any pod silently to observe or assist</li><li>Freeze the room to get everyone’s attention, then resume</li><li>Reset a single pod or the whole class to a clean baseline</li></ul>'+
            '<p>When time’s up, grade from each pod’s final snapshot so late changes can’t rewrite history.</p>'
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
        },
        { id: 'tiers', title: 'Plans, node limits & what unlocks where', tag: 'Reference', read: '3 min',
          body:
            '<p>The product is great at every tier - there is no artificial cripple-ware. Higher tiers add depth, not the basics.</p>'+
            '<h2>At a glance</h2><ul><li><strong>Associate</strong> - free forever: canvas, live terminal, packet capture, API, 1,000 nodes per lab, one-click EVE/GNS3 import</li><li><strong>Professional</strong> ($19.99/mo) - snapshots, fault injection, any Docker image, presentation mode, colour profiles & syntax highlighting</li><li><strong>Architect</strong> ($49.99/mo) - the complete automation toolbox: API, Terraform, Ansible, CI, QoS, metrics dashboard, on a single seat</li><li><strong>Enterprise / Class</strong> - teams, RBAC, audit; Class is the instructor-run graded environment</li></ul>'+
            note('Associate’s node ceiling is 1,000 per lab - the practical limit is your host’s RAM and CPU, not the licence.')
        },
        { id: 'backups', title: 'Snapshots, git backup & restore', tag: 'Reliability', read: '3 min',
          body:
            '<p>Two independent safety nets: point-in-time snapshots and git auto-backup of lab-as-code.</p>'+
            '<h2>Snapshots</h2><p>Capture a node or a whole lab at a moment in time and roll back to it instantly - ideal before a risky change or for grading baselines.</p>'+
            '<h2>Git auto-backup</h2><p>On every lab stop, the topology and configs are committed to your own git. Restore is a checkout; history is a diff. Nothing lives only inside the appliance.</p>'+
            warn('Keep your git remote off the appliance host - a backup that shares fate with the thing it backs up isn’t a backup.')
        }
      ]
    },
    {
      id: 'routing', icon: I.layers, title: 'Routing protocol labs',
      desc: 'OSPF, BGP, MPLS and route redistribution \u2014 step-by-step topology guides.',
      articles: [
        { id: 'ospf-multiarea', title: 'OSPF multi-area lab (OSPFv2 + OSPFv3)', tag: 'Lab', read: '7 min',
          body:
            '<p>A multi-area OSPF topology is the most fundamental enterprise routing lab. This guide builds a five-router topology spanning Areas 0, 1 and 2, then adds OSPFv3 on the same links for dual-stack.</p>'+
            '<h2>Topology</h2><p>R1 and R2 sit in Area 0 (backbone). R3 connects Area 0 to Area 1 (ABR). R4 and R5 are internal to Area 1 and Area 2 respectively. All links use Cisco vIOS routers.</p>'+
            '<h2>Resources</h2><ul><li>5 \u00d7 Cisco vIOS (256 MB RAM each)</li><li>Right-click node \u2192 Properties to set RAM</li></ul>'+
            '<h2>Configure the ABR (R3)</h2>'+
            '<div class="kb-pre"><span class="cm">! On R3 \u2014 Area 1 to Area 0 ABR</span>\nrouter ospf 1\n area 0 range 10.0.0.0 255.255.0.0\n area 1 range 10.1.0.0 255.255.0.0\n area 1 stub\n network 10.0.12.0 0.0.0.255 area 0\n network 10.1.34.0 0.0.0.255 area 1</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">R1# show ip ospf neighbor\nR1# show ip route ospf\nR3# show ip ospf border-routers</div>'+
            '<h2>Add OSPFv3</h2><p>Enable on each interface with <code>ipv6 ospf 1 area 0</code> (no <code>network</code> statements \u2014 OSPFv3 is interface-activated). Verify with <code>show ipv6 ospf neighbor</code>.</p>'+
            note('Set all lab links to <em>point-to-point</em> network type \u2014 skips DR/BDR election and makes adjacency formation 4\u00d7 faster.')
        },
        { id: 'bgp-reflectors', title: 'iBGP with route reflectors', tag: 'Lab', read: '8 min',
          body:
            '<p>iBGP normally requires a full mesh \u2014 every router peers with every other. Route reflectors break this: the RR re-advertises routes from clients to other clients, so you only need N relationships instead of N\u00d7(N-1)/2.</p>'+
            '<h2>Topology</h2><p>Four routers in AS 65000. R1 and R2 are Route Reflectors. R3 and R4 are RR clients. R2 has an eBGP session to a simulated internet router (R5, AS 65001).</p>'+
            '<h2>Configure the RR (R1)</h2>'+
            '<div class="kb-pre"><span class="cm">! R1 \u2014 Route Reflector</span>\nrouter bgp 65000\n bgp cluster-id 1\n neighbor 10.0.0.3 remote-as 65000\n neighbor 10.0.0.3 route-reflector-client\n neighbor 10.0.0.4 remote-as 65000\n neighbor 10.0.0.4 route-reflector-client\n neighbor 10.0.0.2 remote-as 65000\n <span class="cm">! R2 is a non-client peer (RR-to-RR)</span></div>'+
            '<h2>Key attributes added by the RR</h2><ul><li><strong>ORIGINATOR_ID</strong> \u2014 equals the originating router\'s BGP RID</li><li><strong>CLUSTER_LIST</strong> \u2014 prevents loops; route dropped if our cluster-id is already in the list</li></ul>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">R3# show bgp ipv4 unicast\nR3# show bgp neighbors 10.0.0.1 received-routes</div>'+
            note('Use different cluster-IDs on each RR in the same cluster to prevent false loop detection when two RRs reflect to each other.')
        },
        { id: 'mpls-l3vpn', title: 'MPLS L3VPN lab', tag: 'Lab', read: '9 min',
          body:
            '<p>MPLS L3VPN is the standard enterprise/SP WAN technology: customer routes live in VRFs on PE routers, forwarded across the MPLS core via label stacks, distributed via MP-BGP (VPNv4).</p>'+
            '<h2>Topology</h2><p>Three routers: P (backbone), PE1 and PE2 running OSPF + LDP. Two CE routers in VRF CUST_A with OSPF or static CE\u2013PE routing.</p>'+
            '<h2>Step 1 \u2014 Enable MPLS on core links</h2>'+
            '<div class="kb-pre"><span class="cm">! On all P and PE routers</span>\nip cef\nmpls ip\n<span class="cm">! On each backbone interface</span>\ninterface GigabitEthernet0/0\n mpls ip</div>'+
            '<h2>Step 2 \u2014 Configure VRF on PE1</h2>'+
            '<div class="kb-pre">ip vrf CUST_A\n rd 65000:100\n route-target export 65000:100\n route-target import 65000:100\n!\ninterface GigabitEthernet0/1\n ip vrf forwarding CUST_A\n ip address 192.168.1.1 255.255.255.0</div>'+
            '<h2>Step 3 \u2014 MP-BGP between PEs</h2>'+
            '<div class="kb-pre">router bgp 65000\n neighbor 10.0.0.2 remote-as 65000\n neighbor 10.0.0.2 update-source Loopback0\n address-family vpnv4\n  neighbor 10.0.0.2 activate\n  neighbor 10.0.0.2 send-community extended</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">PE1# show mpls forwarding-table\nPE1# show bgp vpnv4 unicast all\nCE1# ping 192.168.2.1 source 192.168.1.10</div>'+
            warn('LDP router-id must match the OSPF router-id (both Loopback0). A mismatch is the #1 cause of L3VPN adjacency failure in lab environments.')
        },
        { id: 'redistribute', title: 'Route redistribution between protocols', tag: 'Lab', read: '6 min',
          body:
            '<p>Redistribution lets OSPF, EIGRP, BGP and static routes coexist when networks merge or migrate. Done wrong it creates sub-optimal paths and routing loops. Done right it is surgical.</p>'+
            '<h2>Two-way redistribution (OSPF \u2194 EIGRP)</h2>'+
            '<div class="kb-pre"><span class="cm">! On the redistribution router (ASBR)</span>\nrouter ospf 1\n redistribute eigrp 100 subnets metric 20 metric-type E2\n!\nrouter eigrp 100\n redistribute ospf 1 metric 10000 1 255 1 1500\n <span class="cm">! bw delay reliability load mtu</span></div>'+
            '<h2>Prevent feedback loops with tags</h2>'+
            '<div class="kb-pre">route-map TAG_OSPF permit 10\n set tag 100\n!\nrouter eigrp 100\n redistribute ospf 1 metric 10000 1 255 1 1500 route-map BLOCK_TAGGED\n!\nroute-map BLOCK_TAGGED deny 5\n match tag 100\nroute-map BLOCK_TAGGED permit 10</div>'+
            note('Always verify with <code>show ip route</code> and <code>traceroute</code> from the far side \u2014 redistribution bugs are silent until traffic hits the wrong path.')
        }
      ]
    },
    {
      id: 'switching', icon: I.grid, title: 'Switching & VLANs',
      desc: 'VLANs, STP, EtherChannel, inter-VLAN routing and QoS in lab topologies.',
      articles: [
        { id: 'vlans-stp', title: 'VLANs, trunks & Spanning Tree', tag: 'Lab', read: '6 min',
          body:
            '<p>This lab covers a three-switch topology with VLAN segmentation, 802.1Q trunking, inter-VLAN routing via an SVI, and Spanning Tree tuning to control the root bridge election.</p>'+
            '<h2>Topology</h2><p>SW1 (root bridge), SW2 and SW3 connected in a triangle. Access ports in VLANs 10, 20 and 30. One vIOS router or L3 switch for inter-VLAN routing via SVIs.</p>'+
            '<h2>Configure trunk links</h2>'+
            '<div class="kb-pre"><span class="cm">! On SW1 uplink to SW2</span>\ninterface GigabitEthernet0/0\n switchport mode trunk\n switchport trunk allowed vlan 10,20,30\n switchport trunk encapsulation dot1q</div>'+
            '<h2>Force root bridge</h2>'+
            '<div class="kb-pre"><span class="cm">! On SW1 \u2014 make it root for all VLANs</span>\nspanning-tree vlan 10,20,30 priority 4096</div>'+
            '<h2>Inter-VLAN routing (SVI)</h2>'+
            '<div class="kb-pre">ip routing\n!\ninterface Vlan10\n ip address 10.10.0.1 255.255.255.0\n no shutdown\ninterface Vlan20\n ip address 10.20.0.1 255.255.255.0\n no shutdown</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">SW1# show spanning-tree vlan 10\nSW1# show interfaces trunk\nSW1# show vlan brief</div>'+
            note('Enable <code>spanning-tree portfast</code> and <code>bpduguard enable</code> on all access ports to eliminate the 30-second delay on host link-up.')
        },
        { id: 'etherchannel', title: 'EtherChannel \u2014 LACP & PAgP', tag: 'Lab', read: '5 min',
          body:
            '<p>EtherChannel bundles physical links into one logical channel. LACP (802.3ad) is the standard; PAgP is Cisco-proprietary. Both are tested on CCNP Enterprise and should be in your muscle memory.</p>'+
            '<h2>LACP configuration</h2>'+
            '<div class="kb-pre"><span class="cm">! SW1 \u2014 active mode initiates LACP negotiation</span>\ninterface range GigabitEthernet0/0-1\n channel-group 1 mode active\n!\ninterface Port-channel1\n switchport mode trunk\n switchport trunk allowed vlan 10,20,30</div>'+
            '<div class="kb-pre"><span class="cm">! SW2 \u2014 passive mode accepts</span>\ninterface range GigabitEthernet0/0-1\n channel-group 1 mode passive</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">SW1# show etherchannel summary\nSW1# show lacp neighbor\nSW1# show interfaces port-channel 1 etherchannel</div>'+
            '<h2>Load balancing hash</h2>'+
            '<div class="kb-pre">port-channel load-balance src-dst-ip</div>'+
            note('Set one side to <em>active</em> and the other to <em>passive</em> \u2014 never both passive (no negotiation) or the channel silently never forms.')
        },
        { id: 'qos-primer', title: 'QoS: classify, mark & queue', tag: 'Lab', read: '6 min',
          body:
            '<p>QoS on lab nodes teaches the Modular QoS CLI (MQC) that underpins every enterprise voice and video deployment. Three-step process: classify \u2192 mark \u2192 queue.</p>'+
            '<h2>Step 1 \u2014 Classify</h2>'+
            '<div class="kb-pre">class-map match-any VOICE\n match dscp ef\n match ip rtp 16384 16383\n!\nclass-map match-any CRITICAL\n match dscp af31\n match protocol ospf</div>'+
            '<h2>Step 2 \u2014 Policy-map</h2>'+
            '<div class="kb-pre">policy-map WAN-QoS\n class VOICE\n  priority percent 30\n  police rate percent 30\n class CRITICAL\n  bandwidth percent 20\n  random-detect dscp-based\n class class-default\n  fair-queue\n  bandwidth percent 50</div>'+
            '<h2>Step 3 \u2014 Apply to WAN interface</h2>'+
            '<div class="kb-pre">interface GigabitEthernet0/1\n service-policy output WAN-QoS</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">show policy-map interface GigabitEthernet0/1\nshow class-map</div>'+
            note('Use netplex\u2019s built-in link QoS panel (right-click a link \u2192 Link QoS) to inject artificial delay and loss \u2014 it stresses your queue configs without needing a real WAN connection.')
        }
      ]
    },
    {
      id: 'security', icon: I.lock, title: 'Security & VPN labs',
      desc: 'IPsec, DMVPN, next-gen firewall and zero-trust segmentation labs.',
      articles: [
        { id: 'ipsec-site', title: 'IPsec site-to-site VPN (IKEv2)', tag: 'Lab', read: '7 min',
          body:
            '<p>IPsec site-to-site with IKEv2 is the modern standard for branch-to-HQ encryption. This lab builds a two-site topology with two Cisco vIOS routers as VPN peers and one simulated host on each side.</p>'+
            '<h2>Step 1 \u2014 IKEv2 proposal and policy</h2>'+
            '<div class="kb-pre">crypto ikev2 proposal MY-PROPOSAL\n encryption aes-cbc-256\n integrity sha256\n group 14\n!\ncrypto ikev2 policy MY-POLICY\n proposal MY-PROPOSAL</div>'+
            '<h2>Step 2 \u2014 Keyring and profile</h2>'+
            '<div class="kb-pre">crypto ikev2 keyring MY-KEYRING\n peer SITE-B\n  address 203.0.113.2\n  pre-shared-key local NETPLEX-KEY\n  pre-shared-key remote NETPLEX-KEY\n!\ncrypto ikev2 profile MY-PROFILE\n match identity remote address 203.0.113.2 255.255.255.255\n authentication remote pre-share\n authentication local pre-share\n keyring local MY-KEYRING</div>'+
            '<h2>Step 3 \u2014 Tunnel interface</h2>'+
            '<div class="kb-pre">crypto ipsec transform-set MY-TS esp-aes 256 esp-sha256-hmac\n mode tunnel\n!\ncrypto ipsec profile MY-IPSEC\n set transform-set MY-TS\n set ikev2-profile MY-PROFILE\n!\ninterface Tunnel0\n ip address 172.16.0.1 255.255.255.252\n tunnel source GigabitEthernet0/0\n tunnel destination 203.0.113.2\n tunnel protection ipsec profile MY-IPSEC</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">show crypto ikev2 sa\nshow crypto ipsec sa\nping 172.16.0.2 source 192.168.1.1</div>'+
            warn('IKEv1 Main Mode is deprecated \u2014 use IKEv2 for all new labs. Every current CCNP/CCIE blueprint now tests IKEv2.')
        },
        { id: 'dmvpn-phase3', title: 'DMVPN Phase 3 \u2014 spoke-to-spoke shortcuts', tag: 'Lab', read: '8 min',
          body:
            '<p>DMVPN Phase 3 builds dynamic direct tunnels between spokes after the first packet. Phase 1 and 2 bounce traffic through the hub; Phase 3 uses NHRP redirect + shortcut to eliminate the hub for spoke-to-spoke flows.</p>'+
            '<h2>Hub configuration</h2>'+
            '<div class="kb-pre">interface Tunnel0\n ip address 10.100.0.1 255.255.255.0\n tunnel source GigabitEthernet0/0\n tunnel mode gre multipoint\n tunnel key 12345\n ip nhrp map multicast dynamic\n ip nhrp network-id 1\n ip nhrp redirect\n <span class="cm">! Phase 3 key: redirect tells spokes to go direct</span>\n tunnel protection ipsec profile DMVPN-PROFILE</div>'+
            '<h2>Spoke configuration</h2>'+
            '<div class="kb-pre">interface Tunnel0\n ip address 10.100.0.2 255.255.255.0\n tunnel source GigabitEthernet0/0\n tunnel destination 203.0.113.1\n tunnel mode gre multipoint\n tunnel key 12345\n ip nhrp map 10.100.0.1 203.0.113.1\n ip nhrp map multicast 203.0.113.1\n ip nhrp network-id 1\n ip nhrp nhs 10.100.0.1\n ip nhrp shortcut\n <span class="cm">! Phase 3 key: shortcut accepts hub redirect and goes direct</span></div>'+
            '<h2>Verify shortcut formation</h2>'+
            '<div class="kb-pre">Spoke1# show ip nhrp detail\nSpoke1# show crypto session\n<span class="cm">! Ping spoke2, then check again \u2014 a dynamic shortcut entry should appear</span>\nSpoke1# ping 192.168.2.1 repeat 10\nSpoke1# show ip nhrp</div>'+
            note('Use netplex\u2019s link QoS to add 50\u2009ms latency on spoke uplinks \u2014 it makes the spoke-to-spoke shortcut measurably faster than the hub-bounce path, proving the point of Phase 3.')
        },
        { id: 'paloalto-lab', title: 'Palo Alto NGFW in a netplex lab', tag: 'Lab', read: '7 min',
          body:
            '<p>The Palo Alto VM-Series (PAN-OS) is used for PCNSE labs and enterprise PoCs. This guide covers image deployment in netplex, initial setup, zone creation and a basic outbound NAT policy.</p>'+
            '<h2>Image requirements</h2><ul><li>PAN-OS VM-Series .qcow2 from Palo Alto Customer Support Portal</li><li>Minimum 4 vCPU, 4 GB RAM per instance</li><li>netplex image pipeline auto-detects the PA-VM family</li></ul>'+
            '<h2>Initial CLI setup</h2>'+
            '<div class="kb-pre"><span class="cm"># Default credentials: admin / admin</span>\nconfigure\nset deviceconfig system ip-address 192.168.1.1 netmask 255.255.255.0\nset deviceconfig system default-gateway 192.168.1.254\ncommit</div>'+
            '<h2>Zones and policy (GUI)</h2>'+
            '<p>Network \u2192 Zones \u2192 Add: create <strong>TRUST</strong> (eth1/1) and <strong>UNTRUST</strong> (eth1/2). Then Policies \u2192 Security \u2192 Add: Source Zone TRUST, Destination Zone UNTRUST, Action Allow. Add a NAT rule for dynamic IP-and-port on eth1/2. Commit.</p>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre"><span class="cm">! From a host behind TRUST</span>\ncurl http://example.com\n<span class="cm">! In the GUI: Monitor \u2192 Traffic \u2014 the hit should appear</span></div>'+
            note('Commit takes 30\u201360 seconds on a fresh PA-VM \u2014 normal behaviour. The UI freezes during commit; do not refresh.')
        },
        { id: 'zero-trust-lab', title: 'Zero-trust microsegmentation lab', tag: 'Lab', read: '6 min',
          body:
            '<p>Zero-trust labs model the assumption that every segment is untrusted until explicitly permitted. This topology uses a NGFW to enforce east-west policies between three application segments: Web, App and DB.</p>'+
            '<h2>Topology</h2><p>Three VLANs (10=Web, 20=App, 30=DB) on an L3 switch. All inter-VLAN traffic is routed through the NGFW. Policy: Web \u2192 App on TCP 8080, App \u2192 DB on TCP 5432. Everything else denied and logged.</p>'+
            '<h2>Why default-deny matters</h2><p>In a flat network a compromised web server can directly scan the DB. With microsegmentation, lateral movement requires defeating an explicit policy \u2014 and every attempt is logged.</p>'+
            '<h2>Test the policy</h2>'+
            '<div class="kb-pre"><span class="cm"># From Web host (VLAN 10)</span>\nnmap -p 5432 192.168.30.10\n<span class="cm"># Should be dropped \u2014 verify in firewall deny log</span>\nnmap -p 8080 192.168.20.10\n<span class="cm"># Should be permitted and logged</span></div>'+
            note('Use netplex\u2019s packet capture on the VLAN trunk link to confirm traffic traverses the firewall and is not short-circuited by any switch ARP/forwarding shortcut.')
        }
      ]
    },
    {
      id: 'datacenter', icon: I.server, title: 'Data center fabric',
      desc: 'VXLAN EVPN, leaf-spine, Nexus 9000v and vPC \u2014 modern DC labs step by step.',
      articles: [
        { id: 'vxlan-evpn', title: 'VXLAN EVPN leaf-spine fabric', tag: 'Lab', read: '10 min',
          body:
            '<p>VXLAN EVPN is the dominant data center overlay technology \u2014 on the CCIE DC v3.1 blueprint and deployed in virtually every hyperscale and enterprise DC built since 2018. This lab builds a 2-spine, 2-leaf Clos fabric with BGP EVPN control plane.</p>'+
            '<h2>Resources</h2><ul><li>4 \u00d7 Cisco Nexus 9000v (8 GB RAM each, NX-OS 10.3.x) \u2014 requires 32 GB host RAM</li><li>2 \u00d7 Alpine MicroVM (built-in free image) for hosts</li></ul>'+
            '<h2>Step 1 \u2014 OSPF underlay</h2>'+
            '<div class="kb-pre"><span class="cm">! On all spines and leaves</span>\nfeature ospf\nrouter ospf 1\n router-id 10.0.0.1\n!\ninterface loopback0\n ip address 10.0.0.1/32\n ip router ospf 1 area 0\n!\ninterface Ethernet1/1\n ip address 10.10.1.1/30\n ip router ospf 1 area 0\n ip ospf network point-to-point\n no shutdown</div>'+
            '<h2>Step 2 \u2014 BGP EVPN overlay (Spine = RR)</h2>'+
            '<div class="kb-pre">feature bgp\nrouter bgp 65000\n address-family l2vpn evpn\n  retain route-target all\n neighbor 10.0.0.3 remote-as 65000\n  update-source loopback0\n  address-family l2vpn evpn\n   send-community extended\n   route-reflector-client</div>'+
            '<h2>Step 3 \u2014 VTEP on each leaf</h2>'+
            '<div class="kb-pre">feature vn-segment-vlan-based\nfeature nv overlay\n!\nvlan 100\n vn-segment 10100\n!\ninterface nve1\n no shutdown\n host-reachability protocol bgp\n source-interface loopback0\n member vni 10100\n  ingress-replication protocol bgp</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">LF1# show bgp l2vpn evpn summary\nLF1# show nve vni\nLF1# show mac address-table vlan 100\n<span class="cm">! From host1 \u2014 ping host2 on the other leaf</span>\nping 192.168.100.20</div>'+
            warn('NX-OS requires <code>feature</code> commands before any VTEP config \u2014 enable <code>vn-segment-vlan-based</code> and <code>nv overlay</code> before configuring VNIs or the CLI will silently reject the commands.')
        },
        { id: 'nx-os-setup', title: 'Nexus 9000v image setup and first boot', tag: 'Setup', read: '5 min',
          body:
            '<p>Nexus 9000v is the heaviest QEMU image in common lab use. Each instance needs 8 GB RAM and 4 vCPU minimum \u2014 on a 64 GB host you can fit 6\u20137 nodes comfortably.</p>'+
            '<h2>First-boot dialog</h2>'+
            '<div class="kb-pre">Do you want to enforce secure password standard? <strong>no</strong>\nEnter the password for "admin": <strong>netplex</strong>\nWould you like to enter basic config? <strong>yes</strong>\nHostname: <strong>SPINE-1</strong>\nConfigure out-of-band management? <strong>no</strong></div>'+
            '<h2>Enable features before any DC config</h2>'+
            '<div class="kb-pre">feature ospf\nfeature bgp\nfeature pim\nfeature interface-vlan\nfeature vn-segment-vlan-based\nfeature nv overlay\nfeature lacp\nfeature vpc</div>'+
            '<h2>Key IOS \u2192 NX-OS differences</h2><ul><li><code>no shutdown</code> required on all interfaces (they default down)</li><li><code>show interface brief</code> instead of <code>show ip interface brief</code></li><li>VLANs must be created with <code>vlan X</code> before assignment</li><li>All config under <code>configure terminal</code> (same as IOS)</li></ul>'+
            note('NX-OS boot takes 4\u20136 minutes on a typical lab host \u2014 normal. Wait for the login prompt before attempting console access.')
        },
        { id: 'vpc-leaves', title: 'vPC (Virtual Port Channel) on leaf pairs', tag: 'Lab', read: '6 min',
          body:
            '<p>vPC allows a dual-homed host to bond to two separate Nexus switches as a single EtherChannel, eliminating STP blocking on host-facing links and providing sub-second failover.</p>'+
            '<h2>vPC domain setup (same domain ID on both leaves)</h2>'+
            '<div class="kb-pre">vpc domain 1\n peer-keepalive destination 192.168.100.2 source 192.168.100.1\n peer-gateway\n auto-recovery\n ip arp synchronize</div>'+
            '<h2>Peer-link</h2>'+
            '<div class="kb-pre">interface port-channel1\n switchport mode trunk\n spanning-tree port type network\n vpc peer-link\n!\ninterface Ethernet1/3\n channel-group 1 mode active</div>'+
            '<h2>vPC to host (same port-channel ID on both leaves)</h2>'+
            '<div class="kb-pre">interface port-channel10\n switchport mode access\n switchport access vlan 100\n vpc 10\n!\ninterface Ethernet1/5\n channel-group 10 mode active</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">LF1# show vpc\nLF1# show vpc consistency-parameters global\nLF1# show port-channel summary</div>'+
            warn('The peer-keepalive link should use the management VRF \u2014 never the same physical path as the peer-link. If both go down simultaneously both switches elect primary and you get split-brain.')
        }
      ]
    },
    {
      id: 'ipv6', icon: I.globe, title: 'IPv6 labs',
      desc: 'Dual-stack, OSPFv3, BGP4+, SLAAC, DHCPv6 and NAT64 \u2014 the complete IPv6 lab suite.',
      articles: [
        { id: 'ospfv3-dualstack', title: 'Dual-stack with OSPFv3', tag: 'IPv6', read: '6 min',
          body:
            '<p>OSPFv3 is interface-activated (no <code>network</code> statements) and runs independently of OSPFv2. This lab adds IPv6 OSPFv3 to an existing dual-stack topology so routers advertise both address families.</p>'+
            '<h2>Enable IPv6 routing first</h2>'+
            '<div class="kb-pre">ipv6 unicast-routing\nipv6 cef</div>'+
            '<h2>Activate OSPFv3 per interface</h2>'+
            '<div class="kb-pre">interface GigabitEthernet0/0\n ipv6 address 2001:db8:0:12::1/64\n ipv6 ospf 1 area 0\n ipv6 ospf network point-to-point</div>'+
            '<h2>OSPFv3 process (router-id is still dotted-decimal)</h2>'+
            '<div class="kb-pre">ipv6 router ospf 1\n router-id 1.1.1.1</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">R1# show ipv6 ospf neighbor\nR1# show ipv6 route ospf\nR1# show ipv6 ospf database</div>'+
            note('OSPFv3 uses link-local addresses for all neighbour communication. The global unicast prefix is what gets advertised \u2014 both a link-local and a global address are required on the interface.')
        },
        { id: 'bgp4plus', title: 'BGP4+ \u2014 iBGP and eBGP for IPv6', tag: 'IPv6', read: '7 min',
          body:
            '<p>BGP4+ (RFC 2545/4760) extends BGP to carry IPv6 prefixes via the <code>ipv6</code> address-family. Sessions can run over IPv4 or IPv6 transport. This guide uses global-unicast IPv6 peers.</p>'+
            '<h2>eBGP with IPv6 peers</h2>'+
            '<div class="kb-pre">router bgp 65001\n neighbor 2001:db8:0:12::2 remote-as 65002\n!\n address-family ipv6\n  neighbor 2001:db8:0:12::2 activate\n  network 2001:db8:1::/48</div>'+
            '<h2>iBGP with route reflector (IPv6)</h2>'+
            '<div class="kb-pre">router bgp 65000\n neighbor 2001:db8::2 remote-as 65000\n neighbor 2001:db8::2 update-source Loopback0\n!\n address-family ipv6\n  neighbor 2001:db8::2 activate\n  neighbor 2001:db8::2 route-reflector-client\n  neighbor 2001:db8::2 next-hop-self</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre">show bgp ipv6 unicast summary\nshow bgp ipv6 unicast\nshow ipv6 route bgp</div>'+
            note('BGP for IPv6 is activated under <code>address-family ipv6</code> \u2014 a common mistake is activating the neighbour under the IPv4 AF only and wondering why no IPv6 prefixes are exchanged.')
        },
        { id: 'slaac-dhcpv6', title: 'SLAAC, stateless and stateful DHCPv6', tag: 'IPv6', read: '6 min',
          body:
            '<p>IPv6 address assignment has three mechanisms: SLAAC (host self-configures from the RA prefix), Stateless DHCPv6 (SLAAC for the address + server for DNS/options), and Stateful DHCPv6 (server assigns both). This lab tests all three.</p>'+
            '<h2>SLAAC (zero config on the router beyond the prefix)</h2>'+
            '<div class="kb-pre">interface GigabitEthernet0/1\n ipv6 address 2001:db8:cafe::/64 eui-64\n ipv6 nd prefix 2001:db8:cafe::/64\n <span class="cm">! Hosts auto-configure using EUI-64 from MAC address</span></div>'+
            '<h2>Stateless DHCPv6 (SLAAC + DNS from server)</h2>'+
            '<div class="kb-pre">ipv6 dhcp pool STATELESS\n dns-server 2001:4860:4860::8888\n domain-name lab.local\n!\ninterface GigabitEthernet0/1\n ipv6 nd other-config-flag\n <span class="cm">! O-flag: use DHCPv6 for options only</span>\n ipv6 dhcp server STATELESS</div>'+
            '<h2>Stateful DHCPv6 (server assigns address)</h2>'+
            '<div class="kb-pre">ipv6 dhcp pool STATEFUL\n address prefix 2001:db8:1::/64\n dns-server 2001:4860:4860::8888\n!\ninterface GigabitEthernet0/1\n ipv6 nd managed-config-flag\n <span class="cm">! M-flag: get address from DHCPv6</span>\n ipv6 dhcp server STATEFUL</div>'+
            note('The RA M and O flags tell hosts what to do. M=1 means use DHCPv6 for the address. O=1 means use DHCPv6 for other options only. Both can be set simultaneously for stateful DHCPv6 + DNS.')
        },
        { id: 'nat64', title: 'NAT64 / DNS64 \u2014 IPv6-only hosts reach IPv4 internet', tag: 'IPv6', read: '6 min',
          body:
            '<p>NAT64 with DNS64 lets an IPv6-only host reach IPv4-only servers with zero changes on the host. The DNS64 resolver synthesises AAAA records for A-only names; the NAT64 gateway translates address and protocol at the border.</p>'+
            '<h2>Topology</h2><p>R1 (NAT64 gateway), an IPv6-only host behind R1, and a simulated IPv4 internet server. Uses Cisco vIOS or a VyOS node.</p>'+
            '<h2>Configure NAT64 on R1</h2>'+
            '<div class="kb-pre"><span class="cm">! Use the well-known NAT64 prefix</span>\nnat64 prefix stateful 64:ff9b::/96\n!\ninterface GigabitEthernet0/0\n nat64 enable\n <span class="cm">! IPv6 inside interface</span>\ninterface GigabitEthernet0/1\n nat64 enable\n <span class="cm">! IPv4 outside interface</span></div>'+
            '<h2>DNS64 (on a Linux resolver node)</h2>'+
            '<div class="kb-pre"><span class="cm"># Unbound or BIND dns64 stanza</span>\ndns64 64:ff9b::/96;</div>'+
            '<h2>Verify</h2>'+
            '<div class="kb-pre"><span class="cm"># From the IPv6-only host</span>\ndig AAAA ipv4only.arpa @dns64-server\n<span class="cm"># Should return 64:ff9b::x.x.x.x synthesised record</span>\ncurl -6 http://ipv4server.example</div>'+
            warn('The well-known prefix 64:ff9b::/96 only works if the DNS resolver is under your control and is running DNS64. If the resolver is external, deploy a DNS64-capable resolver node (Unbound) in the lab.')
        }
      ]
    },
    {
      id: 'certs', icon: I.award, title: 'Certification lab paths',
      desc: 'Structured lab lists mapped to CCNA, CCNP Enterprise, CCIE EI and security certs.',
      articles: [
        { id: 'ccna-path', title: 'CCNA lab path \u2014 200-301', tag: 'CCNA', read: '5 min',
          body:
            '<p>The CCNA 200-301 exam tests concepts, not just configs. These labs give you muscle memory on the topics that appear most frequently as both multiple-choice and simulation questions.</p>'+
            '<h2>Essential lab list</h2>'+
            '<ul>'+
            '<li><strong>VLANs + inter-VLAN routing</strong> \u2014 3-switch triangle, SVI and router-on-a-stick variants</li>'+
            '<li><strong>OSPFv2 single-area</strong> \u2014 4 routers, DR/BDR election, passive interfaces</li>'+
            '<li><strong>OSPFv2 multi-area</strong> \u2014 ABR, stub areas, route summarisation</li>'+
            '<li><strong>EtherChannel LACP</strong> \u2014 2 switches, verify with <code>show etherchannel summary</code></li>'+
            '<li><strong>Standard + extended ACLs</strong> \u2014 permit/deny specific hosts and services</li>'+
            '<li><strong>NAT overload (PAT)</strong> \u2014 3 hosts behind one public IP</li>'+
            '<li><strong>DHCP server on router</strong> \u2014 pool, exclusions, relay agent</li>'+
            '<li><strong>SSH hardening</strong> \u2014 disable Telnet, key generation, VTY access-class</li>'+
            '<li><strong>IPv6 addressing + OSPFv3</strong> \u2014 dual-stack, SLAAC, router advertisement</li>'+
            '<li><strong>Spanning Tree tuning</strong> \u2014 PortFast, BPDUGuard, root bridge election</li>'+
            '</ul>'+
            note('Build each lab from scratch three times: first with reference notes, second with a cheat-sheet only, third from memory. Exam-day speed is the goal \u2014 not exam-day knowledge.')
        },
        { id: 'ccnp-path', title: 'CCNP Enterprise lab path \u2014 ENCOR + ENARSI', tag: 'CCNP', read: '6 min',
          body:
            '<p>CCNP Enterprise has two exams: ENCOR (350-401, core) and ENARSI (300-410, advanced routing). Both have a heavy simulation component. This path covers the most-tested ENARSI topics.</p>'+
            '<h2>ENCOR priority labs</h2>'+
            '<ul>'+
            '<li>OSPF multi-area, route summarisation, stub areas</li>'+
            '<li>EIGRP named mode + route filtering with prefix-lists</li>'+
            '<li>BGP attributes: local-pref, MED, AS-path prepend, communities</li>'+
            '<li>MPLS LDP basics \u2014 label exchange, FIB</li>'+
            '<li>QoS MQC \u2014 3-class model, DSCP marking, LLQ</li>'+
            '<li>Multicast \u2014 PIM-SM, RP configuration, IGMP</li>'+
            '</ul>'+
            '<h2>ENARSI priority labs</h2>'+
            '<ul>'+
            '<li>Route redistribution OSPF \u2194 EIGRP with loop prevention (route tags)</li>'+
            '<li>BGP route reflectors \u2014 RR cluster, cluster-list, ORIGINATOR_ID</li>'+
            '<li>VRF-lite \u2014 multi-tenant without MPLS</li>'+
            '<li>DMVPN Phase 3 \u2014 spoke-to-spoke shortcuts, NHRP redirect</li>'+
            '<li>IPv6 OSPFv3 + BGP4+ dual-stack</li>'+
            '</ul>'+
            note('ENARSI simulations often present a broken topology to fix in 15 minutes. Practice <code>debug ip routing</code> and <code>debug eigrp fsm</code> until the workflow is automatic.')
        },
        { id: 'ccie-ei-path', title: 'CCIE Enterprise Infrastructure lab path', tag: 'CCIE', read: '7 min',
          body:
            '<p>The CCIE EI lab exam is 8 hours, fully hands-on, with Troubleshoot and Config modules. The 2024 blueprint adds SD-WAN, automation and infrastructure security. This is the recommended build sequence.</p>'+
            '<h2>Foundation (6\u20138 weeks)</h2>'+
            '<ul>'+
            '<li>OSPF: LSA types 1\u20137, virtual links, NSSA, summarisation, authentication</li>'+
            '<li>BGP: full attribute set, route policies, route reflectors, confederations</li>'+
            '<li>MPLS: LDP, L3VPN (VRF/RD/RT), VPLS, pseudowires</li>'+
            '<li>IS-IS dual-stack (IPv4 + IPv6 in one process)</li>'+
            '</ul>'+
            '<h2>Advanced (8\u201312 weeks)</h2>'+
            '<ul>'+
            '<li>SR-MPLS: SID types, SRLB/SRGB, SR-TE, on-demand next-hop (ODN)</li>'+
            '<li>DMVPN Phase 3 + FlexVPN + GETVPN</li>'+
            '<li>SD-WAN: Viptela vManage, vSmart, vBond, vEdge bringup; policy and templates</li>'+
            '<li>Multicast: PIM-SM, BiDir-PIM, MSDP, SSM, mVPN (MDT)</li>'+
            '<li>QoS: full enterprise policy including WRED and WAN-edge shaping</li>'+
            '</ul>'+
            '<h2>Automation and infra-sec (4 weeks)</h2>'+
            '<ul>'+
            '<li>Python + Netmiko: bulk config push from YAML inventory</li>'+
            '<li>Ansible: ios_config and ios_command modules against a 10-node fleet</li>'+
            '<li>NETCONF + YANG: ncclient in Python, edit-config RPC</li>'+
            '<li>Infrastructure security: CoPP, AAA/RADIUS, uRPF, DHCP snooping, DAI</li>'+
            '</ul>'+
            '<h2>Troubleshoot module prep</h2><p>Take any working lab and deliberately break it: wrong OSPF area, missing route-target, wrong NHRP config. Time yourself finding and fixing it. Aim for under 10 minutes per break scenario.</p>'+
            warn('The CCIE proctor can see your CLI history. Comfort with <code>show</code> commands \u2014 not <code>debug</code> \u2014 under time pressure is what separates passing from failing candidates.')
        }
      ]
    },
    {
      id: 'troubleshoot', icon: I.wrench, title: 'Troubleshooting',
      desc: 'Common issues, diagnostics and host tuning for smooth lab operation.',
      articles: [
        { id: 'node-wont-start', title: 'Node won\'t start \u2014 diagnosis guide', tag: 'Tip', read: '5 min',
          body:
            '<p>A node stuck in "Starting" or immediately returning to "Stopped" is the most common lab issue. Work through this checklist in order.</p>'+
            '<h2>1 \u2014 Check the image status</h2><p>Open Images and find your device. The pipeline status must show <strong>Ready</strong> (green). Any other state means the node cannot start \u2014 wait for the pipeline or re-upload and watch the boot-test stage for errors.</p>'+
            '<h2>2 \u2014 Check host resources</h2>'+
            '<div class="kb-pre"><span class="cm"># On the netplex host</span>\nfree -h\n<span class="cm">If available RAM &lt; node RAM \u00d7 count, QEMU gets OOM-killed silently</span>\ndf -h /netplex\n<span class="cm">If disk &lt; 2 GB free, QEMU cannot create runtime disk overlays</span></div>'+
            '<h2>3 \u2014 Check KVM availability</h2>'+
            '<div class="kb-pre">ls -la /dev/kvm\n<span class="cm">Must exist and be accessible to the netplex process</span>\nkvm-ok\n<span class="cm">Confirms hardware virtualisation is enabled in the hypervisor</span></div>'+
            '<h2>4 \u2014 Read the node log</h2><p>Click the node \u2192 <strong>Logs</strong> tab. Common QEMU exit codes:</p>'+
            '<ul>'+
            '<li><code>Exec format error</code> \u2014 wrong image format; re-convert with <code>qemu-img convert -O qcow2</code></li>'+
            '<li><code>KVM: entry failed</code> \u2014 nested virtualisation not enabled on the hypervisor</li>'+
            '<li><code>Cannot allocate memory</code> \u2014 reduce node RAM in the Properties panel</li>'+
            '</ul>'+
            note('QEMU images (especially Nexus 9000v, Juniper vMX) allocate the full RAM before the OS even loads. If you assign 8 GB and only 4 GB is free, the start fails with no visible error.')
        },
        { id: 'capture-debug', title: 'Packet capture & debug techniques', tag: 'Tip', read: '5 min',
          body:
            '<p>netplex\u2019s built-in capture streams packets from any link directly to an in-browser Wireshark view \u2014 no SSH tunnels, no RPCAP config. Here are the patterns that make debugging faster.</p>'+
            '<h2>Capture a link</h2><p>Right-click any link on the canvas \u2192 <strong>Capture</strong>. The Wireshark viewer opens inline. Click again to stop and download the <code>.pcap</code>.</p>'+
            '<h2>Useful display filters for lab protocols</h2>'+
            '<div class="kb-pre"><span class="cm">-- OSPF neighbour issues</span>\nospf\nospf.msg == 1 <span class="cm">-- Hello only</span>\n\n<span class="cm">-- BGP session problems</span>\nbgp.type == 3 <span class="cm">-- NOTIFICATION (look here first on a session drop)</span>\n\n<span class="cm">-- DHCP debugging</span>\nbootp\n\n<span class="cm">-- IPsec handshake</span>\nisakmp or esp</div>'+
            '<h2>Safe debug pattern on IOS/IOS-XE</h2>'+
            '<div class="kb-pre"><span class="cm">! Always scope with an ACL to avoid flooding</span>\nip access-list extended DEBUG-ONLY\n permit ip host 10.1.1.1 host 10.2.2.2\n!\ndebug ip packet detail DEBUG-ONLY\n<span class="cm">! Stop all debugging when done</span>\nundebug all</div>'+
            '<h2>Conditional debug (IOS-XE)</h2>'+
            '<div class="kb-pre">debug condition interface GigabitEthernet0/0\ndebug ip ospf adj\n<span class="cm">! Only shows OSPF events on that one interface</span></div>'+
            warn('Running <code>debug all</code> on a node with active routing protocols will spike CPU to 100% and likely disconnect your console session. Always scope with an ACL or interface condition.')
        },
        { id: 'performance-tuning', title: 'Host tuning for large labs', tag: 'Tip', read: '5 min',
          body:
            '<p>A 50-node lab on a well-tuned host runs smoothly. The same lab on a default-configured host may crawl. These are the high-impact tuning steps.</p>'+
            '<h2>Disable transparent hugepages</h2>'+
            '<div class="kb-pre"><span class="cm"># QEMU performs better with normal 4 KB pages</span>\necho never > /sys/kernel/mm/transparent_hugepage/enabled\necho never > /sys/kernel/mm/transparent_hugepage/defrag</div>'+
            '<h2>Disable swap (or use NVMe swap)</h2>'+
            '<div class="kb-pre"><span class="cm"># Swapping a QEMU process causes 10\u2013100\u00d7 slowdown</span>\nswapoff -a\n<span class="cm"># If RAM is tight, use a fast NVMe swap partition instead of HDD</span></div>'+
            '<h2>Increase kernel socket buffers for high packet-rate labs</h2>'+
            '<div class="kb-pre">sysctl -w net.core.rmem_max=16777216\nsysctl -w net.core.wmem_max=16777216</div>'+
            '<h2>Node density rule of thumb per host</h2>'+
            '<ul>'+
            '<li>Alpine MicroVM (built-in): 100+ nodes, 64 MB each</li>'+
            '<li>Cisco vIOS: 30\u201350 nodes, 256 MB each</li>'+
            '<li>Cisco IOL/IOU: 100\u2013200 nodes, 64\u2013128 MB each</li>'+
            '<li>Juniper vSRX: 10\u201320 nodes, 2 GB each</li>'+
            '<li>Nexus 9000v: 6\u20138 nodes, 8 GB each</li>'+
            '</ul>'+
            note('The single biggest performance lever is RAM: under-allocate it and QEMU nodes OOM-kill silently. Never run a lab host with less than 20% free RAM.')
        }
      ]
    }
  ];

  global.KB = { CATS: CATS };
})(window);
