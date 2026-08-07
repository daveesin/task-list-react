import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {

  {/**Creating the tasks using a state here to use as a property of the Tasks component */}
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Study React",
      description: "Study React and learn basic concepts",
      completed: false
    },
    {
      id: 2,
      title: "Make the lunch",
      description: "Prepare and eat a healthy lunch",
      completed: false
    },
    {
      id: 3,
      title: "Go to the gym",
      description: "Go to the gym and do a workout",
      completed: false
    }
  ]);

  return (
    <div className="w-full h-screen flex justify-center bg-gray-500 text-white">
      <div className="w-1/2 h-1/2 flex flex-col items-center">
        {/*Page Title*/}
        <h1 className="text-5xl text-yellow-500 font-bold p-10">
          Task Manager
        </h1>

        {/*Render the Tasks component*/}
        <Tasks tasks={tasks} />
      
      </div>
    </div>
  );
}

export default App;