import { useState, useEffect } from "react";
import ItemCard from "./Cards/ItemCard";
import ItemCategories from "../Containers/ItemCategories";

function Items() {
  const [itemsData, setItemsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/item.json",
      {
        mode: "cors",
      }
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setItemsData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <ItemCategories itemsData={itemsData} />
      <div className="m-4 flex flex-1 flex-row flex-wrap justify-evenly">
        {Object.keys(itemsData).map((each) => {
          return (
            itemsData[each]?.inStore !== false && (
              <ItemCard
                key={each}
                itemName={itemsData[each].name}
                itemCode={each}
                styling="rounded-lg h-auto w-1/12 bg-slate-800 text-sky-200 m-1 hover:cursor-pointer relative"
                item={itemsData[each]}
              />
            )
          );
        })}
      </div>
    </>
  );
}

export default Items;
