"use client";

import { WorkoutDetailsButtonContext } from "@/context/WorkoutDetailsButtonContext";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import { useContext } from "react";

interface WorkoutContextType {
  addToTodaysPlan: IWorkout[];
  saveForLater: IWorkout[];
}

const NavbarCounts = () => {
  const { addToTodaysPlan, saveForLater } = useContext(WorkoutDetailsButtonContext) as WorkoutContextType;

  return (
    <div className="ml-auto flex shrink-0 items-center gap-2 text-xs sm:gap-5 sm:text-sm">
      <Link href="/myplan" className="flex items-center gap-1 text-[#D1D5DB] sm:gap-2">
        <span>Plan</span>
        <span className="flex h-5 w-7 items-center justify-center rounded-full bg-[#D9FF00] text-xs font-bold text-black">{addToTodaysPlan.length}</span>
      </Link>

      <Link href="/myplan" className="flex items-center gap-1 text-[#9CA3AF] sm:gap-2">
        <span>Saved</span>
        <span className="flex h-5.75 w-7 items-center justify-center rounded-full border border-gray-600 text-xs text-white">{saveForLater.length}</span>
      </Link>
    </div>
  );
};

export default NavbarCounts;
