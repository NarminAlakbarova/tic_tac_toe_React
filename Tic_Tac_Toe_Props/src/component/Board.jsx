import React, { useRef, useState } from "react";
const Board = ({
  data,
  value,
  setValue,
  winnerCount,
  setWinnerCount,
  handleReset,
}) => {
  const [lock, setLock] = useState(false);
  const titleRef = useRef();

  const handleToggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (!value) {
      e.target.innerHTML = "X";
      data[num] = "x";
      setValue(true);
    } else {
      e.target.innerHTML = "O";
      data[num] = "o";
      setValue(false);
    }
    calculateWinner();
  };
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        return handleLockFunc(data[a]);
      }
    }
    return null;
  }
  const handleLockFunc = (winner) => {
    setLock(true);
    winner == "x"
      ? ((titleRef.current.innerHTML = "Congratulations: X"),
        setWinnerCount({ ...winnerCount, x: (winnerCount.x += 1) }))
      : ((titleRef.current.innerHTML = "Congratulations: O"),
        setWinnerCount({ ...winnerCount, o: (winnerCount.o += 1) }));
  };
  const handleResetGame = () => {
    handleReset();
    titleRef.current.innerHTML = "Tic-Tac-Toe";
    setLock(false);
  };
  return (
    <div id="game-container">
      <div className="heading">
        <h2 className="text-center" ref={titleRef}>
          Tic-Tac-Toe
        </h2>

        <button onClick={handleResetGame}>Restart</button>
      </div>

      <div className="container">
        <div className="game-container">
          <div className="row">
            <div
              className="col-4 gamer-col"
              onClick={(e) => handleToggle(e, 0)}
            ></div>
            <div
              className="col-4 gamer-col"
              onClick={(e) => handleToggle(e, 1)}
            ></div>
            <div
              className="col-4 gamer-col"
              onClick={(e) => handleToggle(e, 2)}
            ></div>
          </div>
          <div className="row">
            <div
              className="col-4 gamer-col"
              onClick={(e) => handleToggle(e, 3)}
            ></div>
            <div
              className="col-4 gamer-col"
              onClick={(e) => handleToggle(e, 4)}
            ></div>
            <div
              className="col-4 gamer-col"
              onClick={(e) => handleToggle(e, 5)}
            ></div>
          </div>
          <div className="row last-row">
            <div
              className="col-4 gamer-col"
              onClick={(e) => handleToggle(e, 6)}
            ></div>
            <div
              className="col-4 gamer-col"
              onClick={(e) => handleToggle(e, 7)}
            ></div>
            <div
              className="col-4 gamer-col"
              onClick={(e) => handleToggle(e, 8)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
