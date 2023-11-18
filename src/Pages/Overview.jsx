import { useState, useEffect } from "react";

function Overview({ currentChamp }) {
  const champName = currentChamp?.name;
  const [champData, setChampData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion/" +
        currentChamp?.name +
        ".json",
      { mode: "cors" }
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setChampData(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex justify-center">
      {champData && (
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`}
          className="m-6 h-full w-full rounded-lg object-fill grayscale"
        />
      )}
    </div>
  );
}

export default Overview;
