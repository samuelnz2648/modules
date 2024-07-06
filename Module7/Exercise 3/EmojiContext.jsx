// EmojiContext.jsx
import React, { createContext, useState, useContext } from "react";

const EmojiContext = createContext();

export const useEmoji = () => useContext(EmojiContext);

export const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState("😊");

  const changeEmoji = (newEmoji) => {
    setEmoji(newEmoji);
  };

  return (
    <EmojiContext.Provider value={{ emoji, changeEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};
