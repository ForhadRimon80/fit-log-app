import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiClock, FiStar, FiX } from "react-icons/fi";
import { PiFireSimpleFill } from "react-icons/pi";

interface MyPlanWorkoutCardProps {
  workout: IWorkout;
  isDone: boolean;
  activeTab: "plan" | "saved";
  onMarkDone: (id: number) => void;
  onRemove: (id: number) => void;
}

const MyPlanWorkoutCard = ({ workout, onMarkDone, onRemove, isDone, activeTab }: MyPlanWorkoutCardProps) => {
  return (
    <div className="card flex-row flex-wrap items-center gap-4 rounded-2xl border border-[#232732] bg-[#14171E] p-4 sm:flex-nowrap">
      {/* Image */}
      <Image src={workout.image} alt={workout.name} width={128} height={80} className="h-20 w-28 shrink-0 rounded-lg object-cover sm:w-32" />

      {/* Workout information */}
      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-[16px] text-white uppercase">{workout.name}</h3>
        <p className="mt-0.5 font-semibold text-xs text-[#8A92A0]">{workout.equipment}</p>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#D1D5DB]">
          <span className="flex items-center gap-1">
            <FiClock className="text-[#CCFF00]" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <PiFireSimpleFill className="text-[#CCFF00]" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <FiStar className="text-[#CCFF00]" />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:shrink-0">
        <Link href={`/workouts/${workout.id}`} className="btn btn-sm rounded-full border border-[#374151] bg-transparent px-4 text-white hover:bg-white/10">
          View Details
        </Link>

        {activeTab === "plan" && (
          <button type="button" onClick={() => onMarkDone(workout.id)} aria-pressed={isDone} className={`btn btn-sm rounded-full px-4 ${isDone ? "border-0 bg-[#CCFF00] text-black" : "border border-[#374151] bg-transparent text-white hover:bg-white/10"}`}>
            {isDone && <FiCheck />}
            Mark as Done
          </button>
        )}

        <button type="button" onClick={() => onRemove(workout.id)} aria-label={`Remove ${workout.name} from today's plan`} className="btn btn-ghost btn-sm btn-circle text-[#6B7280] hover:text-white">
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default MyPlanWorkoutCard;