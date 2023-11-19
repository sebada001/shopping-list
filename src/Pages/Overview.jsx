import { useState, useEffect } from "react";
import { cleanString } from "./Helpers";

function Overview({ currentChamp }) {
  const champName = currentChamp?.name;
  const [champData, setChampData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion/" +
        cleanString(currentChamp?.name) +
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
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex justify-center">
      {champData && (
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${cleanString(
            champName
          )}_0.jpg`}
          className="m-6 h-full w-full rounded-lg border-8 border-solid border-gray-900 object-fill grayscale"
        />
      )}
    </div>
  );
}

export default Overview;
