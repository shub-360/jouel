import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FloatingParticles } from "./FloatingParticles";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const typeY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const typeScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden vignette"
      aria-label="JOUEL — entering the world"
    >
      {/* Background ambient drift */}
      <div
        className="ambient-drift pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, color-mix(in oklab, var(--gold) 9%, transparent), transparent 55%), radial-gradient(ellipse at 70% 70%, color-mix(in oklab, var(--gold) 7%, transparent), transparent 60%)",
        }}
      />

      {/* Soft centered glow */}
      <div
        className="ambient-glow pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 16%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* Top editorial strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease }}
        className="relative z-40 flex items-center justify-between px-6 pt-6 md:px-12 md:pt-10"
      >
        <span className="text-eyebrow text-foreground/70">Jouel — Atelier</span>
        <span className="text-eyebrow text-foreground/70">[ Since 2017 ]</span>
      </motion.div>

      {/* Cinematic camera drift wraps the central composition */}
      <div className="camera-drift absolute inset-0">
        {/* Massive single JOUEL wordmark behind model */}
        <motion.div
          style={{ y: typeY, opacity: fade, scale: typeScale }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.02em" }}
            animate={{ opacity: 1, letterSpacing: "-0.045em" }}
            transition={{ duration: 2.4, ease, delay: 0.3 }}
            className="font-grotesk select-none whitespace-nowrap text-foreground"
            style={{
              fontSize: "clamp(7rem, 28vw, 26rem)",
              lineHeight: 0.82,
            }}
          >
            JOUEL
          </motion.h1>
        </motion.div>

        {/* Centered model video */}
        <motion.div
          style={{ y: videoY }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.4, ease, delay: 0.4 }}
          className="absolute inset-0 z-20 flex items-end justify-center"
        >
          <div className="breathe relative h-[92vh] w-auto">
            <video
              src="/jouel-model.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-auto max-w-none object-contain"
              style={{
                maskImage:
                  "radial-gradient(ellipse 62% 92% at 50% 52%, black 28%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.35) 80%, transparent 98%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 62% 92% at 50% 52%, black 28%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.35) 80%, transparent 98%)",
              }}
            />
            {/* Atmospheric feathering — cream haze diffusing the edges */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 95% at 50% 52%, transparent 30%, color-mix(in oklab, var(--cream) 35%, transparent) 65%, var(--cream) 100%)",
              }}
            />
            {/* Soft bottom dissolve into cream */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--cream) 70%, transparent) 60%, var(--cream) 100%)",
              }}
            />
            {/* Reflection sweep across the model */}
            <div className="reflection-sweep" />
          </div>
        </motion.div>
      </div>

      {/* Side editorial copy */}
      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1.2, ease }}
        className="absolute left-6 top-[36vh] z-30 hidden max-w-[18rem] md:left-12 md:block"
      >
        <p className="font-sans text-[13px] leading-relaxed text-foreground/75">
          Each design reflects the dialogue between craftsmanship and feeling —
          exploring what it means to express oneself with elegance and depth.
        </p>
      </motion.aside>

      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1.4, ease }}
        className="absolute right-6 top-[36vh] z-30 hidden text-right md:right-12 md:block"
      >
        <span className="text-eyebrow text-foreground/60">Volume I</span>
        <p className="mt-3 font-display text-2xl text-foreground">
          A quiet world,
          <br />
          worn close to the skin.
        </p>
      </motion.aside>

      {/* Foreground particles */}
      <div className="absolute inset-0 z-30">
        <FloatingParticles />
      </div>

      {/* Bottom editorial cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1.6, ease }}
        className="absolute inset-x-0 bottom-6 z-30 flex items-end justify-between gap-3 px-4 md:bottom-10 md:gap-8 md:px-12"
      >
        <EditorialCard tag="New Collection" subtitle="[ 2026 ]" align="left" />
        <EditorialCard tag="Advent" subtitle="[ 2025 ]" align="center" />
        <EditorialCard tag="Coco Crush ring" subtitle="[ 18K yellow ]" align="right" arrow />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 text-eyebrow text-foreground/40"
      >
        scroll
      </motion.div>
    </section>
  );
}

function EditorialCard({
  tag,
  subtitle,
  align,
  arrow,
}: {
  tag: string;
  subtitle: string;
  align: "left" | "center" | "right";
  arrow?: boolean;
}) {
  return (
    <div
      className={`group relative hidden h-32 w-1/3 max-w-[18rem] flex-col justify-between rounded-sm border border-foreground/10 bg-card/70 p-4 backdrop-blur-sm transition-all duration-700 hover:border-foreground/30 sm:flex ${
        align === "center" ? "translate-y-3" : ""
      }`}
    >
      <div>
        <h3 className="font-display text-base text-foreground">{tag}</h3>
        <span className="mt-1 block text-eyebrow text-foreground/50">{subtitle}</span>
      </div>
      {arrow && (
        <div className="self-end text-foreground/70 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </div>
      )}
    </div>
  );
}
