import TopTabs from "./TopTabs";
import ListBody from "./ListBody";
import { useState } from "react";

function ListContainer() {
  const tabs = ["Champs", "Runes", "Items", "Overview"];
  const [currentChamp, setCurrentChamp] = useState(null);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabSelection = (sel) => setCurrentTabIndex(sel);
  const currentTab = () => tabs[currentTabIndex];

  return (
    <div className="flex w-9/12 flex-col rounded border border-gray-300 bg-sky-200">
      <TopTabs
        currentTabIndex={currentTabIndex}
        handleTabSelection={handleTabSelection}
        tabs={tabs}
      />
      <ListBody
        currentTab={currentTab}
        setCurrentChamp={setCurrentChamp}
        currentChamp={currentChamp}
      />
    </div>
  );
}

export default ListContainer;
