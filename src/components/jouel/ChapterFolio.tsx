import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Align = "left" | "right";

export function ChapterFolio({
  numeral,
  label,
  align = "right",
  className = "",
}: {
  numeral: string;
  label: string;
  align?: Align;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease }}
      className={`pointer-events-none select-none ${
        align === "right" ? "text-right" : "text-left"
      } ${className}`}
      aria-hidden
    >
      <span
        className="font-display italic text-foreground/40"
        style={{ fontSize: "0.95rem", letterSpacing: "0.02em" }}
      >
        {numeral}
      </span>
      <span className="mx-2 text-foreground/25">·</span>
      <span
        className="font-sans text-foreground/35"
        style={{
          fontSize: "10px",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export function FolioMark({
  page,
  label,
  align = "right",
  className = "",
}: {
  page: string;
  label: string;
  align?: Align;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.18 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease }}
      suppressHydrationWarning
      className={`pointer-events-none absolute bottom-6 select-none font-display italic text-foreground ${
        align === "right" ? "right-6 md:right-12" : "left-6 md:left-12"
      } ${className}`}
      style={{ fontSize: "11px", letterSpacing: "0.24em" }}
      aria-hidden
    >
      {page} — {label}
    </motion.div>
  );
}
