import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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

  //Defining a function to mark a task as completed when the button is clicked
  function handleTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  //Defining a function to delete a task when a button is clicked
  function handleDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }


  return (
    <div className="w-full h-screen flex justify-center bg-gray-500 text-white">
      <div className="w-1/2 h-1/2 flex flex-col items-center">
        {/*Page Title*/}
        <h1 className="text-5xl text-yellow-500 font-bold p-10">
          Task Manager
        </h1>

        {/*Render the Tasks component*/}
        <Tasks tasks={tasks} onTaskClick={handleTaskClick} onDeleteTask={handleDeleteTask} />

        {/*Render the AddTask component*/}
        <AddTask />
      
      </div>
    </div>
  );
}

export default App;