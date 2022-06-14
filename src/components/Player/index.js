import React, { Component, PropTypes, useEffect } from "react";
import { UP, DOWN, LEFT, RIGHT } from "../../helpers/constants";
import Square from "../Square";

// class Player extends Component {
//     handleKeyDown = (e) => {
//         let newDirection;

//         switch(e.keyCode) {
//             case 37:
//                 newDirection = { top: 0, left: -1 , dir: LEFT};
//                 break;
//             case 38:
//                 newDirection = { top: -1, left: 0 , dir: UP};
//                 break;
//             case 39:
//                 newDirection = { top: 0, left: 1, dir: RIGHT};
//                 break;
//             case 40:
//                 newDirection = { top: 1, left: 0, dir: DOWN };
//                 break;
//             default:
//                 return;
//         }

//         this.props.handlePlayerMovement(newDirection);
//     }

//     render() {
//         const { size, position: { top, left }} = this.props;

//         return (
//             <div ref={ n => { this.player = n }} >
//                 <Square
//                     size={size}
//                     position={{ top, left }}
//                     color='darkgray' />
//             </div>

//         );
//     }

//     componentDidMount() {
//         window.onkeydown = this.handleKeyDown;
//     }
// }

const Player = ({ size, position, handlePlayerMovement }) => {
  const { top, left } = position;
  const handleKeyDown = (e) => {
    let newDirection;

    switch (e.keyCode) {
      case 37:
        newDirection = { top: 0, left: -1, dir: LEFT };
        break;
      case 38:
        newDirection = { top: -1, left: 0, dir: UP };
        break;
      case 39:
        newDirection = { top: 0, left: 1, dir: RIGHT };
        break;
      case 40:
        newDirection = { top: 1, left: 0, dir: DOWN };
        break;
      default:
        return;
    }
    handlePlayerMovement(newDirection);
  };
  useEffect(() => {
    window.onkeydown = handleKeyDown;
  });

  return (
    <div
    //   ref={(n) => {
    //     player = n;
    //   }}
    >
      <Square size={size} position={{ top, left }} color="darkgray" />
    </div>
  );
};

export default Player;
