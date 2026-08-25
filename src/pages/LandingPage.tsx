import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Trophy,
  Zap,
  Users,
  Shield,
  ChevronRight,
  Menu,
  X,
  Star,
  TrendingUp,
  Bell,
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { StatusBadge } from "@/components/ui/status-badge";
import { AvatarStack } from "@/components/ui/user-avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ── Shared motion presets ───────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

/* ── Page ────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <LandingNav />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaBanner />
      <LandingFooter />
    </div>
  );
}

/* ── Nav ─────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-lg"
      style={{ backgroundColor: "color-mix(in srgb, var(--background) 85%, transparent)" }}
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16">
        <Logo size="md" />

        {/* Desktop nav */}
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

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors h-9 px-3 inline-flex items-center"
          >
            Sign in
          </Link>
          <Link to="/register" className={cn(buttonVariants({ variant: "gold", size: "sm" }))}>
            Get Started
          </Link>
        </div>

        {/* Mobile actions */}
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

      {/* Mobile dropdown */}
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
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "flex-1 justify-center"
              )}
            >
              Sign in
            </Link>
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ variant: "gold", size: "sm" }),
                "flex-1 justify-center"
              )}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

/* ── Hero ────────────────────────────────────────────────────── */
const SOCIAL_USERS = [
  { userId: "s1", name: "Alex Kim" },
  { userId: "s2", name: "Sam Rivera" },
  { userId: "s3", name: "Jordan Lee" },
  { userId: "s4", name: "Casey Patel" },
];

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">
      {/* Full-bleed backgrounds */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[500px] rounded-full bg-accent/8 blur-[100px]" />

      <div className="relative px-4 sm:px-6 lg:px-10 xl:px-16 py-16 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left: headline + CTAs ── */}
          <motion.div
            className="text-center lg:text-left"
            variants={stagger(0.11)}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent tracking-wide">
                IPL 2026 season is live
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl xl:text-6xl 2xl:text-7xl"
            >
              <span className="block text-foreground">Bet on cricket.</span>
              <span className="block bg-gradient-to-r from-accent via-sky to-accent bg-clip-text text-transparent">
                Challenge friends.
              </span>
              <span className="block text-gold">Own the board.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-md mx-auto lg:mx-0"
            >
              Pick IPL match winners and go head to head with your Betmates. No real money, just
              <span className="text-success font-semibold"> +10</span> or
              <span className="text-destructive font-semibold"> 10 points</span> per match. Pure
              cricket knowledge.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center gap-3 justify-center lg:justify-start"
            >
              <AvatarStack users={SOCIAL_USERS} max={4} size="sm" />
              <p className="text-sm text-muted-foreground">
                Join <span className="font-bold text-foreground">1,200+</span> cricket fans
                competing
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <Link
                to="/register"
                className={cn(
                  buttonVariants({ variant: "gold", size: "lg" }),
                  "gap-2 px-7 text-[15px] h-12 shadow-xl shadow-gold/25 w-full sm:w-auto justify-center"
                )}
              >
                Get Started Free <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/login"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-7 text-[15px] h-12 w-full sm:w-auto justify-center"
                )}
              >
                Sign in
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-5 flex items-center gap-5 justify-center lg:justify-start flex-wrap"
            >
              {["No credit card", "No real money", "Friends only"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-success" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: coin toss scene ── */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HeroMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Team logos for hero ──────────────────────────────────────── */
const HERO_LOGOS = [
  { abbr: "MI", src: "/logos/MI.png", delay: 0, anim: "animate-float-a" },
  { abbr: "CSK", src: "/logos/CSK.png", delay: 0.5, anim: "animate-float-b" },
  { abbr: "RCB", src: "/logos/RCB.png", delay: 1.0, anim: "animate-float-c" },
  { abbr: "KKR", src: "/logos/KKR.png", delay: 0.3, anim: "animate-float-b" },
  { abbr: "SRH", src: "/logos/SRH.png", delay: 0.8, anim: "animate-float-a" },
  { abbr: "RR", src: "/logos/RR.png", delay: 0.6, anim: "animate-float-c" },
];

/* ── Player silhouette SVG ────────────────────────────────────── */
function PlayerSVG({ accent }: { accent: string }) {
  return (
    <svg width="56" height="80" viewBox="0 0 56 80" fill="none">
      <circle
        cx="28"
        cy="16"
        r="13"
        fill={`${accent}20`}
        stroke={`${accent}45`}
        strokeWidth="1.5"
      />
      <circle cx="22" cy="14" r="2.2" fill={`${accent}70`} />
      <circle cx="34" cy="14" r="2.2" fill={`${accent}70`} />
      <path
        d="M21 21 Q28 27 35 21"
        stroke={`${accent}70`}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <rect
        x="12"
        y="31"
        width="32"
        height="36"
        rx="9"
        fill={`${accent}18`}
        stroke={`${accent}30`}
        strokeWidth="1"
      />
      {/* raised arm */}
      <rect
        x="-2"
        y="26"
        width="14"
        height="5.5"
        rx="2.8"
        fill={`${accent}28`}
        transform="rotate(-35 -2 26)"
      />
      {/* other arm */}
      <rect x="44" y="37" width="14" height="5.5" rx="2.8" fill={`${accent}28`} />
      <rect x="15" y="67" width="9" height="13" rx="4.5" fill={`${accent}18`} />
      <rect x="32" y="67" width="9" height="13" rx="4.5" fill={`${accent}18`} />
    </svg>
  );
}

/* ── Hero mockup — coin toss scene + match card ───────────────── */
function HeroMockup() {
  return (
    <div className="w-full select-none flex flex-col gap-5">
      {/* ── Team logo arc ── */}
      <div className="flex items-center justify-center gap-2.5 sm:gap-3">
        {HERO_LOGOS.map(({ abbr, src, delay, anim }) => (
          <div
            key={abbr}
            className={cn(
              "h-11 w-11 sm:h-12 sm:w-12 rounded-xl overflow-hidden border border-border bg-surface shadow-md shrink-0",
              anim
            )}
            style={{ animationDelay: `${delay}s` }}
          >
            <img
              src={src}
              alt={abbr}
              className="h-full w-full object-contain p-1.5"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* ── Coin toss scene ── */}
      <div className="flex items-end justify-center gap-6 sm:gap-10">
        {/* Left player (You / MI fan) */}
        <div
          className="flex flex-col items-center gap-1.5 animate-head-bob"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-[10px] font-bold text-accent uppercase tracking-wider">You</span>
          <PlayerSVG accent="#3b82f6" />
          <div className="h-6 w-6 rounded-full overflow-hidden border border-border shadow">
            <img
              src="/logos/MI.png"
              alt="MI"
              className="h-full w-full object-contain p-0.5"
              draggable={false}
            />
          </div>
        </div>

        {/* Spinning coin */}
        <div className="flex flex-col items-center gap-2 pb-4">
          <div style={{ perspective: "280px" }}>
            <div
              className="h-[60px] w-[60px] animate-coin-spin"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front: MI */}
              <div
                className="absolute inset-0 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20"
                style={{
                  background: "linear-gradient(135deg,#1a6fce,#0d4fa8)",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src="/logos/MI.png"
                  alt="MI"
                  className="h-9 w-9 object-contain"
                  draggable={false}
                />
              </div>
              {/* Back: CSK */}
              <div
                className="absolute inset-0 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20"
                style={{
                  background: "linear-gradient(135deg,#f5a623,#c47f05)",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <img
                  src="/logos/CSK.png"
                  alt="CSK"
                  className="h-9 w-9 object-contain"
                  draggable={false}
                />
              </div>
            </div>
          </div>
          {/* Coin shadow */}
          <div className="h-2 w-10 rounded-full bg-gold/20 blur-[3px]" />
          <div className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-gold animate-pulse" />
            <p className="text-[9px] font-black uppercase tracking-widest text-gold">Toss!</p>
            <span className="h-1 w-1 rounded-full bg-gold animate-pulse" />
          </div>
        </div>

        {/* Right player (Alex / CSK fan) */}
        <div
          className="flex flex-col items-center gap-1.5 animate-head-bob"
          style={{ animationDelay: "0.7s" }}
        >
          <span className="text-[10px] font-bold text-gold uppercase tracking-wider">Alex</span>
          <PlayerSVG accent="#f59e0b" />
          <div className="h-6 w-6 rounded-full overflow-hidden border border-border shadow">
            <img
              src="/logos/CSK.png"
              alt="CSK"
              className="h-full w-full object-contain p-0.5"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* ── Prediction card ── */}
      <div className="relative">
        <div
          className="rounded-2xl border border-border shadow-2xl overflow-hidden animate-float-a"
          style={{
            background: "color-mix(in srgb, var(--surface) 97%, transparent)",
            backdropFilter: "blur(20px)",
            animationDelay: "0.4s",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b border-border"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, var(--surface)), color-mix(in srgb, var(--gold) 5%, var(--surface)))",
            }}
          >
            <div className="flex items-center gap-2.5">
              <StatusBadge variant="live" />
              <span className="text-[11px] font-semibold text-muted-foreground">
                Wankhede · T20 · Match 32
              </span>
            </div>
            <span className="text-[11px] font-bold text-success flex items-center gap-1">
              <TrendingUp className="h-3 w-3 shrink-0" />
              MI 142/6 (16.2)
            </span>
          </div>

          {/* Picks row */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center px-4 py-4">
            {/* Your pick */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-accent">
                Your Pick
              </span>
              <div
                className="h-12 w-12 rounded-xl overflow-hidden border-2 p-1 shadow"
                style={{ borderColor: "#1a6fce35", background: "#1a6fce0a" }}
              >
                <img
                  src="/logos/MI.png"
                  alt="MI"
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
              <p className="text-[11px] font-bold text-foreground text-center leading-tight">
                Mumbai Indians
              </p>
              <span className="text-[10px] font-semibold text-success flex items-center gap-0.5">
                <TrendingUp className="h-2.5 w-2.5 shrink-0" />
                Winning
              </span>
            </div>

            {/* VS orb */}
            <div className="flex flex-col items-center gap-1 px-4">
              <div className="relative h-10 w-10 flex items-center justify-center">
                <div className="absolute h-full w-full rounded-full bg-accent/15 animate-pulse-ring" />
                <div
                  className="relative h-8 w-8 rounded-full border border-accent/30 flex items-center justify-center"
                  style={{ background: "color-mix(in srgb, var(--accent) 10%, var(--surface))" }}
                >
                  <span className="text-[10px] font-black text-accent">VS</span>
                </div>
              </div>
              <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider">
                Live
              </span>
            </div>

            {/* Alex's pick */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-gold">
                Alex's Pick
              </span>
              <div
                className="h-12 w-12 rounded-xl overflow-hidden border-2 p-1 shadow"
                style={{ borderColor: "#f59e0b35", background: "#f59e0b0a" }}
              >
                <img
                  src="/logos/CSK.png"
                  alt="CSK"
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
              <p className="text-[11px] font-bold text-foreground text-center leading-tight">
                Chennai Super Kings
              </p>
              <span className="text-[10px] text-muted-foreground">Need 18 off 22</span>
            </div>
          </div>

          {/* Leaderboard strip */}
          <div className="border-t border-border bg-muted/20 px-4 py-2.5 flex items-center gap-1 sm:gap-4 flex-wrap">
            <Trophy className="h-3 w-3 text-gold shrink-0" />
            {[
              { name: "You", pts: 240, color: "text-gold" },
              { name: "Alex", pts: 190, color: "text-accent" },
              { name: "Jordan", pts: 155, color: "text-sky" },
              { name: "Sam", pts: 120, color: "text-muted-foreground" },
            ].map(({ name, pts, color }, i) => (
              <div key={name} className="flex items-center gap-1">
                <span className={cn("text-[9px] font-black", color)}>#{i + 1}</span>
                <span className="text-[10px] text-foreground">{name}</span>
                <span className={cn("text-[10px] font-bold", color)}>+{pts}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-border px-4 py-2.5 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground flex items-center gap-1.5">
              <Bell className="h-3 w-3 shrink-0" />
              Match ends in ~4 overs
            </span>
            <span className="text-[10px] font-bold text-success">+10 pts incoming</span>
          </div>
        </div>

        {/* Win notification badge */}
        <div
          className="absolute -top-3 -right-3 rounded-xl border border-success/30 bg-success/10 px-3 py-1.5 shadow-lg animate-float-b"
          style={{ backdropFilter: "blur(12px)", animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-1.5">
            <Star className="h-3 w-3 text-success shrink-0" />
            <span className="text-[10px] font-bold text-success whitespace-nowrap">
              MI wins! +10 pts
            </span>
          </div>
        </div>

        {/* Rank badge */}
        <div
          className="absolute -bottom-3 -left-3 rounded-xl border border-gold/30 px-3 py-1.5 shadow-lg animate-float-c"
          style={{
            background: "color-mix(in srgb, var(--gold) 8%, var(--surface))",
            backdropFilter: "blur(12px)",
            animationDelay: "1.2s",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Trophy className="h-3 w-3 text-gold shrink-0" />
            <span className="text-[10px] font-bold text-gold whitespace-nowrap">
              #1 among Betmates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Features ────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: Shield,
    title: "Zero risk, always",
    description:
      "No real money changes hands. Every bet is exactly +10 or 10 points. Compete purely on cricket knowledge.",
    iconBg: "bg-success/10",
    iconColor: "text-success",
    accentBorder: "hover:border-success/40",
    glow: "bg-success/5",
  },
  {
    icon: Zap,
    title: "Synced with IPL",
    description:
      "Matches pull from the live IPL schedule automatically. Get notified before each game and lock your pick.",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    accentBorder: "hover:border-accent/40",
    glow: "bg-accent/5",
  },
  {
    icon: Users,
    title: "Add your Betmates",
    description:
      "Send a friend request and anyone who accepts becomes your Betmate. Bet against each other one on one.",
    iconBg: "bg-sky/10",
    iconColor: "text-sky",
    accentBorder: "hover:border-sky/40",
    glow: "bg-sky/5",
  },
  {
    icon: Trophy,
    title: "Season leaderboard",
    description:
      "Points accumulate all season. Your leaderboard shows exactly where you stand against every Betmate.",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    accentBorder: "hover:border-gold/40",
    glow: "bg-gold/5",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-accent mb-3"
          >
            Why BetMate
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground"
          >
            Cricket, gamified for your circle
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Everything you need to make every IPL match matter between you and your friends. Zero
            setup. Zero risk.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {FEATURES.map(
            ({ icon: Icon, title, description, iconBg, iconColor, accentBorder, glow }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className={cn(
                  "group relative rounded-2xl border border-border bg-surface p-6 flex flex-col gap-5 overflow-hidden transition-all duration-300 cursor-default",
                  accentBorder,
                  "hover:shadow-xl hover:-translate-y-0.5"
                )}
              >
                {/* Subtle glow on hover */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl",
                    glow
                  )}
                />

                <div
                  className={cn(
                    "relative h-12 w-12 rounded-xl flex items-center justify-center",
                    iconBg
                  )}
                >
                  <Icon className={cn("h-6 w-6", iconColor)} />
                </div>
                <div className="relative flex flex-col gap-2">
                  <h3 className="font-bold text-foreground text-base">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ── How it works ─────────────────────────────────────────────── */
const STEPS = [
  {
    number: "01",
    title: "Sign up and add Betmates",
    description:
      "Create your account, then send friend requests to the people you want to compete with. Accept each other and you're Betmates.",
    color: "from-accent to-sky",
    textColor: "text-accent",
    badge: "Start",
  },
  {
    number: "02",
    title: "Pick your team before each match",
    description:
      "Before every IPL game, choose which team you think will win. Your Betmates make their own picks independently.",
    color: "from-sky to-accent",
    textColor: "text-sky",
    badge: "Predict",
  },
  {
    number: "03",
    title: "Win points, climb the leaderboard",
    description:
      "Correct pick earns you +10 points. Wrong pick costs you 10. Points add up all season long and the leaderboard never lies.",
    color: "from-gold to-gold-hover",
    textColor: "text-gold",
    badge: "Win",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
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
            Up and running in 2 minutes
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STEPS.map(({ number, title, description, color, textColor, badge }) => (
            <motion.div
              key={number}
              variants={fadeUp}
              className="relative rounded-2xl border border-border bg-surface p-8 flex flex-col gap-6 overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", color)} />

              {/* Step badge */}
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "text-5xl font-black leading-none select-none opacity-20",
                    textColor
                  )}
                >
                  {number}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full",
                    `bg-gradient-to-r ${color} text-white`
                  )}
                >
                  {badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── CTA Banner ──────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border py-28 sm:py-36">
      {/* Atmospheric bg */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-gold/8" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-accent/10 blur-[100px]" />

      <motion.div
        className="relative mx-auto max-w-3xl px-4 sm:px-8 text-center"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
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
          Prove you know cricket best.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Sign up, add your Betmates, and settle the age-old debate. Who actually calls IPL matches
          better in your friend group?
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/register"
            className={cn(
              buttonVariants({ variant: "gold", size: "lg" }),
              "gap-2 px-8 text-base h-12 shadow-2xl shadow-gold/30 w-full sm:w-auto justify-center"
            )}
          >
            Create your account
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            to="/login"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-8 text-base h-12 w-full sm:w-auto justify-center"
            )}
          >
            Already a member
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────── */
function LandingFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-14 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="space-y-3">
            <Logo size="sm" />
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              IPL predictions between friends. No money. Just points and bragging rights.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground">Product</p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Features", href: "#features" },
                { label: "How it works", href: "#how-it-works" },
                { label: "FAQ", href: "#faq" },
              ].map(({ label, href }) => (
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
              <Link
                to="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign in
              </Link>
              <Link to="/register" className="text-sm text-accent font-semibold hover:underline">
                Get Started
              </Link>
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
            2026 BetMate. For entertainment purposes only.
          </p>
          <p className="text-[11px] text-muted-foreground">
            No real money. No real bets. Just cricket.
          </p>
        </div>
      </div>
    </footer>
  );
}
