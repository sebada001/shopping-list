async function getChampsData() {
  let champsDataJs = null;
  fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json",
    { mode: "cors" }
  )
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then((response) => (champsDataJs = response.data))
    .catch((error) => console.error(error))
    .finally(() => consol.log("done loading champs data"));
  return champsDataJs;
}

export { getChampsData };
