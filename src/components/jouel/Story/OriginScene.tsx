import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import craft1 from "@/assets/craft-1.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function OriginScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [120, -40]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [180, -80]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-background py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
          className="text-eyebrow text-foreground/60"
        >
          Scene I — Origin
        </motion.span>

        <div className="relative mt-16 grid grid-cols-12 gap-6">
          {/* Off-center macro image */}
          <motion.figure
            style={{ y: imgY }}
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 2, ease }}
            className="col-span-12 md:col-span-6 md:col-start-2"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src={craft1}
                alt="Macro detail of jewelry"
                loading="lazy"
                className="h-[70vh] w-full object-cover"
              />
            </div>
          </motion.figure>

          {/* Floating handwritten quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.8, ease, delay: 0.4 }}
            className="col-span-12 self-end md:col-span-4 md:col-start-9"
          >
            <p
              className="font-display italic leading-[1.1] text-foreground"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 3rem)" }}
            >
              "It began with my grandmother's ring — a circle of gold older than
              memory."
            </p>
            <span className="mt-6 block text-eyebrow text-foreground/50">
              — Founder's note, 2017
            </span>
          </motion.blockquote>

          {/* Floating editorial cards */}
          <motion.div
            style={{ y: card1Y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.6, ease, delay: 0.6 }}
            className="col-span-12 mt-12 md:col-span-3 md:col-start-1 md:mt-24"
          >
            <div className="rounded-sm border border-foreground/15 bg-card/70 p-5 backdrop-blur-sm">
              <span className="text-eyebrow text-foreground/50">Origin · 1962</span>
              <p className="mt-3 font-sans text-xs leading-relaxed text-foreground/70">
                A single gold ring, passed quietly through three generations.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: card2Y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.6, ease, delay: 0.8 }}
            className="col-span-12 md:col-span-3 md:col-start-9"
          >
            <div className="rounded-sm border border-foreground/15 bg-card/70 p-5 backdrop-blur-sm">
              <span className="text-eyebrow text-foreground/50">Atelier · Paris</span>
              <p className="mt-3 font-sans text-xs leading-relaxed text-foreground/70">
                Founded above a tailor's window, on a quiet rue in the 6th.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
