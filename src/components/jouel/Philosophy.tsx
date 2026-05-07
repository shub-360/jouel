import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import craft1 from "@/assets/craft-1.jpg";
import craft2 from "@/assets/craft-2.jpg";
import { SculpturalFragments } from "./SculpturalFragments";

const ease = [0.22, 1, 0.36, 1] as const;

const quoteWords = ["Jewelry", "as", "a", "quiet", "language", "of", "devotion."];

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const img1Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const labelY = useTransform(scrollYProgress, [0, 1], [120, -60]);
  const sculptureY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-background py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.4, ease }}
          className="flex items-center justify-between"
        >
          <span className="text-eyebrow text-foreground/60">Chapter II</span>
          <span className="text-eyebrow text-foreground/40">— Philosophy</span>
        </motion.div>

        {/* Pull quote — blur-to-focus, word by word */}
        <h2
          className="font-display mt-16 leading-[0.95] tracking-tight text-foreground"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7.5rem)" }}
        >
          {quoteWords.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.6, ease, delay: i * 0.12 }}
              className={`mr-[0.25em] inline-block ${
                i === 3 || i === 4 ? "italic text-foreground/65" : ""
              }`}
            >
              {w}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Layered archive composition */}
      <div className="relative mx-auto mt-32 max-w-[1400px] px-6 md:px-12">
        <div className="relative grid grid-cols-12 gap-6">
          {/* Image 1 — top-left, parallax */}
          <motion.figure
            style={{ y: img1Y }}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.8, ease }}
            className="col-span-12 md:col-span-5 md:col-start-1"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={craft1}
                alt="Hands setting a diamond into gold"
                loading="lazy"
                className="h-[60vh] w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex justify-between text-eyebrow text-foreground/50">
              <span>Plate 01</span>
              <span>The Setting · Atelier, Paris</span>
            </figcaption>
          </motion.figure>

          {/* Right column — copy + floating museum labels */}
          <motion.div
            style={{ y: labelY }}
            className="relative col-span-12 md:col-span-5 md:col-start-8 md:pt-32"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.6, ease }}
              className="font-display text-2xl leading-snug text-foreground md:text-3xl"
            >
              We do not make jewelry. We listen for it. Each piece arrives
              slowly — shaped by hand, refined by silence.
            </motion.p>

            {/* Floating museum labels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.4, ease, delay: 0.3 }}
              className="mt-10 inline-block rounded-sm border border-foreground/15 bg-card/70 px-5 py-4 backdrop-blur-sm"
            >
              <span className="text-eyebrow text-foreground/50">Atelier No. 014</span>
              <p className="mt-2 font-sans text-xs text-foreground/70">
                18k yellow gold · 1.4ct brilliant · hand-set, Paris 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.4, ease, delay: 0.5 }}
              className="mt-6 ml-12 inline-block rounded-sm border border-foreground/15 bg-card/70 px-5 py-4 backdrop-blur-sm"
            >
              <span className="text-eyebrow text-foreground/50">Material Study</span>
              <p className="mt-2 font-sans text-xs text-foreground/70">
                Cream linen · pearl · graphite sketch
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Sculptural centerpiece — the iconic moment */}
        <motion.div
          style={{ y: sculptureY }}
          className="relative mx-auto mt-40 flex max-w-3xl flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.6, ease }}
            className="text-eyebrow text-foreground/50"
          >
            Installation N° I — The Framework
          </motion.span>
          <SculpturalFragments className="mt-8 h-[70vh] w-full max-w-[680px]" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.6, ease, delay: 1.6 }}
            className="mt-6 max-w-md text-center font-sans text-sm leading-relaxed text-foreground/70"
          >
            A jewel begins as a thought — a thin line, a held breath, a circle
            slowly closing.
          </motion.p>
        </motion.div>

        {/* Image 2 — bottom-right offset, parallax */}
        <motion.figure
          style={{ y: img2Y }}
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.8, ease, delay: 0.2 }}
          className="mx-auto mt-40 grid grid-cols-12 gap-6"
        >
          <div className="relative col-span-12 overflow-hidden rounded-sm md:col-span-6 md:col-start-4">
            <img
              src={craft2}
              alt="Sculptural gold ring on cream paper"
              loading="lazy"
              className="h-[55vh] w-full object-cover"
            />
          </div>
          <figcaption className="col-span-12 flex justify-between text-eyebrow text-foreground/50 md:col-span-6 md:col-start-4">
            <span>Plate 02</span>
            <span>Sculpted in 18k</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
