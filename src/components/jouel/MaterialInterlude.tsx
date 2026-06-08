import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import craft1 from "@/assets/craft-1.jpg";
import craft2 from "@/assets/craft-2.jpg";
import collection2 from "@/assets/collection-2.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const plates = [
  { src: craft1, label: "Gold · raw", caption: "Plate α — texture" },
  { src: collection2, label: "Facet · brilliant", caption: "Plate β — light" },
  { src: craft2, label: "Engraving · 18k", caption: "Plate γ — hand" },
];

export function MaterialInterlude() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const driftA = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const driftB = useTransform(scrollYProgress, [0, 1], [80, -60]);
  const driftC = useTransform(scrollYProgress, [0, 1], [20, -80]);
  const drifts = [driftA, driftB, driftC];

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-background py-16 md:py-24"
      aria-label="Material interlude"
    >
      <div
        className="ambient-drift pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, color-mix(in oklab, var(--gold) 6%, transparent), transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.4, ease }}
          className="text-eyebrow text-foreground/45"
        >
          Interlude — Materials
        </motion.span>

        <div className="mt-12 grid grid-cols-12 gap-4 md:gap-6">
          {plates.map((p, i) => (
            <motion.figure
              key={i}
              style={{ y: drifts[i] }}
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 1.6, ease, delay: i * 0.18 }}
              className={`col-span-12 md:col-span-4 ${
                i === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  className="h-[36vh] w-full object-cover md:h-[44vh]"
                />
                <div className="light-pass" />
                <div className="reflection-sweep" />
                <div className="gem-glint" />
              </div>
              <figcaption className="mt-3 flex justify-between text-eyebrow text-foreground/45">
                <span>{p.caption}</span>
                <span>{p.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
