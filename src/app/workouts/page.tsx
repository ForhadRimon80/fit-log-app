import React from 'react';
import Banner from '@/components/homepages/Banner';
import { IWorkout } from '@/types/workout.type';
import WorkoutCardPage from '@/components/card/WorkoutCard';


const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", { cache: "force-cache" });

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return await res.json();
}


const WorkoutPage = async () => {

    const workouts: IWorkout[] = await getWorkouts();

    return (
      <div>
        <Banner />
        <section className="container mx-auto px-4 my-20 sm:px-6">
          <h2>THE LIBRARY</h2>
          <p>Twelve lifts covering every major muscle group.</p>
          <div className='grid grid-cols-3 gap-6'>
            {workouts.map((workout) => (
              <WorkoutCardPage key={workout.id} workout={workout} />
            ))}
          </div>
        </section>
      </div>
    );
};

export default WorkoutPage;