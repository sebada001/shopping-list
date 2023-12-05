import { useRunesStore } from "../../App";
function RuneCard({
  rune,
  handleClickRune,
  category,
  ind,
  handleHover,
  handleLeave,
  description,
}) {
  const styleIfNotChosen =
    "w-1/5 rounded-lg hover:cursor-pointer grayscale relative";
  const styleIfChosen = "h-full w-1/5 rounded-lg hover:cursor-pointer";
  const selectedRunes = useRunesStore((data) => data.selectedRunes);
  const chosen = selectedRunes.some((chosenRune) => rune.id === chosenRune?.id);

  return (
    <div
      className={chosen ? styleIfChosen : styleIfNotChosen}
      onMouseOver={(e) => handleHover(e, rune.shortDesc)}
      onMouseLeave={handleLeave}
    >
      <img
        src={`./data/${rune.icon}`}
        onClick={() => handleClickRune(category.key, rune, ind)}
        key={rune.key}
        onDragStart={(e) => e.preventDefault()}
      ></img>
    </div>
  );
}
export default RuneCard;
