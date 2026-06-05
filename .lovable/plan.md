# Editorial Storytelling Layer

Three small, restrained additions that make JOUEL feel like a luxury volume — film, book, and editorial in one.

## 1. Chapter folio marks (Roman numerals)

Tiny Roman numerals (I, II, III, IV) that fade in at each scene transition — like page folios in a printed volume.  
Introduce tiny folio references in bottom corners of major chapters.

Examples:

p.01 — Ouverture

p.02 — Philosophie

p.03 — Collection

p.04 — Épilogue

Opacity should remain extremely subtle (15–20%) and serve as a printed-volume detail rather than navigation.

- New component: `src/components/jouel/ChapterFolio.tsx`
  - Props: `numeral` ("I" | "II" | "III" | "IV"), `label` (e.g. "Origin"), optional `align` ("left" | "right")
  - Rendering: serif italic Roman numeral at ~14–16px, eyebrow label beneath, both at `text-foreground/40`
  - Animation: framer-motion `whileInView` fade + 8px rise, `once: true`, 1.4s ease — no scroll-tied logic (keeps stability)
  - Positioned `absolute` top-12 with side alignment, inside each scene's outer wrapper
- Placement (one per chapter, no duplicates with existing eyebrow text):
  - Hero → folio "I — Ouverture"
  - Philosophy → folio "II — Philosophie"
  - Collection → folio "III — Exhibition"
  - Story + Finale share "IV — Épilogue" placed in Finale
- Replace the existing inline "Chapter II / Chapter III" eyebrow lines with the new folio component for consistency

## 2. Letter from the founder

A single quiet serif paragraph placed in the negative space between Philosophy and Collection.

- New component: `src/components/jouel/FoundersLetter.tsx`
  - Full-bleed section, generous vertical padding (~`py-40 md:py-56`)
  - Centered max-w-2xl block
  - Small eyebrow: "A note — from the atelier"
  - Body: short serif paragraph (~3 lines), font-display italic-mix, ~clamp(1.25rem, 2vw, 1.75rem), leading-relaxed, `text-foreground/75`
  - Signature line: handwritten-style script font (Caveat or similar already-loaded fallback to italic serif) — "— From the Atelier"
    Avoid using a named founder. The voice should feel timeless, anonymous, and house-driven, reinforcing the mythological luxury identity of JOUEL.
  - Subtle ambient drift: a single soft radial haze behind the text
  - Word-by-word fade-in on view (mirrors Philosophy pull-quote technique, lighter)
- Draft copy (final wording confirmable):
  > "She never wore it for attention. It was inherited from silence — and remembered, years later, only by the way light fell across her wrist."
- Mounted in src/routes/index.tsx between <Philosophy /> and <Collection />
  Immediately after the Founder Letter, insert a short cinematic material interlude before Collection begins.
  This should be a full-width editorial transition featuring:
  - macro gold texture
  - gemstone facet detail
  - silk thread
  - engraving close-up
  Use subtle parallax and atmospheric motion only.
  Purpose:
  Create a visual breath between the emotional founder note and the exhibition showcase.
  The transition should feel like turning a page in a luxury volume before entering the Collection chapter.

## 3. Handwritten margin notes

Tiny script-font fragments that float in negative space at scene edges — like an editor's pencil marks in the margin.

- New component: `src/components/jouel/MarginNote.tsx`
  - Props: `children`, `side` ("left" | "right"), `tone` ("script" | "eyebrow")
  - Renders as `absolute` positioned text, rotated -2° to 3°, `text-foreground/35`, small (~12–14px)
  - Script tone: italic display serif (using current font stack — no new font load needed for stability)
  - Animation: fade + small drift, `whileInView` once, 1.8s ease, slight delay
- Placement (1–2 per chapter maximum):
  - Philosophy: right margin near pull quote — "held, never displayed"
  - Collection: between Piece I and II, left margin — "the light stayed longer here"
    The note should feel poetic and discovered rather than explanatory.
  - Finale: above closing line — "with quiet thanks"

## Why this works

- No new scroll listeners, no `useScroll` additions → preserves the stabilized cinematic foundation
- All animations are `whileInView once` → no hydration risk, no animation loops
- Adds the missing human/emotional register without breaking restraint
- Folios + letter + margin notes together evoke a printed editorial volume

## Files

- new: `src/components/jouel/ChapterFolio.tsx`
- new: `src/components/jouel/FoundersLetter.tsx`
- new: `src/components/jouel/MarginNote.tsx`
- edit: `src/routes/index.tsx` (mount FoundersLetter)
- edit: `src/components/jouel/Hero.tsx`, `Philosophy.tsx`, `Collection.tsx`, `Finale.tsx` (folios + margin notes; replace existing "Chapter X" eyebrows)

No new dependencies. No changes to existing motion or scroll logic.