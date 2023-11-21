import ChampCard from "./Cards/ChampCard";
import { useChampsStore } from "../App";

function Champs() {
  const champsData = useChampsStore((state) => state.champsData);

  return (
    <div className="m-4 flex flex-1 flex-row flex-wrap justify-evenly">
      {Object.keys(champsData).map((each) => {
        return (
          <ChampCard
            key={champsData[each]["key"]}
            champName={each}
            styling="rounded-lg h-auto bg-slate-800 text-sky-200 m-0.5 hover:cursor-pointer relative"
            champ={champsData[each]}
          />
        );
      })}
    </div>
  );
}

export default Champs;
