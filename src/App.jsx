import React, { useState, useEffect } from "react";
import ListContainer from "./Containers/ListContainer";
import { create } from "zustand";

const useChampsStore = create((set) => ({
  loading: true,
  setLoading: (val) => set(() => ({ loading: val })),
  champsData: null,
  setChampsData: (val) => set(() => ({ champsData: val })),
  currentChamp: null,
  setCurrentChamp: (val) => set(() => ({ currentChamp: val })),
}));

const useItemsStore = create((set) => ({
  loading: true,
  setLoading: (val) => set(() => ({ loading: val })),
  itemsData: [],
  setItemsData: (val) => set(() => ({ itemsData: val })),
  selectedItems: [],
  addSelectedItem: (val) =>
    set((data) => ({ selectedItems: [...data.selectedItems, val] })),
  removeSelectedItem: (val) =>
    set((data) => ({
      selectedItems: data.selectedItems.filter((it) => it.name !== val.name),
    })),
  sortItems: () =>
    set((data) => ({
      itemsData: [...data.itemsData].sort(data.sortPriority),
    })),
  sortPriority: (a, b) => {
    if (a.tags[0] < b.tags[0]) return -1;
    if (a.tags[0] > b.tags[0]) return 1;
    return 0;
  },
}));

function App() {
  const loadingChamps = useChampsStore((state) => state.loading);
  const loadingItems = useItemsStore((state) => state.loading);
  const setLoadingChamps = useChampsStore((state) => state.setLoading);
  const setLoadingItems = useItemsStore((state) => state.setLoading);
  const setChampsData = useChampsStore((state) => state.setChampsData);
  const setItemsData = useItemsStore((state) => state.setItemsData);
  const sortItems = useItemsStore((state) => state.sortItems);
  const [error, setError] = useState(null);

  // load champs API
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
      .finally(() => {
        setLoadingChamps(false);
      });
  }, []);

  // load items API

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/item.json",
      {
        mode: "cors",
      }
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        // turning the list of items object into an array and assigning its unique variable name as its ID
        let arr = Object.keys(response.data)
          .filter((obj) => {
            if (
              response.data[obj].inStore === false ||
              response.data[obj]?.requiredChampion !== undefined ||
              response.data[obj].maps["11"] === false
            )
              return false;
            return true;
          })
          .map((obj2) => {
            let item = response.data[obj2];
            item.id = obj2;
            return item;
          });
        setItemsData(arr);
        sortItems();
      })
      .catch((error) => setError(error))
      .finally(() => setLoadingItems(false));
  }, []);

  if (error) return <p>Error, data not loading...</p>;
  if (loadingChamps || loadingItems) return <p>Loading...</p>;
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-items-center bg-gradient-to-br from-slate-800 to-sky-800 text-center selection:bg-green-900">
      <h1 className="p-9 text-7xl text-sky-300">LoL Build Planner</h1>
      <ListContainer />
    </div>
  );
}

export { App, useChampsStore, useItemsStore };
