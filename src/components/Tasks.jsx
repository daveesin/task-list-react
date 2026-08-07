import { ChevronRightIcon, CheckIcon, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Tasks(props) {
    const navigate = useNavigate();

    //Function to navigate to the task details page with query parameters
    function handleSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`)
    }

    return(
        <ul className="space-y-4 p-6 bg-yellow-500 rounded-md shadow border-black border-2 w-full">

            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => props.onTaskClick(task.id)} 
                        className={`${task.completed && 'line-through'} bg-slate-400 w-full h-10 text-white rounded-md border-2 border-black hover:bg-slate-500`}
                    >
                        {task.title} {task.completed && <CheckIcon className="inline-block" />}
                    </button>
                    <Button 
                        onClick={() => handleSeeDetailsClick(task)}
                        className="bg-slate-400 w-10 h-10 text-white rounded-md border-2 border-black hover:bg-slate-500"
                    >
                        <ChevronRightIcon />
                    </Button>
                    <Button 
                        onClick={() => props.onDeleteTask(task.id)} 
                        className="bg-slate-400 w-10 h-10 text-white rounded-md border-2 border-black hover:bg-slate-500"
                    >
                        <TrashIcon />
                    </Button>
                </li>
            ))}

        </ul>
    );
}

export default Tasks;