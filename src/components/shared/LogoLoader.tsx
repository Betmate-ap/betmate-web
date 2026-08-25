import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BOLT = "M15 1L3 20h8L7 37l15-19h-9z";

const sizes = {
  sm: { h: 24, w: 14 },
  md: { h: 40, w: 23 },
  lg: { h: 64, w: 37 },
};

interface LogoLoaderProps {
  size?: keyof typeof sizes;
  className?: string;
  showWordmark?: boolean;
}

function LogoLoader({ size = "md", className, showWordmark = false }: LogoLoaderProps) {
  const { h, w } = sizes[size];
  const gradId = `ll-grad-${size}`;
  const clipId = `ll-clip-${size}`;

  return (
    <div className={cn("flex flex-col items-center gap-3 select-none", className)}>
      <svg width={w} height={h} viewBox="0 0 22 38" fill="none" overflow="visible">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="var(--accent)" />
            <stop offset="50%" stopColor="var(--gold)" />
          </linearGradient>
          <clipPath id={clipId}>
            {/* rect drives the fill: height animates 0→38 (top-to-bottom reveal) */}
            <motion.rect
              x={0}
              y={0}
              width={22}
              animate={{ height: [0, 38, 38, 38, 0] }}
              transition={{
                duration: 1.6,
                times: [0, 0.42, 0.68, 0.92, 1],
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </clipPath>
        </defs>

        {/* Ghost outline — shows the full shape at low opacity so you know what's "filling" */}
        <path d={BOLT} fill="currentColor" className="text-foreground/10" />

        {/* Filled gradient bolt — clipped by the animated rect, dims/pulses after fill */}
        <motion.path
          d={BOLT}
          fill={`url(#${gradId})`}
          clipPath={`url(#${clipId})`}
          animate={{ opacity: [1, 1, 1, 0.35, 1, 0] }}
          transition={{
            duration: 1.6,
            times: [0, 0.42, 0.62, 0.77, 0.9, 1],
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </svg>

      {showWordmark && (
        <motion.span
          className="text-sm font-bold tracking-tight"
          animate={{ opacity: [0.4, 0.4, 1, 0.4, 0.4] }}
          transition={{
            duration: 1.6,
            times: [0, 0.42, 0.65, 0.9, 1],
            repeat: Infinity,
          }}
        >
          <span style={{ color: "var(--accent)" }}>Bet</span>
          <span style={{ color: "var(--gold)" }}>Mate</span>
        </motion.span>
      )}
    </div>
  );
}

export { LogoLoader };
