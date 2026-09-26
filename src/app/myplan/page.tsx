"use client";

import Link from "next/link";
import { useState } from "react";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("saved");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:py-14">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-white uppercase">MY PLAN</h1>
      <p className="mt-1 text-sm text-[#9CA3AF]">Cap of five lifts for today. Finish them, then load more.</p>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 rounded-2xl border border-white/10 bg-[#1B1D22] px-4 py-6 sm:px-6 lg:mt-7">
        <div className="border-r border-white/10 pr-3">
          <p className="text-xs text-[#9CA3AF]">Exercises</p>
          <p className="mt-1 text-3xl font-extrabold text-[#C2F800] sm:text-4xl">2</p>
        </div>

        <div className="border-r border-white/10 px-3 sm:px-6">
          <p className="text-xs text-[#9CA3AF]">Minutes</p>
          <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">23</p>
        </div>

        <div className="pl-3 sm:pl-6">
          <p className="text-xs text-[#9CA3AF]">Calories</p>
          <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">190</p>
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
      <div className="mt-5 flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-5 py-10 text-center sm:min-h-72">
        <h2 className="text-xl font-extrabold text-white uppercase">NOTHING HERE YET</h2>

        <p className="mt-1 text-sm text-[#9CA3AF]">Browse the library and add a lift to get today moving.</p>

        <Link href="/" className="btn mt-5 rounded-full border-0 bg-[#C2F800] px-6 text-xs font-semibold text-black hover:bg-[#a8d500]">
          Go to workouts
        </Link>
      </div>
    </div>
  );
};

export default MyPlanPage;
