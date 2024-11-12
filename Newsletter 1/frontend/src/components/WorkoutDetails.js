import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();  
  const handleClick = async() => {
    const response = await fetch('/api/workouts/' + workout._id, { method: 'DELETE' })
    const json = await response.json()
    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  
  return (
    <div>
      <div key={workout._id} className="bg-white p-6 my-6">
        <p className="text-green-700 font-extrabold">{workout.title}</p>
        <br />
        <p className="font-bold">
          Load(kg): <span className="font-normal">{workout.load}</span>
        </p>
        <p className="font-bold">
          Reps: <span className="font-normal">{workout.reps}</span>
        </p>
        {/* <p>{workout.createdAt}</p> */}
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
        <button className='bg-red-400 px-4 py-2' onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
}

export default WorkoutDetails;

// {
//   new Date(workout.createdAt).toLocaleString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   });
// }