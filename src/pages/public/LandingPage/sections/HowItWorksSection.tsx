import { motion } from "framer-motion";
import { UserPlus, Swords, Medal, ChevronRight } from "lucide-react";
import { type ElementType, type ReactElement } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "../motionPresets";

// ─── Step visualizations ──────────────────────────────────────────────────────

function SignupVisual() {
  return (
    <div
      className="rounded-xl border border-border/50 overflow-hidden"
      style={{ background: "color-mix(in srgb, var(--background) 80%, transparent)" }}
    >
      <div className="h-1 bg-gradient-to-r from-accent via-sky to-accent/0" />
      <div className="p-3 flex flex-col gap-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
          Create account
        </p>
        <div
          className="h-7 rounded-lg border border-border/60 px-2.5 flex items-center gap-2"
          style={{ background: "color-mix(in srgb, var(--surface) 80%, transparent)" }}
        >
          <span className="text-[11px] text-muted-foreground">Username</span>
        </div>
        <div
          className="h-7 rounded-lg border border-border/60 px-2.5 flex items-center gap-2"
          style={{ background: "color-mix(in srgb, var(--surface) 80%, transparent)" }}
        >
          <span className="text-[11px] text-muted-foreground">Email address</span>
        </div>
        <div
          className="mt-1 h-7 rounded-lg flex items-center justify-center gap-1.5"
          style={{ background: "var(--accent)" }}
        >
          <span className="text-[11px] font-bold text-white">Get started</span>
          <ChevronRight className="h-3 w-3 text-white" />
        </div>
      </div>
    </div>
  );
}

const PICK_TEAMS = [
  { team: "CSK", selected: true, color: "var(--gold)" },
  { team: "MI", selected: false, color: "var(--sky)" },
];

function PickVisual() {
  return (
    <div
      className="rounded-xl border border-border/50 overflow-hidden"
      style={{ background: "color-mix(in srgb, var(--background) 80%, transparent)" }}
    >
      <div className="h-1 bg-gradient-to-r from-sky via-accent to-sky/0" />
      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Tonight · 7:30 PM
          </p>
          <span className="text-[10px] font-bold text-accent">Pick one</span>
        </div>
        {PICK_TEAMS.map(({ team, selected, color }) => (
          <div
            key={team}
            className={cn(
              "h-9 rounded-lg border px-3 flex items-center justify-between transition-all",
              selected ? "border-transparent" : "border-border/60"
            )}
            style={
              selected
                ? {
                    background: `color-mix(in srgb, ${color} 15%, var(--surface))`,
                    borderColor: `color-mix(in srgb, ${color} 40%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${color} 40%, transparent)`,
                  }
                : { background: "color-mix(in srgb, var(--surface) 80%, transparent)" }
            }
          >
            <span className="text-xs font-bold text-foreground">{team}</span>
            {selected && (
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{ color, background: `color-mix(in srgb, ${color} 15%, transparent)` }}
              >
                ✓ My pick
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const WIN_ROWS = [
  { name: "You", delta: "+10", positive: true, total: "120 pts", color: "var(--gold)" },
  { name: "Alex", delta: "−10", positive: false, total: "95 pts", color: "var(--accent)" },
];

function WinVisual() {
  return (
    <div
      className="rounded-xl border border-border/50 overflow-hidden"
      style={{ background: "color-mix(in srgb, var(--background) 80%, transparent)" }}
    >
      <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-gold/0" />
      <div className="p-3 flex flex-col gap-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
          Match result · CSK won
        </p>
        {WIN_ROWS.map(({ name, delta, positive, total, color }) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-lg px-3 py-2"
            style={{ background: `color-mix(in srgb, ${color} 8%, var(--surface))` }}
          >
            <div className="flex items-center gap-2">
              <div
                className="h-5 w-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                style={{ background: color }}
              >
                {name[0]}
              </div>
              <span className="text-xs font-medium text-foreground">{name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={cn("text-xs font-bold", positive ? "text-success" : "text-destructive")}
              >
                {delta}
              </span>
              <span className="text-[11px] text-muted-foreground">{total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Step data ────────────────────────────────────────────────────────────────

interface Step {
  number: string;
  icon: ElementType;
  title: string;
  description: string;
  accentVar: string;
  accentClass: string;
  badge: string;
  topFrom: string;
  topTo: string;
  Visual: () => ReactElement;
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign up and add Betmates",
    description:
      "Create your account, then send friend requests to anyone you want to compete with. Accept each other and you're Betmates.",
    accentVar: "var(--accent)",
    accentClass: "text-accent",
    badge: "Start",
    topFrom: "from-accent",
    topTo: "to-accent/0",
    Visual: SignupVisual,
  },
  {
    number: "02",
    icon: Swords,
    title: "Pick your team before each match",
    description:
      "Before every IPL game, choose which team you think will win. Your Betmates make their own picks independently.",
    accentVar: "var(--sky)",
    accentClass: "text-sky",
    badge: "Predict",
    topFrom: "from-sky",
    topTo: "to-sky/0",
    Visual: PickVisual,
  },
  {
    number: "03",
    icon: Medal,
    title: "Win points, climb the leaderboard",
    description:
      "Correct pick earns +10 points, wrong pick costs −10. Points add up all season and the leaderboard never lies.",
    accentVar: "var(--gold)",
    accentClass: "text-gold",
    badge: "Win",
    topFrom: "from-gold",
    topTo: "to-gold/0",
    Visual: WinVisual,
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-14 sm:py-24 lg:py-32 border-t border-border overflow-hidden"
      style={{
        background:
          "color-mix(in srgb, var(--sky) 3%, color-mix(in srgb, var(--surface) 50%, var(--background)))",
      }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[500px] w-[600px] rounded-full bg-sky/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[600px] rounded-full bg-accent/[0.06] blur-[130px]" />
      </div>
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-20"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-accent mb-3"
          >
            Simple by design
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground"
          >
            Up and running in <span className="text-accent">2 minutes</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Three steps. No tutorials, no walkthroughs. You'll figure it out before the toss.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.666%+1.25rem)] right-[calc(16.666%+1.25rem)] h-px border-t border-dashed border-border/60 z-0" />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={stagger(0.16)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {STEPS.map(
              (
                {
                  number,
                  icon: Icon,
                  title,
                  description,
                  accentVar,
                  accentClass,
                  badge,
                  topFrom,
                  topTo,
                  Visual,
                },
                idx
              ) => (
                <motion.div key={number} variants={fadeUp} className="relative flex flex-col gap-5">
                  {/* Step number badge (desktop connector anchor) */}
                  <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:items-start">
                    <div
                      className="h-14 w-14 rounded-2xl border border-border flex items-center justify-center shrink-0 shadow-sm"
                      style={{ background: `color-mix(in srgb, ${accentVar} 10%, var(--surface))` }}
                    >
                      <Icon className={cn("h-6 w-6", accentClass)} />
                    </div>
                    {/* Mobile step connector arrow */}
                    {idx < STEPS.length - 1 && (
                      <div className="lg:hidden flex items-center gap-1 text-muted-foreground/40">
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                          Step {number}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                    <div className={cn("h-[3px] bg-gradient-to-r", topFrom, topTo)} />
                    <div className="p-5 flex flex-col gap-4">
                      {/* Number + badge */}
                      <div className="flex items-center justify-between">
                        <span
                          className="text-4xl font-black leading-none select-none"
                          style={{ color: `color-mix(in srgb, ${accentVar} 25%, transparent)` }}
                        >
                          {number}
                        </span>
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                          style={{
                            color: accentVar,
                            background: `color-mix(in srgb, ${accentVar} 15%, transparent)`,
                          }}
                        >
                          {badge}
                        </span>
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-border/60" />

                      {/* UI mockup */}
                      <Visual />
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
