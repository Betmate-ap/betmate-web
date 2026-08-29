import { motion } from "framer-motion";
import { ChevronRight, Shield, Trophy, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "../motionPresets";
import { focusAuth } from "../events";

const PROOF_STATS = [
  { icon: Shield, value: "Zero", label: "real money ever", color: "var(--success)" },
  { icon: Trophy, value: "±10 pts", label: "per match, always", color: "var(--gold)" },
  { icon: Zap, value: "IPL 2026", label: "season active", color: "var(--accent)" },
];

const MINI_LEADERBOARD = [
  { initials: "You", pts: 120, pct: 100, color: "var(--gold)", medal: "🥇" },
  { initials: "Alex", pts: 95, pct: 79, color: "var(--accent)", medal: "🥈" },
  { initials: "Sam", pts: 70, pct: 58, color: "var(--sky)", medal: "🥉" },
  { initials: "Raj", pts: 50, pct: 42, color: "var(--muted-foreground)", medal: "4th" },
];

export default function CtaBanner() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-16 sm:py-28 lg:py-36"
    >
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.13] via-transparent to-gold/[0.10]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[900px] rounded-full bg-accent/[0.12] blur-[130px]" />
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[500px] rounded-full bg-gold/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-sky/[0.06] blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — copy */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
            >
              Join the competition
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight"
            >
              Prove you know{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, var(--gold), var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                cricket best.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Sign up, add your Betmates, and settle the age-old debate. Who actually calls IPL
              matches better in your friend group?
            </motion.p>

            {/* Social proof pills */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {PROOF_STATS.map(({ icon: Icon, value, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5"
                  style={{ background: "color-mix(in srgb, var(--surface) 80%, transparent)" }}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" style={{ color }} />
                  <span className="text-xs font-bold text-foreground">{value}</span>
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <button
                onClick={() => focusAuth("signup")}
                className={cn(
                  buttonVariants({ variant: "gold", size: "lg" }),
                  "gap-2 px-8 text-base h-12 shadow-2xl shadow-gold/30 w-full sm:w-auto justify-center"
                )}
              >
                Create your account <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => focusAuth("login")}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-8 text-base h-12 w-full sm:w-auto justify-center"
                )}
              >
                Already a member
              </button>
            </motion.div>
          </motion.div>

          {/* Right — mini leaderboard visual */}
          <motion.div
            className="w-full max-w-xs shrink-0"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border overflow-hidden shadow-2xl"
              style={{ background: "color-mix(in srgb, var(--surface) 95%, transparent)" }}
            >
              {/* Card header */}
              <div className="h-1 bg-gradient-to-r from-gold via-accent to-sky" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Your group
                  </p>
                  <span
                    className="text-[10px] font-bold text-gold px-2 py-0.5 rounded-full"
                    style={{ background: "color-mix(in srgb, var(--gold) 12%, transparent)" }}
                  >
                    IPL 2026
                  </span>
                </div>

                {/* Leaderboard rows */}
                <div className="flex flex-col gap-3">
                  {MINI_LEADERBOARD.map(({ initials, pts, pct, color, medal }, i) => (
                    <motion.div
                      key={initials}
                      variants={fadeUp}
                      className="flex items-center gap-3"
                    >
                      <span className="text-sm w-6 shrink-0 text-center">{medal}</span>
                      <span className="text-xs font-semibold text-foreground w-8 shrink-0">
                        {initials}
                      </span>
                      <div
                        className="flex-1 h-2.5 rounded-full overflow-hidden"
                        style={{ background: "color-mix(in srgb, var(--border) 60%, transparent)" }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-foreground w-12 text-right shrink-0">
                        {pts} pts
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom hint */}
                <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-2">
                  <div
                    className="h-1.5 w-1.5 rounded-full animate-pulse"
                    style={{ background: "var(--success)" }}
                  />
                  <p className="text-[11px] text-muted-foreground">Updated after every match</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
