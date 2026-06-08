import { motion } from "framer-motion";
import { ChapterFolio, FolioMark } from "./ChapterFolio";
import { MarginNote } from "./MarginNote";

const ease = [0.22, 1, 0.36, 1] as const;

export function Finale() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-16 md:py-20">
      {/* Ghost typography in negative space */}
      <span
        className="ghost-type pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 select-none"
        style={{ fontSize: "clamp(6rem, 22vw, 22rem)" }}
        aria-hidden
      >
        JOUEL
      </span>

      {/* Soft ambient glow */}
      <div
        className="ambient-glow pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 16%, transparent) 0%, transparent 70%)",
        }}
      />

      <MarginNote side="right" rotate={2} className="top-[28%]" delay={0.6}>
        with quiet thanks
      </MarginNote>

      <div className="relative">
        <ChapterFolio numeral="IV" label="Épilogue" align="left" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease, delay: 0.2 }}
        className="font-display relative mt-12 text-center leading-[0.85] text-foreground"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)" }}
      >
        Eter<span className="italic text-foreground/70">nity</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease, delay: 0.6 }}
        className="relative mt-12 max-w-md text-center font-sans text-sm leading-relaxed text-foreground/70"
      >
        Some things are not bought. They are inherited from a feeling, kept close,
        and quietly passed on.
      </motion.p>

      <motion.a
        href="#"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease, delay: 1 }}
        className="group relative mt-16 inline-flex items-center gap-4 text-eyebrow text-foreground/80 transition-colors hover:text-foreground"
      >
        <span className="h-px w-10 bg-foreground/40 transition-all duration-700 group-hover:w-16 group-hover:bg-[var(--gold)]" />
        Discover the Atelier
        <span className="h-px w-10 bg-foreground/40 transition-all duration-700 group-hover:w-16 group-hover:bg-[var(--gold)]" />
      </motion.a>

      <footer className="mt-32 flex w-full max-w-[1400px] items-end justify-between">
        <span className="font-display text-2xl text-foreground">Jouel</span>
        <span className="text-eyebrow text-foreground/50">
          © MMXXVI · Maison Jouel · Paris
        </span>
      </footer>

      <FolioMark page="p.04" label="Épilogue" align="right" />
    </section>
  );
}
