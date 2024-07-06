import React, { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const initialCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "cheetah.jpg",
  },
  { id: 2, name: "Cougar", latinName: "Puma concolor", image: "cougar.jpg" },
  { id: 3, name: "Jaguar", latinName: "Panthera onca", image: "jaguar.jpg" },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "leopard.jpg",
  },
  { id: 5, name: "Lion", latinName: "Panthera leo", image: "lion.jpg" },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "snow_leopard.jpg",
  },
  { id: 7, name: "Tiger", latinName: "Panthera tigris", image: "tiger.jpg" },
];

function BigCats() {
  const [cats, setCats] = useState(initialCats);

  const addCat = (cat) => {
    const newCat = { ...cat, id: cats.length + 1 }; // Generate a new id
    setCats([...cats, newCat]);
  };

  const deleteCat = (id) => {
    const filteredCats = cats.filter((cat) => cat.id !== id);
    setCats(filteredCats);
  };

  const sortCats = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const reverseCats = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  const filterPanthera = () => {
    const filteredCats = initialCats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setCats(filteredCats);
  };

  const resetCats = () => {
    setCats(initialCats);
  };

  return (
    <div>
      <AddCatForm addCat={addCat} />
      <button onClick={sortCats}>Sort Alphabetically</button>
      <button onClick={reverseCats}>Reverse Order</button>
      <button onClick={filterPanthera}>Filter Panthera Family</button>
      <button onClick={resetCats}>Reset List</button>
      {cats.map((cat) => (
        <SingleCat key={cat.id} cat={cat} deleteCat={() => deleteCat(cat.id)} />
      ))}
    </div>
  );
}

export default BigCats;
