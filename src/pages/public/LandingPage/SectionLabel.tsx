import type { ElementType } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  dot?: string;
  dotAnimate?: boolean;
  icon?: ElementType;
  iconClass?: string;
}

export function SectionLabel({
  children,
  dot,
  dotAnimate = false,
  icon: Icon,
  iconClass,
}: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/60" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 flex items-center gap-1.5">
        {dot && (
          <span
            className={cn("h-1.5 w-1.5 rounded-full shrink-0", dotAnimate && "animate-pulse")}
            style={{ background: dot }}
          />
        )}
        {Icon && <Icon className={cn("h-2.5 w-2.5 shrink-0", iconClass)} />}
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/60" />
    </div>
  );
}
