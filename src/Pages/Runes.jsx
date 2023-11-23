import { useRunesStore } from "../App";

function Runes() {
  const runesData = useRunesStore((data) => data.runesData);
  const runesSlots = ["0", "1", "2", "3"];
  const styleIfNotChosen = "w-1/5 rounded-lg hover:cursor-pointer";
  const styleIfChosen = "h-full w-1/4 rounded-lg hover:cursor-pointer ";

  return (
    <div className="m-4 flex flex-1 flex-wrap justify-evenly">
      {runesData.map((type) => (
        <div
          className="m-4 flex w-1/4 flex-col items-center rounded-md bg-slate-950/75 p-2 ring-8"
          key={type.id}
        >
          <img src={`./data/${type.icon}`} className="m-2 w-1/6"></img>
          <div className="flex flex-1 flex-col items-center justify-evenly ">
            {runesSlots.map((ea) => {
              return (
                <div className="m-4 flex w-full justify-evenly p-4">
                  {type.slots[ea].runes.map((key) => {
                    return (
                      <img
                        src={`./data/${key.icon}`}
                        className={styleIfNotChosen}
                        onClick={() => console.log(key.key)}
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
