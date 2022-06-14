import React, { Component, PropTypes, useEffect } from "react";
import  Square  from "../Square";

const Enemy = (props) => {
  const {
    size,
    playerPosition,
    info: { top, left },
  } = props;

  useEffect(() => {
    const {
      size,
      playerPosition,
      info: { top, left },
    } = props;
console.log(playerPosition.left < left + size &&
    playerPosition.top < top + size &&
    playerPosition.left + size > left &&
    playerPosition.top + size > top);
    if (
      playerPosition.left < left + size &&
      playerPosition.top < top + size &&
      playerPosition.left + size > left &&
      playerPosition.top + size > top
    ) {
      props.onCollide();
    }
  });
  return <Square size={size} position={{ top, left }} color="firebrick" />;
    // return <div className="enemyburger">
    //     <Square size={size} position={{ top, left }} color="firebrick" />;
    // </div>
};

export default Enemy;
