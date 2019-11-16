import styled, { keyframes } from "styled-components";

import React from "react";
import dice1 from "./images/dice-1.png";
import dice2 from "./images/dice-2.png";
import dice3 from "./images/dice-3.png";
import dice4 from "./images/dice-4.png";
import dice5 from "./images/dice-5.png";
import dice6 from "./images/dice-6.png";
import defaultDice from "./images/dice-target.png";

const Dice = props => {
  const spin = keyframes`
  from{
    transform: rotate(0 deg);
    filter: blur(50px);
  }
  to{
    transform: rotate(360deg);
    filter: blur(20px);
  }
`;

  let getDice;
  switch (props.number) {
    case 1:
      console.log("Is number 1");
      getDice = dice1;
      break;
    case 2:
      console.log("Is number 2");
      getDice = dice2;
      break;
    case 3:
      console.log("Is number 3");
      getDice = dice3;
      break;
    case 4:
      console.log("Is number 4");
      getDice = dice4;
      break;
    case 5:
      console.log("Is number 5");
      getDice = dice5;
      break;
    case 6:
      console.log("Is number 6");
      getDice = dice6;
      break;
    default:
      getDice = defaultDice;
      break;
  }
  const Dice = styled.img`
    display: absolute;
    width: 70%;
    height: 70%;
    transition: transform 1s;
    animation: ${spin} 1s;
  `;
  return <Dice src={getDice} />;
};

export default Dice;
