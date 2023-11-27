import React, { useEffect } from "react";
import ListContainer from "./Containers/ListContainer";
import { ApiChamp, ApiItem, ApiRunes } from "./ApiCalls";
import { create } from "zustand";

const useRunesStore = create((set) => ({
  loading: true,
  setLoading: (val) => set(() => ({ loading: val })),
  runesData: null,
  setRunesData: (val) => set(() => ({ runesData: val })),
  selectedTree: null,
  setSelectedTree: (val) => set(() => ({ selectedTree: val })),
  selectedRunes: [null, null, null, null],
  setSelectedRune: (val, index) =>
    set((data) => ({
      selectedRunes: swapInPlace(val, index, data.selectedRunes),
    })),
}));

// [...data.selectedRunes[index] = val];

function swapInPlace(val, index, array) {
  let copy = [...array];
  copy[index] = val;
  return copy;
}

const useChampsStore = create((set) => ({
  loading: true,
  setLoading: (val) => set(() => ({ loading: val })),
  champsData: null,
  setChampsData: (val) => set(() => ({ champsData: val })),
  currentChamp: null,
  setCurrentChamp: (val) => set(() => ({ currentChamp: val })),
}));

const useItemsStore = create((set) => ({
  currentItemCategory: "",
  setCurrentItemCategory: (val) => set(() => ({ currentItemCategory: val })),
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
  const setLoadingItems = useItemsStore((state) => state.setLoading);
  const setLoadingChamps = useChampsStore((state) => state.setLoading);
  const setChampsData = useChampsStore((state) => state.setChampsData);
  const setItemsData = useItemsStore((state) => state.setItemsData);
  const sortItems = useItemsStore((state) => state.sortItems);
  const setCurrentChamp = useChampsStore((state) => state.setCurrentChamp);
  const setRunesData = useRunesStore((state) => state.setRunesData);

  useEffect(async () => {
    const effectChampsData = await ApiChamp();
    setChampsData(effectChampsData);
    setLoadingChamps(false);
    setCurrentChamp(effectChampsData["Briar"]);
  }, []);

  useEffect(async () => {
    const effectItemsData = await ApiItem();
    setItemsData(effectItemsData);
    sortItems();
    setLoadingItems(false);
  }, []);

  useEffect(async () => {
    const effectRunesData = await ApiRunes();
    setRunesData(effectRunesData);
  }, []);

  if (loadingChamps || loadingItems) return <p>Loading...</p>;
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-items-center bg-gradient-to-br from-slate-800 to-sky-800 text-center selection:bg-green-900">
      <h1 className="p-9 text-7xl text-sky-300">LoL Build Planner</h1>
      <ListContainer />
    </div>
  );
}

export { App, useChampsStore, useItemsStore, useRunesStore };
