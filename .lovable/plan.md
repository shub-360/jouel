# Reduce inactive whitespace between chapters

The cinematic restraint stays. We only tighten the *transitional* whitespace — the inactive zones between sections and between blocks within a section — where the eye currently waits with nothing happening. No sticky-scroll timing, parallax range, or animation duration changes.

## Targets (where the dead space lives)

```
Hero
  ↓  [Philosophy] py-32/48 + mt-32 + mt-40 + mt-40   ← heavy
  ↓
FoundersLetter   py-40/56                            ← heaviest
  ↓
MaterialInterlude py-24/32
  ↓
Collection       pt-32/48
  ↓
Story (OriginScene py-32/48 → CraftScene py-32/48 → MemoryScene)
  ↓
Finale           py-24 + mt-32 footer
```

## Edits

**`src/components/jouel/Philosophy.tsx`**
- Section: `py-32 md:py-48` → `py-20 md:py-32`
- Archive composition wrapper: `mt-32` → `mt-20 md:mt-24`
- Sculptural centerpiece: `mt-40` → `mt-24 md:mt-32`
- Bottom Plate 02 figure: `mt-40` → `mt-24 md:mt-32`
- Pull-quote: `mt-16` → `mt-12`

**`src/components/jouel/FoundersLetter.tsx`**
- Section: `py-40 md:py-56` → `py-24 md:py-36` (single biggest reduction; the letter still gets generous negative space, just not a full empty viewport above and below)
- Letter paragraph: `mt-12` → `mt-10`
- Signature divider: `mt-12` → `mt-10`

**`src/components/jouel/MaterialInterlude.tsx`**
- Section: `py-24 md:py-32` → `py-16 md:py-24`
- Grid: `mt-12` → `mt-10`

**`src/components/jouel/Collection.tsx`**
- Header block: `pt-32 md:pt-48` → `pt-20 md:pt-28`
- Heading: `mt-10` → `mt-8`
- (Leave the `h-[210vh]` sticky pieces untouched — that's active scroll, not dead space.)

**`src/components/jouel/Story/OriginScene.tsx`**
- Section: `py-32 md:py-48` → `py-20 md:py-32`
- Caption columns: `mt-12 md:mt-24` → `mt-10 md:mt-16`

**`src/components/jouel/Story/CraftScene.tsx`**
- Section: `py-32 md:py-48` → `py-20 md:py-32`
- Grid: `mt-24` → `mt-16 md:mt-20`
- Steps row: `mt-16 ... md:mt-32` → `mt-12 ... md:mt-20`

**`src/components/jouel/Finale.tsx`**
- Section: `py-24` → `py-16 md:py-20`
- Footer: `mt-32` → `mt-24`

## Quiet hydration fix (drive-by)

`FolioMark` in `ChapterFolio.tsx` renders inside `Collection` as a child of `<section>` but its first `motion.div` initial style produces a SSR/client mismatch (the error log shows it). Switch the wrapper from `motion.div` to `motion.span` with `inline-block` is not needed — the actual cause is the surrounding parent in `Collection` being a flex `<section>` plus `FolioMark` being absolute. The mismatch is between server `style.opacity:0` vs client. Set `style={{ ...explicitStyle, opacity: 0 }}` on initial so SSR/client agree, or render `FolioMark` only after mount. Simplest fix: pass the inline style on the element directly (already done) and add `suppressHydrationWarning` to the FolioMark `motion.div`.

## Not changing

- No removal of any section, copy, image, or animation
- No changes to scroll-driven `useTransform` ranges
- No changes to sticky scene heights (`h-[210vh]`, `h-[160vh]`)
- Breathing room around the founder's letter and the sculptural centerpiece is preserved — only the *excess* is trimmed (~30%)
