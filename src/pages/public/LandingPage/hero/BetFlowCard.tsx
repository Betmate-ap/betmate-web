import { motion } from "framer-motion";
import { Swords, Coins, TrendingUp, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "../motionPresets";

const FLOW_STEPS = [
  {
    id: "challenge",
    icon: Swords,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    borderColor: "border-accent/30",
    glowColor: "var(--accent)",
    label: "CHALLENGE",
    title: "Alex challenged you!",
    sub: "MI vs CSK · Wankhede · T20",
    badge: { text: "Pending", cls: "text-warning bg-warning/10 border border-warning/20" },
    floatDuration: 4,
    floatDelay: 0,
  },
  {
    id: "toss",
    icon: Coins,
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "border-gold/30",
    glowColor: "var(--gold)",
    label: "COIN TOSS",
    title: "You won the toss! 🪙",
    sub: "Pick your team · T−2h window",
    badge: { text: "Your turn", cls: "text-accent bg-accent/10 border border-accent/20" },
    floatDuration: 4.5,
    floatDelay: 0.3,
  },
  {
    id: "pick",
    icon: TrendingUp,
    iconBg: "bg-sky/10",
    iconColor: "text-sky",
    borderColor: "border-sky/30",
    glowColor: "var(--sky)",
    label: "TEAM PICKED",
    title: "You: MI · Alex: CSK",
    sub: "Both locked in · Match starts in 58 min",
    badge: { text: "Locked in", cls: "text-sky bg-sky/10 border border-sky/20" },
    floatDuration: 3.8,
    floatDelay: 0.6,
  },
  {
    id: "win",
    icon: CheckCircle2,
    iconBg: "bg-success/10",
    iconColor: "text-success",
    borderColor: "border-success/30",
    glowColor: "var(--success)",
    label: "MATCH SETTLED",
    title: "MI wins! +10 pts earned 🏆",
    sub: "You're #1 among your Betmates",
    badge: {
      text: "+10 pts",
      cls: "text-success bg-success/10 border border-success/20 font-black",
    },
    floatDuration: 5,
    floatDelay: 0.9,
  },
];

export default function BetFlowCard({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      className="flex flex-col gap-1.5 sm:gap-2"
      variants={stagger(0.12)}
      initial="hidden"
      animate="visible"
    >
      {FLOW_STEPS.map(
        ({
          id,
          icon: Icon,
          iconBg,
          iconColor,
          borderColor,
          glowColor,
          label,
          title,
          sub,
          badge,
          floatDuration,
          floatDelay,
        }) => (
          <motion.div
            key={id}
            variants={fadeUp}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: floatDelay + 1.5,
            }}
            className={cn(
              "flex items-start gap-2.5 rounded-xl border bg-surface/90 backdrop-blur-sm shadow-md",
              compact ? "p-2.5 sm:p-3" : "p-4",
              borderColor
            )}
            style={{ boxShadow: `0 4px 24px color-mix(in srgb, ${glowColor} 8%, transparent)` }}
          >
            <div
              className={cn(
                "rounded-xl flex items-center justify-center shrink-0",
                compact ? "h-8 w-8" : "h-10 w-10 mt-0.5",
                iconBg
              )}
            >
              <Icon className={cn(compact ? "h-4 w-4" : "h-5 w-5", iconColor)} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-1.5">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 leading-none mb-1">
                    {label}
                  </p>
                  <p
                    className={cn(
                      "font-bold text-foreground leading-snug truncate",
                      compact ? "text-[13px]" : "text-[15px]"
                    )}
                  >
                    {title}
                  </p>
                  {!compact && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
                </div>
                <span
                  className={cn(
                    "text-[10px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 whitespace-nowrap",
                    badge.cls
                  )}
                >
                  {badge.text}
                </span>
              </div>
            </div>
          </motion.div>
        )
      )}
    </motion.div>
  );
}
