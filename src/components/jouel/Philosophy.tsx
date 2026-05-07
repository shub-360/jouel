import { motion } from "framer-motion";
import craft1 from "@/assets/craft-1.jpg";
import craft2 from "@/assets/craft-2.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Philosophy() {
  return (
    <section className="relative w-full bg-background py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Eyebrow */}
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

        {/* Massive pull quote */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.8, ease, delay: 0.2 }}
          className="font-display mt-16 leading-[0.95] tracking-tight text-foreground"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7.5rem)" }}
        >
          Jewelry as
          <br />
          <span className="italic text-foreground/70">a quiet language</span>
          <br />
          of devotion.
        </motion.h2>

        {/* Asymmetric grid */}
        <div className="mt-32 grid grid-cols-12 gap-x-6 gap-y-16">
          <motion.figure
            initial={{ opacity: 0, y: 60, scale: 1.04 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.8, ease }}
            className="col-span-12 md:col-span-5 md:col-start-1"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={craft1}
                alt="Hands setting a diamond into gold"
                loading="lazy"
                className="h-[70vh] w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex justify-between text-eyebrow text-foreground/50">
              <span>Plate 01</span>
              <span>The Setting — Atelier, Paris</span>
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.6, ease, delay: 0.2 }}
            className="col-span-12 md:col-span-4 md:col-start-8 md:pt-32"
          >
            <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
              We do not make jewelry. We listen for it. Each piece arrives slowly —
              shaped by hand, refined by silence.
            </p>
            <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-foreground/70">
              Every gemstone is held to the light a thousand times before it finds
              its place. Every facet is a small act of patience. Every finished
              piece carries the breath of the room it was made in.
            </p>
            <div className="mt-10 h-px w-24 bg-foreground/30" />
            <span className="mt-4 block text-eyebrow text-foreground/50">
              — The Jouel Atelier
            </span>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 60, scale: 1.04 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.8, ease, delay: 0.1 }}
            className="col-span-12 md:col-span-5 md:col-start-7"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={craft2}
                alt="Sculptural gold ring on cream paper"
                loading="lazy"
                className="h-[60vh] w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex justify-between text-eyebrow text-foreground/50">
              <span>Plate 02</span>
              <span>Sculpted in 18k</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
