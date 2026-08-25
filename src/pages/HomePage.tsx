import { ThemeToggle } from "@/components/shared/ThemeToggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-[var(--text-primary)]">BetMate</h1>
      <p className="text-[var(--text-secondary)]">IPL friendly betting — coming soon.</p>
      <ThemeToggle />
    </div>
  );
}
