import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="w-full h-screen flex justify-center bg-gray-500 text-white">
      <div className="w-1/2 h-1/2 flex flex-col items-center">
        {/*Page Title*/}
        <h1 className="text-5xl text-yellow-500 font-bold p-10">
          Task Manager
        </h1>

        {/*Render the Tasks component*/}
        <Tasks />
      
      </div>
    </div>
  );
}

export default App;