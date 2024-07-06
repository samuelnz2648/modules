//SingleCat

import React from "react";

function SingleCat({ cat, deleteCat }) {
  return (
    <div>
      <h2>{cat.name}</h2>
      <p>{cat.latinName}</p>
      <img src={cat.image} alt={cat.name} />
      <button onClick={deleteCat}>Delete</button>
    </div>
  );
}

export default SingleCat;
