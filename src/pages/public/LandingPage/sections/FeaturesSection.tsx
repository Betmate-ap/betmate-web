import { motion } from "framer-motion";
import { Shield, Zap, Users, Trophy, Check, X, Sparkles } from "lucide-react";
import { type ElementType, type ReactElement } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "../motionPresets";

// ─── Mini visualizations ─────────────────────────────────────────────────────

function RiskVisual() {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div
        className="flex items-center justify-between rounded-lg px-3 py-2.5"
        style={{ background: "color-mix(in srgb, var(--success) 12%, var(--surface))" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-5 w-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "color-mix(in srgb, var(--success) 20%, transparent)" }}
          >
            <Check className="h-3 w-3 text-success" />
          </div>
          <span className="text-xs font-medium text-foreground">You picked CSK ✓</span>
        </div>
        <span className="text-xs font-bold text-success">+10 pts</span>
      </div>
      <div
        className="flex items-center justify-between rounded-lg px-3 py-2.5"
        style={{ background: "color-mix(in srgb, var(--destructive) 10%, var(--surface))" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-5 w-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "color-mix(in srgb, var(--destructive) 20%, transparent)" }}
          >
            <X className="h-3 w-3 text-destructive" />
          </div>
          <span className="text-xs font-medium text-foreground">Alex picked MI ✗</span>
        </div>
        <span className="text-xs font-bold text-destructive">−10 pts</span>
      </div>
    </div>
  );
}

function MatchSyncVisual() {
  const matches = [
    { t1: "CSK", t2: "MI", time: "7:30 PM", status: "Tonight" },
    { t1: "RCB", t2: "KKR", time: "3:30 PM", status: "Tomorrow" },
  ];
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {matches.map(({ t1, t2, time, status }) => (
        <div
          key={t1}
          className="flex items-center rounded-lg border border-border/40 px-3 py-2 gap-2"
          style={{ background: "color-mix(in srgb, var(--surface) 80%, transparent)" }}
        >
          <span className="text-[10px] text-muted-foreground w-14 shrink-0">{status}</span>
          <div className="flex-1 flex items-center justify-center gap-2">
            <span className="text-xs font-bold text-foreground">{t1}</span>
            <span className="text-[10px] text-muted-foreground">vs</span>
            <span className="text-xs font-bold text-foreground">{t2}</span>
          </div>
          <span className="text-[10px] text-muted-foreground w-14 text-right shrink-0">{time}</span>
        </div>
      ))}
    </div>
  );
}

const FRIEND_AVATARS = [
  { initials: "AK", color: "var(--accent)" },
  { initials: "SR", color: "var(--sky)" },
  { initials: "JL", color: "var(--gold)" },
  { initials: "CP", color: "var(--success)" },
];

function BetmatesVisual() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2.5">
          {FRIEND_AVATARS.map(({ initials, color }) => (
            <div
              key={initials}
              className="h-8 w-8 rounded-full border-2 border-surface flex items-center justify-center text-[10px] font-bold text-white shrink-0"
              style={{ background: color }}
            >
              {initials}
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">4 Betmates</p>
          <p className="text-[10px] text-muted-foreground">All active this season</p>
        </div>
      </div>
      <div
        className="flex items-center justify-between rounded-lg border border-border/40 px-3 py-2"
        style={{ background: "color-mix(in srgb, var(--sky) 8%, var(--surface))" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-6 w-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
            style={{ background: "var(--sky)" }}
          >
            JL
          </div>
          <span className="text-[11px] text-foreground font-medium">Jordan wants to Betmate</span>
        </div>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-md text-sky shrink-0"
          style={{ background: "color-mix(in srgb, var(--sky) 15%, transparent)" }}
        >
          Accept
        </span>
      </div>
    </div>
  );
}

const STANDINGS = [
  { name: "You", pts: 120, pct: 100, color: "var(--gold)" },
  { name: "Alex", pts: 95, pct: 79, color: "var(--accent)" },
  { name: "Sam", pts: 70, pct: 58, color: "var(--sky)" },
];

const MEDALS = ["🥇", "🥈", "🥉"];

function LeaderboardVisual() {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      {STANDINGS.map(({ name, pts, pct, color }, i) => (
        <div key={name} className="flex items-center gap-2">
          <span className="w-5 text-sm shrink-0">{MEDALS[i]}</span>
          <span className="text-[11px] font-medium text-foreground w-8 shrink-0">{name}</span>
          <div
            className="flex-1 h-3 rounded-full overflow-hidden"
            style={{ background: "color-mix(in srgb, var(--border) 60%, transparent)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
          <span className="text-[11px] font-bold text-foreground w-14 text-right shrink-0">
            {pts} pts
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Feature data ─────────────────────────────────────────────────────────────

interface Feature {
  icon: ElementType;
  title: string;
  description: string;
  stat: string;
  accentVar: string;
  accentClass: string;
  topFrom: string;
  topTo: string;
  Visual: () => ReactElement;
}

const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Zero risk, always",
    description:
      "No real money changes hands. Every prediction is exactly +10 or −10 points. Compete purely on cricket knowledge.",
    stat: "Always ±10 pts",
    accentVar: "var(--success)",
    accentClass: "text-success",
    topFrom: "from-success",
    topTo: "to-success/0",
    Visual: RiskVisual,
  },
  {
    icon: Zap,
    title: "Synced with IPL",
    description:
      "Matches pull from the live IPL 2026 schedule automatically. Get notified before each game and lock your pick.",
    stat: "74 matches · IPL 2026",
    accentVar: "var(--accent)",
    accentClass: "text-accent",
    topFrom: "from-accent",
    topTo: "to-accent/0",
    Visual: MatchSyncVisual,
  },
  {
    icon: Users,
    title: "Add your Betmates",
    description:
      "Send a friend request and anyone who accepts becomes your Betmate. Bet 1v1 for the entire season.",
    stat: "1v1 per Betmate",
    accentVar: "var(--sky)",
    accentClass: "text-sky",
    topFrom: "from-sky",
    topTo: "to-sky/0",
    Visual: BetmatesVisual,
  },
  {
    icon: Trophy,
    title: "Season leaderboard",
    description:
      "Points accumulate all season. Your leaderboard shows exactly where you stand against every Betmate.",
    stat: "Updated every match",
    accentVar: "var(--gold)",
    accentClass: "text-gold",
    topFrom: "from-gold",
    topTo: "to-gold/0",
    Visual: LeaderboardVisual,
  },
];

const STATS = [
  { value: "74", label: "IPL matches" },
  { value: "1v1", label: "predictions" },
  { value: "±10", label: "pts per match" },
  { value: "0₹", label: "real money" },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "color-mix(in srgb, var(--accent) 2%, var(--background))" }}
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-0 h-[600px] w-[700px] rounded-full bg-accent/[0.08] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[600px] rounded-full bg-gold/[0.07] blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-sky/[0.03] blur-[100px]" />
      </div>
      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 mb-5"
            style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}
          >
            <Sparkles className="h-3 w-3 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Why BetMate
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground"
          >
            Cricket, gamified for <span className="text-accent">your circle</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Everything you need to make every IPL match matter between you and your friends. Zero
            setup. Zero risk.
          </motion.p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-12 sm:mb-16 border border-border/60"
          style={{ background: "color-mix(in srgb, var(--border) 60%, transparent)" }}
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {STATS.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col items-center gap-1 py-5 px-4 bg-surface"
            >
              <span className="text-2xl sm:text-3xl font-black text-foreground">{value}</span>
              <span className="text-[11px] text-muted-foreground uppercase tracking-wide text-center">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature cards — 2×2 grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {FEATURES.map(
            ({
              icon: Icon,
              title,
              description,
              stat,
              accentVar,
              accentClass,
              topFrom,
              topTo,
              Visual,
            }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${accentVar} 45%, transparent)`,
                  }}
                />

                {/* Top accent bar */}
                <div className={cn("h-[3px] bg-gradient-to-r", topFrom, topTo)} />

                <div className="p-6 flex flex-col gap-5">
                  {/* Icon + stat pill */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `color-mix(in srgb, ${accentVar} 14%, var(--surface))`,
                      }}
                    >
                      <Icon className={cn("h-5 w-5", accentClass)} />
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 mt-0.5"
                      style={{
                        color: accentVar,
                        background: `color-mix(in srgb, ${accentVar} 12%, transparent)`,
                      }}
                    >
                      {stat}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-bold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border/60" />

                  {/* Mini visualization */}
                  <Visual />
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
