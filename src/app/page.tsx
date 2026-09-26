import { Suspense } from "react";
import WorkoutPages from "./workouts/page";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-t-2 border-b-2 border-[#C2F800]" role="status" aria-label="Loading workouts" />
        </div>
      }>
      <WorkoutPages />
    </Suspense>
  );
}
