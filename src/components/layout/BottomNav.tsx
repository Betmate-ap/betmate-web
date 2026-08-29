import { NavLink } from "react-router-dom";
import { Home, Target, Users, Trophy, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/home", icon: Home, label: "Home", end: true },
  { to: "/bets", icon: Target, label: "Bets", end: false },
  { to: "/betmates", icon: Users, label: "Betmates", end: false },
  { to: "/leaderboard", icon: Trophy, label: "Board", end: false },
  { to: "/profile", icon: User, label: "Profile", end: false },
];

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-surface lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex h-16">
        {NAV.map(({ to, icon: Icon, label, end }) => (
          <NavLink key={to} to={to} end={end} className="relative flex flex-1">
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full bg-accent" />
                )}
                <div
                  className={cn(
                    "flex flex-1 flex-col items-center justify-center gap-1 transition-colors",
                    isActive ? "text-accent" : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-[10px] font-medium leading-none">{label}</span>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
