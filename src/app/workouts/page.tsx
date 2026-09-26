import Banner from "@/components/homepages/Banner";
import { IWorkout } from "@/types/workout.type";
import WorkoutCardPage from "@/components/card/WorkoutCard";

const getWorkouts = async () => {

  await new Promise((resolve) => setTimeout(resolve, 200));

  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }
  return res.json();
};

const WorkoutPage = async () => {
  const workouts: IWorkout[] = await getWorkouts();

  return (
    <div>
      <Banner />

      <section id="workouts" className="container mx-auto my-12 px-4 sm:my-16 sm:px-6 lg:my-20">
        <h2 className="mb-1 text-2xl font-bold text-white sm:text-3xl">THE LIBRARY</h2>

        <p className="mb-8 text-sm text-[#9CA3AF] sm:mb-10 sm:text-[15px]">Twelve lifts covering every major muscle group.</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {workouts.map((workout) => (
            <WorkoutCardPage key={workout.id} workout={workout} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkoutPage;