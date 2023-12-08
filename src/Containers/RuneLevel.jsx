import RuneCard from "../Pages/Cards/RuneCard";

function RuneLevel({
  category,
  handleClickRune,
  ind,
  level,
  handleHover,
  handleLeave,
}) {
  return (
    <div className=" m-4 flex w-full justify-evenly border-t-2 border-sky-200 pt-8">
      {category.slots[level].runes.map((rune) => {
        return (
          <RuneCard
            rune={rune}
            handleClickRune={handleClickRune}
            category={category}
            key={rune.id}
            ind={ind}
            handleHover={handleHover}
            handleLeave={handleLeave}
          />
        );
      })}
    </div>
  );
}
export default RuneLevel;
