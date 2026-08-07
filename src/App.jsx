import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
import { useState, useEffect } from "react";
import { v4 } from 'uuid';

function App() {

  {/**Importing tasks from the localStorage as states to change the view of the user */}
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //Update the local storage everytime I update something on my tasklist:
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  //Defining a function to add a new task when the button is clicked
  function handleAddTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }


  return (
    <div className="w-full h-screen flex justify-center bg-gray-500 text-white">
      <div className="w-1/2 h-1/2 flex flex-col items-center space-y-4">
        {/*Page Title*/}
        <Title>Task Manager</Title>

        {/*Render the AddTask component*/}
        <AddTask onAddTask={handleAddTask} />

        {/*Render the Tasks component*/}
        <Tasks tasks={tasks} onTaskClick={handleTaskClick} onDeleteTask={handleDeleteTask} />
      
      </div>
    </div>
  );
}

export default App;