import React, { useState } from "react";

function AddCatForm({ addCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCat({ name, latinName, image });
    setName("");
    setLatinName("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Latin Name</label>
        <input
          value={latinName}
          onChange={(e) => setLatinName(e.target.value)}
        />
      </div>
      <div>
        <label>Image</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;
