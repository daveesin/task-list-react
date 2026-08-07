function Tasks(props) {
    console.log(props.tasks);
    return(
        <div className="w-90 h-auto flex justify-center bg-yellow-500 text-white rounded-lg border-2 border-black">

            <ul className="w-full h-full flex flex-col justify-center">
                {props.tasks.map((task) => (
                    <li key={task.id} className="list-none">
                        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded m-2 w-64 border-2 hover:bg-gray-400">
                            {task.title}
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Tasks;