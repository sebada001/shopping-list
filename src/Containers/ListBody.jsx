import Champs from "../Pages/Champs";
import Items from "../Pages/Items";
import Overview from "../Pages/Overview";
import Runes from "../Pages/Runes";

function ListBody({ currentTab }) {
  const tabs = {
    Champs: <Champs />,
    Runes: <Runes />,
    Items: <Items />,
    Overview: <Overview />,
  };
  const tab = tabs[`${currentTab()}`];
  return tab;
}

export default ListBody;
