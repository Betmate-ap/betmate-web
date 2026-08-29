import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { focusAuth } from "./events";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-lg"
      style={{ backgroundColor: "color-mix(in srgb, var(--background) 85%, transparent)" }}
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">
        <Logo size="md" />

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => focusAuth("login")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors h-9 px-3 inline-flex items-center"
          >
            Sign in
          </button>
          <button
            onClick={() => focusAuth("signup")}
            className={cn(buttonVariants({ variant: "gold", size: "sm" }))}
          >
            Get Started
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-border bg-surface px-4 py-4 space-y-1"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="flex gap-2 pt-3 border-t border-border mt-2">
            <button
              onClick={() => {
                focusAuth("login");
                setOpen(false);
              }}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "flex-1 justify-center"
              )}
            >
              Sign in
            </button>
            <button
              onClick={() => {
                focusAuth("signup");
                setOpen(false);
              }}
              className={cn(
                buttonVariants({ variant: "gold", size: "sm" }),
                "flex-1 justify-center"
              )}
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
