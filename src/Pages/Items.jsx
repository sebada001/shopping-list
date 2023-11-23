import ItemCard from "./Cards/ItemCard";
import ItemCategories from "../Containers/ItemCategories";
import { useItemsStore } from "../App";

function Items() {
  const itemsData = useItemsStore((state) => state.itemsData);

  return (
    <>
      <ItemCategories itemsData={itemsData} />
      <div className="m-4 flex flex-1 flex-row flex-wrap justify-evenly">
        {/* {itemsData.map((each) => {
          return (
            <ItemCard
              key={each.id}
              itemName={each.name}
              itemCode={each.id}
              styling="rounded-lg h-auto w-1/12 bg-slate-800 text-sky-200 m-1 hover:cursor-pointer relative"
              item={each}
            />
          );
        })} */}
      </div>
    </>
  );
}

export default Items;
