import { useItemsStore } from "../../App";

function ItemCard({ styling, itemName, itemCode, item }) {
  const imgAddress = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${itemCode}.png`;
  const styleIfNotChosen = "h-full w-full grayscale rounded-lg";
  const styleIfChosen = "h-full w-full rounded-lg";
  const addSelectedItem = useItemsStore((state) => state.addSelectedItem);
  const removeSelectedItem = useItemsStore((state) => state.removeSelectedItem);
  const selectedItems = useItemsStore((state) => state.selectedItems);

  const handleClick = (it1) => {
    checkIncludedItem(it1) ? removeSelectedItem(it1) : addSelectedItem(it1);
  };
  const checkIncludedItem = (it2) => {
    if (selectedItems.some((it3) => it3.name === it2.name)) {
      return true;
    }
    return false;
  };

  return (
    <div className={styling} onClick={() => handleClick(item)}>
      <img
        src={imgAddress}
        className={checkIncludedItem(item) ? styleIfChosen : styleIfNotChosen}
      ></img>
      <p className="absolute top-0 box-border max-w-full rounded bg-gradient-to-br from-sky-900/75 to-slate-900/75 p-1 font-extrabold text-white">
        {itemName}
      </p>
    </div>
  );
}

export default ItemCard;
