## JOUEL — Cinematic Refinement Plan

Transform the current static editorial layout into a directed cinematic experience. Four focused rebuilds: Hero, Phase 2 (Philosophy), Phase 3 (Collection), Storytelling. No new routes, no backend — pure presentation work in `src/components/jouel/` and `src/styles.css`.

---

### 1. Typography system update

Add a bold grotesk for hero/display impact, keep Instrument Serif for emotional/poetic text only.

- Add **Inter Tight** (weights 700/900) via Google Fonts in `__root.tsx` (closest free Satoshi/General Sans alternative — no extra dep, no licensing risk).
- New CSS tokens in `src/styles.css`:
  - `--font-grotesk: "Inter Tight", system-ui, sans-serif`
  - `.font-grotesk` utility, tighter tracking (-0.04em), weight 900
- Rule: grotesk = hero + collection scale typography; serif = philosophy pull-quotes, story verses, finale.

---

### 2. Hero — full rebuild (`Hero.tsx`)

Recompose from split "Jou | el" into a single dominant centered "JOUEL" wordmark behind the model.

```text
┌─────────────────────────────────────────────┐
│  [eyebrow left]              [eyebrow right]│
│                                              │
│            J O U E L     ← grotesk, ~28vw   │
│              ▓▓▓▓                            │
│              ▓██▓        ← model video     │
│              ▓██▓           overlaps & masks│
│              ▓██▓           the typography  │
│                                              │
│  [philosophy copy]      [Volume I caption]  │
│  ─────────  ─────────  ─────────            │
│  [card]     [card]     [card]               │
└─────────────────────────────────────────────┘
```

Layer stack (back → front):

1. Cream background + grain + radial vignette
2. Slow ambient gold glow drift (CSS keyframe, 20s)
3. **Single "JOUEL"** wordmark — Inter Tight 900, ~28vw, centered, parallax y on scroll, slight letter-spacing breathing
4. **Model video** — centered, height 92vh, soft radial mask blending into cream; subtle idle scale (1 → 1.01 → 1, 8s loop) to add "breathing"  
Add extremely subtle cinematic camera drift to the entire hero composition.
  The hero container should slowly shift position over time:
  - slight translateY movement
  - minimal perspective drift
  - almost imperceptible motion
  This should create the feeling that the scene is quietly breathing like a cinematic fashion film frame.
  Movement must remain extremely restrained and atmospheric.
5. Reflection sweep: a thin diagonal gold gradient that drifts across the model area every ~12s
6. Foreground particles (existing `FloatingParticles`, reduced count for restraint)
7. Editorial side captions + bottom 3 cards (kept, polished spacing)

Masking technique: model sits in front of typography naturally because z-index — no manual cutout needed; the radial mask on the video edges blends it into the cream so the wordmark reads through softly at top/bottom.

---

### 3. Phase 2 — Philosophy & Craftsmanship rebuild (`Philosophy.tsx`)

From two-column editorial → layered archive composition.

- Sticky-ish container with overlapping floating elements at different scroll speeds.
- 3 macro craft images positioned asymmetrically (not in a grid), each with its own parallax y-offset and a cinematic mask reveal (clip-path inset animating from 100% → 0%).
- Floating "museum label" cards (small bordered cream panels) drifting in with stagger — material name, year, atelier number.
- Oversized serif pull-quote crossing the composition diagonally, revealed word-by-word with blur-to-focus (`filter: blur(12px) → blur(0)` + opacity).
- Subtle SVG gold "sculptural fragments" (thin arcs, dots) that drift slowly in the background — pure SVG + framer-motion, no 3D dependency. Keeps "sculptural assembly" feel without WebGL weight.  
Add one iconic sculptural centerpiece moment within the philosophy section.
  This should become the emotional and visual focal point of the craftsmanship experience.
  Examples:
  - floating jewelry sculpture
  - slowly assembling gold framework
  - gemstone alignment composition
  - sculptural luxury object reveal
  The motion should feel:
  - artistic
  - architectural
  - cinematic
  - handcrafted
  Avoid:
  - robotic assembly
  - sci-fi behavior
  - aggressive animation
  This centerpiece should feel like a museum installation or luxury sculpture coming to life.
- Decision: **no Three.js / R3F**. Adds bundle weight and breaks the restraint principle. SVG + transforms achieve the same atmosphere.  
One centerpiece:
  - floating jewelry sculpture
  - slow assembly
  - cinematic reveal
  - elegant gold framework
  Could even be:  
  SVG-driven.
  But there should be:
  # one iconic motion moment.
  Otherwise the section risks becoming:  
  “beautiful floating cards.”

---

### 4. Phase 3 — Collection sticky cinematic exhibition (`Collection.tsx`)

This is the biggest change. Replace the current three scroll-past panels with a **sticky-scroll exhibition** where each piece holds the viewport for ~150vh of scroll.

Pattern (per piece):

```text
section height: 200vh
  └─ sticky inner (h-screen, top-0)
       ├─ phase A (0–25%):  atmosphere builds — giant word fades in, bg drifts
       ├─ phase B (25–60%): jewelry image scales from 1.15 → 1, opacity 0 → 1
       ├─ phase C (60–85%): caption + label slide in, shimmer sweep plays
       └─ phase D (85–100%): everything gently fades / scales out → next piece
```

- Drive all phases with a single `useScroll` per piece + `useTransform` ranges. No Lenis fighting required.
- Dramatic scale: jewelry image small (max 40vh), giant word massive (~30vw), microscopic label (10px tracking-wide).  
Introduce one dramatic scale-contrast moment within the collection sequence.
  Most jewelry pieces should remain small and isolated within large whitespace.
  However, one selected exhibition piece should temporarily become unexpectedly dominant in scale:
  - larger jewelry composition
  - stronger cinematic focus
  - intensified atmosphere
  - emotional visual impact
  This creates editorial rhythm and prevents the showcase pacing from becoming visually repetitive.
- Layered parallax: word (slowest) ← bg haze ← jewelry (medium) ← label (fastest).
- Per-piece subtle idle motion on jewelry: y oscillation ±6px, 6s loop; gold sweep `::after` every 8s.
- Intro panel ("Three pieces, held in light.") kept as-is before the sticky pieces begin.

---

### 5. Storytelling — three layered scenes (replace single `Story.tsx`)

Split `Story.tsx` into a `Story/` folder with three scenes, composed sequentially:

- **Scene 1 — Origin** (`OriginScene.tsx`): cream textured board, macro jewelry image off-center, handwritten-style serif quote (Instrument Serif italic), 2–3 floating label cards drifting in, ambient grain. Quiet/intimate.
- **Scene 2 — Craftsmanship** (`CraftScene.tsx`): dark archive composition. Layered: macro workshop image, floating SVG gold sketches (hand-drawn arcs), small material swatches as cards, oversized typography overlay. Feels like a moodboard.
- **Scene 3 — Memory** (`MemoryScene.tsx`): keeps the existing cinematic full-bleed portrait + parallax + verse reveals (the current Story.tsx is closest to this — refine it, don't discard). Add stronger ambient light drift, slower verse pacing.

Transitions between scenes: full-bleed cream/charcoal blends (sticky cross-fade panels) so scenes feel like cinematic cuts, not adjacent sections.  
Maintain emotional silence and restraint throughout the storytelling scenes.Do not overcrowd compositions with excessive floating elements, textures, or motion.Some moments should intentionally feel: still, quiet ,spacious ,emotionally suspended

The storytelling experience should breathe cinematically rather than constantly demanding attention.

---

### 6. Motion system additions (`src/styles.css`)

- `@keyframes ambient-drift` — slow background gradient movement (20s)
- `@keyframes reflection-sweep` — diagonal gold gradient pass (12s, infinite)
- `@keyframes breathe` — scale 1 → 1.01 → 1 (8s)
- `.blur-reveal` utility class for blur-to-focus text reveals
- All motion respects `prefers-reduced-motion` (already wired in Lenis provider; extend to CSS keyframes via media query).

---

### 7. Files

**New:**

- `src/components/jouel/Story/OriginScene.tsx`
- `src/components/jouel/Story/CraftScene.tsx`
- `src/components/jouel/Story/MemoryScene.tsx`
- `src/components/jouel/Story/index.tsx` (composes the three)
- `src/components/jouel/SculpturalFragments.tsx` (SVG gold drift elements, reusable)

**Rewritten:**

- `src/components/jouel/Hero.tsx` — single centered wordmark + cinematic layers
- `src/components/jouel/Philosophy.tsx` — layered archive composition
- `src/components/jouel/Collection.tsx` — sticky-scroll exhibition pattern

**Edited:**

- `src/styles.css` — grotesk font tokens, new keyframes, blur-reveal utility
- `src/routes/__root.tsx` — add Inter Tight to Google Fonts link
- `src/routes/index.tsx` — swap `Story` import for new `Story/index.tsx`

**No new dependencies.** Framer Motion + Lenis already cover everything; SVG handles "sculptural" elements without 3D weight.

---

### 8. Guardrails honored

- Restraint over spectacle: reduce particle counts, single ambient glow per scene, one shimmer pass at a time.
- Depth via foreground/midground/background layering on every scene.  
The overall website should feel like a directed cinematic sequence rather than independent stacked sections.
  Transitions between scenes should emotionally flow through:
  - atmosphere
  - pacing
  - lighting continuity
  - layered motion
  - cinematic breathing space
  The experience should feel:
  inhale → reveal → drift → focus → silence.
- No SaaS patterns, no loud accents — gold stays as 18% opacity ambient only.
- All durations 1.4–2.4s with ease `[0.22, 1, 0.36, 1]`.