import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Trophy, Zap, Users, Target } from "lucide-react";

export default function PlaygroundPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] p-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Component Playground</h1>
            <p className="text-[var(--text-secondary)] mt-1">
              All BetMate UI components — test in both themes before shipping.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="space-y-12">
          {/* Buttons */}
          <Section title="Buttons">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Zap className="h-4 w-4" />
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </Section>

          <Separator />

          {/* Badges */}
          <Section title="Badges">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              {/* Custom semantic badges */}
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-emerald-500/15 text-emerald-500 ring-1 ring-emerald-500/30">
                COMPLETED
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-amber-500/15 text-amber-500 ring-1 ring-amber-500/30">
                PENDING
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[var(--accent)]/15 text-[var(--accent)] ring-1 ring-[var(--accent)]/30">
                ACCEPTED
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-rose-500/15 text-rose-500 ring-1 ring-rose-500/30">
                DECLINED
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-red-500/15 text-red-400 ring-1 ring-red-500/30 animate-pulse">
                ● LIVE
              </span>
            </div>
          </Section>

          <Separator />

          {/* Inputs */}
          <Section title="Inputs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <Input placeholder="Email address" type="email" />
              <Input placeholder="Password" type="password" />
              <Input placeholder="Disabled" disabled />
              <Input placeholder="Search betmates..." />
            </div>
          </Section>

          <Separator />

          {/* Cards */}
          <Section title="Cards">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Trophy, label: "Points", value: "1,240", color: "text-amber-400" },
                { icon: Users, label: "Betmates", value: "8", color: "text-[var(--accent)]" },
                { icon: Target, label: "Bets Won", value: "14", color: "text-emerald-500" },
              ].map(({ icon: Icon, label, value, color }) => (
                <Card key={label} className="bg-[var(--surface)] border-[var(--border-color)]">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${color}`} />
                      <CardTitle className="text-sm font-medium text-[var(--text-secondary)]">
                        {label}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-3xl font-bold tabular-nums ${color}`}>{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Separator />

          {/* Avatars */}
          <Section title="Avatars">
            <div className="flex items-center gap-4">
              {["AK", "BN", "CX", "DZ"].map((initials) => (
                <Avatar key={initials}>
                  <AvatarFallback className="bg-[var(--accent)]/20 text-[var(--accent)] font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              ))}
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-amber-500/20 text-amber-400 font-bold text-lg">
                  👑
                </AvatarFallback>
              </Avatar>
            </div>
          </Section>

          <Separator />

          {/* Skeleton */}
          <Section title="Skeletons (loading states)">
            <div className="space-y-3 max-w-sm">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              <Skeleton className="h-24 w-full rounded-lg" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </Section>

          <Separator />

          {/* Tabs */}
          <Section title="Tabs">
            <Tabs defaultValue="upcoming" className="max-w-md">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="live">Live</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="mt-4 text-[var(--text-secondary)]">
                Upcoming matches will appear here.
              </TabsContent>
              <TabsContent value="live" className="mt-4 text-emerald-500 font-medium">
                ● 3 matches live right now
              </TabsContent>
              <TabsContent value="completed" className="mt-4 text-[var(--text-secondary)]">
                Past match results.
              </TabsContent>
            </Tabs>
          </Section>

          <Separator />

          {/* Dialog */}
          <Section title="Dialog / Modal">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="bg-[var(--surface)] border-[var(--border-color)]">
                <DialogHeader>
                  <DialogTitle>Decline Challenge?</DialogTitle>
                </DialogHeader>
                <p className="text-[var(--text-secondary)] text-sm">
                  Are you sure you want to decline this challenge from <strong>Bhanu</strong>? This
                  cannot be undone.
                </p>
                <DialogFooter className="gap-2">
                  <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={() => setDialogOpen(false)}>
                    Decline
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Section>

          <Separator />

          {/* Switch */}
          <Section title="Switch">
            <div className="flex items-center gap-3">
              <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
              <span className="text-sm text-[var(--text-secondary)]">
                {switchOn ? "Notifications on" : "Notifications off"}
              </span>
            </div>
          </Section>

          <Separator />

          {/* Tooltip */}
          <Section title="Tooltip">
            <Tooltip>
              <TooltipTrigger>
                <Button size="icon" variant="outline">
                  <Trophy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Leaderboard</TooltipContent>
            </Tooltip>
          </Section>

          <Separator />

          {/* Toasts */}
          <Section title="Toast Notifications">
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={() => toast.success("Challenge accepted!")}>
                Success toast
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.error("Something went wrong. Try again.")}
              >
                Error toast
              </Button>
              <Button variant="outline" onClick={() => toast.info("Coin toss initiated by Bhanu.")}>
                Info toast
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.warning("Match starts in under 2 hours.")}
              >
                Warning toast
              </Button>
            </div>
          </Section>

          <Separator />

          {/* Colour palette preview */}
          <Section title="Theme Colour Tokens">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "background", bg: "bg-[var(--background)]", border: true },
                { name: "surface", bg: "bg-[var(--surface)]", border: true },
                { name: "surface-raised", bg: "bg-[var(--surface-raised)]", border: true },
                { name: "accent", bg: "bg-[var(--accent)]" },
                { name: "success", bg: "bg-[var(--success)]" },
                { name: "warning", bg: "bg-[var(--warning)]" },
                { name: "destructive", bg: "bg-[var(--destructive)]" },
                { name: "highlight", bg: "bg-[var(--highlight)]" },
              ].map(({ name, bg, border }) => (
                <div key={name} className="space-y-1">
                  <div
                    className={`h-12 rounded-lg ${bg} ${border ? "border border-[var(--border-color)]" : ""}`}
                  />
                  <p className="text-xs text-[var(--text-secondary)] font-mono">{name}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div className="mt-16 pb-8 text-center text-xs text-[var(--text-secondary)]">
          Dev only — hidden in production
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
