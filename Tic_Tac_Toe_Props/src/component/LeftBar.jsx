import React from "react";

const LeftBar = ({ winnerCount }) => {
  return (
    <div id="left-bar">
      <div className="container">
        <div className="left-bar">
          <div className="win-count">
            
            <h4>Winning Number</h4>

            <div className="elem">
            <p>  X :</p> <span>{winnerCount.x}</span>
            </div>
            <div className="elem">
            <p>  O :</p> <span>{winnerCount.o}</span>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
