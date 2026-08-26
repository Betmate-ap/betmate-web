import { NavLink, Link } from "react-router-dom";
import { Home, Target, Users, Trophy, User, LogIn } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { UserAvatar } from "@/components/ui/user-avatar";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/home", icon: Home, label: "Home", end: true },
  { to: "/bets", icon: Target, label: "Bets", end: false },
  { to: "/betmates", icon: Users, label: "Betmates", end: false },
  { to: "/leaderboard", icon: Trophy, label: "Leaderboard", end: false },
  { to: "/profile", icon: User, label: "Profile", end: false },
];

export function NavSidebar() {
  const { user } = useAuth();

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-full w-60 flex-col border-r border-border bg-surface lg:flex">
      {/* Logo */}
      <div className="flex h-16 items-center px-5 border-b border-border shrink-0">
        <Logo size="md" />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-0.5 flex-1 overflow-y-auto px-3 py-4">
        {NAV.map(({ to, icon: Icon, label, end }) => (
          <NavLink key={to} to={to} end={end}>
            {({ isActive }) => (
              <span
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Theme toggle */}
      <div className="shrink-0 border-t border-border px-3 py-2 flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-medium px-2">Theme</span>
        <ThemeToggle />
      </div>

      {/* User section */}
      <div className="shrink-0 border-t border-border p-3">
        {user ? (
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <UserAvatar
              userId={user.userId}
              name={`${user.firstName} ${user.lastName}`}
              size="sm"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs text-muted-foreground truncate">@{user.username}</p>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <LogIn className="h-4 w-4 shrink-0" />
            Sign in
          </Link>
        )}
      </div>
    </aside>
  );
}
