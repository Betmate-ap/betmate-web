import { motion } from "framer-motion";

const STANDINGS = [
  { rank: 1, init: "AK", name: "Alex", token: "--gold", pts: 130 },
  { rank: 2, init: "CP", name: "Casey", token: "--accent", pts: 115 },
  { rank: 3, init: "JL", name: "Jordan", token: "--sky", pts: 105 },
  { rank: 4, init: "RJ", name: "Riley", token: "--success", pts: 95 },
  { rank: 5, init: "SR", name: "Sam", token: "--warning", pts: 85 },
];

const MAX_PTS = Math.max(...STANDINGS.map((s) => s.pts));
const BAR_H = 68;
const LABEL_H = 24; // headroom above bars for crown + points

export default function SeasonStandingsChart() {
  return (
    <div>
      <div className="flex items-end justify-between" style={{ height: BAR_H + LABEL_H }}>
        {STANDINGS.map(({ rank, token, pts }, i) => {
          const h = Math.round((pts / MAX_PTS) * BAR_H);
          const isFirst = rank === 1;

          return (
            <div
              key={rank}
              className="relative flex flex-col items-center justify-end"
              style={{ width: 30 }}
            >
              <motion.div
                className="absolute flex flex-col items-center"
                style={{ bottom: h + 4 }}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 1.0, duration: 0.3 }}
              >
                {isFirst && <span className="text-[9px] leading-none">👑</span>}
                <span
                  className="text-[10px] font-black tabular-nums leading-none"
                  style={{ color: `var(${token})` }}
                >
                  {pts}
                </span>
              </motion.div>

              <motion.div
                className="w-full rounded-t-md relative overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: h }}
                transition={{ delay: i * 0.09 + 0.35, duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
                style={{
                  background: `linear-gradient(to top, var(${token}), color-mix(in srgb, var(${token}) 38%, transparent))`,
                  boxShadow: isFirst
                    ? `0 -8px 18px color-mix(in srgb, var(${token}) 52%, transparent)`
                    : `0 -4px 10px color-mix(in srgb, var(${token}) 22%, transparent)`,
                }}
              >
                {isFirst && (
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.26) 50%, transparent 65%)",
                    }}
                    animate={{ x: ["-120%", "220%"] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      <div
        className="h-px mt-1"
        style={{ background: "color-mix(in srgb, var(--border) 55%, transparent)" }}
      />

      <div className="flex justify-between mt-2">
        {STANDINGS.map(({ rank, init, name, token }) => (
          <div key={rank} className="flex flex-col items-center gap-1" style={{ width: 30 }}>
            <div
              className="h-6 w-6 rounded-full flex items-center justify-center text-[8px] font-black text-white"
              style={{
                background: `var(${token})`,
                boxShadow:
                  rank === 1
                    ? `0 2px 10px color-mix(in srgb, var(${token}) 55%, transparent)`
                    : undefined,
              }}
            >
              {init}
            </div>
            <span className="text-[8px] font-medium text-muted-foreground/70 leading-none">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
