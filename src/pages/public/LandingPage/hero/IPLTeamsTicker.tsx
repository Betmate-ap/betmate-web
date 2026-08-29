import { motion } from "framer-motion";

const IPL_TEAMS = [
  { code: "MI", name: "Mumbai Indians", token: "--accent" },
  { code: "CSK", name: "Chennai Super Kings", token: "--gold" },
  { code: "RCB", name: "Royal Challengers", token: "--destructive" },
  { code: "KKR", name: "Kolkata Knight Riders", token: "--sky" },
  { code: "SRH", name: "Sunrisers Hyderabad", token: "--warning" },
  { code: "PBKS", name: "Punjab Kings", token: "--destructive" },
  { code: "RR", name: "Rajasthan Royals", token: "--sky" },
  { code: "GT", name: "Gujarat Titans", token: "--accent" },
  { code: "LSG", name: "Lucknow Super Giants", token: "--success" },
  { code: "DC", name: "Delhi Capitals", token: "--sky" },
];

// Duplicate for seamless infinite scroll — moving -50% = exactly one full set
const TICKER = [...IPL_TEAMS, ...IPL_TEAMS];

export default function IPLTeamsTicker() {
  return (
    <div
      className="relative w-full mt-10 overflow-hidden border-t border-b border-border/30"
      style={{ background: "color-mix(in srgb, var(--surface) 55%, transparent)" }}
    >
      <div
        className="pointer-events-none absolute left-0 inset-y-0 w-20 z-10"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
      />
      <div
        className="pointer-events-none absolute right-0 inset-y-0 w-20 z-10"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
      />
      <motion.div
        className="flex items-center w-max"
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {TICKER.map(({ code, name, token }, i) => (
          <div key={i} className="flex items-center shrink-0 py-3 px-5 gap-4">
            <div className="flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ background: `var(${token})` }}
              />
              <span
                className="text-xs font-black tracking-widest"
                style={{ color: `var(${token})` }}
              >
                {code}
              </span>
              <span className="text-xs text-muted-foreground font-medium hidden sm:block">
                {name}
              </span>
            </div>
            <span className="text-border text-xs select-none opacity-40">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
