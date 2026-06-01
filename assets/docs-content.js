/* ──────────────────────────────────────────────────────────────
   Netplex.io — knowledge-base articles (static, client-rendered).
   Add an entry to KB_ARTICLES to publish a new doc; the sidebar
   groups by `cat` and search filters title + lede + category.
   ────────────────────────────────────────────────────────────── */
var KB_ARTICLES = [
  {
    id: 'getting-started', cat: 'Getting started', title: 'Install & first run',
    lede: 'Get Netplex running on your machine in under five minutes.',
    body:
      '<p>Pick whichever path fits your setup — there is no cloud account to create.</p>' +
      '<h2>Three ways to run it</h2>' +
      '<ul>' +
      '<li><strong>Virtual appliance</strong> — import the <code>.ova</code> into VirtualBox or VMware and start it. Easiest for a laptop.</li>' +
      '<li><strong>Bare-metal ISO</strong> — flash the Ubuntu 26.04 image to a USB stick, boot the host, get native KVM performance.</li>' +
      '<li><strong>Install script</strong> — on an existing Ubuntu host with <code>/dev/kvm</code>:</li>' +
      '</ul>' +
      '<pre><code><span class="pr">$</span> curl -fsSL https://get.netplex.io | sh\n<span class="ok">\u2713 netplex up</span> \u2014 open http://localhost:8080</code></pre>' +
      '<p>Then open the host\u2019s address in your browser, sign in, and you\u2019re on the canvas.</p>' +
      '<div class="kb-callout"><p>KVM is required. If <code>/dev/kvm</code> is missing, Netplex tells you exactly how to enable nested virtualisation for your platform.</p></div>'
  },
  {
    id: 'first-lab', cat: 'Getting started', title: 'Build your first lab',
    lede: 'Drop a few nodes, wire them, and run.',
    body:
      '<h2>Add nodes</h2><p>Open the <strong>Devices</strong> tab in the left sidebar, then drag a device onto the canvas — or double-click it to drop one at centre. A green ready-dot means the image is present; grey means it pulls on add.</p>' +
      '<h2>Wire them</h2><p>Hover a node, drag from its edge to another node to create a link. Parallel links fan out so they never overlap. Pick a link style — Curve, Arc, Ortho or Straight — from the canvas toolbar.</p>' +
      '<h2>Run it</h2><p>Hit <strong>Run</strong> (top bar). Nodes boot, links wire up, and live packet flow animates across the fabric. Right-click a node for Console, Capture, Config and more.</p>'
  },
  {
    id: 'import-eve', cat: 'Migrating', title: 'Import from EVE-NG, GNS3 & Containerlab',
    lede: 'Bring an existing topology in one click — no rebuild.',
    body:
      '<p>Netplex reads the formats you already have:</p>' +
      '<ul><li><code>.unl</code> — EVE-NG / PNETLAB labs</li><li><code>.gns3project</code> — GNS3 projects</li><li>Containerlab <code>.clab.yml</code> — declarative topologies</li></ul>' +
      '<h2>How</h2><p>Labs sidebar &rarr; <strong>Import</strong> &rarr; choose the file. Netplex maps devices against its taxonomy, recreates links and positions, and lands you in a working topology.</p>' +
      '<div class="kb-callout"><p>Switching over? Import a lab and your account unlocks <strong>Pro free for 60 days</strong>. No <code>fixpermissions</code>, no manual image juggling.</p></div>'
  },
  {
    id: 'images', cat: 'Images', title: 'The image pipeline',
    lede: 'Upload an image and walk away — convert, permissions, boot-test, done.',
    body:
      '<p>Drag a <code>.qcow2</code>, <code>.vmdk</code>, <code>.ova</code> or <code>.tgz</code> onto the Images tab (or pull a Docker image). Each upload runs a visible pipeline:</p>' +
      '<p><code>Uploaded \u2192 Extracted \u2192 Detected \u2192 Converted \u2192 Permissions \u2192 Organised \u2192 Tested \u2192 Ready</code></p>' +
      '<h2>What it does for you</h2><ul>' +
      '<li><strong>Classifies</strong> the image against 138 device kinds across 67 vendors and gives it a human name.</li>' +
      '<li><strong>Sets ownership/permissions automatically</strong> — there is no <code>fixpermissions</code> step.</li>' +
      '<li><strong>Boot-tests</strong> headless before marking it Ready; on failure you get what happened, why and what to do.</li>' +
      '<li><strong>Disk-guards</strong> the upload — it refuses before it can fill your disk, with an actionable message.</li></ul>'
  },
  {
    id: 'consoles', cat: 'Consoles', title: 'Integrated consoles & group-send',
    lede: 'Tabbed, tiled, themeable terminals in the browser — no PuTTY.',
    body:
      '<p>Right-click a node &rarr; <strong>Console</strong>, or open the console dock. Consoles are tabbed and can be tiled or popped out into their own browser window.</p>' +
      '<h2>Group-send</h2><p>Select several consoles and type once to broadcast to all of them — a visible "broadcasting to N sessions" indicator shows when it\u2019s active, with per-session opt-out.</p>' +
      '<h2>Theming</h2><p>Settings &rarr; Terminal: font, size, eight colour schemes (Netplex Dark, SecureCRT, Dracula, Solarized\u2026), cursor, scrollback and syntax highlighting. A snippet bar keeps your common commands one click away.</p>'
  },
  {
    id: 'fabric', cat: 'Distributed fabric', title: 'Span a lab across multiple hosts',
    lede: 'One topology, several machines, stitched over VXLAN.',
    body:
      '<div class="kb-callout"><p><strong>Roadmap note:</strong> single-host and small-cluster VXLAN are in beta today. Larger multi-chassis clusters are on the roadmap (targeted later in 2026) — see the <a href="roadmap.html">public roadmap</a>.</p></div>' +
      '<h2>How it works</h2><p>Each compute host runs a lightweight agent and registers its CPU/RAM/disk and KVM availability. The scheduler places nodes by free resources and keeps tightly-coupled nodes together. A link whose endpoints live on different hosts is realised as <code>tap \u2192 local OVS \u2192 VXLAN \u2192 remote OVS \u2192 tap</code>.</p>' +
      '<h2>Resilience</h2><p>A host dropping degrades only its nodes — the rest of the lab keeps running and reconciles when the host returns. Each host gets a colour, and nodes glow to show where they live.</p>'
  },
  {
    id: 'api-cli', cat: 'Automation', title: 'API, CLI & infrastructure-as-code',
    lede: 'Everything the UI does is a documented API call.',
    body:
      '<h2>CLI</h2><pre><code><span class="cm"># import an EVE lab and schedule it across hosts</span>\n<span class="pr">$</span> netplex apply ./campus.unl --hosts lab-rig,media-pc</code></pre>' +
      '<h2>Terraform</h2><pre><code>resource "netplex_lab" "campus" {\n  name   = "ENT-CAMPUS-WAN"\n  import = "./campus.unl"\n}</code></pre>' +
      '<p>First-class clients ship for the CLI, Terraform, Ansible, Kubernetes and CI/Jenkins. Labs are topology-as-code you keep in your own Git (GitHub or self-hosted) — "Rebuild from Git" is the recovery path.</p>'
  },
  {
    id: 'troubleshooting', cat: 'Troubleshooting', title: 'When something fails',
    lede: 'Every error tells you what happened, why, and what to do next.',
    body:
      '<p>Netplex never leaves you with a raw stack trace. Each failure states the <strong>what</strong>, the <strong>why</strong>, and a concrete <strong>next step</strong> — plus optional "Send diagnostic report" and "Email me the fix" (both consent-gated).</p>' +
      '<h2>Common ones</h2><ul>' +
      '<li><code>QEMU exited (code 1)</code> — usually a machine-type mismatch. Inspector &rarr; Machine &rarr; try <code>pc</code> instead of <code>q35</code>.</li>' +
      '<li><code>Only 8.2 GB free</code> — the disk guard stopped an image import; free up space (needs \u226510 GB headroom).</li>' +
      '<li><code>link.wire.failed</code> — the silent ICMP probe between two ports failed; check the interface config on both ends.</li></ul>' +
      '<div class="kb-callout"><p>Error codes deep-link to this knowledge base, so a toast can take you straight to the fix.</p></div>'
  },
  {
    id: 'faq', cat: 'Reference', title: 'FAQ',
    lede: 'Quick answers to the questions we hear most.',
    body:
      '<h2>Is the free tier really free?</h2><p>Yes — 25 nodes and 3 labs, forever. No credit card.</p>' +
      '<h2>Does Netplex ship vendor images?</h2><p>No. You bring your own images under your own licences; Netplex ships none.</p>' +
      '<h2>Will a licensing blip kill my running lab?</h2><p>Never. There\u2019s a grace window — reliability beats DRM zeal.</p>' +
      '<h2>Which OS does it run on?</h2><p>Ubuntu 26.04 LTS today (appliance or bare-metal). Windows & macOS compute hosts are on the roadmap for end of 2026.</p>'
  }
];
