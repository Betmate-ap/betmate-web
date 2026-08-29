import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Coins, Trophy, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { AvatarStack } from "@/components/ui/user-avatar";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "../motionPresets";
import { SOCIAL_USERS } from "../constants";
import { focusAuth } from "../events";
import { SectionLabel } from "../SectionLabel";
import MatchVsCard from "./MatchVsCard";
import BetFlowCard from "./BetFlowCard";
import SeasonStandingsChart from "./SeasonStandingsChart";
import HeroAuthCard from "./HeroAuthCard";
import IPLTeamsTicker from "./IPLTeamsTicker";

const FEATURE_BULLETS = [
  { icon: Zap, text: "Synced live with the IPL schedule", c: "text-accent", bg: "bg-accent/10" },
  { icon: Coins, text: "Coin toss mechanic for every match", c: "text-gold", bg: "bg-gold/10" },
  { icon: Trophy, text: "Full season leaderboard with friends", c: "text-gold", bg: "bg-gold/10" },
  { icon: TrendingUp, text: "Friend vs friend stats and history", c: "text-sky", bg: "bg-sky/10" },
  {
    icon: CheckCircle2,
    text: "Live results with no manual updates",
    c: "text-success",
    bg: "bg-success/10",
  },
] as const;

const STATS = [
  { v: "10", l: "IPL Teams", c: "var(--accent)" },
  { v: "74", l: "Matches", c: "var(--gold)" },
  { v: "Free", l: "Always", c: "var(--success)" },
] as const;

export default function HeroSection() {
  const [authMode, setAuthMode] = useState<"signup" | "login">("signup");
  const [highlighted, setHighlighted] = useState(false);
  const authCardRef = useRef<HTMLDivElement>(null);

  const handleFocusAuth = (mode: "signup" | "login") => {
    setAuthMode(mode);
    setHighlighted(true);
    authCardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setHighlighted(false), 1200);
  };

  useEffect(() => {
    const handler = (e: Event) =>
      handleFocusAuth((e as CustomEvent<{ mode: "signup" | "login" }>).detail.mode);
    window.addEventListener("focusAuthForm", handler);
    return () => window.removeEventListener("focusAuthForm", handler);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--foreground) 10%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.30] dark:opacity-[0.18]"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 0% 50%, var(--accent), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.24] dark:opacity-[0.15]"
        style={{
          background: "radial-gradient(ellipse 55% 70% at 100% 40%, var(--gold), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 100%, var(--sky), transparent)",
        }}
      />

      {/* Top spacer — with bottom spacer, centers grid between nav and ticker */}
      <div className="flex-1" />

      <div className="relative grid grid-cols-1 lg:grid-cols-3 items-start lg:items-stretch gap-y-10 lg:gap-y-0 py-8 sm:py-10 lg:py-14">
        {/* Col 1: Copy */}
        <motion.div
          className="flex flex-col gap-5 sm:gap-6 lg:justify-between px-4 sm:px-6 lg:px-10 xl:px-14"
          variants={stagger(0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 w-fit"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent tracking-wide">
              IPL 2026 season is live
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl"
          >
            <span className="block text-foreground">Bet on cricket.</span>
            <span className="block bg-gradient-to-r from-accent via-sky to-accent bg-clip-text text-transparent pb-1">
              Challenge friends.
            </span>
            <span
              className="block text-gold"
              style={{ textShadow: "0 0 48px color-mix(in srgb, var(--gold) 50%, transparent)" }}
            >
              Own the board.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-muted-foreground">
            Pick IPL winners, challenge your friends one-on-one. Win
            <span className="text-success font-semibold"> +10</span> or lose
            <span className="text-destructive font-semibold"> −10</span> points per match. No money.
            Pure cricket.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <button
              onClick={() => focusAuth("signup")}
              className={cn(
                buttonVariants({ variant: "gold", size: "lg" }),
                "gap-2 shadow-lg shadow-gold/20"
              )}
            >
              Get Started Free <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => focusAuth("login")}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Sign In
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            {FEATURE_BULLETS.map(({ icon: Icon, text, c, bg }) => (
              <div key={text} className="flex items-center gap-2.5">
                <div
                  className={cn("h-6 w-6 rounded-md flex items-center justify-center shrink-0", bg)}
                >
                  <Icon className={cn("h-3.5 w-3.5", c)} />
                </div>
                <span className="text-sm text-muted-foreground">{text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <AvatarStack users={SOCIAL_USERS} max={4} size="sm" />
            <p className="text-sm text-muted-foreground">Invite your friends and play free</p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-2">
            {STATS.map(({ v, l, c }) => (
              <div
                key={l}
                className="rounded-xl py-3.5 text-center backdrop-blur-sm"
                style={{
                  background: `color-mix(in srgb, ${c} 10%, var(--surface))`,
                  border: `1px solid color-mix(in srgb, ${c} 28%, transparent)`,
                  boxShadow: `0 2px 14px color-mix(in srgb, ${c} 12%, transparent)`,
                }}
              >
                <div className="text-2xl font-black tabular-nums" style={{ color: c }}>
                  {v}
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5 font-medium uppercase tracking-wide">
                  {l}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            {["No credit card", "No real money", "Friends only"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-success" />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Col 2: Live match + bet flow + season standings */}
        <motion.div
          className="flex flex-col gap-5 px-4 sm:px-6 lg:px-8"
          variants={stagger(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel dot="var(--destructive)" dotAnimate>
              Live matches
            </SectionLabel>
          </motion.div>

          <motion.div variants={fadeUp}>
            <MatchVsCard />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-3 lg:mt-4">
            <SectionLabel>Bet flow</SectionLabel>
          </motion.div>

          <motion.div variants={fadeUp}>
            <BetFlowCard compact />
          </motion.div>

          <div className="flex-1" />

          <motion.div variants={fadeUp} className="mt-3 lg:mt-2">
            <SectionLabel icon={Trophy} iconClass="text-gold">
              Season standings
            </SectionLabel>
          </motion.div>

          <motion.div variants={fadeUp}>
            <SeasonStandingsChart />
          </motion.div>
        </motion.div>

        {/* Col 3: Auth card */}
        <motion.div
          ref={authCardRef}
          className="flex flex-col px-4 sm:px-6 lg:px-10 xl:px-14"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <HeroAuthCard mode={authMode} setMode={setAuthMode} highlight={highlighted} />
        </motion.div>
      </div>

      <div className="flex-1" />

      <IPLTeamsTicker />
    </section>
  );
}
