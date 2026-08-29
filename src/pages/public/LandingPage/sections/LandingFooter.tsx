import { Logo } from "@/components/shared/Logo";
import { focusAuth } from "../events";

const PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function LandingFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-14 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          <div className="space-y-3">
            <Logo size="sm" />
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              IPL predictions between friends. No money. Just points and bragging rights.
            </p>
          </div>

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
                Get Started
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

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground">
            © 2026 BetMate. For entertainment purposes only.
          </p>
          <p className="text-[11px] text-muted-foreground">
            No real money. No real bets. Just cricket.
          </p>
        </div>
      </div>
    </footer>
  );
}
