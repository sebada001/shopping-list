import React, { useState, useEffect } from "react";
import ListContainer from "./Containers/ListContainer";
import { create } from "zustand";

const useChampsStore = create((set) => ({
  loading: true,
  setLoading: (val) => set({ loading: val }),
  champsData: null,
  setChampsData: (val) => set({ champsData: val }),
}));

function App() {
  const loading = useChampsStore((state) => state.loading);
  const setLoading = useChampsStore((state) => state.setLoading);
  const setChampsData = useChampsStore((state) => state.setChampsData);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json",
      { mode: "cors" }
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setChampsData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>Error, data not loading...</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-items-center bg-gradient-to-br from-slate-800 to-sky-800 text-center selection:bg-green-900">
      <h1 className="p-9 text-7xl text-sky-300">LoL Build Planner</h1>
      <ListContainer />
    </div>
  );
}

export { App, useChampsStore };
