# netplex.io — Marketing Site · Claude Code Build & Deploy Prompt

> Hand this to Claude Code. It describes the static marketing site for **netplex.io**,
> what's done, what to wire up, and how to ship it to GitHub Pages. **Read the honesty
> constraints in §6 before touching any product claims.**

---

## 1. What this is

A **static, dark-first marketing website** for **netplex.** — the modern network lab: a
distributed network digital-twin, execution and automation platform (the product is built in a
separate repo). This site is the GTM surface: landing, product tour, pricing, knowledge base,
forums, about, contact, download, roadmap, legal. **No framework, no build step, no backend.**
Plain HTML + CSS + vanilla JS, deployed to **GitHub Pages** at the custom domain **netplex.io**.
Keep everything relative-pathed.

Positioning: *"The modern network lab — built for engineers who've outgrown EVE-NG."*
Homepage tagline: **Emulate. Automate. Ship.** Designed & built in **Australia** by network engineers.

## 2. Stack & conventions

- **Pure static.** Hand-authored HTML per page; shared CSS/JS in `assets/`. Do **not** introduce
  React, a bundler, Tailwind, or an SSG — it would fight the existing code and the Pages deploy.
- **Fonts:** **Quicksand** for the `netplex.` wordmark (`--font-display`), **Geist** for all other
  UI (`--font-ui`), **JetBrains Mono** for data/code (`--font-mono`). Loaded in `assets/site.css`.
- **No emoji, no AI-slop gradients/glassmorphism.** Flat, matte, one warm-orange accent.
- Canonical HTML (close every tag, double-quote attributes) so the visual editor keeps working.

## 3. File map

```
index.html        Landing — hero (rotating marketing line + live topology), vendor wall,
                  EVE-NG comparison, Emulate/Automate/Ship, stitch teaser (roadmap), 5-tier
                  pricing teaser, Australian strip, CTA
product.html      Main product tour — canvas, 6 themes, image pipeline, vendor wall, consoles,
                  API/automation, Pro toolbox, distributed fabric (roadmap)
pricing.html      LOCKED 5 tiers (Community / Plus / Pro / Classroom / Enterprise), monthly⇄annual
                  toggle, full feature matrix, FAQ, Enterprise anchors
contact.html      Topic-routed contact form (enquiry/technical/collaboration/sales) + channels
about.html        Australian company, network-engineer team grid, story, principles
kb.html           Knowledge Base — wiki-style; sidebar + category cards + hash-routed article
                  reader + client-side search (content in assets/kb-content.js)
forums.html       Community forums — category list, latest threads, top contributors, tags
roadmap.html      Now / Next / Later columns with status pills + vote buttons
download.html     DMG-style install window (Appliance / ISO / Script tabs), download cards, steps
legal.html        Privacy / Terms / Disclaimer / OSS notices with sticky TOC
CNAME             netplex.io  (GitHub Pages custom domain)

assets/site.css        Design tokens, 6 themes, 8 accents, nav/footer/buttons/primitives,
                       Appearance-panel styles. Midnight is the :root default. Accent #ff7a45.
assets/landing.css     Landing/product section styles
assets/pages.css       Shared styles for product/pricing/kb/forums/contact/about + mobile nav
assets/appearance.js   Theme + Accent picker (gear in nav); persists to localStorage
assets/nav.js          Mobile menu toggle + neutralises placeholder (data-ext) links
assets/topology.js     buildTopology() — animated mini network canvas (nodes static; link flow only)
assets/showcase.js     buildFabric() / buildPipeline() / buildThemes()
assets/vendors.js      buildVendors() — supported-vendor monogram wall (70+ vendors)
assets/kb-content.js   window.KB.CATS — categories→articles; add an entry to publish a KB doc
```

Every page repeats its own `<nav>` and `<footer>` inline (no includes). Nav order is
Product · Pricing · Knowledge Base · Forums · About · Contact. If you change nav/footer, change
all pages — or refactor to a tiny JS-injected partial, but keep it working on GitHub Pages.

## 4. Theming (already built — preserve it)

- `<html data-theme="…">` switches `midnight` (default), `graphite`, `obsidian` (dark) and
  `cloud`, `paper`, `sand` (light). `<html data-accent="…">` sets one of 8 accents. **All
  accent-derived tokens come from `--accent` + `--accent-ink` via `color-mix` — never re-hardcode
  accent values.** Default accent is warm orange `#ff7a45`.
- ⚠️ Do **not** put `background`/`background-color` in any `transition` that paints a
  `var(--accent)` fill (e.g. `.btn`) — it freezes the custom-property value and the fill won't
  recolour when the accent changes.
- Each page has a tiny inline no-flash script in `<head>` applying saved theme/accent before paint.
  Keep it on any new page.

## 5. TODO — what to wire up for launch

1. **Real links.** `Status`, `Changelog`, `Sign in` and forum/account actions are stubbed as
   `<a href="#" data-ext>` (a JS handler preventDefaults them). Point them at real endpoints.
2. **Contact form.** `contact.html` is client-side only (shows a success state). Wire it to a
   static-friendly handler (Formspree / Cloudflare Worker), not a server. Route by the `topic` field.
3. **Forums.** `forums.html` is a static front door with representative threads. To go live, back it
   with GitHub Discussions (point category cards + "Start a discussion" at the repo Discussions URL)
   or a hosted forum; optionally embed Giscus. Feature-request votes feed the roadmap.
4. **Knowledge Base.** `kb.html` renders `window.KB.CATS` from `assets/kb-content.js` with hash
   routing + client search — add/edit entries there. Migrate to Docusaurus/MkDocs later if needed.
5. **Download artifacts.** `download.html` links are placeholders. Wire the `.ova`, `.iso` and
   install-script URLs + real SHA-256 checksums once packaging is decided. Keep the "builds not live
   yet" note honest until they are.
6. **OG/meta + favicon.** Add Open Graph tags, a favicon and a social card. The logo **mark** is
   still under review — the wordmark `netplex.` stands alone for now; don't reintroduce the old
   hexagon mark.

## 6. Honesty constraints (do not violate)

- **VXLAN multi-chassis / distributed multi-host fabric is a ROADMAP item — it is NOT a finished,
  shipped feature.** The site teases "two machines, one topology" / "half your lab at home, half in
  the cloud", and every place it appears is explicitly flagged **Roadmap · beta** with a plain-text
  line stating single-host emulation + automation ship today and the distributed stitch is in beta.
  Keep it that way. Any engineering handoff must state plainly it is **planned/beta**, not complete.
- The EVE-NG comparison on `index.html` is deliberately **fair** (EVE-NG Pro has a *basic* API shown
  as partial; GNS3 *has* an API; Containerlab *auto-pulls* images). Do not "sharpen" it into
  inaccuracies — accuracy is the brand.
- Vendor wall: netplex. ships device **definitions**; users supply their own licensed images. All
  vendor names/marks belong to their owners (stated on the page and in `legal.html`).
- Pricing is the **locked 5-tier model** (Community free · Plus $9.99/$99 · Pro $19.99/$199 ·
  Classroom $49.99/$449 per instructor · Enterprise contact/perpetual). Keep copy consistent with it.

## 7. Deploy to GitHub Pages

1. Push to GitHub. **Settings → Pages**, source = `main` branch root (`/`).
2. `CNAME` (contains `netplex.io`) is present — Pages picks it up. Add DNS at the registrar
   (apex `A`/`ALIAS` to Pages IPs, `www` `CNAME` → `<user>.github.io`). Enable **Enforce HTTPS**.
3. Everything is relative-pathed, so it also works from a project subpath for previews — don't
   introduce root-absolute (`/assets/...`) paths.

## 8. Brand quick-reference

- Wordmark: **`netplex.`** — lowercase, **Quicksand**, with a **round** accent dot (CSS `.dotmark`,
  scales with font-size). Logo **mark**: under review — wordmark stands alone.
- Accent default warm orange `#ff7a45`; users can retint via the Appearance gear.
- Status labels Capitalise first letter (Running, Stopped). Pills: solid fill, white text/dot.
- Tone: confident, honest, engineer-to-engineer, proudly Australian. **Emulate. Automate. Ship.**

---

*Built as the GTM site to win EVE-NG / PNETLAB / GNS3 / Containerlab users. Honesty over hype.*
