import TopTabs from "./TopTabs";
import ListBody from "./ListBody";
import { useState } from "react";

function ListContainer() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabSelection = (sel) => setCurrentTab(sel);

  return (
    <div className="flex h-4/5 w-9/12 flex-col rounded border border-gray-300 bg-sky-200">
      <TopTabs
        currentTab={currentTab}
        handleTabSelection={handleTabSelection}
      />
      <ListBody currentTab={currentTab} />
    </div>
  );
}

export default ListContainer;
