import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MATCH_PAIRS = [
  {
    t1: { code: "MI", name: "Mumbai Indians", token: "--accent" },
    t2: { code: "CSK", name: "Chennai Super Kings", token: "--gold" },
    venue: "Wankhede",
    time: "19:30 IST",
    betmate: "Alex",
  },
  {
    t1: { code: "RCB", name: "Royal Challengers", token: "--destructive" },
    t2: { code: "KKR", name: "Kolkata Knight Riders", token: "--gold" },
    venue: "Chinnaswamy",
    time: "15:30 IST",
    betmate: "Sam",
  },
  {
    t1: { code: "SRH", name: "Sunrisers", token: "--warning" },
    t2: { code: "GT", name: "Gujarat Titans", token: "--sky" },
    venue: "Rajiv Gandhi",
    time: "19:30 IST",
    betmate: "Jordan",
  },
];

export default function MatchVsCard() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % MATCH_PAIRS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const match = MATCH_PAIRS[idx];

  return (
    <div className="relative rounded-2xl border border-border/30 overflow-hidden shadow-2xl">
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${idx}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: `linear-gradient(135deg,
              color-mix(in srgb, var(${match.t1.token}) 28%, var(--background)) 0%,
              color-mix(in srgb, var(--background) 92%, transparent) 42%,
              color-mix(in srgb, var(--background) 92%, transparent) 58%,
              color-mix(in srgb, var(${match.t2.token}) 28%, var(--background)) 100%)`,
          }}
        />
      </AnimatePresence>

      <div className="relative z-10">
        <div className="h-[3px] bg-gradient-to-r from-accent via-gold to-destructive" />

        <div className="p-3 sm:p-4">
          <div className="grid grid-cols-3 items-center mb-3">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
              </span>
              <span className="text-[10px] font-bold text-destructive tracking-widest uppercase">
                Live
              </span>
            </div>
            <span className="text-[10px] font-medium text-muted-foreground text-center">
              IPL 2026 · T20
            </span>
            <div className="flex justify-end gap-1">
              {MATCH_PAIRS.map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full transition-all duration-500"
                  style={{
                    background:
                      i === idx
                        ? "var(--accent)"
                        : "color-mix(in srgb, var(--border) 80%, transparent)",
                  }}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-center justify-between px-2 sm:px-4 py-3 sm:py-4"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center text-sm font-black"
                    style={{
                      background: `color-mix(in srgb, var(${match.t1.token}) 22%, var(--surface))`,
                      border: `2px solid color-mix(in srgb, var(${match.t1.token}) 60%, transparent)`,
                      color: `var(${match.t1.token})`,
                      boxShadow: `0 0 24px color-mix(in srgb, var(${match.t1.token}) 40%, transparent)`,
                    }}
                  >
                    {match.t1.code}
                  </div>
                  <div className="text-center">
                    <p className="text-[11px] font-semibold text-foreground leading-tight">
                      {match.t1.name}
                    </p>
                    <p
                      className="text-[9px] font-bold mt-0.5"
                      style={{ color: `var(${match.t1.token})` }}
                    >
                      ← You
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1.5 shrink-0 px-2">
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      className="absolute h-11 w-11 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.08, 0.3] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ background: "var(--gold)" }}
                    />
                    <div
                      className="relative h-9 w-9 rounded-full flex items-center justify-center text-[11px] font-black z-10"
                      style={{
                        background: "color-mix(in srgb, var(--gold) 18%, var(--background))",
                        border: "1.5px solid color-mix(in srgb, var(--gold) 55%, transparent)",
                        color: "var(--gold)",
                        boxShadow: "0 0 18px color-mix(in srgb, var(--gold) 35%, transparent)",
                      }}
                    >
                      VS
                    </div>
                  </div>
                  <motion.span
                    className="text-xs leading-none"
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                      ease: "easeInOut",
                    }}
                  >
                    🪙
                  </motion.span>
                </div>

                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center text-sm font-black"
                    style={{
                      background: `color-mix(in srgb, var(${match.t2.token}) 22%, var(--surface))`,
                      border: `2px solid color-mix(in srgb, var(${match.t2.token}) 60%, transparent)`,
                      color: `var(${match.t2.token})`,
                      boxShadow: `0 0 24px color-mix(in srgb, var(${match.t2.token}) 40%, transparent)`,
                    }}
                  >
                    {match.t2.code}
                  </div>
                  <div className="text-center">
                    <p className="text-[11px] font-semibold text-foreground leading-tight">
                      {match.t2.name}
                    </p>
                    <p
                      className="text-[9px] font-bold mt-0.5"
                      style={{ color: `var(${match.t2.token})` }}
                    >
                      {match.betmate} →
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-1 pt-2.5 border-t border-border/30 grid grid-cols-3 items-center">
            <span className="text-[10px] text-muted-foreground/80">🏟️ {match.venue}</span>
            <div className="flex items-center justify-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ background: "var(--warning)" }}
              />
              <span className="text-[10px] font-semibold" style={{ color: "var(--warning)" }}>
                Toss soon
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground/80 text-right">{match.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
