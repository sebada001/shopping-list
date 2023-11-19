import { useState, useEffect } from "react";
import ChampCard from "./Cards/ChampCard";
// import { getChampsData } from "../Data/champsData";

function Champs({ setCurrentChamp, currentChamp }) {
  const [loading, setLoading] = useState(true);

  if (loading) return <p>Loading...</p>;

  // const [champsData, setChampsData] = useState(champsDataJs);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json",
  //     { mode: "cors" }
  //   )
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error("server error");
  //       }
  //       return response.json();
  //     })
  //     .then((response) => setChampsData(response.data))
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);

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
