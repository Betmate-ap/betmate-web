import * as React from "react";
import { X } from "lucide-react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  leadingIcon?: React.ElementType;
  trailingIcon?: React.ElementType;
  prefix?: string;
  onClear?: () => void;
};

function Input({
  className,
  type,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  prefix,
  onClear,
  ...props
}: InputProps) {
  // Prefix pattern: wrapper div owns the border + focus ring so the prefix span integrates visually
  if (prefix !== undefined) {
    return (
      <div className="flex rounded-lg border border-input overflow-hidden focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 transition-all">
        <span className="flex items-center px-3 bg-muted border-r border-input text-sm text-muted-foreground select-none shrink-0">
          {prefix}
        </span>
        <input
          type={type}
          className={cn(
            "h-10 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground dark:bg-transparent",
            className
          )}
          {...props}
        />
      </div>
    );
  }

  const hasTrailing = TrailingIcon || onClear;
  const input = (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-1 text-sm transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        LeadingIcon && "pl-9",
        hasTrailing && "pr-9",
        className
      )}
      {...props}
    />
  );

  if (!LeadingIcon && !hasTrailing) return input;

  return (
    <div className="relative w-full">
      {LeadingIcon && (
        <LeadingIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none shrink-0" />
      )}
      {input}
      {onClear ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      ) : TrailingIcon ? (
        <TrailingIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none shrink-0" />
      ) : null}
    </div>
  );
}

export { Input };
