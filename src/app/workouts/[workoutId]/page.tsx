import AddToTodaysPlanButton from "@/components/workoutDetails/AddToTodaysPlanButton";
import SaveForLaterButton from "@/components/workoutDetails/SaveForLaterButton";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IWorkoutDetailPageProps {
  params: Promise<{
    workoutId: string;
  }>;
}


const WorkoutDetailsPage = async ({ params }: IWorkoutDetailPageProps) => {
  const { workoutId } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workoutId}`, {cache: "no-store"});
   if (!res.ok) {
     throw new Error("Failed to fetch workout details");
   }
   
  const workout = await res.json();
  if (!workout) {
    notFound();
  }

  const workoutTableData = [
    ["EQUIPMENT", workout.equipment],
    ["DIFFICULTY", workout.difficulty],
    ["SETS", workout.sets],
    ["REPS", workout.reps],
    ["DURATION", `${workout.duration} min`],
    ["CALORIES", `${workout.caloriesBurned} kcal`],
    ["RATING", workout.rating],
  ];

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Image */}
        <div className="h-90 overflow-hidden rounded-xl bg-[#1B1D22] sm:h-120 md:h-150 lg:h-181.25">
          <Image src={workout.image} alt={workout.name} width={600} height={600} className="h-full w-full object-cover object-center" />
        </div>

        {/* Workout information */}
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-white uppercase sm:text-3xl lg:text-4xl">{workout.name}</h1>

          <p className="mt-3 max-w-xl text-sm text-[#9CA3AF] sm:text-base">{workout.description}</p>

          {/* Muscle groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string) => (
              <span key={muscle} className="badge rounded-xl border-0 bg-[#C2F800] px-3 py-3 text-xs font-semibold text-black">
                {muscle}
              </span>
            ))}
          </div>

          {/* Details table */}
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#1B1D22]">
            {workoutTableData.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 border-b border-white/5 px-4 py-3 text-sm last:border-b-0 sm:px-5">
                <span className="text-xs font-bold text-[#9CA3AF]">{label}</span>
                <span className="min-w-0 text-right text-[#E5E7EB]">{value}</span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="font-bold text-white">INSTRUCTIONS</h2>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#D1D5DB]">
              {workout.instructions.map((instruction: string, index: number) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <AddToTodaysPlanButton workout={workout} />
            <SaveForLaterButton workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;