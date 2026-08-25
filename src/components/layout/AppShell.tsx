import { Outlet } from "react-router-dom";
import { NavSidebar } from "./NavSidebar";
import { BottomNav } from "./BottomNav";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function AppShell() {
  return (
    <div className="min-h-screen bg-background">
      <NavSidebar />

      {/* Mobile top bar — hidden on desktop where sidebar handles branding + theme */}
      <header className="lg:hidden sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-surface px-4">
        <Logo size="sm" />
        <ThemeToggle />
      </header>

      <main className="lg:pl-60 min-h-screen pb-16 lg:pb-0">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}
