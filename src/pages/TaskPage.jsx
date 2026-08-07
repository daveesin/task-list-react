import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from 'lucide-react';
import Title from '../components/Title'

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
        <div className="w-full h-screen flex justify-center bg-gray-500 text-white">
            <div className="w-1/2 h-1/2 flex flex-col items-center space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button 
                        onClick={() => navigate(-1)}
                        className="absolute left-0 bottom-0 top-0 text-slate-100 hover:text-slate-300"
                    >
                        <ChevronLeftIcon/>
                    </button>
                    
                    {/*Page Title*/}
                    <Title>
                        Task Details
                    </Title>
                </div>

                {/*Render the task details*/}
                <div className="bg-yellow-500 rounded-md shadow border-black border-2 w-full p-6">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-lg">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskPage;