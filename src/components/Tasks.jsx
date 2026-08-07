import { ChevronRightIcon, CheckIcon, TrashIcon } from 'lucide-react';

function Tasks(props) {
    return(
        <ul className="space-y-4 p-6 bg-yellow-500 rounded-md shadow border-black border-2 w-full">

            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => props.onTaskClick(task.id)} className={`${task.completed && 'line-through'} bg-slate-400 w-full h-10 text-white rounded-md border-2 border-black hover:bg-slate-500`}>
                        {task.title} {task.completed && <CheckIcon className="inline-block" />}
                    </button>
                    <button className="bg-slate-400 w-10 h-10 text-white rounded-md border-2 border-black hover:bg-slate-500">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => props.onDeleteTask(task.id)} className="bg-slate-400 w-10 h-10 text-white rounded-md border-2 border-black hover:bg-slate-500">
                        <TrashIcon />
                    </button>
                </li>
            ))}

        </ul>
    );
}

export default Tasks;