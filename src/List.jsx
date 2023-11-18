import TopTabs from "./TopTabs";
import ListBody from "./ListBody";

function ListContainer() {
  return (
    <div className="flex h-4/5 w-9/12 flex-col rounded border border-gray-300 bg-sky-200">
      <TopTabs />
      <ListBody />
    </div>
  );
}

export default ListContainer;
