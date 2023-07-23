import React, { createContext, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [disabled, setDisabled] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [shuffleLetters, setShuffleLetters] = useState(function () {});

  const [selectedLevel, setSelectedLevel] = useState("0");

  return (
    <TimerContext.Provider
      value={{
        disabled,
        gameStarted,
        shuffleLetters,
        selectedLevel,
        setDisabled,
        setGameStarted,
        setShuffleLetters,
        setSelectedLevel,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
