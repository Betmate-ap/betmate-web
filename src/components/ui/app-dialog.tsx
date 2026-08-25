import * as React from "react";
import { useState } from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { cn } from "@/lib/utils";

type ActionVariant = "default" | "destructive" | "outline" | "ghost" | "secondary" | "gold";
type IconVariant = "neutral" | "accent" | "destructive" | "success";

interface DialogAction {
  label: string;
  variant?: ActionVariant;
  onClick?: () => void;
}

const ICON_STYLES: Record<IconVariant, { bg: string; fg: string }> = {
  neutral: { bg: "bg-muted", fg: "text-muted-foreground" },
  accent: { bg: "bg-accent/10", fg: "text-accent" },
  destructive: { bg: "bg-destructive/10", fg: "text-destructive" },
  success: { bg: "bg-success/10", fg: "text-success" },
};

interface AppDialogProps {
  trigger: React.ReactNode;
  icon?: React.ElementType;
  iconVariant?: IconVariant;
  title: string;
  description?: string;
  body?: React.ReactNode;
  actions: DialogAction[];
  showCloseButton?: boolean;
}

function AppDialog({
  trigger,
  icon: Icon,
  iconVariant = "neutral",
  title,
  description,
  body,
  actions,
  showCloseButton = false,
}: AppDialogProps) {
  const [open, setOpen] = useState(false);
  const iconStyle = ICON_STYLES[iconVariant];
  const isStacked = actions.length >= 3;

  const triggerEl = React.isValidElement(trigger)
    ? React.cloneElement(trigger as React.ReactElement<{ onClick?: React.MouseEventHandler }>, {
        onClick: (e) => {
          (trigger as React.ReactElement<{ onClick?: React.MouseEventHandler }>).props.onClick?.(e);
          setOpen(true);
        },
      })
    : trigger;

  // 1-2 actions: reverse for flex-col-reverse mobile layout (primary at top)
  // 3+ actions: stacked column, primary first
  const footerActions = isStacked ? actions : [...actions].reverse();

  return (
    <>
      {triggerEl}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton={showCloseButton}>
          <DialogHeader>
            {Icon ? (
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                    iconStyle.bg
                  )}
                >
                  <Icon className={cn("h-4 w-4", iconStyle.fg)} />
                </span>
                <div>
                  <DialogTitle>{title}</DialogTitle>
                  {description && <DialogDescription>{description}</DialogDescription>}
                </div>
              </div>
            ) : (
              <>
                <DialogTitle>{title}</DialogTitle>
                {description && <DialogDescription>{description}</DialogDescription>}
              </>
            )}
          </DialogHeader>
          {body && <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>}
          <DialogFooter className={isStacked ? "flex-col gap-2 sm:flex-col" : undefined}>
            {footerActions.map(({ label, variant = "default", onClick }) => (
              <Button
                key={label}
                variant={variant}
                className={isStacked ? "w-full" : undefined}
                onClick={() => {
                  onClick?.();
                  setOpen(false);
                }}
              >
                {label}
              </Button>
            ))}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export { AppDialog };
