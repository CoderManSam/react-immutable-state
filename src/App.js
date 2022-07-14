import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => {
    const newWorkout = generateWorkout()
    const newWorkoutsArray = [...workouts]
    newWorkoutsArray.push(newWorkout)
    setWorkouts(newWorkoutsArray)
    // console.log("addNewWorkout:", newWorkout)
    // console.log("addNewWorkoutsArray:", newWorkoutsArray)
    // console.log("workouts:", workouts)
  }

  const deleteWorkout = (workout) => {
    const filteredWorkouts = workouts.filter(element => element !== workout)
    setWorkouts(filteredWorkouts)
    // console.log("deleteWorkout:", workout)
    // console.log("filteredWorkouts:", filteredWorkouts)
    // console.log("workouts:", workouts)
  }

  const completeWorkout = (workout) => {
    const newWorkouts = workouts.map(function(element) {
      if (element === workout) {
        return {...element, done: !element.done}
      }
      return element
    })
    setWorkouts(newWorkouts)
    // console.log("completeWorkout:", workout)
    // console.log("newWorkouts:", newWorkouts)
    // console.log("workouts:", workouts)
  }

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
            </p>
            {!workout.done && 
              <button onClick={e=>completeWorkout(workout)}>Done</button>}
            {workout.done && 
             <p>✅</p>}
            <button onClick={e=>deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default App
