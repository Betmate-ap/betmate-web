import { Logo } from "@/components/shared/Logo";
import { Globe, Share2, Mail } from "lucide-react";
import { focusAuth } from "../events";

const PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
];

const SOCIAL_LINKS = [
  { icon: Share2, href: "#", label: "Share" },
  { icon: Mail, href: "mailto:hello@betmate.app", label: "Email" },
  { icon: Globe, href: "#", label: "Website" },
];

export default function LandingFooter() {
  return (
    <footer
      id="contact"
      className="relative border-t border-border overflow-hidden"
      style={{
        background:
          "color-mix(in srgb, var(--gold) 2%, color-mix(in srgb, var(--surface) 60%, var(--background)))",
      }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-gold/[0.06] blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[200px] w-[400px] rounded-full bg-accent/[0.04] blur-[80px]" />
      </div>

      {/* Accent gradient bar */}
      <div className="relative h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-14 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
              IPL predictions between friends. No money. Just points, pride, and bragging rights.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
                  style={{ background: "color-mix(in srgb, var(--surface) 80%, transparent)" }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground">Product</p>
            <nav className="flex flex-col gap-2">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Account links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground">Account</p>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => focusAuth("login")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Sign in
              </button>
              <button
                onClick={() => focusAuth("signup")}
                className="text-sm text-accent font-semibold hover:underline text-left"
              >
                Get Started, it's free
              </button>
              <a
                href="mailto:hello@betmate.app"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact us
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground">
            © 2026 BetMate · For entertainment only · No real money involved
          </p>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            <p className="text-[11px] text-muted-foreground">IPL 2026 season live</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
