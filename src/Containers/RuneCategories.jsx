import RuneCard from "../Pages/Cards/RuneCard";
import RuneLevel from "./RuneLevel";

function RuneCategories({
  category,
  runesData,
  handleClickRune,
  handleHover,
  handleLeave,
}) {
  const runesLevels = ["0", "1", "2", "3"];
  return (
    <div
      className="relative m-4 flex w-1/4 flex-col items-center rounded-md bg-slate-950/75 p-2 ring-8"
      key={category.id}
    >
      <img
        src={`./data/${category.icon}`}
        className="m-2 w-1/6"
        onClick={() => console.log(runesData)}
      ></img>
      <div className="flex flex-1 flex-col items-center justify-evenly">
        {runesLevels.map((level, ind) => {
          return (
            <RuneLevel
              key={ind}
              category={category}
              level={level}
              ind={ind}
              handleClickRune={handleClickRune}
              handleHover={handleHover}
              handleLeave={handleLeave}
            />
          );
        })}
      </div>
    </div>
  );
}
export { RuneCategories };
