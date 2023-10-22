import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Game from "./component/Board";
import LeftBar from "./component/LeftBar";

const App = () => {
  let initialData = ["", "", "", "", "", "", "", "", ""];
  const [data, setData] = useState(initialData);
  const [value, setValue] = useState(false);
  const [winnerCount, setWinnerCount] = useState({
    x: 0,
    o: 0,
  });
  const handleReset = () => {
    setData(initialData);
    setValue(false);
    const cells = document.querySelectorAll(".gamer-col");
    cells.forEach((cell) => {
      cell.innerHTML = "";
    });
  };

  return (
    <div className="tic-tac-toe-container">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Game
              data={data}
              setData={setData}
              value={value}
              setValue={setValue}
              winnerCount={winnerCount}
              setWinnerCount={setWinnerCount}
              handleReset={handleReset}
            />
          </div>
          <div className="col-4">
            <LeftBar winnerCount={winnerCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
