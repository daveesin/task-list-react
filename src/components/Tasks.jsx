function Tasks(props) {
    console.log(props.tasks);
    return(
        <div className="w-full h-screen flex justify-center bg-yellow-500 text-white rounded-lg border-2 border-black">

            <h1>{props.tasks[0].title}</h1>

        </div>
    );
}

export default Tasks;