# Netplex.io — Marketing Site · Claude Code Build & Deploy Prompt

> Hand this to Claude Code. It describes the existing static marketing site for **netplex.io**,
> what's done, what to wire up, and how to ship it to GitHub Pages. **Read the honesty
> constraints in §6 before touching any product claims.**

---

## 1. What this is

A **static, dark-first marketing website** for Netplex — a distributed, API-first network
emulation platform (the product is built in a separate repo). This site is the GTM surface:
landing, pricing, roadmap, about, download, legal. **No framework, no build step, no backend.**
Plain HTML + CSS + vanilla JS, designed to deploy to **GitHub Pages** at the custom domain
**netplex.io**. Keep everything relative-pathed.

## 2. Stack & conventions

- **Pure static.** Hand-authored HTML per page; shared CSS/JS in `assets/`. Do **not** introduce
  React, a bundler, Tailwind, or a static-site generator — it would fight the existing code and
  the GitHub Pages deploy. If you add tooling, it must emit the same relative-path static output.
- **Fonts:** Geist (display/UI) + JetBrains Mono (data/code), loaded from Google Fonts in
  `assets/site.css`. Geist is the single display typeface site-wide.
- **No emoji, no AI-slop gradients/glassmorphism.** Flat, matte, one warm-orange accent. This
  mirrors the product's own design language.
- Canonical HTML (close every tag, double-quote attributes) so the visual editor keeps working.

## 3. File map

```
index.html        Landing — hero (rotating msg + live topology), comparison, themes,
                  distributed fabric, image pipeline, consoles, API, pricing teaser, CTA
pricing.html      Tiers (Free/Pro/Team/Enterprise), monthly⇄annual toggle, founder banner,
                  feature matrix, FAQ
roadmap.html      Now / Next / Later columns with status pills + vote buttons
about.html        Founder story, drag-to-fill portrait slot, principles
download.html     macOS-DMG-style install window (Appliance / ISO / Script tabs, animated
                  drag-arrow), download cards, 3-step guide
legal.html        Privacy / Terms / Disclaimer / OSS notices with sticky TOC
docs.html         Knowledge base — searchable sidebar of articles grouped by category,
                  client-rendered reader (content in assets/docs-content.js)
community.html    Forum front door — category grid, recent threads, GitHub-Discussions CTA
Logo Options.html Internal logo exploration (NOT linked in nav; can be deleted before launch)
CNAME             netplex.io  (GitHub Pages custom domain)

assets/site.css        Design tokens, 6 themes, 8 accents, nav/footer/buttons/primitives,
                       Appearance-panel styles. Midnight is the :root default.
assets/landing.css     Landing-page section styles
assets/appearance.js   Theme + Accent picker (gear in nav); persists to localStorage,
                       retints the whole live site across pages
assets/topology.js     buildTopology() — the animated mini network canvas (nodes STATIC,
                       only link flows animate; no fake throughput numbers)
assets/showcase.js     buildFabric() / buildPipeline() / buildThemes()
assets/docs-content.js KB_ARTICLES[] — add an entry to publish a doc (sidebar groups by `cat`)
assets/image-slot.js   <image-slot> web component for the About portrait
```

Every page repeats its own `<nav>` and `<footer>` inline (no includes). If you change nav/footer,
change all 6 — or refactor to a tiny shared partial injected by JS, but keep it working with
`file://` and on GitHub Pages.

## 4. Theming (already built — preserve it)

- `<html data-theme="…">` switches among `midnight` (default), `graphite`, `obsidian` (dark) and
  `cloud`, `paper`, `sand` (light). `<html data-accent="…">` sets one of 8 accents. **All
  accent-derived tokens come from `--accent` + `--accent-ink` via `color-mix` — do not re-hardcode
  accent values.**
- ⚠️ **Gotcha already fixed, don't reintroduce:** do **not** put `background`/`background-color` in
  any `transition` that paints a `var(--accent)` fill (e.g. `.btn`). This engine freezes the
  custom-property value mid-transition and the button won't recolor when the accent changes.
- Each page has a tiny inline no-flash script in `<head>` that applies saved theme/accent before
  paint. Keep it on any new page.

## 5. TODO — what to wire up for launch

1. **Real links.** `Status`, `Changelog`, `Sign in` and `Contact` are stubbed as
   `<a href="#" data-ext>` (a JS handler preventDefaults them). Point them at the real status page,
   changelog, app login and contact form. **Docs** (`docs.html`) and **Community**
   (`community.html`) are now real pages, wired into nav + footer.
2. **Live forum (GitHub Discussions).** `community.html` is the static front door; its categories and
   threads are representative samples. To go live on GitHub Pages: enable **Discussions** on the repo,
   point the category cards + "Open the forum" buttons at `https://github.com/<org>/netplex/discussions`,
   and optionally embed **Giscus** (its `<script>` with your repo ID) into the threads column.
   Feature-request votes feed the roadmap.
3. **Knowledge base.** `docs.html` renders `KB_ARTICLES` from `assets/docs-content.js` with client-side
   search — add/edit entries there. Migrate to Docusaurus/MkDocs later if needed; the static KB ships
   fine on Pages today.
4. **Download artifacts.** `download.html` links are placeholders ("builds drop at soft launch").
   Wire the `.ova`, `.iso` and install-script URLs and real SHA-256 checksums once packaging is
   decided. The on-page note already says builds aren't live yet — keep that honest until they are.
3. **Founder seat counter** (`#seatsLeft` on pricing) is static `100`. If you want it live, back it
   with a tiny JSON endpoint or a build-time value; otherwise leave it static.
4. **Analytics / consent.** None yet. If added, make it consent-first (the product's telemetry
   stance is opt-in only) — no tracking before consent.
5. **Forms.** No contact/newsletter form yet. If added, use a static-friendly handler
   (Formspree/Worker), not a server.
6. **OG/meta + favicon.** Add Open Graph tags, a favicon and social card using the stacked-planes
   mark before launch.

## 6. Honesty constraints (do not violate)

- **VXLAN multi-chassis / distributed multi-host fabric is a ROADMAP item — it is NOT a finished,
  shipped feature.** The site teases "two machines, one topology" and the roadmap lists
  single/small-cluster VXLAN as beta and larger clusters as Next. Keep it that way: marketing may
  show the vision, but never imply full multi-chassis is done. If you write product/engineering copy
  or a separate platform handoff, state plainly that it is **planned/beta**, not complete.
- The comparison table on `index.html` is deliberately **fair**: EVE-NG is browser-accessed (shown
  as *partial*, not absent), GNS3 *has* an API, Containerlab *auto-pulls* container images. Do not
  "sharpen" it into inaccuracies — accuracy is the brand.
- Pricing, limits and the "Pro free for 60 days" / founder offer are marketing intentions; keep them
  consistent with whatever billing actually ships.

## 7. Deploy to GitHub Pages

1. Push the repo to GitHub. In **Settings → Pages**, set source to the `main` branch root (`/`).
2. The `CNAME` file (contains `netplex.io`) is already present — Pages will pick it up. Add the DNS
   records at the registrar: an `ALIAS`/`A` to GitHub Pages IPs for the apex, and a `CNAME` for
   `www` → `<user>.github.io`. Enable **Enforce HTTPS**.
3. Because everything is relative-pathed, it also works from a project subpath
   (`<user>.github.io/netplex/`) for previews — don't introduce root-absolute (`/assets/...`) paths.
4. `image-slot.js` persists dropped images via a sidecar at the project root; on a static host it's
   read-only (fine — the About portrait can be hardcoded to a committed image instead before launch).

## 8. Brand quick-reference

- Wordmark: **`netplex.`** — lowercase, with a **round** accent dot (CSS `.dotmark`, scales with
  font-size). Mark: **stacked isometric planes** (option 06) in an orange rounded-square badge,
  glyph sized to fill the badge.
- Accent default warm orange `#ff6e36`; users can retint via the Appearance gear.
- Tone: confident, honest, engineer-to-engineer. "Beautiful, in your browser, worth paying for."

---

*Built as the GTM site to take EVE-NG / PNETLAB / GNS3 / Containerlab users. Honesty over hype.*
