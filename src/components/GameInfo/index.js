import React, { PropTypes } from "react";

const style = () => {
  return {
    container: {
      textAlign: "center",
      padding: "1.5em 0"
    },
    info: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-around",
    },
  };
};

const GameInfo = ({
  timeElapsed,
  playerScore,
  highScore,
  globalHighScore = "Loading...",
}) => {
  const { container, info } = style();
  return (
    <div style={container}>
      <div style={info}>
        <p>Time: {timeElapsed}</p>
        <p>High Score: {highScore}</p>
        <p>Score: {playerScore}</p>
      </div>
    </div>
  );
};


export default GameInfo;
