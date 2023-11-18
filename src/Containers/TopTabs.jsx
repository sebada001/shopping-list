import Tab from "../Tabs/Tab";

function TopTabs({ currentTabIndex, handleTabSelection, tabs }) {
  const tabElements = tabs.map((tab, i) => {
    const check = currentTabIndex === i;
    return (
      <Tab
        key={i}
        nameOf={tab}
        handleTabSelection={handleTabSelection}
        keyId={i}
        selectionCheck={check}
      />
    );
  });

  return (
    <div className="flex max-h-20 w-full flex-1 flex-row items-center justify-center bg-slate-800 text-2xl text-sky-100">
      {tabElements}
    </div>
  );
}
export default TopTabs;
