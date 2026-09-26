"use client";
import MyPlanWorkoutCard from "@/components/card/MyPlanWorkoutCard";
import { WorkoutDetailsButtonContext } from "@/context/WorkoutDetailsButtonContext";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { toast } from "react-toastify";


interface IWorkoutDetailsButtonContextType {
  addToTodaysPlan: IWorkout[];
  setAddToTodaysPlan: Dispatch<SetStateAction<IWorkout[]>>;
  saveForLater: IWorkout[];
  setSaveForLater: Dispatch<SetStateAction<IWorkout[]>>;
}


const MyPlanPage = () => {
  //* Access the context values
  const { addToTodaysPlan, setAddToTodaysPlan, saveForLater, setSaveForLater } = useContext(WorkoutDetailsButtonContext) as IWorkoutDetailsButtonContextType;

  //* State to track which workouts are marked as done
  const [doneIds, setDoneIds] = useState<number[]>([]);
  
  //* Function to handle marking a workout as done or not done
  const handleMarkDone = (id: number) => {
    if (doneIds.includes(id)) {
      setDoneIds((previous) => previous.filter((doneId) => doneId !== id));
      toast.info(`${workouts.find((w) => w.id === id)?.name} marked as not done.`);
    } else {
      setDoneIds((previous) => [...previous, id]);
      toast.success(`${workouts.find((w) => w.id === id)?.name} marked as done!`);
    }
  };

  //* Function to handle removing a workout from the list
  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      setAddToTodaysPlan((previous) => previous.filter((workout) => workout.id !== id));
    } else {
      setSaveForLater((previous) => previous.filter((workout) => workout.id !== id));
    }

    toast.success(`${workouts.find((w) => w.id === id)?.name} removed!`);
  };

  //* State to manage active tab and sorting
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

  //* Function to sort workouts based on the selected criteria
  const sortWorkouts = (workouts: IWorkout[]) => {
    const sortedWorkouts = [...workouts];
    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }
    return sortedWorkouts;
  };

  //* Sort the workouts based on the selected criteria function called here.
  const sortedAddToTodaysPlan = sortWorkouts(addToTodaysPlan);
  const sortedSaveForLater = sortWorkouts(saveForLater);

  //* Determine which workouts to display based on the active tab
  let workouts: IWorkout[] = [];

    if (activeTab === "plan") {
      workouts = sortedAddToTodaysPlan;
    } else {
      workouts = sortedSaveForLater;
    }

    //* Calculate statistics for the workouts
    const exerciseCount = workouts.length;

    const totalMinutes = workouts.reduce((total, workout) => total + workout.duration, 0);

    const totalCalories = workouts.reduce((total, workout) => total + workout.caloriesBurned, 0);

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:py-14">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-white uppercase">MY PLAN</h1>
      <p className="mt-1 text-sm text-[#9CA3AF]">Cap of five lifts for today. Finish them, then load more.</p>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 rounded-2xl border border-white/10 bg-[#1B1D22] px-4 py-6 sm:px-6 lg:mt-7">
        <div className="border-r border-white/10 pr-3">
          <p className="text-xs text-[#9CA3AF]">Exercises</p>
          <p className="mt-1 text-3xl font-extrabold text-[#C2F800] sm:text-4xl">{exerciseCount}</p>
        </div>

        <div className="border-r border-white/10 px-3 sm:px-6">
          <p className="text-xs text-[#9CA3AF]">Minutes</p>
          <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">{totalMinutes}</p>
        </div>

        <div className="pl-3 sm:pl-6">
          <p className="text-xs text-[#9CA3AF]">Calories</p>
          <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs and sort */}
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-fit rounded-xl border border-white/10 bg-[#1B1D22] p-1">
          <button type="button" onClick={() => setActiveTab("plan")} className={`rounded-lg px-4 py-2 text-xs sm:px-5 ${activeTab === "plan" ? "bg-[#252A33] font-semibold text-white" : "text-[#9CA3AF]"}`}>
            Today&apos;s Plan
          </button>

          <button type="button" onClick={() => setActiveTab("saved")} className={`rounded-lg px-4 py-2 text-xs sm:px-5 ${activeTab === "saved" ? "bg-[#252A33] font-semibold text-white" : "text-[#9CA3AF]"}`}>
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="sort-workouts" className="text-xs text-[#9CA3AF]">
            Sort By
          </label>

          <select id="sort-workouts" value={sortBy} onChange={(event) => setSortBy(event.target.value as "duration" | "calories" | "rating")} className="select select-sm w-32 border border-white/10 bg-[#1B1D22] text-white focus:outline-none">
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Empty state */}
      {workouts.length === 0 ? (
        <div className="mt-5 flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-5 py-10 text-center sm:min-h-72">
          <h2 className="text-xl font-extrabold text-white uppercase">NOTHING HERE YET</h2>

          <p className="mt-1 text-sm text-[#9CA3AF]">Browse the library and add a lift to get today moving.</p>

          <Link href="/" className="btn mt-5 rounded-full border-0 bg-[#C2F800] px-6 text-xs font-semibold text-black hover:bg-[#a8d500]">
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          {workouts.map((workout) => (
            <MyPlanWorkoutCard key={workout.id} workout={workout} isDone={doneIds.includes(workout.id)} onMarkDone={handleMarkDone} onRemove={handleRemove} activeTab={activeTab}></MyPlanWorkoutCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlanPage;
