## JOUEL — Cinematic Luxury Jewelry Experience

A single immersive scrolling page that feels like a luxury fashion film paused inside a webpage. Editorial minimalism, cinematic motion, museum-like presentation.

### Structure (one page, five phases)

```
/  (src/routes/index.tsx)
├── Hero — "Entering the World of JOUEL"
├── Phase 2 — Philosophy & Craftsmanship
├── Phase 3 — Collection Showcase
├── Phase 4 — Storytelling
└── Phase 5 — Final Showcase
```

### Design system

- **Typography**: Instrument Serif (display) + Manrope (body), loaded via Google Fonts in `__root.tsx`. Oversized editorial scaling.
- **Palette** (oklch tokens in `src/styles.css`):
  - `--background` warm cream (~oklch 0.97 0.012 85)
  - `--foreground` soft charcoal (~oklch 0.22 0.01 60)
  - `--muted` pearl gray, `--accent` subtle muted gold (~oklch 0.72 0.08 75)
- **Motion: Lenis smooth scroll + Framer Motion for slow, breathing reveals. Custom easing [0.22, 1, 0.36, 1], durations 1.2–2.4s. No bouncy springs.**
  **The website should always prioritize restraint over spectacle.**
  **If a section feels visually overloaded:**
  **reduce elements instead of adding more.**
  **Luxury should come from:**
  **- pacing**
  **- silence**
  **- composition**
  **- atmosphere**
  **- controlled motion**
- The website should maintain strong cinematic depth layering throughout the experience using foreground, midground, and background composition separation.
  The interface should feel spatial and immersive rather than flat.

### Hero

- Full-bleed cream backdrop with subtle film grain + soft vignette overlay.
- **Oversized "JOUEL"** in Instrument Serif, set behind the model — split into two halves (`JOU` left, `EL` right) so the model video occupies the negative space center, recreating the reference layout.
- **Model video**: copy `Micro_animations_for_jewelry_model_202605071432.mp4` to `public/`, autoplay muted loop playsInline, centered full-bleed height, layered above background type, below floating elements.
- Foreground cinematic depth layer:
  - drifting jewelry fragments
  - reflective diamond particles
  - subtle floating rings
  - soft atmospheric dust
  - cinematic haze overlays
  Movement should feel extremely subtle and breathable.
  Create clear foreground / midground / background separation to enhance immersive luxury depth.
  Avoid excessive particles or obvious decorative effects.
- Editorial side captions: "[ Since 2017 ]" top-right, short philosophy paragraph top-left, mirroring the reference.
- Bottom strip with three small editorial cards (New Collection / Advent / Coco-style ring) — kept restrained.
- Subtle ambient lighting movement should exist throughout the hero section.
  Examples:
  - soft reflection sweeps
  - slow-moving cinematic glow
  - gentle gold light diffusion
  - ambient shimmer across jewelry surfaces
  Lighting motion should remain minimal, elegant, and atmospheric.

### Phase 2 — Philosophy & Craftsmanship

- Asymmetric two-column editorial layout. Generous whitespace.
- Jewelry should emerge like sculptural architecture or museum installation art.
  Animations should feel:
  - poetic
  - elegant
  - slow
  - cinematic
  Examples:
  - gemstone frameworks forming gradually
  - floating gold structures aligning
  - jewelry materializing piece-by-piece
  - sculptural luxury assembly
  Avoid robotic or sci-fi mechanical motion.
  The movement should feel artistic and emotionally crafted.
- Pull-quote in oversized serif. Small Manrope captions like museum wall labels.

### Phase 3 — Collection Showcase

- Three "exhibition pieces", each its own full-viewport panel — not a grid.
- Each collection panel should feel like an isolated luxury exhibition piece.
  Composition should emphasize dramatic editorial scale contrast:
  - massive whitespace
  - small precious jewelry object
  - oversized typography
  - microscopic museum-style captions
  Jewelry should float subtly within the space using slow cinematic motion and delicate reflective shimmer.
  The experience should feel calm, rare, and emotionally luxurious rather than commercial.

### Phase 4 — Storytelling

- Cinematic full-bleed image with parallax.
- Poetic verses fade in line-by-line as user scrolls (staggered Manrope/Instrument Serif mix).
- The storytelling section should introduce emotional silence and restraint.
  Reduce visual movement here to create breathing space.
  Some moments should feel:
  - still
  - dreamlike
  - quiet
  - emotionally suspended
  Ambient atmosphere should remain subtle and cinematic without overwhelming the emotional pacing.

### Phase 5 — Final Showcase

- Quiet closing composition: oversized serif word ("JOUEL" or "Eternity"), tiny gold-accent caption, no aggressive CTA. Just a whisper-thin link "[ Discover the Atelier ]".
- Minimal footer.

### Imagery (AI-generated, premium tier)

Generate into `src/assets/`:

1. `craft-1.jpg` — close-up of hands setting a diamond, soft cinematic light
2. `craft-2.jpg` — gold ring sculpture macro on cream backdrop
3. `collection-1.jpg` — single pearl earring, museum lighting
4. `collection-2.jpg` — diamond solitaire ring, dark velvet shadow
5. `collection-3.jpg` — gold chain bracelet draped, editorial
6. `story-hero.jpg` — atmospheric model wearing jewelry, fashion-film still

### Files to create / modify

- `src/styles.css` — replace tokens with cream/charcoal/gold palette, add font families, grain + ambient utilities.
- `src/routes/__root.tsx` — add Google Fonts links + per-page SEO meta (title "JOUEL — Cinematic Jewelry Atelier", OG tags).
- `src/routes/index.tsx` — replace placeholder, compose all five phase sections.
- `src/components/jouel/` — `Hero.tsx`, `Philosophy.tsx`, `Collection.tsx`, `Story.tsx`, `Finale.tsx`, `Grain.tsx`, `FloatingParticles.tsx`, `LenisProvider.tsx`.
- `public/jouel-model.mp4` — copied from upload.

### Dependencies

`bun add framer-motion lenis`

### Technical notes

- Lenis wrapped in a client-only provider (uses `useEffect`), safe with SSR.
- Video element gets `preload="auto"`, `poster` (first generated still) for graceful SSR.
- All animations respect `prefers-reduced-motion`.
- Only the index route changes; this is purely frontend/presentation work.