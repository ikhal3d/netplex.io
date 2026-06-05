<div align="center">

<img src="https://raw.githubusercontent.com/ikhal3d/netplex/main/frontend/public/favicon.svg" width="64" height="64" alt="netplex." />

# netplex.

**The distributed network digital twin platform.**

Design topologies. Boot real vendor hardware. Automate everything.

[![Live](https://img.shields.io/badge/Live%20Platform-netplex.io-ff7a45?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4=)](https://netplex.io)
[![Docs](https://img.shields.io/badge/Documentation-docs.netplex.io-4a9eff?style=for-the-badge)](https://docs.netplex.io)
[![License](https://img.shields.io/badge/License-Enterprise%20%2F%20Community-22c55e?style=for-the-badge)](#editions)

</div>

---

## What is netplex.?

netplex. is a **distributed execution platform** for network infrastructure digital twins — think GNS3 + EVE-NG + Terraform + NetBox, rebuilt as a modern, cloud-native, event-driven platform.

| | |
|---|---|
| 🖥️ **Visual canvas** | Drag-drop topology designer with 30+ vendor node types, live link activity, and real-time event streaming |
| ⚡ **Real emulation** | QEMU/KVM VMs, Docker containers, Linux namespaces and MicroVMs — not simulations |
| 🔌 **API-first** | Every capability exposed as REST + WebSocket. CI/CD-ready from day one |
| 🌐 **Distributed** | Multi-host cluster fabric with VXLAN inter-node links — scale across bare metal |
| 🤖 **Automation-native** | Built-in Terraform provider, Ansible collection, and MCP server for AI integration |
| 🎓 **Classroom-ready** | Instructor / student pods, isolated lab environments, assignment tracking |

---

## Supported Network Vendors

Run real vendor NOS images in your browser. netplex. handles image conversion, permission fixing, and boot verification automatically — no manual steps.

### 🔵 Cisco

| Product | Format | Notes |
|---|---|---|
| [IOSv / IOSvL2](https://www.cisco.com/c/en/us/products/routers/index.html) | qcow2 | L3 routers + L2 switches |
| [CSR 1000v / IOS-XE 16/17](https://www.cisco.com/c/en/us/products/routers/cloud-services-router-1000v-series/index.html) | qcow2 | Cloud Services Router |
| [Catalyst 8000v](https://www.cisco.com/c/en/us/products/routers/catalyst-8000v-edge-software/index.html) | qcow2 | Next-gen CSR replacement |
| [IOS XRv / XRv 9000](https://www.cisco.com/c/en/us/products/ios-nx-os-software/ios-xr-software/index.html) | qcow2 | Service Provider routing |
| [NX-OS 9K (Nexus)](https://www.cisco.com/c/en/us/products/switches/nexus-9000-series-switches/index.html) | qcow2 | Data center switching |
| [ASAv](https://www.cisco.com/c/en/us/products/security/adaptive-security-virtual-appliance-asav/index.html) | qcow2 | Firewall / VPN |
| [Firepower FTD 6/7](https://www.cisco.com/c/en/us/products/security/firepower-ngfw/index.html) | qcow2 | NGFW / IPS |
| [Catalyst 9000v](https://www.cisco.com/c/en/us/products/switches/catalyst-9000/index.html) | qcow2 | Enterprise switching |
| [Viptela SD-WAN](https://www.cisco.com/c/en/us/solutions/enterprise-networks/sd-wan/index.html) | qcow2 | vBond / vEdge / vSmart / vManage |
| [ISE](https://www.cisco.com/c/en/us/products/security/identity-services-engine/index.html) | qcow2 | Identity / AAA |

### 🔴 Juniper Networks

| Product | Format | Notes |
|---|---|---|
| [vSRX (JunOS 15.x+)](https://www.juniper.net/us/en/products/security/srx-series/vsrx-virtual-firewall.html) | qcow2 | **Recommended** virtual firewall |
| [vMX](https://www.juniper.net/us/en/products/routers/mx-series/vmx-virtual-router.html) | qcow2 | SP-grade virtual router |
| [vQFX](https://www.juniper.net/us/en/products/switches/qfx-series/vqfx-virtual-switch.html) | qcow2 | Data center virtual switch |
| [vJunos Router / Switch](https://www.juniper.net/us/en/products/routers/vjunos.html) | qcow2 | Next-gen vJunos platform |
| [vEVO](https://www.juniper.net/us/en/products/routers/vjunos.html) | qcow2 | vJunos Evolved |

### 🟠 Fortinet

| Product | Format | Notes |
|---|---|---|
| [FortiGate NGFW](https://www.fortinet.com/products/next-generation-firewall) | qcow2 | Primary NGFW product |
| [FortiManager](https://www.fortinet.com/products/management/fortimanager) | qcow2 | Centralized management |
| [FortiMail](https://www.fortinet.com/products/email-security/fortimail) | qcow2 | Email security |

### 🟢 Palo Alto Networks

| Product | Format | Notes |
|---|---|---|
| [PA-VM (PAN-OS)](https://www.paloaltonetworks.com/network-security/pa-vm) | qcow2 | Next-Generation Firewall |
| [Panorama](https://www.paloaltonetworks.com/network-security/panorama) | qcow2 | Centralized management |

### 🔵 Arista Networks

| Product | Format | Notes |
|---|---|---|
| [vEOS](https://www.arista.com/en/products/eos/eos-virtual) | qcow2 + ISO | EOS virtual switch |

### Other Enterprise Vendors

| Vendor | Product | Link |
|---|---|---|
| **Nokia** | SR OS (Timos) | [nokia.com](https://www.nokia.com/networks/ip-networks/sr-os/) |
| **Huawei** | AR1000v / USG6000v | [huawei.com](https://e.huawei.com/en/products/enterprise-networking) |
| **MikroTik** | Cloud Hosted Router (CHR) | [mikrotik.com](https://mikrotik.com/software) |
| **Extreme Networks** | ExtremeXOS / VOSS | [extremenetworks.com](https://www.extremenetworks.com/) |
| **Aruba / HPE** | CX Switch / ClearPass | [arubanetworks.com](https://www.arubanetworks.com/) |
| **Check Point** | Security Gateway | [checkpoint.com](https://www.checkpoint.com/) |
| **F5** | BIG-IP | [f5.com](https://www.f5.com/) |
| **Citrix** | NetScaler ADC | [citrix.com](https://www.citrix.com/products/citrix-adc/) |
| **pfSense** | pfSense Firewall | [pfsense.org](https://www.pfsense.org/) |
| **Barracuda** | NGFW | [barracuda.com](https://www.barracuda.com/) |
| **Versa Networks** | FlexVNF SD-WAN | [versa-networks.com](https://versa-networks.com/) |
| **VMware VeloCloud** | SD-WAN Edge | [vmware.com](https://www.vmware.com/products/velocloud-sd-wan.html) |
| **Silver Peak** | EdgeConnect | [silver-peak.com](https://www.silver-peak.com/) |
| **Infoblox** | NIOS (DDI) | [infoblox.com](https://www.infoblox.com/) |

### Open-Source Routers & Switches

| Project | Type | Link |
|---|---|---|
| **VyOS** | Routing OS — BGP, OSPF, VPN | [vyos.io](https://vyos.io/) |
| **FRRouting** | BGP / OSPF / IS-IS / MPLS suite | [frrouting.org](https://frrouting.org/) |
| **Cumulus Linux** | Open networking switch OS | [nvidia.com/networking](https://www.nvidia.com/en-us/networking/ethernet-switching/) |
| **OPNsense** | Firewall / router | [opnsense.org](https://opnsense.org/) |

---

## Supported Image Formats

netplex. **automatically** detects, converts, validates and fixes permissions — no manual `qemu-img` commands, no `fixpermissions` scripts.

| Format | Detection | Auto-conversion |
|---|---|---|
| `.qcow2` | ✅ Magic bytes `QFI\xfb` | Native — no conversion needed |
| `.vmdk` | ✅ Magic bytes `KDMV` / `COWD` | → qcow2 via `qemu-img` |
| `.ova` | ✅ ZIP + OVF manifest | Extract VMDK → convert → qcow2 |
| `.raw` / `.img` | ✅ Extension | → qcow2 via `qemu-img` |
| `.iso` | ✅ CD001 signature | Mount as CD-ROM |
| Docker image | ✅ Registry tag | `docker pull` + attach |

> VMware images (`.vmdk`, `.ova`) from ESXi, vSphere, Workstation and Fusion are all supported natively.

---

## DevOps & Automation Integrations

netplex. is built for teams that automate everything.

### Infrastructure as Code

[![Terraform](https://img.shields.io/badge/Terraform-Provider-7B42BC?style=flat-square&logo=terraform&logoColor=white)](https://registry.terraform.io/)
[![Ansible](https://img.shields.io/badge/Ansible-Collection-EE0000?style=flat-square&logo=ansible&logoColor=white)](https://galaxy.ansible.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Helm%20Chart-326CE5?style=flat-square&logo=kubernetes&logoColor=white)](https://helm.sh/)

```hcl
# Terraform — spin up a full lab topology
resource "netplex_lab" "bgp_peering" {
  name     = "bgp-peering-test"
  template = "isp"
  nodes = [
    { vendor = "cisco",   image = "cisco-csr1000vng-17.3" },
    { vendor = "juniper", image = "juniper-vsrxng-21.2"   },
  ]
}
```

```yaml
# Ansible — configure nodes at scale
- hosts: netplex_routers
  roles:
    - netplex.labs.configure_bgp
```

### CI/CD Pipelines

[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Supported-2088FF?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![GitLab CI](https://img.shields.io/badge/GitLab%20CI-Supported-FC6D26?style=flat-square&logo=gitlab&logoColor=white)](https://docs.gitlab.com/ee/ci/)
[![Bitbucket](https://img.shields.io/badge/Bitbucket%20Pipelines-Supported-0052CC?style=flat-square&logo=bitbucket&logoColor=white)](https://bitbucket.org/product/features/pipelines)
[![Jenkins](https://img.shields.io/badge/Jenkins-Supported-D24939?style=flat-square&logo=jenkins&logoColor=white)](https://www.jenkins.io/)

```yaml
# GitHub Actions — test your network changes before they go live
- uses: netplex/test-action@v1
  with:
    topology: topologies/datacenter.netplex
    test_plan: tests/bgp-convergence.yaml
```

### Observability & Monitoring

[![Grafana](https://img.shields.io/badge/Grafana-Dashboards-F46800?style=flat-square&logo=grafana&logoColor=white)](https://grafana.com/)
[![Prometheus](https://img.shields.io/badge/Prometheus-Metrics-E6522C?style=flat-square&logo=prometheus&logoColor=white)](https://prometheus.io/)
[![Elasticsearch](https://img.shields.io/badge/Elasticsearch-Logs-005571?style=flat-square&logo=elasticsearch&logoColor=white)](https://www.elastic.co/)
[![Wireshark](https://img.shields.io/badge/Wireshark-Packet%20Capture-1679A7?style=flat-square&logo=wireshark&logoColor=white)](https://www.wireshark.org/)

Live per-link packet capture streams directly to Wireshark. Node CPU/RAM/interface metrics flow into Prometheus and Grafana out of the box.

### Version Control & GitOps

[![GitHub](https://img.shields.io/badge/GitHub-Auto%20Backup-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/)
[![GitLab](https://img.shields.io/badge/GitLab-Auto%20Backup-FC6D26?style=flat-square&logo=gitlab&logoColor=white)](https://gitlab.com/)
[![Bitbucket](https://img.shields.io/badge/Bitbucket-Auto%20Backup-0052CC?style=flat-square&logo=bitbucket&logoColor=white)](https://bitbucket.org/)

Labs back up automatically as declarative `.netplex` YAML on every save — pushed to your git remote of choice via SSH deploy key. No tokens stored.

### AI & MCP

[![Claude](https://img.shields.io/badge/Claude%20MCP-Server%20Included-cc785c?style=flat-square)](https://anthropic.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI%20Compatible-REST%20API-412991?style=flat-square&logo=openai&logoColor=white)](https://openai.com/)

A built-in **Model Context Protocol (MCP) server** lets AI assistants (Claude, GPT-4, Gemini) read topology state, create labs, start nodes, and run test plans — turning natural language into live network infrastructure.

---

## Platform Architecture

```
┌──────────────────────────────────────────────────────────┐
│                    netplex. platform                     │
├───────────────┬──────────────────┬───────────────────────┤
│  Visual Studio│   REST / WS API  │   CLI / Terraform /   │
│  (browser)    │   (api-gateway)  │   Ansible / MCP       │
├───────────────┴──────────────────┴───────────────────────┤
│         Orchestrator  ·  Topology Engine  ·  Auth        │
├──────────────┬───────────────────┬───────────────────────┤
│ Node Manager │  Network Fabric   │   Image Manager       │
│ QEMU · Docker│  OVS · TAP · QoS │   Convert · Validate  │
│ Namespace    │  VXLAN (cluster)  │   SCP ingest          │
├──────────────┴───────────────────┴───────────────────────┤
│              PostgreSQL  ·  Redis Streams                 │
└──────────────────────────────────────────────────────────┘
```

**Every component is independently deployable.** Single-server Docker Compose for labs and classrooms. Multi-host cluster with VXLAN fabric for enterprise.

---

## Editions

| | **Community** | **Plus** | **Pro** | **Classroom** | **Enterprise** |
|---|:---:|:---:|:---:|:---:|:---:|
| Price | Free | $9.99/mo | $19.99/mo | $49.99/seat/mo | Perpetual licence |
| QEMU / Docker / Namespace | ✅ | ✅ | ✅ | ✅ | ✅ |
| LXC containers | — | ✅ | ✅ | ✅ | ✅ |
| MicroVM (Kata / Firecracker) | — | — | ✅ | ✅ | ✅ |
| Nodes per lab | 20 | 50 | Unlimited | Unlimited | Unlimited |
| Concurrent live labs | 1 | 5 | Unlimited | Unlimited | Unlimited |
| Link bandwidth cap | 10 Mbps | 100 Mbps | None | None | None |
| Snapshots | — | ✅ | ✅ | ✅ | ✅ |
| QoS / link impairment | — | ✅ | ✅ | ✅ | ✅ |
| Git auto-backup | — | GitHub | GitHub / GitLab / Bitbucket | All + SSH | All + SAMBA/SSH |
| Student roster & pods | — | — | — | ✅ | ✅ |
| Multi-host cluster | — | — | — | — | ✅ |
| OpenFlow / QinQ / DPDK | — | — | — | — | ✅ |
| Offline air-gap licence | — | — | — | — | ✅ |

---

## Quick Start

```bash
# 1 — Clone
git clone https://github.com/ikhal3d/netplex.git && cd netplex

# 2 — Configure
cp .env.example .env     # set SECRET_KEY, POSTGRES_PASSWORD

# 3 — Launch
docker compose up -d

# 4 — Open
open http://localhost:8088   # default: admin / admin
```

Minimum host requirements: **8 GB RAM · 4 vCPU · 50 GB SSD · KVM enabled**

Full installation guide → [docs.netplex.io/install](https://docs.netplex.io/install)

---

## Why Not EVE-NG or GNS3?

| | EVE-NG / GNS3 | **netplex.** |
|---|---|---|
| Import their labs | ❌ | ✅ Auto-convert `.unl` + `.gns3project` |
| Image management | Manual chmod / fixpermissions | ✅ Fully automatic |
| API | Limited / none | ✅ Full REST + WebSocket |
| CI/CD integration | ❌ | ✅ Native |
| Terraform / Ansible | ❌ | ✅ First-class providers |
| Multi-user isolation | Community: none | ✅ Per-user lab isolation |
| Classroom mode | PRO only (EVE-NG) | ✅ Classroom edition |
| Real-time topology events | ❌ | ✅ Redis Streams |
| Packet capture in browser | ❌ | ✅ Wireshark-compatible |
| AI-assisted topology | ❌ | ✅ MCP server |
| Format | XML / proprietary | ✅ Open JSON schema |

---

<div align="center">

**netplex. — Emulate everything. Automate everything. Own your network.**

[Website](https://netplex.io) · [Docs](https://docs.netplex.io) · [GitHub](https://github.com/ikhal3d/netplex) · [Discord](https://discord.gg/netplex)

</div>
