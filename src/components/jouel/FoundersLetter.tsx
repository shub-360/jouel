import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const letter = [
  "She",
  "never",
  "wore",
  "it",
  "for",
  "attention.",
  "It",
  "was",
  "inherited",
  "from",
  "silence —",
  "and",
  "remembered,",
  "years",
  "later,",
  "only",
  "by",
  "the",
  "way",
  "light",
  "fell",
  "across",
  "her",
  "wrist.",
];

export function FoundersLetter() {
  return (
    <section
      className="relative w-full overflow-hidden bg-background py-40 md:py-56"
      aria-label="A note from the Atelier"
    >
      {/* Soft radial haze */}
      <div
        className="ambient-drift pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, color-mix(in oklab, var(--gold) 7%, transparent), transparent 65%)",
        }}
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.4, ease }}
          className="text-eyebrow text-foreground/50"
        >
          A note — from the Atelier
        </motion.span>

        <p
          className="font-display mt-12 leading-relaxed text-foreground/80"
          style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.9rem)" }}
        >
          {letter.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 1.4, ease, delay: i * 0.06 }}
              className={`mr-[0.28em] inline-block ${
                w.includes("silence") || w === "light"
                  ? "italic text-foreground/65"
                  : ""
              }`}
            >
              {w}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "3rem" }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.6, ease, delay: 1.6 }}
          className="mt-12 h-px bg-foreground/30"
        />

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.6, ease, delay: 1.8 }}
          className="font-display mt-6 italic text-foreground/55"
          style={{ fontSize: "1.05rem", letterSpacing: "0.01em" }}
        >
          — From the Atelier
        </motion.span>
      </div>
    </section>
  );
}
