import { useRunesStore } from "../App";
import { RuneCategories } from "../Containers/RuneCategories";
import { useState } from "react";

function Runes() {
  const [description, setDescription] = useState("");
  const handleHover = (e, desc) => {
    console.log(e.target);
    const height = e.target.clientHeight;
    const width = e.target.clientWidth;
    setDescription(
      <div className="absolute left-8 top-8 w-full bg-slate-400">{desc}</div>
    );
  };
  const handleLeave = () => setDescription("");
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
      {description}
      {runesData.map((eachCategory) => (
        <RuneCategories
          handleHover={handleHover}
          handleLeave={handleLeave}
          description={description}
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
