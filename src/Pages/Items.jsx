import ItemCard from "./Cards/ItemCard";
import ItemCategories from "../Containers/ItemCategories";
import { useItemsStore } from "../App";
import { useCallback, useState } from "react";

// organize items into an obj with arrays for each item type EG: boots, mana regen, etc
function organizeItems(itemsData) {
  let itemsTypes = {};
  itemsData.forEach((item) => {
    let tags = [...item.tags];
    tags.forEach((tag, i) => {
      if (itemsTypes[tag] === undefined) {
        itemsTypes[item.tags[i]] = [item];
      } else {
        itemsTypes[tag] = [...itemsTypes[tag], item];
      }
    });
  });
  let typeKeys = Object.keys(itemsTypes);
  return { itemsTypes, typeKeys };
}

function Items() {
  const cardDivStyle = `m-2 flex flex-1 flex-row flex-wrap justify-start ring-8 bg-slate-500`;
  const itemsData = useItemsStore((state) => state.itemsData);
  const [currentType, setCurrentType] = useState("Boots");
  const itemMemo = useCallback(organizeItems(itemsData), [itemsData]);

  return (
    <>
      <ItemCategories
        itemsData={itemsData}
        types={itemMemo["typeKeys"]}
        setCurrentType={setCurrentType}
      />
      <div className="m-4 flex flex-1 flex-row flex-wrap justify-evenly">
        <div className="m-2 flex-1 flex-row flex-wrap justify-start  p-4 ">
          <div className={cardDivStyle}>
            {itemMemo["itemsTypes"][currentType] &&
              itemMemo["itemsTypes"][currentType].map((item) => {
                return (
                  <ItemCard
                    key={item.id}
                    itemName={item.name}
                    itemCode={item.id}
                    styling="rounded-lg h-auto w-1/12 bg-slate-800 text-sky-200 m-1 hover:cursor-pointer relative"
                    item={item}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
