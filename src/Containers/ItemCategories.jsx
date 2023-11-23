import ItemCard from "../Pages/Cards/ItemCard";

function ItemCategories({ itemsData }) {
  const cardDivStyle = `m-2 flex flex-1 flex-row flex-wrap justify-start ring-8 bg-slate-500`;
  const itemsByTypes = {};
  // organize items into an obj with arrays for each item type EG: boots, mana regen, etc
  itemsData.forEach((item, i) => {
    if (i === 0) {
      let boots = itemsData.find((el) => el.id === "1001");
      let tagsBoots = [...boots.tags];
      console.log(tagsBoots);
    }
    let tags = [...item.tags];
    tags.forEach((tag, i) => {
      if (itemsByTypes[tag] === undefined) {
        itemsByTypes[item.tags[i]] = [item];
      } else {
        itemsByTypes[tag] = [...itemsByTypes[tag], item];
      }
    });
  });
  const types = Object.keys(itemsByTypes);

  return (
    <div>
      <div className="m-4 flex flex-row flex-wrap items-center justify-start ">
        {types.map((t) => {
          return (
            <div className="mx-2 my-1 rounded-md bg-slate-100 p-2 hover:cursor-pointer hover:bg-slate-400">
              {t}
            </div>
          );
        })}
      </div>
      <div className="m-2 flex-1 flex-row flex-wrap justify-start  p-4 ">
        {/* {Object.keys(itemsByTypes).map((key) => {
          return (
            <div
              className={cardDivStyle}
              onClick={() => console.log(itemsByTypes)}
            >
              {itemsByTypes[key].map((item) => {
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
          );
        })} */}
      </div>
    </div>
  );
}
export default ItemCategories;
