import { useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  AtSign,
  ArrowRight,
  Zap,
  Trophy,
  Shield,
  Users,
  CheckCircle2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { AvatarStack } from "@/components/ui/user-avatar";
import { cn } from "@/lib/utils";
import { SOCIAL_USERS } from "../constants";

const slideVariants: Variants = {
  enter: { opacity: 0, y: 12, scale: 0.98 },
  center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.26, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.16, ease: "easeIn" } },
};

const BENEFITS = [
  { icon: Zap, text: "Pick the winner for every IPL match", c: "text-accent" },
  { icon: Trophy, text: "Season leaderboard with friends", c: "text-gold" },
  { icon: Shield, text: "No money, no risk, just fun", c: "text-success" },
  { icon: Users, text: "Challenge any friend, anytime", c: "text-sky" },
  { icon: CheckCircle2, text: "Instant results when match ends", c: "text-muted-foreground" },
];

interface HeroAuthCardProps {
  mode: "signup" | "login";
  setMode: (m: "signup" | "login") => void;
  highlight?: boolean;
}

export default function HeroAuthCard({ mode, setMode, highlight = false }: HeroAuthCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!highlight) return;
    const t = setTimeout(() => {
      containerRef.current?.querySelector<HTMLInputElement>("input")?.focus();
    }, 450);
    return () => clearTimeout(t);
  }, [highlight]);

  return (
    <div className="relative" ref={containerRef}>
      <AnimatePresence>
        {highlight && (
          <motion.div
            key="ping"
            className="absolute inset-0 rounded-2xl pointer-events-none z-20"
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 1.06 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ border: "2px solid color-mix(in srgb, var(--gold) 60%, transparent)" }}
          />
        )}
      </AnimatePresence>

      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl blur-3xl opacity-[0.14]"
        style={{ background: "linear-gradient(135deg, var(--accent), var(--gold))" }}
      />

      <div
        className={cn(
          "relative flex flex-col rounded-2xl border shadow-xl overflow-hidden transition-all duration-300",
          highlight ? "border-gold/50" : "border-border"
        )}
        style={{
          background: "color-mix(in srgb, var(--surface) 97%, transparent)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="h-1 bg-gradient-to-r from-accent via-sky to-gold" />

        <div className="flex flex-col p-5 sm:p-6">
          <div className="mb-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
              {mode === "signup" ? "Get started free" : "Welcome back"}
            </p>
            <h2 className="text-lg font-extrabold text-foreground">
              {mode === "signup" ? "Create your account" : "Sign in to BetMate"}
            </h2>
          </div>

          {/* Mode toggle */}
          <div className="flex rounded-xl bg-muted p-1 gap-1 mb-5">
            {(["signup", "login"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={cn(
                  "flex-1 rounded-lg py-1.5 text-[13px] font-semibold transition-all duration-200",
                  mode === m
                    ? "bg-surface text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {m === "signup" ? "Sign up" : "Sign in"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {mode === "signup" ? (
              <motion.form
                key="signup"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                onSubmit={(e) => e.preventDefault()}
                className="space-y-3"
              >
                <div className="grid grid-cols-2 gap-2.5">
                  <FormField label="First name">
                    <Input type="text" leadingIcon={User} placeholder="Alex" />
                  </FormField>
                  <FormField label="Last name">
                    <Input type="text" placeholder="Kumar" />
                  </FormField>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <FormField label="Username">
                    <Input type="text" leadingIcon={AtSign} placeholder="betmaster99" />
                  </FormField>
                  <FormField label="Email">
                    <Input type="email" leadingIcon={Mail} placeholder="alex@email.com" />
                  </FormField>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <FormField label="Password">
                    <Input type="password" leadingIcon={Lock} placeholder="Min. 8 chars" />
                  </FormField>
                  <FormField label="Confirm password">
                    <Input type="password" leadingIcon={Lock} placeholder="Repeat password" />
                  </FormField>
                </div>
                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ variant: "gold", size: "lg" }),
                    "w-full gap-2 mt-1"
                  )}
                >
                  Create Account <ArrowRight className="h-4 w-4" />
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="login"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                onSubmit={(e) => e.preventDefault()}
                className="space-y-3"
              >
                <FormField label="Email">
                  <Input type="email" leadingIcon={Mail} placeholder="alex@example.com" />
                </FormField>
                <FormField label="Password">
                  <Input type="password" leadingIcon={Lock} placeholder="Your password" />
                </FormField>
                <div className="flex justify-end">
                  <Link to="/login" className="text-[12px] text-accent hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className={cn(buttonVariants({ variant: "gold", size: "lg" }), "w-full gap-2")}
                >
                  Sign In <ArrowRight className="h-4 w-4" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="flex flex-col pt-4 border-t border-border/60 mt-4 gap-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 mb-2">
              What you get
            </p>
            <div className="flex flex-col gap-2.5">
              {BENEFITS.map(({ icon: Icon, text, c }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon className={cn("h-3.5 w-3.5 shrink-0", c)} />
                  <span className="text-xs text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-3">
            <div className="flex items-center gap-3 mb-3">
              <AvatarStack users={SOCIAL_USERS} max={4} size="sm" />
              <p className="text-xs text-muted-foreground">
                Built for friend groups ·{" "}
                <span className="font-semibold text-foreground">IPL 2026</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {["No credit card", "No real money", "Free forever"].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-[11px] text-muted-foreground"
                >
                  <CheckCircle2 className="h-3 w-3 text-success shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
