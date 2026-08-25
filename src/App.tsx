import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

const HomePage = lazy(() => import("@/pages/HomePage"));
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
        <Route path="/" element={<HomePage />} />
        {import.meta.env.DEV && <Route path="/playground" element={<PlaygroundPage />} />}
      </Routes>
    </Suspense>
  );
}
