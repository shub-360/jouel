## JOUEL — Cinematic Continuity Pass

Four targeted fixes to remove dead scroll, soften the hero model, tighten reveal pacing, and keep atmosphere alive between scenes. No new dependencies, no creative-direction changes.

---

### 1. Collection — kill dead scroll, keep atmosphere alive

**File:** `src/components/jouel/Collection.tsx`

- Reduce sticky height per piece: `h-[300vh]` → `h-[220vh]` so scenes don't outlast their content.
- Rewrite transform timelines so something is always moving/visible across the full 0→1 range:
  - `wordOpacity`: `[0, 0.08, 0.92, 1] → [0, 1, 1, 0]` (in earlier, out later)
  - `imgOpacity`: `[0.05, 0.25, 0.85, 1] → [0, 1, 1, 0]` (image present nearly the whole scene)
  - `captionOpacity`: `[0.25, 0.4, 0.9, 1] → [0, 1, 1, 0]` (no late entry)
  - `hazeOpacity`: `[0, 0.15, 0.95, 1] → [0, 0.7, 0.7, 0]` (atmosphere holds full duration)
- Add a persistent ambient layer behind every sticky piece (very low-opacity gold radial + grain) that never fully fades, so transitions between pieces never go fully blank.
- Add a continuous slow `y` drift to the jewelry image even at scene midpoint (extend `imgY` range slightly) so nothing feels frozen.

### 2. Hero — soft atmospheric model blend  
Add extremely subtle atmospheric depth behind the model silhouette using a soft blurred shadow diffusion rather than a standard drop shadow.

The goal is to create cinematic separation from the background while maintaining softness and luxury restraint.

**File:** `src/components/jouel/Hero.tsx`

- Remove the hard rectangular video edge. Strengthen the existing `mask-image` with a wider, softer radial:
  - `radial-gradient(ellipse 70% 95% at 50% 55%, black 35%, transparent 95%)`
  - Add a second vertical fade layer (mask-composite) so the bottom of the model dissolves into cream instead of cutting.
- Wrap the video in an extra atmospheric layer: a cream→transparent radial overlay sitting on top of the video edges (additive feathering) to diffuse any remaining hard pixels.
- Keep the giant `JOUEL` wordmark on z-10 and the video on z-20, but lower video contrast at the edges via the mask so type bleeds through the silhouette outline.
- Confirm `mix-blend-mode: multiply` is NOT introduced (would dirty the cream); rely purely on masking + radial fade.

### 3. Reveal pacing — anticipatory, not reactive

**Files:** `Collection.tsx`, `Philosophy.tsx`, `Story/OriginScene.tsx`, `Story/CraftScene.tsx`, `Story/MemoryScene.tsx`, `Finale.tsx`

- Standardize `whileInView` viewport margin from `-15%` / `-20%` to `-25%` (top) / `0%` (bottom) so reveals trigger before the element reaches viewport center.
- Where `useScroll` drives reveals (Collection captions), shift the start of opacity ramps 10–15% earlier (covered in §1).
- Slightly shorten reveal durations (2.0s → 1.4s) on body text/captions so they finish near focus position, while keeping hero/quote durations long for gravitas.  
Introduce subtle overlap transitions between exhibition pieces so the next atmosphere begins appearing before the previous scene fully exits.
  Avoid hard visual separation between collection moments.

### 4. Atmospheric continuity between scenes

**Files:** `src/styles.css`, `src/routes/index.tsx` (or a new `AmbientField.tsx` mounted once)

- Add a single fixed-position ambient field behind the entire page: very subtle cream/gold radial gradient + grain at ~6% opacity, `position: fixed; inset: 0; z-index: 0; pointer-events: none;`. Sections sit on transparent or near-transparent backgrounds so the field shows through during transitions.
- Add a reusable `.ghost-type` utility in `styles.css`: oversized grotesk word, opacity ~0.04, that scenes can drop into their negative space (e.g., faint "ATELIER" / "CRAFT" / "MEMORY" floating in margins) — keeps whitespace emotionally alive without crowding.
- Add `@keyframes haze-drift` (already partially present as `ambient-drift`) confirmed slow (40s+) and apply to the global field so motion never stops.  
Atmospheric movement should continue subtly across section boundaries so scenes feel emotionally connected.
  Light diffusion, haze drift, and background motion should overlap slightly between transitions to create cinematic continuity rather than isolated section changes.

---

### Out of scope

- No new sections, no copy changes, no image regeneration.
- No new dependencies. All work in existing components + `styles.css`.

### Verification

- Scroll through Collection: confirm no white gap between pieces, image visible >70% of each sticky duration.
- Hero: model edges feather into cream, JOUEL letters readable behind silhouette.
- Reveal triggers: text appears as element enters lower viewport, fully readable at center.
- Between sections: faint ambient warmth always present, never pure flat white.