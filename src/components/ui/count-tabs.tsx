import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { cn } from "@/lib/utils";

interface CountTabItem {
  value: string;
  label: string;
  count: number;
  live?: boolean;
}

interface CountTabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  items: CountTabItem[];
  className?: string;
}

function CountTabs({ defaultValue, value, onValueChange, items, className }: CountTabsProps) {
  return (
    <Tabs
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={className}
    >
      <TabsList className="w-full h-auto p-1.5 rounded-xl gap-1.5">
        {items.map(({ value: tabValue, label, count, live }) => (
          <TabsTrigger
            key={tabValue}
            value={tabValue}
            className="flex-col h-auto py-4 gap-1 rounded-lg"
          >
            <span
              className={cn(
                "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
              )}
            >
              {live && <span className="h-1.5 w-1.5 rounded-full animate-pulse bg-destructive" />}
              {label}
            </span>
            <span className="text-3xl font-bold tabular-nums leading-none">{count}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export { CountTabs };
