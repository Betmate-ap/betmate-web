import { CheckCircle2, XCircle, Clock, Flame, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type StatusVariant =
  "won" | "lost" | "completed" | "accepted" | "declined" | "pending" | "live";

const STATUS_CONFIG: Record<
  StatusVariant,
  { label: string; icon: LucideIcon; className: string; animate?: boolean }
> = {
  won: {
    label: "WON",
    icon: CheckCircle2,
    className: "bg-success/12 text-success ring-1 ring-success/30",
  },
  completed: {
    label: "COMPLETED",
    icon: CheckCircle2,
    className: "bg-success/12 text-success ring-1 ring-success/30",
  },
  accepted: {
    label: "ACCEPTED",
    icon: CheckCircle2,
    className: "bg-success/12 text-success ring-1 ring-success/30",
  },
  lost: {
    label: "LOST",
    icon: XCircle,
    className: "bg-destructive/12 text-destructive ring-1 ring-destructive/30",
  },
  declined: {
    label: "DECLINED",
    icon: XCircle,
    className: "bg-destructive/12 text-destructive ring-1 ring-destructive/30",
  },
  pending: {
    label: "PENDING",
    icon: Clock,
    className: "bg-warning/12 text-warning ring-1 ring-warning/30",
  },
  live: {
    label: "LIVE",
    icon: Flame,
    className: "bg-destructive/12 text-destructive ring-1 ring-destructive/30",
    animate: true,
  },
};

interface StatusBadgeProps {
  variant: StatusVariant;
  className?: string;
}

function StatusBadge({ variant, className }: StatusBadgeProps) {
  const { label, icon: Icon, className: variantClass, animate } = STATUS_CONFIG[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        variantClass,
        animate && "animate-pulse",
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}

export { StatusBadge };
