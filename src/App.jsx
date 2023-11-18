import React from "react";
import ListContainer from "./Containers/ListContainer";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-items-center bg-gradient-to-br from-slate-800 to-sky-800 text-center selection:bg-green-900">
      <h1 className="p-9 text-7xl text-sky-300">LoL Build Planner</h1>
      <ListContainer />
    </div>
  );
}

export default App;
