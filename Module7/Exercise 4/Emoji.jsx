// Emoji.jsx
import React from "react";
import { useEmoji } from "./EmojiContext";

function Emoji() {
  const { emoji } = useEmoji();
  return <div>{emoji}</div>;
}

export default Emoji;
