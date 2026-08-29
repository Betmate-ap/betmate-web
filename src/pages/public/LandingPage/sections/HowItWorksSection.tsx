import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "../motionPresets";

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
      "Correct pick earns you +10 points. Wrong pick costs you −10. Points add up all season long and the leaderboard never lies.",
    color: "from-gold to-gold-hover",
    textColor: "text-gold",
    badge: "Win",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-14 sm:py-24 lg:py-32 border-t border-border bg-surface/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-20"
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
              className="relative rounded-2xl border border-border bg-surface p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 overflow-hidden"
            >
              <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", color)} />
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "text-4xl sm:text-5xl font-black leading-none select-none opacity-20",
                    textColor
                  )}
                >
                  {number}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r text-white",
                    color
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
