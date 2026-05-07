import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import craft2 from "@/assets/craft-2.jpg";
import { SculpturalFragments } from "../SculpturalFragments";

const ease = [0.22, 1, 0.36, 1] as const;

export function CraftScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const sketchY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const swatchY = useTransform(scrollYProgress, [0, 1], [180, -40]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-charcoal py-32 text-cream md:py-48"
    >
      {/* Ambient drift */}
      <div
        className="ambient-drift pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 55%), radial-gradient(ellipse at 80% 70%, color-mix(in oklab, var(--gold) 10%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
          className="text-eyebrow text-cream/60"
        >
          Scene II — Craftsmanship
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, margin: "0px 0px -25% 0px" }}
          transition={{ duration: 2, ease, delay: 0.2 }}
          className="font-display mt-10 max-w-3xl leading-[1.05] text-cream"
          style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
        >
          From sketch to <span className="italic text-cream/70">silence</span>.
        </motion.h3>

        <div className="relative mt-24 grid grid-cols-12 gap-6">
          {/* Floating gold sketch (SVG) */}
          <motion.div
            style={{ y: sketchY }}
            className="col-span-12 text-cream/80 md:col-span-5 md:col-start-1"
          >
            <SculpturalFragments className="h-[50vh] w-full" />
          </motion.div>

          {/* Macro workshop image */}
          <motion.figure
            style={{ y: imgY }}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "0px 0px -25% 0px" }}
            transition={{ duration: 1.8, ease }}
            className="col-span-12 md:col-span-5 md:col-start-7"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src={craft2}
                alt="Workshop macro — gold ring sketch"
                loading="lazy"
                className="h-[60vh] w-full object-cover opacity-90"
              />
            </div>
            <figcaption className="mt-4 text-eyebrow text-cream/50">
              Atelier reference · Plate 47
            </figcaption>
          </motion.figure>

          {/* Floating material swatches */}
          <motion.div
            style={{ y: swatchY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -25% 0px" }}
            transition={{ duration: 1.6, ease, delay: 0.6 }}
            className="col-span-12 mt-16 flex flex-wrap gap-4 md:col-span-8 md:col-start-3 md:mt-32"
          >
            {[
              { label: "18k yellow gold", hint: "warm · ductile" },
              { label: "Platinum 950", hint: "cool · enduring" },
              { label: "South Sea pearl", hint: "luminous · rare" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-sm border border-cream/15 bg-cream/[0.04] px-5 py-4 backdrop-blur-sm"
              >
                <span className="text-eyebrow text-cream/60">{s.label}</span>
                <p className="mt-2 font-sans text-xs text-cream/50">{s.hint}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
