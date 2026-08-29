import { motion } from "framer-motion";
import { Shield, Zap, Users, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "../motionPresets";

const FEATURES = [
  {
    icon: Shield,
    title: "Zero risk, always",
    description:
      "No real money changes hands. Every bet is exactly +10 or −10 points. Compete purely on cricket knowledge.",
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

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
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
                  "group relative rounded-2xl border border-border bg-surface p-6 flex flex-col gap-5 overflow-hidden transition-all duration-300 cursor-default hover:shadow-xl hover:-translate-y-0.5",
                  accentBorder
                )}
              >
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
