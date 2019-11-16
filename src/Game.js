import React, { Component } from "react";
import Dice from "./Dice";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem;
  background: #3f6fc2;
  height: 720px;
`;

const Button = styled.button`
  position: relative;
  font-size: 24px;
  background-color: #f39c12;
  border: none;
  padding: 20px;
  width: 200px;
  color: white;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #97b1bf;
    color: #000;
  }
`;

const Div = styled.div`
  align-self: center;
  max-width: 80%;
`;
const DiceDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  flex-wrap: wrap;
`;

const Title = styled.p`
  font-size: 50px;
  color: #f04e3e;
  padding-top: 50px;
  margin: 0;
`;
const Instructions = styled.h3`
  color: white;
  width: 70%;
  text-align: center;
`;
const BoxText = styled.h4`
  color: white;
  width: 90%;
  text-align: center;
`;
const NumberBox = styled.div`
  background-color: #16a086;
  border: solid #3f6fc2 1px;
  margin: 0;
  display: inherit;
  padding: 10px;
  width: 70px;
  height: 70px;
  align-items: center;
`;
class Game extends Component {
  constructor() {
    super();

    this.state = {
      rolledNumbers: [0, 0, 0, 0, 0, 0],
      diceNumber: 0,
      isWinner: false,
      winnerNumber: 0
    };
    // Preserve/Clone initial state of component in a new object.
    this.defaultState = { ...this.state };
  }

  getRandomNumber = () => {
    const min = 1;
    const max = 6;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // create a copy of the array to pass to state and add count to the index.
    const newArray = [...this.state.rolledNumbers];
    newArray[randomNumber - 1]++;
    console.log(newArray);
    this.setState(
      {
        diceNumber: randomNumber,
        rolledNumbers: [...newArray]
      },
      () => {
        this.checkNumber();
      }
    );
  };

  checkNumber = () => {
    console.log("checking for winner...");
    const winner = this.state.rolledNumbers.findIndex(number => {
      return number === 5;
    });
    console.log(winner);
    const winnerNumber = winner + 1;
    if (winnerNumber && winner !== -1) {
      this.setState({ isWinner: true, winnerNumber: winnerNumber });
    }
  };

  resetGame = () => {
    this.setState(this.defaultState);
  };

  render() {
    return (
      <Main>
        <Div>
          <TitleDiv>
            <Title>Dicey McDiceface</Title>
          </TitleDiv>
          {this.state.isWinner ? (
            <Div>
              <TitleDiv>
                <Instructions>
                  <h1>Number {this.state.winnerNumber} has won!</h1>
                  <h2>Game Over!</h2>
                </Instructions>
              </TitleDiv>
              <TitleDiv>
                <Button onClick={this.resetGame}>Play again!</Button>
              </TitleDiv>
            </Div>
          ) : (
            <Div>
              <TitleDiv>
                <Instructions>
                  Welcome: To play Click The "Roll Dice" button and Hopefully
                  your favorite dice number will Win!
                </Instructions>
              </TitleDiv>
              <TitleDiv>
                {this.state.rolledNumbers.map((number, i) => {
                  return (
                    <NumberBox>
                      <BoxText>
                        Side #{i + 1}: {number}
                      </BoxText>
                    </NumberBox>
                  );
                })}
              </TitleDiv>
              <TitleDiv>
                <Button onClick={this.getRandomNumber}>Roll Dice</Button>
              </TitleDiv>
            </Div>
          )}
        </Div>
        <DiceDiv>
          <Dice number={this.state.diceNumber} />
        </DiceDiv>
      </Main>
    );
  }
}

export default Game;
