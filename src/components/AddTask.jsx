import { useState } from "react";

function AddTask({ onAddTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-4 p-6 bg-yellow-500 rounded-md shadow border-black border-2 w-full flex flex-col">

            <input 
                type="text" 
                placeholder="Enter a new task..." 
                className="border border-slate-500 outline-slate-400 px-4 py-2 rounded-md"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter a new description..." 
                className="border border-slate-500 outline-slate-400 px-4 py-2 rounded-md"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button 
                className="bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-slate-600"
                onClick={() => {
                    //Verify if the title and description are not empty before adding the task
                    if(title.trim() === "" || description.trim() === "") {
                        return alert("Please enter a title and description for the task.");
                    }

                    //Add the new task and clean the input fields
                    onAddTask(title, description);
                    setTitle("");
                    setDescription("");
                }}
            >
                Add Task
            </button>

        </div>
    )
}

export default AddTask;