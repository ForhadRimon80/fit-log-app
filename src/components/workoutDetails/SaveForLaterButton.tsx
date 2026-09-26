"use client";
import { WorkoutDetailsButtonContext } from "@/context/WorkoutDetailsButtonContext";
import { IWorkout } from "@/types/workout.type";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

interface ISaveForLaterButtonType {
  saveForLater: IWorkout[];
  setSaveForLater: Dispatch<SetStateAction<IWorkout[]>>;
}

const SaveForLaterButton = ({ workout }: { workout: IWorkout }) => {
  const { saveForLater, setSaveForLater } = useContext(WorkoutDetailsButtonContext) as ISaveForLaterButtonType;

  const handleSaveForLater = () => {
    const alreadySaved = saveForLater.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.info(`"${workout.name}" is already saved.`);
      return;
    }

    setSaveForLater((previous) => [...previous, workout]);
    toast.success(`You have added "${workout.name}" to the save for later list.`);
  };

  return (
    <button type="button" onClick={() => handleSaveForLater()} className="rounded-xl font-medium btn w-full border border-[#374151] bg-transparent text-[#E5E7EB] hover:bg-white/10 sm:w-auto">
      <FiBookmark />
      Save for later
    </button>
  );
};

export default SaveForLaterButton;
