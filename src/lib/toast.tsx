import { toast } from "sonner";
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";

type ToastType = "info" | "success" | "warning" | "error";

const DURATION = 4000;

const CONFIG = {
  info: { Icon: Info, color: "var(--accent)", bar: "bg-accent" },
  success: { Icon: CheckCircle2, color: "#10b981", bar: "bg-emerald-500" },
  warning: { Icon: AlertTriangle, color: "var(--gold)", bar: "bg-gold" },
  error: { Icon: XCircle, color: "var(--destructive)", bar: "bg-destructive" },
} as const;

function BetmateToast({
  id,
  type,
  title,
  description,
}: {
  id: string | number;
  type: ToastType;
  title: string;
  description?: string;
}) {
  const { Icon, color, bar } = CONFIG[type];

  return (
    <div
      className="relative flex w-[356px] max-w-[calc(100vw-2rem)] items-start gap-3 overflow-hidden rounded-xl border border-border bg-card px-4 py-3.5 pr-10 shadow-lg"
      style={{ borderLeftColor: color, borderLeftWidth: "3px" }}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground leading-snug">{title}</p>
        {description && (
          <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{description}</p>
        )}
      </div>
      <button
        onClick={() => toast.dismiss(id)}
        className="absolute right-3 top-3 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border/50">
        <div
          className={`h-full ${bar} opacity-60`}
          style={{ animation: `betmate-toast-progress ${DURATION}ms linear forwards` }}
        />
      </div>
    </div>
  );
}

export function showToast(type: ToastType, title: string, description?: string) {
  toast.custom(
    (id) => <BetmateToast id={id} type={type} title={title} description={description} />,
    { duration: DURATION }
  );
}
