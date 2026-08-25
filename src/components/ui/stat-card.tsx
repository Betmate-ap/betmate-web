import type { ElementType } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { cn } from "@/lib/utils";

type StatColor = "gold" | "accent" | "success" | "sky" | "destructive" | "warning";

const colorClass: Record<StatColor, string> = {
  gold: "text-gold",
  accent: "text-accent",
  success: "text-success",
  sky: "text-sky",
  destructive: "text-destructive",
  warning: "text-warning",
};

interface StatCardProps {
  icon: ElementType;
  label: string;
  value: string | number;
  color?: StatColor;
  className?: string;
}

function StatCard({ icon: Icon, label, value, color = "accent", className }: StatCardProps) {
  const cls = colorClass[color];
  return (
    <Card className={cn("bg-surface border-border", className)}>
      <CardHeader className="pb-1 pt-3 px-3">
        <div className="flex items-center gap-1.5">
          <Icon className={cn("h-3.5 w-3.5", cls)} />
          <CardTitle className="text-xs font-medium text-muted-foreground">{label}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-3">
        <p className={cn("text-2xl font-bold tabular-nums", cls)}>{value}</p>
      </CardContent>
    </Card>
  );
}

export { StatCard };
