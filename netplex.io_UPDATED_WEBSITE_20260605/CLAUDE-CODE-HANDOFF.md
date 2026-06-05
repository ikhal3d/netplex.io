# netplex.io — Claude Code Handoff (deploy + integrate)

> Single actionable prompt. Hand this whole folder to Claude Code. Architecture
> detail lives in `CLAUDE-CODE-BUILD-PROMPT.md`; honesty rules live in `CLAUDE.md`.
> **Read §4 before changing any product claim.**

## 0. What you're receiving

A complete, static, dark-first marketing website for **netplex.** (the modern network
lab). No framework, no build step, no backend. Plain HTML + CSS + vanilla JS, designed to
deploy to **GitHub Pages** at **netplix.io** (CNAME included). All paths are relative — keep
them that way.

```
Pages:   index · product · pricing · contact · about · kb · forums · roadmap ·
         download · faq · support · legal · brand
assets/: site.css landing.css pages.css  (styles)
         appearance.js nav.js topology.js showcase.js vendors.js kb-content.js  (JS)
         favicon.svg
Config:  CNAME (netplex.io)
Docs:    CLAUDE.md  CLAUDE-CODE-BUILD-PROMPT.md  (this file)
```

## 1. Your task

1. **Ship it to GitHub Pages.** Settings → Pages → source = `main` root. The `CNAME`
   (`netplex.io`) is present; add the apex `A`/`ALIAS` + `www` `CNAME` DNS records and enable
   Enforce HTTPS. Do not introduce root-absolute (`/assets/...`) paths — relative only.
2. **OR merge into the product repo.** If integrating into the main netplex repo, copy the
   pages + `assets/` into the marketing/site directory, preserving relative paths, then
   **delete the copies from this hand-off folder** once verified.
3. **Wire the stubs.** Every placeholder is an `<a href="#" data-ext>` (a JS handler
   preventDefaults them). Point them at real endpoints:
   - `Sign in` and `Get netplex.` → the app login / download artifacts
   - Footer `Status`, `Changelog` → real status + changelog pages (build them if wanted)
   - `contact.html` form → a static-friendly handler (Formspree / Cloudflare Worker); route
     the `topic` field: **Technical → support@netplex.io**, everything else → **info@netplex.io**
   - `support.html` ticket form → your helpdesk backend (see §3)
   - `forums.html` → real forum/GitHub Discussions (representative threads are placeholders)
4. **Download artifacts.** `download.html` `.ova` / `.iso` / install-script links + SHA-256
   are placeholders. Wire them when packaging is decided; keep the "builds not live yet" note
   honest until they are.
5. **Brand assets.** `brand.html` is the canonical kit. Export the mark (`assets/favicon.svg`
   art) to PNG/ICO at 16/32/48/180/512 and add `apple-touch-icon` + OG/social-card meta.

## 2. Files you may DELETE once done

After you have deployed or merged-and-verified, remove these dev-only files from the
**production output** (they must NOT ship to the live site):

- `CLAUDE.md` — internal project notes (pricing strategy, honesty rules)
- `CLAUDE-CODE-BUILD-PROMPT.md` — architecture reference
- `CLAUDE-CODE-HANDOFF.md` — this prompt

If you merged pages into another repo (rather than deploying this folder as-is), also delete
the now-duplicated source pages/assets from this hand-off folder after the copy is verified.
Do not delete `CNAME`, `favicon.svg`, or any page/asset the live site references.

## 3. Ticketing (recommended approach — closed source)

The product code is **private**, so do **not** use public GitHub Issues for support. Keep
`support.html` as the on-site portal and back it with a hosted helpdesk (e.g. a desk tool or a
Worker that creates tickets and emails support@netplex.io). Authenticate "My tickets" behind
the app login. The current page is a working front-end skeleton: category, priority, tier,
sample queue, submit → success state.

## 4. Honesty constraints (do not violate)

- **Multi-host VXLAN stitch is ROADMAP / beta — NOT shipped.** Every place it appears is
  flagged `Roadmap · beta` and paired with a line saying single-host emulation + the full
  automation toolbox ship today. Keep it that way. Any engineering copy must say planned/beta.
- The EVE-NG comparison is deliberately **fair** (EVE-NG Pro has a *basic* API → partial; GNS3
  *has* an API; Containerlab *auto-pulls* images). Don't sharpen it into inaccuracies.
- Vendor wall = supported **device definitions**; users supply their own licensed images. All
  vendor names/marks belong to their owners (stated on-page and in `legal.html`).
- Pricing is the locked 5-tier model: Community free · Plus $9.99/$99 · Pro $19.99/$199 ·
  Classroom $49.99/$449 per instructor · Enterprise contact (subscription **or** perpetual).
  Annual ≈ 2 months free. Node specs are absolute: Community 20, Plus 50, Pro 1,000.

## 5. Brand (must match `brand.html` exactly)

- Logo = **fan-in multiplexer mark** (`assets/favicon.svg` art) in netplex orange + the
  **netplex** wordmark in **Quicksand 600**, tracking `-0.02em`, with a **round dot** (CSS
  circle, `0.16em`, never the text period).
- Accent `#ff7a45` (orange); all accent-derived tokens come from `--accent` + `--accent-ink`
  via `color-mix` — never re-hardcode. 6 themes + 8 accents via the appearance gear.
- Fonts: **Geist** (UI), **JetBrains Mono** (data/code), **Quicksand** (wordmark only).
- Pills: solid fill, white text + white dot. Status labels Capitalise first letter.
- Tone: confident, honest, engineer-to-engineer, proudly Australian. **Emulate. Automate. Ship.**

## 6. Verify before you call it done

- Every page loads with no console errors; nav (Product · Download · Pricing · Knowledge Base
  · Forums · Roadmap · Support) and footer are consistent across all pages.
- Theme/accent picker persists across pages; pricing Monthly⇄Annual toggle works on both the
  landing teaser and `pricing.html`; KB search + article routing work; roadmap demand-counter
  upvotes persist; download-page drag animation lands on the target in both tabs.
- No em-dashes anywhere (house style: hyphens).
