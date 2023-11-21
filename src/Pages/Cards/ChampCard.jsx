import { useChampsStore } from "../../App";

function ChampCard({ champName, styling, champ }) {
  const imgAddress = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${champName}.png`;
  const styleIfNotChosen = "h-full w-full grayscale rounded-lg";
  const styleIfChosen = "h-full w-full animate-pulse rounded-lg";
  const setCurrentChamp = useChampsStore((state) => state.setCurrentChamp);
  const currentChamp = useChampsStore((state) => state.currentChamp);
  return (
    <div
      className={styling}
      onClick={() => {
        setCurrentChamp(champ);
      }}
    >
      <img
        src={imgAddress}
        className={
          champ?.id === currentChamp?.id ? styleIfChosen : styleIfNotChosen
        }
      ></img>
      <p className="absolute left-2 top-2 rounded bg-gradient-to-br from-sky-900/75 to-slate-900/75 p-1.5 font-extrabold text-white">
        {champName}
      </p>
    </div>
  );
}

export default ChampCard;
