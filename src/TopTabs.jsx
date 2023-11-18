import Tab from "./Tab";

function TopTabs() {
  const tabs = ["Hey", "Hai", "Hou", "Hyo"];
  const tabElements = tabs.map((tab, i) => <Tab key={i} nameOf={tab} />);

  return (
    <div className="flex max-h-20 w-full flex-1 flex-row items-center justify-center bg-slate-800 font-mono text-2xl text-sky-100">
      {tabElements}
    </div>
  );
}
export default TopTabs;
