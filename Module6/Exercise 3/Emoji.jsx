import React, { useState } from "react";

function Emoji() {
  const [happy, setHappy] = useState(true);

  return (
    <div>
      <span style={{ fontSize: "2rem" }}>{happy ? "😊" : "😢"}</span>
      <button onClick={() => setHappy(!happy)}>Change Mood</button>
    </div>
  );
}

export default Emoji;
