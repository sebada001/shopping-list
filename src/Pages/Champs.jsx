import { useState, useEffect } from "react";
import ChampCard from "./ChampCards/ChampCard";

function Champs({ setCurrentChamp, currentChamp }) {
  const [champsData, setChampsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json",
      { mode: "cors" }
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setChampsData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="m-4 flex flex-1 flex-row flex-wrap justify-evenly">
      {Object.keys(champsData).map((each) => {
        return (
          <ChampCard
            key={champsData[each]["key"]}
            champName={each}
            styling="rounded-lg h-auto w-1/6 bg-slate-800 text-sky-200 m-2 hover:cursor-pointer relative"
            champ={champsData[each]}
            setCurrentChamp={setCurrentChamp}
            currentChamp={currentChamp}
          />
        );
      })}
    </div>
  );
}

export default Champs;
