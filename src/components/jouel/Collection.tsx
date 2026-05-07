import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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
    dramatic: false,
  },
  {
    img: c2,
    no: "N° 002",
    name: "Éclat",
    type: "Solitaire ring",
    material: "1.4ct brilliant · platinum",
    word: "Desire",
    dramatic: true, // The dramatic scale-contrast moment
  },
  {
    img: c3,
    no: "N° 003",
    name: "Fil d'Or",
    type: "Chain bracelet",
    material: "Hand-linked · 18k yellow gold",
    word: "Memory",
    dramatic: false,
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
        <StickyPiece key={p.no} piece={p} index={i} />
      ))}
    </section>
  );
}

function StickyPiece({
  piece,
  index,
}: {
  piece: (typeof pieces)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Phase A (0–0.25): atmosphere — word fades in
  // Phase B (0.20–0.55): jewelry scales/fades in
  // Phase C (0.50–0.80): caption slides in, shimmer
  // Phase D (0.85–1.0): everything fades out
  const wordOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const wordY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const wordScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);

  const imgOpacity = useTransform(scrollYProgress, [0.18, 0.45, 0.85, 1], [0, 1, 1, 0]);
  const imgScale = useTransform(scrollYProgress, [0.18, 0.55], [1.18, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const captionOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.85, 1],
    [0, 1, 1, 0],
  );
  const captionY = useTransform(scrollYProgress, [0.5, 0.65], [40, 0]);

  const hazeOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.6, 0.6, 0],
  );

  const isOdd = index % 2 === 1;
  const dramatic = piece.dramatic;

  return (
    <div ref={ref} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* Background haze — drifts in then out */}
        <motion.div
          style={{ opacity: hazeOpacity }}
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="ambient-drift absolute inset-0"
            style={{
              background: dramatic
                ? "radial-gradient(ellipse at 50% 50%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 60%)"
                : "radial-gradient(ellipse at 50% 50%, color-mix(in oklab, var(--gold) 8%, transparent), transparent 60%)",
            }}
          />
        </motion.div>

        {/* Background giant word — slowest parallax */}
        <motion.span
          style={{ opacity: wordOpacity, y: wordY, scale: wordScale }}
          className={`font-grotesk pointer-events-none absolute top-1/2 -translate-y-1/2 select-none text-foreground/[0.07] ${
            isOdd ? "right-[-2vw]" : "left-[-2vw]"
          }`}
        >
          <span
            className="block leading-none"
            style={{ fontSize: "clamp(8rem, 30vw, 28rem)" }}
          >
            {piece.word}
          </span>
        </motion.span>

        <div
          className={`relative mx-auto grid w-full max-w-[1400px] grid-cols-12 items-center gap-x-6 px-6 md:px-12 ${
            isOdd ? "" : ""
          }`}
        >
          {/* Image — small except dramatic piece */}
          <PieceImage
            piece={piece}
            isOdd={isOdd}
            dramatic={dramatic}
            opacity={imgOpacity}
            scale={imgScale}
            y={imgY}
          />

          {/* Caption */}
          <motion.div
            style={{ opacity: captionOpacity, y: captionY }}
            className={`relative z-10 col-span-12 md:col-span-4 ${
              isOdd ? "md:col-start-2 md:row-start-1" : "md:col-start-8"
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

        {/* Microscopic floating label — fastest parallax */}
        <motion.div
          style={{ opacity: captionOpacity }}
          className={`pointer-events-none absolute bottom-12 ${
            isOdd ? "right-12" : "left-12"
          } hidden md:block`}
        >
          <span className="text-[10px] tracking-[0.32em] text-foreground/40">
            EXHIBIT · {piece.no} · {piece.name.toUpperCase()}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

function PieceImage({
  piece,
  isOdd,
  dramatic,
  opacity,
  scale,
  y,
}: {
  piece: (typeof pieces)[number];
  isOdd: boolean;
  dramatic: boolean;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  y: MotionValue<number>;
}) {
  const heightClass = dramatic ? "h-[88vh]" : "h-[52vh]";
  const colSpan = dramatic
    ? "col-span-12 md:col-span-6 md:col-start-4"
    : isOdd
      ? "col-span-12 md:col-span-4 md:col-start-7"
      : "col-span-12 md:col-span-4 md:col-start-2";

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className={`relative z-10 ${colSpan}`}
    >
      <div className="float-soft relative overflow-hidden rounded-sm">
        <img
          src={piece.img}
          alt={`${piece.name} — ${piece.type}`}
          loading="lazy"
          className={`${heightClass} w-full object-cover`}
        />
        <div className="reflection-sweep" />
      </div>
    </motion.div>
  );
}
