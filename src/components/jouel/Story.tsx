import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import storyHero from "@/assets/story-hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const verses = [
  "She wore it not for the world,",
  "but for the morning light",
  "that touched her shoulder",
  "before the day began.",
];

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[140vh] w-full overflow-hidden bg-charcoal"
    >
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0"
      >
        <img
          src={storyHero}
          alt="Atmospheric portrait wearing pearl jewelry"
          loading="lazy"
          className="h-full w-full object-cover opacity-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--charcoal) 30%, transparent) 0%, transparent 35%, color-mix(in oklab, var(--charcoal) 70%, transparent) 100%)",
          }}
        />
      </motion.div>

      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease }}
            className="text-eyebrow text-cream/70"
          >
            Chapter IV — A Memory in Cream
          </motion.span>

          <div className="mt-10 max-w-3xl space-y-4">
            {verses.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-25%" }}
                transition={{ duration: 1.6, ease, delay: i * 0.25 }}
                className={`font-display leading-[1.05] text-cream ${
                  i % 2 === 0 ? "" : "italic text-cream/85"
                }`}
                style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease, delay: 1.4 }}
            className="mt-16 flex items-center gap-4"
          >
            <div className="h-px w-16 bg-cream/40" />
            <span className="text-eyebrow text-cream/60">A short film, in stillness</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
