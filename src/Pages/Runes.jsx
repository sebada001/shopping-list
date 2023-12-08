import { useRunesStore } from "../App";
import { RuneCategories } from "../Containers/RuneCategories";
import { useRef } from "react";

function cleanAPIString(str) {
  const replacedDesc = str.replaceAll("<b>", "").replaceAll("</b>", "");
  const splitDesc = replacedDesc.split(" ");

  const filteredDesc = splitDesc
    .filter((ea) => !ea.includes("<") && !ea.includes("="))
    .join(" ");
  return filteredDesc[0].toUpperCase() + filteredDesc.slice(1);
}

function Runes() {
  const descriptionContainer = useRef();

  const handleHover = (e, desc) => {
    const curr = descriptionContainer.current;
    const cleanDesc = cleanAPIString(desc);
    curr.textContent = cleanDesc;
    curr.style.display = "flex";
    const rec2 = [e.pageX, e.pageY + 50];
    const classVar = [`${rec2[0]}px`, `${rec2[1]}px`];
    descriptionContainer.current.style.left = classVar[0];
    descriptionContainer.current.style.top = classVar[1];
  };
  const handleLeave = () =>
    (descriptionContainer.current.style.display = "none");

  const runesData = useRunesStore((data) => data.runesData);
  const setTree = useRunesStore((data) => data.setSelectedTree);
  const setRune = useRunesStore((data) => data.setSelectedRune);
  const clearRunes = useRunesStore((data) => data.clearSelectedRunes);
  const currentTree = useRunesStore((data) => data.selectedTree);

  const handleClickRune = (tree, rune, runeInd) => {
    setTree(tree);
    if (tree !== currentTree) clearRunes();
    setRune(rune, runeInd);
    console.log(rune);
  };

  return (
    <div className="m-4 flex flex-1 flex-wrap justify-evenly">
      <div
        className="absolute z-50 w-1/6 rounded-md bg-slate-900 p-2 text-white"
        ref={descriptionContainer}
      >
        Hello over here
      </div>
      {runesData.map((eachCategory) => (
        <RuneCategories
          handleHover={handleHover}
          handleLeave={handleLeave}
          category={eachCategory}
          runesData={runesData}
          handleClickRune={handleClickRune}
          key={eachCategory.id}
        />
      ))}
    </div>
  );
}

export default Runes;
