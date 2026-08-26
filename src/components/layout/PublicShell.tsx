import { Outlet, Link } from "react-router-dom";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function PublicShell() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal header */}
      <header className="flex h-14 items-center justify-between px-4 sm:px-6">
        <Link to="/">
          <Logo size="sm" />
        </Link>
        <ThemeToggle />
      </header>

      {/* Centered content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
