import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { wh: 16, border: 2 },
  md: { wh: 28, border: 2 },
  lg: { wh: 44, border: 3 },
};

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const { wh, border } = sizes[size];
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("shrink-0 animate-spin rounded-full", className)}
      style={{
        width: wh,
        height: wh,
        border: `${border}px solid var(--surface-raised)`,
        borderTopColor: "var(--accent)",
      }}
    />
  );
}
