import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "22%", size: 6, delay: 0, dur: 14 },
  { left: "14%", top: "68%", size: 4, delay: 2, dur: 18 },
  { left: "22%", top: "40%", size: 3, delay: 4, dur: 20 },
  { left: "78%", top: "30%", size: 5, delay: 1, dur: 16 },
  { left: "86%", top: "62%", size: 4, delay: 3, dur: 22 },
  { left: "92%", top: "18%", size: 3, delay: 5, dur: 19 },
];

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute block rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold) 80%, transparent) 0%, transparent 70%)",
            boxShadow: "0 0 12px color-mix(in oklab, var(--gold) 40%, transparent)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 12, 0],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
