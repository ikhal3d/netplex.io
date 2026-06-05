# Netplex.io — marketing site · project notes

Persistent instructions for this project:

- **VXLAN multi-chassis fabric is a ROADMAP item, not shipped.** When writing the
  Claude Code build/handoff prompt (or any engineering handoff), state explicitly that
  the **distributed multi-host VXLAN multi-chassis topology is planned/beta on the roadmap**,
  not a finished feature. The marketing site may tease it, but the build prompt must be honest
  that it is not yet done.
- Static site, dark-first, deploys to **GitHub Pages** with `CNAME → netplex.io`. Keep all paths relative.
- Shared design system in `assets/site.css` (ported Netplex midnight tokens + 6 themes + 8 accents).
  Theme/accent picker in `assets/appearance.js`; product showcases in `assets/topology.js` + `assets/showcase.js`.
- Wordmark is **`netplex.`** (accent-coloured dot). Logo mark: under review.
- Honesty in comparisons: EVE-NG is browser-accessed (partial), GNS3 has an API, Containerlab auto-pulls images.
