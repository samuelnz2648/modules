//CatFact

import React, { useEffect, useState } from "react";

function CatFact() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setFact(data.fact))
      .catch((error) => console.error("Error fetching cat fact:", error));
  }, []);

  return (
    <div>
      <h3>Random Cat Fact:</h3>
      <p>{fact}</p>
    </div>
  );
}

export default CatFact;
