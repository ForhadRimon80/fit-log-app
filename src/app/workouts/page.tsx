import React from 'react';
import Banner from '@/components/homepages/Banner';
import { IWorkout } from '@/types/workout.type';


const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", { cache: 'force-cache' });

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
          <div>
            {
              workouts.map((workout) => {
                return (
                  <div key={workout.id}>
                    <h3>{workout.name}</h3>
                    <p>{workout.description}</p>
                  </div>
                );
              })
            }
          </div>
        </section>
      </div>
    );
};

export default WorkoutPage;