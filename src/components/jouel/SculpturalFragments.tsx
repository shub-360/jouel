import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Sculptural SVG composition — a slowly assembling jewelry framework.
 * Thin gold arcs, delicate gemstone dots, and a vertical filament that
 * "draws" itself in. Designed to feel like a museum installation forming.
 */
export function SculpturalFragments({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 600 600"
      className={className}
      fill="none"
      stroke="currentColor"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
    >
      {/* Outer ring */}
      <motion.circle
        cx="300"
        cy="300"
        r="220"
        strokeWidth="0.6"
        className="text-[color:var(--gold)]"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 0.7 },
        }}
        transition={{ duration: 3.2, ease, delay: 0.1 }}
      />
      {/* Inner ring */}
      <motion.circle
        cx="300"
        cy="300"
        r="150"
        strokeWidth="0.4"
        className="text-foreground/40"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 0.5 },
        }}
        transition={{ duration: 2.8, ease, delay: 0.6 }}
      />
      {/* Vertical filament */}
      <motion.line
        x1="300"
        y1="40"
        x2="300"
        y2="560"
        strokeWidth="0.3"
        className="text-foreground/30"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1 },
        }}
        transition={{ duration: 2.4, ease, delay: 0.9 }}
      />
      {/* Diagonal arcs */}
      <motion.path
        d="M 80 300 Q 300 100 520 300"
        strokeWidth="0.5"
        className="text-[color:var(--gold)]"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 0.6 },
        }}
        transition={{ duration: 3, ease, delay: 1.2 }}
      />
      <motion.path
        d="M 80 300 Q 300 500 520 300"
        strokeWidth="0.5"
        className="text-[color:var(--gold)]"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 0.6 },
        }}
        transition={{ duration: 3, ease, delay: 1.4 }}
      />
      {/* Gemstones */}
      {[
        { cx: 300, cy: 80, r: 5, d: 1.8 },
        { cx: 300, cy: 520, r: 5, d: 2.0 },
        { cx: 80, cy: 300, r: 4, d: 2.2 },
        { cx: 520, cy: 300, r: 4, d: 2.2 },
        { cx: 300, cy: 300, r: 8, d: 2.4 },
      ].map((g, i) => (
        <motion.circle
          key={i}
          cx={g.cx}
          cy={g.cy}
          r={g.r}
          fill="currentColor"
          className="text-[color:var(--gold)]"
          stroke="none"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 0.9 },
          }}
          style={{ transformOrigin: `${g.cx}px ${g.cy}px` }}
          transition={{ duration: 1.4, ease, delay: g.d }}
        />
      ))}
    </motion.svg>
  );
}
