import { useState } from "react";
import { motion } from "framer-motion";
import { showToast } from "@/lib/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { OtpInput } from "@/components/ui/otp-input";
import { FormField } from "@/components/ui/form-field";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { AppDialog } from "@/components/ui/app-dialog";
import { CountTabs } from "@/components/ui/count-tabs";
import { Badge } from "@/components/ui/badge";
import { UserAvatar, AvatarDuo, AvatarStack } from "@/components/ui/user-avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LogoLoader } from "@/components/shared/LogoLoader";
import {
  Trophy,
  Zap,
  Users,
  Target,
  Bell,
  Search,
  Mail,
  CheckCircle2,
  XCircle,
  Clock,
  Star,
} from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function PlaygroundPage() {
  const [notifs, setNotifs] = useState(true);
  const [otp, setOtp] = useState("");
  const [sendLoading, setSendLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Sticky header ── */}
      <header
        className="border-b border-border sticky top-0 z-40 backdrop-blur-md"
        style={{ backgroundColor: "color-mix(in srgb, var(--surface) 85%, transparent)" }}
      >
        <div className="px-4 sm:px-6 lg:px-10 xl:px-16 mx-auto h-14 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-sky/10 text-sky ring-1 ring-sky/30">
              Dev Playground
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <motion.div
        className="px-4 sm:px-6 lg:px-10 xl:px-16 mx-auto py-10 space-y-5"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* ════════════════════════════════════
            LOGO
        ════════════════════════════════════ */}
        <Section label="Brand" title="Logo — Locked">
          <p className="text-xs text-text-secondary -mt-2">
            Lightning bolt · top half blue, bottom half gold · wordmark "Bet" blue / "Mate" gold.
            Toggle theme to verify both modes.
          </p>
          <div className="flex flex-wrap items-end gap-8">
            {(["sm", "md", "lg"] as const).map((s) => (
              <div key={s} className="space-y-3">
                <p className="text-xs text-text-secondary font-mono">{s}</p>
                <Logo size={s} />
              </div>
            ))}
            <div className="space-y-3">
              <p className="text-xs text-text-secondary font-mono">icon only</p>
              <Logo iconOnly />
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════
            BRAND PALETTE
        ════════════════════════════════════ */}
        <Section label="Design System" title="Brand Palette — 35 · 10 · 35 · 10 · 10">
          <p className="text-xs text-text-secondary -mt-2">
            Two symmetric colour families. Each brand colour has a lighter tint for backgrounds and
            texture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ColorFamily
              name="Blue Family — 45%"
              accentVar="--accent"
              swatches={[
                {
                  heightClass: "h-20",
                  label: "35% · Strong",
                  token: "--accent",
                  tokenLabel: "Electric Blue",
                  usage: "Buttons, nav, your pick",
                },
                {
                  heightClass: "h-20",
                  label: "10% · Tint",
                  token: "--sky",
                  tokenLabel: "Sky / Cyan",
                  usage: "Backgrounds, glows",
                },
              ]}
            />
            <ColorFamily
              name="Gold Family — 45%"
              accentVar="--gold"
              swatches={[
                {
                  heightClass: "h-20",
                  label: "35% · Strong",
                  token: "--gold",
                  tokenLabel: "Amber Gold",
                  usage: "Opponent, rewards, rank",
                  darkLabel: true,
                },
                {
                  heightClass: "h-20",
                  label: "10% · Tint",
                  token: "--gold-light",
                  tokenLabel: "Gold Light",
                  usage: "Card bg, subtle tints",
                  darkLabel: true,
                },
              ]}
            />
          </div>

          {/* Status colours */}
          <div className="rounded-xl border border-border bg-surface p-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">
              Status Colours — 10% · contextual only
            </p>
            <div className="flex flex-wrap gap-2">
              <StatusBadge variant="live" />
              <StatusBadge variant="won" />
              <StatusBadge variant="pending" />
              <StatusBadge variant="lost" />
            </div>
          </div>

          {/* Blue vs Gold duality */}
          <div className="rounded-xl border border-border bg-surface-raised p-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Blue vs Gold — duality in context
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div
                className="rounded-lg p-3 space-y-3"
                style={{
                  background: "color-mix(in srgb, var(--accent) 10%, var(--surface))",
                  border: "1px solid color-mix(in srgb, var(--accent) 35%, transparent)",
                }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: "var(--accent)" }}
                >
                  Your Pick
                </p>
                <p className="text-sm font-semibold text-foreground">Mumbai Indians</p>
                <p className="text-xs text-text-secondary">+10 pts if win</p>
              </div>
              <div
                className="rounded-lg p-3 space-y-3"
                style={{
                  background: "var(--gold-light)",
                  border: "1px solid color-mix(in srgb, var(--gold) 35%, transparent)",
                }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: "var(--gold)" }}
                >
                  Opponent
                </p>
                <p className="text-sm font-semibold text-foreground">CSK</p>
                <p className="text-xs text-text-secondary">−10 pts if win</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-border">
              <Button size="sm">Accept Bet</Button>
              <Button variant="gold" size="sm">
                Challenge Back
              </Button>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-bold tabular-nums ml-auto"
                style={{ color: "var(--gold)" }}
              >
                <Trophy className="h-4 w-4" /> 1,240 pts
              </span>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════
            STATUS BADGES
        ════════════════════════════════════ */}
        <Section label="Status" title="Status Badges">
          <div className="flex flex-wrap gap-2">
            <StatusBadge variant="completed" />
            <StatusBadge variant="pending" />
            <StatusBadge variant="accepted" />
            <StatusBadge variant="declined" />
            <StatusBadge variant="live" />
          </div>
          <p className="text-xs text-text-secondary mt-2">
            Green · Amber · Red — industry standard. Never used as decorative colours.
          </p>
        </Section>

        {/* ════════════════════════════════════
            LOADING STATES
        ════════════════════════════════════ */}
        <Section label="Feedback" title="Loading States">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
                Logo Loader
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-end gap-8">
                  {(["sm", "md", "lg"] as const).map((s) => (
                    <div key={s} className="flex flex-col items-center gap-2">
                      <LogoLoader size={s} />
                      <span className="text-xs text-text-secondary font-mono">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-background border border-border h-28 flex items-center justify-center">
                  <LogoLoader size="lg" showWordmark />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
                  Card
                </p>
                <div className="rounded-xl border border-border bg-surface p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                    <Skeleton className="h-6 w-14 rounded-full" />
                  </div>
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5" />
                  <div className="flex gap-2 pt-1">
                    <Skeleton className="h-8 flex-1 rounded-lg" />
                    <Skeleton className="h-8 flex-1 rounded-lg" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
                  List Row
                </p>
                <div className="rounded-xl border border-border bg-surface p-3 space-y-3">
                  {[40, 28, 36, 24].map((nameW, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Skeleton className="h-4 w-4 rounded shrink-0" />
                      <Skeleton className="h-8 w-8 rounded-full shrink-0" />
                      <div className="flex-1 space-y-1.5">
                        <Skeleton className={`h-3.5 w-${nameW}`} />
                        <Skeleton className="h-3 w-16" />
                      </div>
                      <Skeleton className="h-5 w-10 rounded-full shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
                  Profile Header
                </p>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="flex flex-col items-center gap-3">
                    <Skeleton className="h-16 w-16 rounded-full" />
                    <div className="space-y-2 items-center flex flex-col">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 w-full pt-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-1.5 rounded-lg border border-border p-2"
                        >
                          <Skeleton className="h-4 w-8" />
                          <Skeleton className="h-2.5 w-10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════
            BUTTONS
        ════════════════════════════════════ */}
        <Section label="Actions" title="Buttons">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
                Variants
              </p>
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="gold">Gold</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
                Sizes
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Zap />
                </Button>
                <Button variant="gold" size="icon">
                  <Trophy />
                </Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
                With icon prop — Blue vs Gold in context
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                <Button icon={Target}>Accept Bet</Button>
                <Button variant="gold" icon={Zap}>
                  Challenge Back
                </Button>
                <Button variant="outline" icon={Users}>
                  Add Betmate
                </Button>
                <Button variant="destructive" icon={XCircle}>
                  Decline
                </Button>
                <Button variant="ghost">Cancel</Button>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
                Loading state — async actions
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                <Button
                  loading={sendLoading}
                  onClick={() => {
                    setSendLoading(true);
                    setTimeout(() => setSendLoading(false), 2500);
                  }}
                >
                  {sendLoading ? "Sending..." : "Send Challenge"}
                </Button>
                <Button variant="gold" loading={sendLoading} disabled={sendLoading}>
                  {sendLoading ? "Flipping..." : "Flip Coin"}
                </Button>
                <Button variant="outline" disabled>
                  Disabled
                </Button>
              </div>
              <p className="text-xs text-text-secondary mt-2">
                Click Send Challenge — all related actions disable during the request.
              </p>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════
            FORM FIELDS
        ════════════════════════════════════ */}
        <Section label="Forms" title="Form Fields">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            <FormField label="Email address">
              <Input type="email" leadingIcon={Mail} placeholder="you@example.com" />
            </FormField>

            <FormField label="Password">
              <PasswordInput placeholder="••••••••" />
            </FormField>

            {/* Username — compound input with @ prefix */}
            <FormField label="Username">
              <Input prefix="@" placeholder="betmaster99" />
            </FormField>

            <FormField label="Full name">
              <Input placeholder="Akhil Patil" />
            </FormField>

            <FormField label="Username" required error="Username must be at least 3 characters">
              <Input placeholder="betmaster99" aria-invalid="true" defaultValue="ab" />
            </FormField>

            <FormField label="Read-only" hint="Username cannot be changed after signup">
              <Input defaultValue="betmaster99" disabled />
            </FormField>

            {/* Search — leading icon + interactive clear button */}
            <FormField label="Search betmates">
              <Input leadingIcon={Search} placeholder="Search by username..." onClear={() => {}} />
            </FormField>

            <FormField label="Confirm password" hint="Must match your new password">
              <PasswordInput placeholder="••••••••" />
            </FormField>
          </div>

          <FormField label="Bio" hint="0 / 160" className="pt-1">
            <Textarea placeholder="Tell your betmates about yourself..." rows={3} />
          </FormField>

          <div className="flex items-start gap-2.5 pt-1">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm text-text-secondary leading-snug cursor-pointer"
            >
              I agree to the <span className="text-accent">Terms of Service</span> — no real money,
              just bragging rights.
            </label>
          </div>

          <div className="space-y-3 pt-2 border-t border-border">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">
              Sizes
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-secondary font-mono w-7">sm</span>
                <Input placeholder="Compact — filters, inline" className="h-8 text-xs" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-secondary font-mono w-7">md</span>
                <Input placeholder="Default — all standard forms" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-secondary font-mono w-7">lg</span>
                <Input placeholder="Large — hero / prominent forms" className="h-12 text-base" />
              </div>
            </div>
          </div>

          <div className="space-y-5 pt-2 border-t border-border">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">
              Special
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              <FormField label="Verification code">
                <OtpInput value={otp} onChange={setOtp} />
                <p
                  className={`text-xs ${otp.length === 6 ? "text-accent" : "text-muted-foreground"}`}
                >
                  {otp.length === 6
                    ? "Code accepted — tap Verify"
                    : "Enter the 6-digit code sent to your phone"}
                </p>
              </FormField>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════
            AVATARS
        ════════════════════════════════════ */}
        <Section label="Identity" title="Avatars">
          <div className="space-y-5">
            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
                Color seeding by user ID
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {[
                  { userId: "usr_001", name: "Akhil Patil" },
                  { userId: "usr_002", name: "Arjun Pandey" },
                  { userId: "usr_003", name: "Alice Porter" },
                  { userId: "usr_004", name: "Amit Patel" },
                ].map((u) => (
                  <div key={u.userId} className="flex flex-col items-center gap-1.5">
                    <UserAvatar userId={u.userId} name={u.name} size="lg" />
                    <span className="text-xs text-text-secondary">{u.name.split(" ")[0]}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-secondary mt-2">
                All four share initials "AP" — color comes from user ID, not name.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
                Sizes
              </p>
              <div className="flex items-end gap-3">
                {(["sm", "md", "lg", "xl"] as const).map((s) => (
                  <UserAvatar key={s} userId="usr_005" name="Bhanu Nair" size={s} />
                ))}
                <UserAvatar userId="usr_001" name="Akhil Patil" size="lg" rank={1} />
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
                Duo — bet card
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <AvatarDuo
                  challenger={{ userId: "usr_001", name: "Akhil Patil" }}
                  challengee={{ userId: "usr_006", name: "Bhanu Nair" }}
                  size="sm"
                />
                <AvatarDuo
                  challenger={{ userId: "usr_001", name: "Akhil Patil" }}
                  challengee={{ userId: "usr_007", name: "David Kumar" }}
                  size="md"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
                Stack — match card (multiple bets)
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {[
                  {
                    users: [
                      { userId: "usr_006", name: "Bhanu Nair" },
                      { userId: "usr_007", name: "David Kumar" },
                    ],
                    label: "2 bets",
                  },
                  {
                    users: [
                      { userId: "usr_006", name: "Bhanu Nair" },
                      { userId: "usr_007", name: "David Kumar" },
                      { userId: "usr_008", name: "Alice Roy" },
                    ],
                    label: "3 bets",
                  },
                  {
                    users: [
                      { userId: "usr_006", name: "Bhanu Nair" },
                      { userId: "usr_007", name: "David Kumar" },
                      { userId: "usr_008", name: "Alice Roy" },
                      { userId: "usr_009", name: "Meera Singh" },
                      { userId: "usr_010", name: "Raj Verma" },
                    ],
                    label: "5 bets, max 3 shown",
                    max: 3,
                  },
                ].map(({ users, label, max }) => (
                  <div key={label} className="flex flex-col gap-1.5">
                    <AvatarStack users={users} max={max} />
                    <span className="text-xs text-text-secondary">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════
            STAT CARDS
        ════════════════════════════════════ */}
        <Section label="Data" title="Stat Cards">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Trophy, label: "Points", value: "1,240", color: "gold" },
              { icon: Target, label: "Bets Won", value: "14", color: "success" },
              { icon: Users, label: "Betmates", value: "8", color: "accent" },
              { icon: Star, label: "Win Rate", value: "74%", color: "sky" },
            ].map(({ icon, label, value, color }) => (
              <StatCard
                key={label}
                icon={icon}
                label={label}
                value={value}
                color={color as "gold" | "success" | "accent" | "sky"}
              />
            ))}
          </div>
        </Section>

        {/* ════════════════════════════════════
            TABS
        ════════════════════════════════════ */}
        <Section label="Navigation" title="Tabs">
          <CountTabs
            defaultValue="upcoming"
            items={[
              { value: "upcoming", label: "Upcoming", count: 2 },
              { value: "live", label: "Live", count: 3, live: true },
              { value: "completed", label: "Completed", count: 5 },
            ]}
          />
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* ════════════════════════════════════
              DIALOG
          ════════════════════════════════════ */}
          <Section label="Overlay" title="Dialog">
            <div className="flex flex-wrap gap-2">
              <AppDialog
                trigger={<Button variant="outline">Info</Button>}
                icon={Bell}
                iconVariant="neutral"
                title="Bet Expired"
                description="Bhanu didn't respond in time."
                body="Your challenge on MI vs CSK expired — no response within 2 hours. No points were affected."
                actions={[{ label: "Got it" }]}
              />

              <AppDialog
                trigger={<Button variant="outline">Confirm</Button>}
                icon={Zap}
                iconVariant="accent"
                title="Accept Challenge?"
                description="From Bhanu · MI vs CSK · Tomorrow 7 PM"
                body="The coin toss decides your team — either of you can flip after accepting."
                actions={[{ label: "Accept" }, { label: "Decline", variant: "ghost" }]}
              />

              <AppDialog
                trigger={<Button variant="outline">3 Actions</Button>}
                icon={XCircle}
                iconVariant="destructive"
                title="Match starts in 90 min"
                description="Bhanu may not have time to accept."
                body="Challenges sent close to match time often expire. Pick a match with more time, or send anyway."
                showCloseButton={false}
                actions={[
                  { label: "Send anyway" },
                  { label: "Pick another match", variant: "outline" },
                  { label: "Cancel", variant: "ghost" },
                ]}
              />
            </div>
          </Section>

          {/* ════════════════════════════════════
              SWITCH + TOOLTIP
          ════════════════════════════════════ */}
          <Section label="Controls" title="Switch & Tooltip">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Switch checked={notifs} onCheckedChange={setNotifs} />
                <div className="flex items-center gap-1.5">
                  <Bell className="h-4 w-4 text-text-secondary" />
                  <span className="text-sm text-text-secondary">
                    Notifications {notifs ? "on" : "off"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger>
                    <Button size="icon" variant="outline">
                      <Trophy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>View Leaderboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Button size="icon" variant="outline">
                      <Users className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>My Betmates</TooltipContent>
                </Tooltip>
                <span className="text-xs text-text-secondary">Hover icons</span>
              </div>
            </div>
          </Section>
        </div>

        {/* ════════════════════════════════════
            TOAST NOTIFICATIONS
        ════════════════════════════════════ */}
        <Section label="Notifications" title="Toast Messages">
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              icon={CheckCircle2}
              onClick={() =>
                showToast(
                  "success",
                  "Challenge accepted!",
                  "Coin toss is ready — flip when you're set."
                )
              }
            >
              Success
            </Button>
            <Button
              variant="outline"
              icon={XCircle}
              onClick={() =>
                showToast(
                  "error",
                  "Something went wrong",
                  "Couldn't send the challenge. Try again."
                )
              }
            >
              Error
            </Button>
            <Button
              variant="outline"
              icon={Zap}
              onClick={() =>
                showToast("info", "Coin toss initiated", "Bhanu flipped — waiting on team picks.")
              }
            >
              Info
            </Button>
            <Button
              variant="outline"
              icon={Clock}
              onClick={() =>
                showToast(
                  "warning",
                  "Match starts in 90 min",
                  "Lock your team pick before it's too late."
                )
              }
            >
              Warning
            </Button>
          </div>
          <p className="text-xs text-text-secondary mt-2">
            Each toast auto-dismisses in 4s — watch the progress bar, or click × to close
            immediately.
          </p>
        </Section>

        {/* ════════════════════════════════════
            BADGES
        ════════════════════════════════════ */}
        <Section label="Labels" title="Badges">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
                Blue — your side
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="blue" icon={Target}>
                  Your Pick
                </Badge>
                <Badge variant="blue">Active Bet</Badge>
                <Badge variant="blue" icon={Star}>
                  Top Betmate
                </Badge>
                <Badge variant="blue">In Progress</Badge>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
                Gold — opponent / competitive
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="gold" icon={Target}>
                  Opponent's Pick
                </Badge>
                <Badge variant="gold" icon={Trophy}>
                  Rank #1
                </Badge>
                <Badge variant="gold" icon={Trophy}>
                  Rank #2
                </Badge>
                <Badge variant="gold" icon={Trophy}>
                  Rank #3
                </Badge>
                <Badge variant="gold">Champion</Badge>
                <Badge variant="gold" icon={Zap}>
                  Hot Streak
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
                Status — contextual
              </p>
              <div className="flex flex-wrap gap-2">
                <StatusBadge variant="won" />
                <StatusBadge variant="lost" />
                <StatusBadge variant="pending" />
                <StatusBadge variant="accepted" />
                <StatusBadge variant="declined" />
                <StatusBadge variant="live" />
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
                Neutral
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">T20</Badge>
                <Badge variant="secondary">IPL 2025</Badge>
                <Badge variant="outline">Mumbai</Badge>
                <Badge variant="outline">Chennai</Badge>
              </div>
            </div>
          </div>
        </Section>

        <p className="text-center text-xs text-text-secondary pb-8 pt-4">
          Dev only — hidden in production
        </p>
      </motion.div>
    </div>
  );
}

/* ── Helpers ─────────────────────────────── */

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={item}>
      <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
            {label}
          </p>
          <h2 className="text-base font-semibold text-foreground leading-tight">{title}</h2>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

interface ColorSwatch {
  heightClass: string;
  label: string;
  token: string;
  tokenLabel: string;
  usage: string;
  darkLabel?: boolean;
}

function ColorFamily({
  name,
  accentVar,
  swatches,
}: {
  name: string;
  accentVar: string;
  swatches: ColorSwatch[];
}) {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div
        className="px-4 py-2.5 border-b border-border"
        style={{ background: `color-mix(in srgb, var(${accentVar}) 10%, transparent)` }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: `var(${accentVar})` }}
        >
          {name}
        </p>
      </div>
      <div className="grid grid-cols-2 divide-x divide-border">
        {swatches.map(({ heightClass, label, token, tokenLabel, usage, darkLabel }) => (
          <div key={token}>
            <div
              className={`${heightClass} flex items-end p-2`}
              style={{ background: `var(${token})` }}
            >
              <span
                className={`text-[10px] font-bold ${darkLabel ? "" : "text-white"}`}
                style={darkLabel ? { color: `var(${accentVar})` } : undefined}
              >
                {label}
              </span>
            </div>
            <div className="p-3 space-y-0.5 bg-surface">
              <p className="text-xs font-semibold text-foreground">{tokenLabel}</p>
              <p className="text-[10px] font-mono text-text-secondary">{token}</p>
              <p className="text-[10px] text-text-secondary">{usage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
