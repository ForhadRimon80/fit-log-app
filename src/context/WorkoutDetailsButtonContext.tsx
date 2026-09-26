"use client";

import { IWorkout } from "@/types/workout.type";
import { createContext, ReactNode, useEffect, useState, useSyncExternalStore } from "react";

export const WorkoutDetailsButtonContext = createContext({});

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const isClient = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

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

  if (!isClient) return null;
  
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
