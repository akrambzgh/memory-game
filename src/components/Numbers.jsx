/* eslint-disable react/prop-types */

import { useState, useRef } from "react";
import NumberCard from "./NumberCard";
import Confetti from "react-confetti";

function Numbers() {
  const [numbers, setNumbers] = useState(
    [
      { id: 0, status: "", num: 0 },
      { id: 0, status: "", num: 0 },
      { id: 1, status: "", num: 1 },
      { id: 1, status: "", num: 1 },
      { id: 2, status: "", num: 2 },
      { id: 2, status: "", num: 2 },
      { id: 3, status: "", num: 3 },
      { id: 3, status: "", num: 3 },
      { id: 4, status: "", num: 4 },
      { id: 4, status: "", num: 4 },
      { id: 5, status: "", num: 5 },
      { id: 5, status: "", num: 5 },
      { id: 6, status: "", num: 6 },
      { id: 6, status: "", num: 6 },
      { id: 7, status: "", num: 7 },
      { id: 7, status: "", num: 7 },
    ].sort(() => Math.random() - 0.5)
  );
  const [isWin, setIsWin] = useState(false);
  let [movesCount, setMovesCount] = useState(0);
  const [previousNumberState, setPreviousNumberState] = useState(-1);

  const previousIndex = useRef(-1);

  const matchCheck = (currentNumber) => {
    if (numbers[currentNumber].id === numbers[previousNumberState].id) {
      numbers[previousNumberState].status = "active matched";
      numbers[currentNumber].status = "active matched";
      setPreviousNumberState(-1);
    } else {
      numbers[currentNumber].status = "active";
      setNumbers([...numbers]);
      setTimeout(() => {
        setPreviousNumberState(-1);
        numbers[currentNumber].status = "unmatch";
        numbers[previousNumberState].status = "unmatch";
        setNumbers([...numbers]);
      }, 1000);
    }
  };

  const changePair = () => {
    setNumbers(
      [
        { id: 0, status: "", num: 0 },
        { id: 0, status: "", num: 0 },
        { id: 1, status: "", num: 1 },
        { id: 1, status: "", num: 1 },
        { id: 2, status: "", num: 2 },
        { id: 2, status: "", num: 2 },
        { id: 3, status: "", num: 3 },
        { id: 3, status: "", num: 3 },
        { id: 4, status: "", num: 4 },
        { id: 4, status: "", num: 4 },
        { id: 5, status: "", num: 5 },
        { id: 5, status: "", num: 5 },
        { id: 6, status: "", num: 6 },
        { id: 6, status: "", num: 6 },
        { id: 7, status: "", num: 7 },
        { id: 7, status: "", num: 7 },
        { id: 8, status: "", num: 8 },
        { id: 8, status: "", num: 8 },
        { id: 9, status: "", num: 9 },
        { id: 9, status: "", num: 9 },
        { id: 10, status: "", num: 10 },
        { id: 10, status: "", num: 10 },
        { id: 11, status: "", num: 11 },
        { id: 11, status: "", num: 11 },
        { id: 12, status: "", num: 12 },
        { id: 12, status: "", num: 12 },
        { id: 13, status: "", num: 13 },
        { id: 13, status: "", num: 13 },
        { id: 14, status: "", num: 14 },
        { id: 14, status: "", num: 14 },
        { id: 15, status: "", num: 15 },
        { id: 15, status: "", num: 15 },
      ].sort(() => Math.random() - 0.5)
    );
  };

  const checkWinCondition = () => {
    return numbers.every((Number) => Number.status === "active matched");
  };

  const clickhandler = (index) => {
    if (index !== previousIndex.current) {
      if (numbers[index].status === "active matched") {
        alert("already matched");
      } else {
        if (previousNumberState === -1) {
          setMovesCount((prevMovesCount) => prevMovesCount + 1);
          previousIndex.current = index;
          numbers[index].status = "active";
          setNumbers([...numbers]);
          setPreviousNumberState(index);
        } else {
          matchCheck(index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert("Number currently seleted");
    }
    console.log(movesCount);

    if (checkWinCondition()) {
      setIsWin(true);
    }
  };

  let numbersEle = numbers.map((numbers, index) => {
    return (
      <NumberCard
        key={index}
        numbers={numbers}
        index={index}
        clickhandler={clickhandler}
      />
    );
  });

  return (
    <div className="container">
      <h1>Memory Game | Test Your Mind</h1>
      <div className="grid">
        {numbersEle}
        {isWin && <Confetti />}
      </div>
      <div className="add-ons">
        <div className="number-moves">
          <span>Moves</span> <h1>{movesCount}</h1>
        </div>
        <button className="change-pair" onClick={changePair}>
          change to 32
        </button>
      </div>
    </div>
  );
}

export default Numbers;
