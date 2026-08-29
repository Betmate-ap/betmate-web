import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "../motionPresets";
import { focusAuth } from "../events";

export default function CtaBanner() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-14 sm:py-28 lg:py-36"
    >
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
    </section>
  );
}
