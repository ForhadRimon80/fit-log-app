import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiClock, FiStar } from "react-icons/fi";
import { PiFireSimpleFill } from "react-icons/pi";

interface WorkoutCardPageProps {
  workout: IWorkout;
}

const WorkoutCardPage = ({ workout }: WorkoutCardPageProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="cursor-pointer card overflow-hidden rounded-2xl border border-white/10 bg-[#15171D]">
        <figure className="h-52 w-full sm:h-56 md:h-60 lg:h-64">
          <Image src={workout.image} alt={workout.name} width={600} height={300} className="h-full w-full object-cover object-center" />
        </figure>

        <div className="card-body gap-0 p-7">
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span key={muscle} className="badge rounded-2xl border-0 bg-[#C2F800] px-3 py-3 text-xs font-bold text-black uppercase">
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold text-white uppercase">{workout.name}</h3>

          <p className="mt-1 text-sm text-[#9CA3AF]">{workout.equipment}</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#20242E] pt-3 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <FiClock />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <PiFireSimpleFill />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <FiStar />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCardPage;
