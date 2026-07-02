# Octopus Design System

The brand & product design system for **Octopus Home Maintenance & Renovation** — Dubai's top-rated home maintenance company (est. 2013, rated 4.9 by 1,400+ residents). This system carries Octopus's official 2021 visual identity into reusable tokens, components, UI kits and document/slide templates.

> **Tagline:** *Best Home Maintenance & Renovation Company in Dubai.*
> Octopus MEP Technical Services LLC — AC, plumbing, electrical, renovation & Annual Maintenance Contracts (AMC).

---

## Sources

Everything here is derived from the official brand package the client supplied (`Branding.zip`) plus the public site. Stored for reference (the reader may not have access):

- **Brand asset library** (`Branding/ASSETS LIBRARY/`) — extracted into this project:
  - `Visual Identity System/OCT - Visual Identity System.pdf` — Brand Guidelines 2021 (logo use, sizing, colours, fonts). Kept at `_scratch/visual-identity.pdf`.
  - `03 Color Set/OCT - Colorset.pdf` + Adobe `.ase` swatches — exact named colours. Kept at `_scratch/colorset.pdf`.
  - `02 Fonts/` — Baloo + Verdana TTFs → `assets/fonts/`.
  - `01 Logo/` — primary (wordmark) & secondary (octopus mark), light/dark, SVG+PNG → `assets/logos/`.
  - `05 Icon Set/` — colour **spot illustrations** of services → `assets/illustrations/`.
  - `Docs/` — letterhead, AC infographics, email signature (reference only).
- **Website:** https://octopus.ae/  ·  **Instagram:** https://www.instagram.com/octopus_ae/
- Contact in brand: 800 3993 · hello@octopus.ae · Warehouse 20, Arenco Warehouse, DIP-1, Dubai.

> ⚠️ **Font substitution flag:** the supplied **Baloo** file is single-weight (`baloo.regular.ttf`). It is shipped as the display face across all weights. If you need true bold/extra-bold display weights, send the full Baloo family (or we can fall back to **Baloo 2** from Google Fonts, which is metrically close). Verdana ships with regular + bold + italics, all provided.

---

## Products / surfaces represented

1. **Marketing website** (`octopus.ae`) — service-led WordPress site: hero, service grid, "why choose us", process steps, AMC priority band, reviews, blog, quote form. → `ui_kits/website/`
2. **Report / document template** — branded A4 report (cover, contents, body, data tables, AMC/service summaries). → `templates/report/`
3. **Slide deck template** — 16:9 branded slides for proposals & service decks. → `templates/` (deck) / `slides/`
4. **Social templates** — Instagram-format brand posts. *(planned — see CAVEATS)*

---

## Content fundamentals (voice & copy)

**Tone:** trustworthy, local, service-focused. Confident and reassuring without being corporate or salesy. Octopus sells *peace of mind* — "you don't wait, you don't follow up, you don't chase technicians."

- **Person:** speaks as **"we"** (the company) directly to **"you"** (the resident). Warm and human: *"We reach your location within 60 minutes, guaranteed."*
- **Casing:** Sentence case for body and most headings. Headlines often **bold a key phrase** within a normal-weight line — e.g. "Best **Maintenance Company** in Dubai", "People **Love** using Octopus". Mirror this with `<strong>`/brand-purple emphasis spans.
- **Sentence style:** short, declarative, benefit-first. Plain English, no jargon. Light staccato fragments for emphasis: *"You don't wait. You don't follow up."*
- **Proof & specifics:** lean on concrete trust signals — *"Since 2013," "4.9 rated by 1,400+ residents," "British-trained technicians," "60-minute priority response," "fixed pricing, no hidden costs."* Always prefer a real number to a vague claim.
- **Geography:** Dubai-specific and proud of it — name communities (Marina, JVC, Palm Jumeirah, Business Bay, Arabian Ranches). Reference Dubai Municipality / British (BICSc) standards.
- **CTAs:** action + ease. *"Speak to an Expert," "Get a Free Quote," "Book free Consultation," "Know More."* WhatsApp & phone are first-class.
- **Emoji:** **not** used in brand copy. Don't introduce them. Use the brand illustrations and the star/rating glyph instead.
- **Avoid:** hype adjectives stacked without proof, exclamation overload, ALL-CAPS shouting (small caps overlines are fine), and inventing stats.

**Reusable copy snippets**
- Eyebrow/overline: `HOME MAINTENANCE · DUBAI`, `SINCE 2013`, `ANNUAL MAINTENANCE CONTRACT`
- Trust line: `Rated 4.9 ★ by 1,400+ Dubai residents`
- Promise: `60-minute priority response for AMC clients`
- Sign-off: `Octopus MEP Technical Services LLC`

---

## Visual foundations

**Colour.** Four official brand colours (named in the swatch), used decisively, not gradient-heavy:
- **Octopus Purple — `#C028B9`** ("Byzantine", Pantone Purple C). The hero brand colour: logo, primary CTAs, key emphasis, illustration accents. Used as a confident flat fill — *not* in blue-purple gradients.
- **Navy — `#13143B`** ("Haiti", Pantone 2768 CP). Ink for headlines & body-strong; the dark surface for heroes/footers.
- **Charcoal — `#373A36`** ("Zeus", Pantone 447 C). Neutral text & anchor for the warm-grey ramp.
- **White / `#F7F7F7` mist.** Page and subtle section bands. The system is **light-first**, white-dominant, with purple as the punctuation and navy for depth.
- Functional colours (success-green, amber rating, red urgent, info-blue) are derived for product states; keep them quiet next to the purple.

**Type.** Display in **Baloo** — rounded, friendly, geometric, single-weight; hierarchy comes from *size*, not weight. Body in **Verdana** — highly legible at small sizes, regular + bold. Headlines mix a normal-weight line with a bold/purple emphasis phrase. Overlines are uppercase Verdana-bold with wide tracking (`0.14em`).

**Shape & radius.** Soft and rounded throughout to echo the Baloo letterforms and the octopus mark — cards `--radius-lg/xl` (20–28px), pills for chips & some buttons, generous `--radius-2xl` on feature panels. Nothing sharp-cornered by default.

**Backgrounds.** White-dominant with `#F7F7F7` section bands; navy for dramatic/dark sections (hero, footer, AMC promise). Photography is real-world Dubai service work (technicians in branded magenta polos) — warm, bright, natural light, no heavy filters. **Spot illustrations** (flat, colourful, character-driven technicians on small purple ground-ellipses) carry service explainers and empty states. No purple→blue mesh gradients, no glassmorphism, no noise/grain textures.

**Cards.** White fill, soft neutral shadow (`--shadow-sm/md`, cool navy-tinted, low opacity), `--radius-lg`+, hairline `--border` (`#DCDCDA`) only when on white-on-white. Feature/price cards may invert to navy or carry a purple top-accent. Avoid the "rounded box + coloured left-border" cliché.

**Elevation / shadow.** Soft, diffuse, **neutral** (navy-tinted greys, never coloured). A single brand-tinted glow (`--shadow-brand`) is reserved for primary CTA hover only.

**Borders & dividers.** 1px warm-grey hairlines (`--border`); 2px for emphasis/focus. Dividers are the lightest grey (`--divider`).

**Motion.** Purposeful and gentle — fades + small translateY rises on entrance, `--ease-out`; `120–360ms`. Buttons lift slightly and gain the brand glow on hover. No bounces, no infinite decorative loops, respect `prefers-reduced-motion`.

**Hover / press.** Hover: primary darkens to `--brand-strong` (`#9C1F96`) + soft lift + glow; secondary/ghost gains a `--brand-tint` wash. Press: settle back down (translateY 0) and slightly darken — subtle scale-down (~0.99) acceptable, no big squish.

**Transparency / blur.** Sparing. Light scrims over photos for legibility (navy at 50–70%), `--text-on-dark-dim` for secondary text on dark. Avoid frosted-glass everywhere; reserve subtle blur for sticky headers over imagery only.

**Layout.** Containers up to `--container-xl` (1280px), 8-pt spacing grid, generous section padding (`--space-16/20`). Comfortable, airy, not dense. Sticky header on web. Strong left-aligned headlines with an overline above.

---

## Iconography

Octopus does **not** ship a UI icon font or line-icon set. The supplied "Icon Set" is actually a library of **flat colour spot illustrations** (technicians performing AC service, plumbing, electrical, duct cleaning, AMC) — stored in `assets/illustrations/`. Use these for:
- service category tiles, explainer steps, empty states, report section openers, hero support art.
They feature characters in blue/teal workwear on small **purple ground-ellipses**; treat the purple as the connective brand cue.

**UI icons (functional — arrows, check, phone, star, menu, etc.):** none provided, so we substitute **[Lucide](https://lucide.dev)** via CDN — rounded caps & joins, `~1.75–2px` stroke, which sits naturally beside Baloo's rounded forms. **⚠️ Substitution flagged** — if Octopus has a preferred functional icon set, send it and we'll swap. Set Lucide stroke to `--text-strong`/`--brand` and size on the 8-pt grid (16/20/24).

- **Emoji:** never in brand surfaces.
- **Unicode glyphs:** the rating **★** (filled star, `--rating` amber) is the one sanctioned glyph, matching the site's review badges. Phone/WhatsApp use Lucide.
- The **octopus mark** (`assets/logos/secondary-*`) is the brand emblem — use it as a favicon, watermark, loader, and decorative motif; do not redraw it.

---

## Index / manifest

**Root**
- `styles.css` — global entry (links the token files). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for portable use.

**`tokens/`** — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css` (radius/shadow/motion/layout), `base.css`.

**`assets/`** — `fonts/` (Baloo, Verdana), `logos/` (primary wordmark + secondary octopus mark · light/dark · svg+png), `illustrations/` (service spot illustrations), `icons/` *(legacy name → see illustrations)*.

**`components/core/`** — reusable React primitives (Components group in the Design System tab): `Button`, `Badge`, `Tag`, `Rating`, `Alert`, `Card`, `StatCard`, `ServiceCard`, `Input`. Each has `.jsx` + `.d.ts` + `.prompt.md`; `core.card.html` is the showcase.

**`templates/`** — `report/Report.dc.html` (branded A4 service-report template — **primary deliverable**; cover, executive summary, service log, recommendations). A Design Component; consuming projects load it via `ds-base.js`.

**`ui_kits/`** — `website/` (octopus.ae homepage recreation: `index.html` + `parts.jsx`, `sections-top.jsx`, `sections-bottom.jsx`, `App.jsx`).

**`slides/`** — branded 16:9 sample slides: `title`, `agenda`, `services`, `stats`, `quote`, `closing`.

**`guidelines/` / specimen cards** — foundation `@dsCard` HTML files surfaced in the Design System tab (Colors, Type, Spacing, Brand).

---

*Octopus MEP Technical Services LLC © 2026. Visual identity © Octopus, 2021.*
