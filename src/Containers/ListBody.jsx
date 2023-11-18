import Champs from "../Pages/Champs";
import Items from "../Pages/Items";
import Overview from "../Pages/Overview";
import Runes from "../Pages/Runes";

function ListBody({ currentTab, setCurrentChamp, currentChamp }) {
  const tabs = {
    Champs: (
      <Champs setCurrentChamp={setCurrentChamp} currentChamp={currentChamp} />
    ),
    Runes: <Runes />,
    Items: <Items />,
    Overview: <Overview currentChamp={currentChamp} />,
  };
  const tab = tabs[`${currentTab()}`];
  return tab;
}

export default ListBody;
