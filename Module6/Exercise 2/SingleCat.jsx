import React from "react";

function SingleCat({ cat }) {
  return (
    <div>
      <h2>{cat.name}</h2>
      <p>{cat.latinName}</p>
      <img src={cat.image} alt={cat.name} />
    </div>
  );
}

export default SingleCat;
