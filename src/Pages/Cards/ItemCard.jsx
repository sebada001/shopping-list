function ItemCard({ styling, itemName, itemCode, item }) {
  const imgAddress = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${itemCode}.png`;
  const styleIfNotChosen = "h-full w-full grayscale rounded-lg";
  const styleIfChosen = "h-full w-full animate-pulse rounded-lg";
  return (
    <div className={styling}>
      <img src={imgAddress} className={styleIfNotChosen}></img>
      <p className="absolute top-1/4 box-border max-w-full rounded bg-gradient-to-br from-sky-900/75 to-slate-900/75 p-1 font-extrabold text-white">
        {itemName}
      </p>
    </div>
  );
}

export default ItemCard;
