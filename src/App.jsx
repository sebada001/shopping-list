import React from "react";
import ListContainer from "./ListContainer";

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-items-center bg-slate-800 text-center selection:bg-green-900">
      <h1 className="p-9 font-mono text-7xl text-sky-300">Organizer</h1>
      <ListContainer />
    </div>
  );
}

export default App;
