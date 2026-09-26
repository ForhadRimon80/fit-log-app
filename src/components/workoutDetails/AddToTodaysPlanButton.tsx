"use client";
import { WorkoutDetailsButtonContext } from "@/context/WorkoutDetailsButtonContext";
import { IWorkout } from "@/types/workout.type";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

interface IAddToTodaysPlanButtonType {
  addToTodaysPlan: IWorkout[];
  setAddToTodaysPlan: Dispatch<SetStateAction<IWorkout[]>>;
}

const AddToTodaysPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { addToTodaysPlan, setAddToTodaysPlan } = useContext(WorkoutDetailsButtonContext) as IAddToTodaysPlanButtonType;

  const handleAddToTodaysPlan = () => {
    const alreadyAdded = addToTodaysPlan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.info(`"${workout.name}" is already in today's plan.`);
      return;
    }

    if (addToTodaysPlan.length >= 5) {
      toast.info("Today's plan can contain up to 5 lifts.");
      return;
    }

    setAddToTodaysPlan((previous) => [...previous, workout]);
    toast.success(`You have added "${workout.name}" to today's plan.`);
  };

  return (
    <button type="button" disabled={addToTodaysPlan.length >= 5} onClick={() => handleAddToTodaysPlan()} className="rounded-xl font-semibold btn w-full border-0 bg-[#C2F800] text-[#0F1115] hover:bg-[#a8d500] sm:w-auto">
      <FiCalendar />
      Add to today&apos;s plan
    </button>
  );
};

export default AddToTodaysPlanButton;
