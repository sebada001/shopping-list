// load champs API
async function ApiChamp() {
  let allData = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json",
    { mode: "cors" }
  );
  let response = await allData.json();
  return response.data;
}

async function ApiItem() {
  let allData = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/item.json",
    { mode: "cors" }
  );
  let response = await allData.json();
  let arr = Object.keys(response.data)
    .filter((obj) => {
      if (
        response.data[obj].inStore === false ||
        response.data[obj]?.requiredChampion !== undefined ||
        response.data[obj].maps["11"] === false
      )
        return false;
      return true;
    })
    .map((obj2) => {
      let item = response.data[obj2];
      item.id = obj2;
      return item;
    });
  return arr;
}

async function ApiRunes() {
  let allData = await fetch("./data/runesReforged.json");
  let response = await allData.json();
  return response;
}

export { ApiChamp, ApiItem, ApiRunes };
