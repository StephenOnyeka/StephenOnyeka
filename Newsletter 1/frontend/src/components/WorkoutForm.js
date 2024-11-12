import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(); // Initialize with null
  const [emptyFields, setEmptyFields]= useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null); // Reset error on success
      setEmptyFields([])
      console.log("new workout added", json);
      // Dispatch action to add the new workout to the context
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    } else {
      setError(json.error); // Set error message
    }
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-[450px] h-[500px] p-6 pt-8"
      >
        <h3 className="text-2xl font-semibold mb-8">Add a New Workout</h3>
        <div className="w-full content-center">
          <div>
            <label>Exercise Title:</label>
            <br />
            <input
              className={`p-2 mb-4 mt-2 w-full ${
                emptyFields.includes("title") ? "error" : ""
              }`}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              // className = {emptyFields.includes('title')? 'error': ''}
              // I stopped at trying to add a code here. Get to understand it.
            />
          </div>
          <div>
            <label>Load (in kg): </label>
            <br />
            <input
              className={`${
                emptyFields.includes("load") ? "error" : ""
              } p-2 mb-4 mt-2 w-full`}
              type="number"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
            />
          </div>
          <div>
            <label>Reps:</label>
            <br />
            <input
              className={`p-2 mb-4 mt-2 w-full ${
                emptyFields.includes("reps") ? "error" : ""
              }`}
              type="number"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
            />
          </div>
        </div>
        <button className="bg-green-700 mt-4 px-6 py-4 text-white">
          Add Workout
        </button>
        {error && <div className="text-red-500 border border-red-500 bg-red-100 p-2 mt-4">{error}</div>}
        {/* Error message styling */}
      </form>
    </div>
  );
}

export default WorkoutForm;

// For this workout form, I am having a problem positioning all immediate forms to the top without refreshing the page. It must take a refresh b
