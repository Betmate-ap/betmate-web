import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { PublicShell } from "@/components/layout/PublicShell";
import { Skeleton } from "@/components/ui/skeleton";

const LandingPage = lazy(() => import("@/pages/public/LandingPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const BetsPage = lazy(() => import("@/pages/BetsPage"));
const BetmatesPage = lazy(() => import("@/pages/BetmatesPage"));
const LeaderboardPage = lazy(() => import("@/pages/LeaderboardPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const PlaygroundPage = lazy(() =>
  import.meta.env.DEV ? import("@/pages/PlaygroundPage") : Promise.reject()
);

function PageLoader() {
  return (
    <div className="flex flex-col gap-4 p-8 max-w-2xl mx-auto mt-16">
      <Skeleton className="h-10 w-48" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public — no shell */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth — centered public layout */}
        <Route element={<PublicShell />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* App — sidebar + bottom nav layout */}
        <Route element={<AppShell />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/bets" element={<BetsPage />} />
          <Route path="/betmates" element={<BetmatesPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Dev only */}
        {import.meta.env.DEV && <Route path="/playground" element={<PlaygroundPage />} />}
      </Routes>
    </Suspense>
  );
}
