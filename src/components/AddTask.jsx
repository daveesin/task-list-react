function AddTask() {
    return(
        <div className="space-y-4 p-6 bg-yellow-500 rounded-md shadow border-black border-2 w-full flex flex-col">

            <input type="text" placeholder="Enter a new task..." className="border border-slate-500 outline-slate-400 px-4 py-2 rounded-md"/>
            <input type="text" placeholder="Enter a new description..." className="border border-slate-500 outline-slate-400 px-4 py-2 rounded-md"/>
            <button className="bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-slate-600">
                Add Task
            </button>

        </div>
    )
}

export default AddTask;