import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function MarginNote({
  children,
  side = "right",
  tone = "script",
  rotate = -2,
  className = "",
  delay = 0.2,
}: {
  children: ReactNode;
  side?: "left" | "right";
  tone?: "script" | "eyebrow";
  rotate?: number;
  className?: string;
  delay?: number;
}) {
  const isScript = tone === "script";
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.8, ease, delay }}
      className={`pointer-events-none absolute hidden select-none md:inline-block ${
        side === "right" ? "right-4 md:right-10" : "left-4 md:left-10"
      } ${
        isScript
          ? "font-display italic text-foreground/35"
          : "font-sans text-foreground/40"
      } ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        fontSize: isScript ? "15px" : "10px",
        letterSpacing: isScript ? "0.005em" : "0.28em",
        textTransform: isScript ? "none" : "uppercase",
        maxWidth: "14rem",
        lineHeight: 1.3,
      }}
      aria-hidden
    >
      {children}
    </motion.span>
  );
}
