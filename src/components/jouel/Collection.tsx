import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import c1 from "@/assets/collection-1.jpg";
import c2 from "@/assets/collection-2.jpg";
import c3 from "@/assets/collection-3.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const pieces = [
  {
    img: c1,
    no: "N° 001",
    name: "Lune",
    type: "Pearl drop earring",
    material: "South Sea pearl · 18k yellow gold",
    word: "Solitude",
  },
  {
    img: c2,
    no: "N° 002",
    name: "Éclat",
    type: "Solitaire ring",
    material: "1.4ct brilliant · platinum",
    word: "Desire",
  },
  {
    img: c3,
    no: "N° 003",
    name: "Fil d'Or",
    type: "Chain bracelet",
    material: "Hand-linked · 18k yellow gold",
    word: "Memory",
  },
];

export function Collection() {
  return (
    <section className="relative w-full bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-32 md:px-12 md:pt-48">
        <div className="flex items-end justify-between">
          <span className="text-eyebrow text-foreground/60">Chapter III</span>
          <span className="text-eyebrow text-foreground/40">— The Exhibition</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.6, ease }}
          className="font-display mt-10 leading-[0.95] text-foreground"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 5.5rem)" }}
        >
          Three pieces, <span className="italic text-foreground/60">held in light.</span>
        </motion.h2>
      </div>

      {pieces.map((p, i) => (
        <Piece key={p.no} piece={p} index={i} />
      ))}
    </section>
  );
}

function Piece({
  piece,
  index,
}: {
  piece: (typeof pieces)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const wordY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const isOdd = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="relative mx-auto grid min-h-[110vh] max-w-[1400px] grid-cols-12 items-center gap-x-6 px-6 py-32 md:px-12"
    >
      {/* Background giant word */}
      <motion.span
        style={{ y: wordY }}
        className={`font-display pointer-events-none absolute top-1/2 -translate-y-1/2 select-none text-foreground/[0.06] ${
          isOdd ? "right-4" : "left-4"
        }`}
        // Inline font-size kept large but contained
      >
        <span
          className="block leading-none italic"
          style={{ fontSize: "clamp(8rem, 22vw, 22rem)" }}
        >
          {piece.word}
        </span>
      </motion.span>

      {/* Image */}
      <motion.div
        style={{ y }}
        className={`relative z-10 col-span-12 md:col-span-5 ${
          isOdd ? "md:col-start-7 md:order-2" : "md:col-start-2"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.8, ease }}
          className="relative overflow-hidden rounded-sm"
        >
          <img
            src={piece.img}
            alt={`${piece.name} — ${piece.type}`}
            loading="lazy"
            className="float-soft h-[75vh] w-full object-cover"
          />
          {/* Shimmer sweep on hover */}
          <div className="gold-sweep pointer-events-none absolute inset-0" />
        </motion.div>
      </motion.div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.4, ease, delay: 0.25 }}
        className={`relative z-10 col-span-12 md:col-span-4 ${
          isOdd ? "md:col-start-2 md:order-1" : "md:col-start-8"
        }`}
      >
        <span className="text-eyebrow text-foreground/50">{piece.no}</span>
        <h3
          className="font-display mt-4 leading-[0.95] text-foreground"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          {piece.name}
        </h3>
        <p className="mt-4 font-sans text-sm text-foreground/70">{piece.type}</p>
        <div className="mt-10 h-px w-16 bg-foreground/30" />
        <p className="mt-4 text-eyebrow text-foreground/50">{piece.material}</p>
        <button className="group mt-12 inline-flex items-center gap-3 text-eyebrow text-foreground/80 transition-colors hover:text-foreground">
          Observe the piece
          <span className="transition-transform duration-700 group-hover:translate-x-2">
            →
          </span>
        </button>
      </motion.div>
    </div>
  );
}
