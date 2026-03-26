# SSUNS UI SPEC (single source of truth)

Brand
- Colors: #142082 (navy), #4C9EFF (accent). Paper is cool ivory, never beige-dominant.
- Fonts:
  - Market Fresh: ONLY page titles + very small number of hero headlines.
  - Chivo: all body/UI, all paragraphs, all buttons, all nav labels, ALL metadata labels.
  - Petit Formal Script: rare accents only (signature line / ceremonial stamp).

Layout / Spacing
- No horizontal scroll on any route (desktop or mobile).
- Pages should feel airy like NAIMUN: reduce density, increase whitespace.
- Use consistent max-width + gutters across pages.
- Background images should be full-bleed where used (no boxed awkward crops).

Nav
- Sticky/anchored on scroll.
- Thinner height, larger readable font size.
- Dark background (navy-led), high contrast.
- Logo must always be visible (never dark-on-dark).

Buttons
- Must pass contrast: never white-on-white, never navy-on-navy.
- Centralize button styling via a small set of variants.

Images
- Committees: 4:3 crop everywhere (cards + detail hero).
- Use Next/Image everywhere.
- If missing, fallback to placeholder + TODO comment naming slug file.

Components / Motifs
- Remove random decorative SVGs that feel arbitrary.
- Use a minimal motif set only (report rule, corner ornament, tab shape, arrow) and keep it consistent.

Motion
- Subtle. Counters animate slow enough to notice.
- Small page-enter animation allowed (fade/slide 6–12px).
- Respect prefers-reduced-motion everywhere.