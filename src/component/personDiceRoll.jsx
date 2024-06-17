import { useState } from "react";
import "./personDiceRoll.css";

const PersonDiceRoll = () => {
  const [diceRoleTern, setDiceRoleTern] = useState(true);

  const [playerDetails1, setPlayerDetails1] = useState({
    name: "Player1",
    total: 0,
    currentValue: 0,
    timesDiceRolled: 0,
  });

  const [playerDetails2, setPlayerDetails2] = useState({
    name: "Player1",
    total: 0,
    currentValue: 0,
    timesDiceRolled: 0,
  });

  const rollDice = (player) => {
    let currentValue = Math.floor(Math.random() * (6 - 1) + 1);
    if (playerDetails2.timesDiceRolled === 4) {
      if (playerDetails1.total > playerDetails2.total) {
        alert(` Winner is player 1`);
      } else if (playerDetails1.total < playerDetails2.total) {
        alert(` Winner is player 2`);
      } else {
        alert(`Both player have equal point`);
      }
      setPlayerDetails1(prev => ({...prev,
        currentValue:0,
        total:0,
        timesDiceRolled:0}))
        setPlayerDetails2(prev => ({...prev,
            currentValue:0,
            total:0,
            timesDiceRolled:0}))
    } else {
      if (playerDetails1.name === player) {
        let total = playerDetails1.total + currentValue;
        setPlayerDetails1((prev) => ({
          ...prev,
          currentValue,
          total,
          timesDiceRolled: playerDetails1.timesDiceRolled + 1,
        }));
      } else {
        let total = playerDetails2.total + currentValue;
        setPlayerDetails2((prev) => ({
          ...prev,
          currentValue,
          total,
          timesDiceRolled: playerDetails2.timesDiceRolled + 1,
        }));
      }
      setDiceRoleTern(!diceRoleTern);
    }
  };

  return (
    <div className="personDiceRollContainer">
      <h2 className="personDiceRollHead">Person Dice Roll</h2>
      <div className="playersContainer">
        <div className="playerContainer">
          <div className="playerProfile">
            <img className="profileAvatar" src={`/avatar1.png`} alt="Person1" />
            <h3 className="playerName">Person 1</h3>
          </div>
          <div className="playerGameDetailContainer">
            <div>
              {playerDetails1.currentValue ? (
                <img
                  width="100px"
                  height="100px"
                  className="currentDiceRollImg"
                  alt={`${playerDetails1.name}`}
                  src={`/dice/${playerDetails1.currentValue}.png`}
                  style={{ border: "1px solid" }}
                />
              ) : (
                ""
              )}
            </div>
            <p className="totalPoint">
              Total value :{" "}
              <span style={{ color: "blue" }}>{playerDetails1.total}</span>
            </p>
            <p className="currentPoint">
              current Value :{" "}
              <span style={{ color: "blue" }}>
                {playerDetails1.currentValue}
              </span>
            </p>
            {diceRoleTern === true ? (
              <button
                className="diceRollBtn"
                onClick={() => rollDice("Player1")}
              >
                Roll Dice
              </button>
            ) : (
              <button className="diceRollBtn" disabled>
                Roll Dice
              </button>
            )}
          </div>
        </div>
        <div className="playerContainer">
          <div className="playerProfile">
            <img
              className="profileAvatar"
              src={`/avatar2.jpeg`}
              alt="Person1"
            />
            <h3 className="playerName">Person 1</h3>
          </div>
          <div className="playerGameDetailContainer">
            <div>
              {playerDetails2.currentValue ? (
                <img
                  width="100px"
                  height="100px"
                  className="currentDiceRollImg"
                  alt={`${playerDetails2.name}`}
                  src={`/dice/${playerDetails2.currentValue}.png`}
                  style={{ border: "1px solid" }}
                />
              ) : (
                ""
              )}
            </div>

            <p className="totalPoint">
              Total value :{" "}
              <span style={{ color: "blue" }}>{playerDetails2.total}</span>
            </p>

            <p className="currentPoint">
              current Value :{" "}
              <span style={{ color: "blue" }}>
                {playerDetails2.currentValue}
              </span>
            </p>

            {diceRoleTern === false ? (
              <button
                className="diceRollBtn"
                onClick={() => rollDice("Player2")}
              >
                Roll Dice
              </button>
            ) : (
              <button className="diceRollBtn" disabled>
                Roll Dice
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDiceRoll;
