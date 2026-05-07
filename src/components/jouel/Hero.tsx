import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FloatingParticles } from "./FloatingParticles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const typeY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden vignette"
      aria-label="JOUEL — entering the world"
    >
      {/* Ambient glow */}
      <div
        className="ambient-glow pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 18%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* Top editorial strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 flex items-center justify-between px-6 pt-6 md:px-12 md:pt-10"
      >
        <span className="text-eyebrow text-foreground/70">Jouel — Atelier</span>
        <span className="text-eyebrow text-foreground/70">[ Since 2017 ]</span>
      </motion.div>

      {/* Oversized split typography behind model */}
      <motion.div
        style={{ y: typeY, opacity: fade }}
        className="pointer-events-none absolute inset-x-0 top-[8vh] z-10 flex items-start justify-between px-2 md:top-[6vh] md:px-6"
      >
        <motion.span
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="font-display block leading-[0.82] text-foreground"
          style={{ fontSize: "clamp(7rem, 24vw, 24rem)" }}
        >
          Jou
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="font-display block leading-[0.82] text-foreground"
          style={{ fontSize: "clamp(7rem, 24vw, 24rem)" }}
        >
          el
        </motion.span>
      </motion.div>

      {/* Centered video model */}
      <motion.div
        style={{ y: videoY }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute inset-0 z-20 flex items-end justify-center"
      >
        <video
          src="/jouel-model.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-[88vh] w-auto max-w-none object-contain"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 90% at 50% 55%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 90% at 50% 55%, black 70%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Side editorial copy */}
      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-6 top-[34vh] z-30 hidden max-w-[18rem] md:left-12 md:block"
      >
        <p className="font-sans text-[13px] leading-relaxed text-foreground/75">
          Each design reflects the dialogue between craftsmanship and feeling —
          exploring what it means to express oneself with elegance and depth.
        </p>
      </motion.aside>

      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-6 top-[34vh] z-30 hidden text-right md:right-12 md:block"
      >
        <span className="text-eyebrow text-foreground/60">Volume I</span>
        <p className="mt-3 font-display text-2xl text-foreground">
          A quiet world,
          <br />
          worn close to the skin.
        </p>
      </motion.aside>

      {/* Foreground floating particles */}
      <div className="absolute inset-0 z-30">
        <FloatingParticles />
      </div>

      {/* Bottom editorial cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-6 z-30 flex items-end justify-between gap-3 px-4 md:bottom-10 md:gap-8 md:px-12"
      >
        <EditorialCard tag="New Collection" subtitle="[ 2026 ]" align="left" />
        <EditorialCard tag="Advent" subtitle="[ 2025 ]" align="center" />
        <EditorialCard tag="Coco Crush ring" subtitle="[ 18K yellow ]" align="right" arrow />
      </motion.div>

      {/* Scroll hint */}
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
