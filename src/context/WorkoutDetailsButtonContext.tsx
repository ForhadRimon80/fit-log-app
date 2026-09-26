"use client";

import { IWorkout } from "@/types/workout.type";
import { createContext, ReactNode, useEffect, useState } from "react";

export const WorkoutDetailsButtonContext = createContext({});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [addToTodaysPlan, setAddToTodaysPlan] = useState<IWorkout[]>(() => {
    if (typeof window === "undefined") {
        return [];
    }
    return JSON.parse(localStorage.getItem("todaysPlan") || "[]");
  });

  const [saveForLater, setSaveForLater] = useState<IWorkout[]>(() => {
    if (typeof window === "undefined") {
        return [];
    } 
    return JSON.parse(localStorage.getItem("savedWorkouts") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("todaysPlan", JSON.stringify(addToTodaysPlan));
    localStorage.setItem("savedWorkouts", JSON.stringify(saveForLater));
  }, [addToTodaysPlan, saveForLater]);

  return (
    <WorkoutDetailsButtonContext.Provider
      value={{
        addToTodaysPlan,
        setAddToTodaysPlan,
        saveForLater,
        setSaveForLater,
      }}>
      {children}
    </WorkoutDetailsButtonContext.Provider>
  );
};

export default WorkoutProvider;