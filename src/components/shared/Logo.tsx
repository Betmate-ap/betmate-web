import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, iconOnly = false, size = "md" }: LogoProps) {
  const h = size === "sm" ? 22 : size === "lg" ? 42 : 30;
  const w = Math.round(h * (22 / 38));
  const textSize = size === "sm" ? "text-[15px]" : size === "lg" ? "text-3xl" : "text-[21px]";
  const gap = size === "sm" ? "gap-1.5" : "gap-2";

  return (
    <div className={cn("flex items-center select-none", gap, className)}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 22 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`bm-bolt-${size}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="var(--accent)" />
            <stop offset="50%" stopColor="var(--gold)" />
          </linearGradient>
        </defs>
        <path d="M15 1L3 20h8L7 37l15-19h-9z" fill={`url(#bm-bolt-${size})`} />
      </svg>

      {showText && !iconOnly && (
        <span className={cn("font-bold tracking-tight leading-none", textSize)}>
          <span style={{ color: "var(--accent)" }}>Bet</span>
          <span style={{ color: "var(--gold)" }}>Mate</span>
        </span>
      )}
    </div>
  );
}
