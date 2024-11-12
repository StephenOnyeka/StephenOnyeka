import React, { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import SubscriptionForm from "../components/SubscriptionForm";

export default function Home() {
  // const [workouts, setWorkouts] = useState();
  const { workouts, dispatch } = useWorkoutsContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        // setWorkouts(json);
        dispatch({ type: "SET_WORKOUTS", payload: json });
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="py-8 px-16">
      {/* <p className="font-extrabold">Home</p> */}
      <div className="font-semibold">
        {loading ? (
          <div> Loading well....</div>
        ) : (
          workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))
        )}
      </div>
      <br />
      <br />
      <div className="flex flex-wrap justify-between">
        <WorkoutForm />
        <SubscriptionForm />
      </div>
    </div>
  );
}
