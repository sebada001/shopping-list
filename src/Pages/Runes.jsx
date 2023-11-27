import { useRunesStore } from "../App";

function Runes() {
  const styleIfNotChosen = "w-1/5 rounded-lg hover:cursor-pointer grayscale";
  const styleIfChosen =
    "h-full w-1/5 rounded-lg hover:cursor-pointer animate-pulse ";
  const runesData = useRunesStore((data) => data.runesData);
  const setTree = useRunesStore((data) => data.setSelectedTree);
  const setRune = useRunesStore((data) => data.setSelectedRune);
  const selectedTree = useRunesStore((data) => data.selectedTree);
  const runesSlots = ["0", "1", "2", "3"];
  const handleClickRune = (tree, rune, runeInd) => {
    setTree(tree);
    setRune(rune, runeInd);
  };

  return (
    <div className="m-4 flex flex-1 flex-wrap justify-evenly">
      {runesData.map((type) => (
        <div
          className="m-4 flex w-1/4 flex-col items-center rounded-md bg-slate-950/75 p-2 ring-8"
          key={type.id}
        >
          <img
            src={`./data/${type.icon}`}
            className="m-2 w-1/6"
            onClick={() => console.log(runesData)}
          ></img>
          <div className="flex flex-1 flex-col items-center justify-evenly">
            {runesSlots.map((ea, ind) => {
              return (
                <div
                  className=" m-4 flex w-full justify-evenly border-t-2 border-sky-200 pt-8"
                  key={ind}
                >
                  {type.slots[ea].runes.map((rune) => {
                    return (
                      <img
                        src={`./data/${rune.icon}`}
                        className={
                          selectedTree === type.key
                            ? styleIfChosen
                            : styleIfNotChosen
                        }
                        onClick={() => handleClickRune(type.key, rune, ind)}
                        key={rune.key}
                      ></img>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Runes;
