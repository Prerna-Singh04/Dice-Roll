import { useState } from "react";
import styles from "./roleDice.module.css";

const RoleDice = () => {
  const [diceData, setDiceData] = useState([]);
  const [diceCount, setDiceCount] = useState(0);

  const handleClick = (e) => {
    setDiceCount(e.target.value);
  };

  const handleDiceFlip = () => {
    let arr = [];
    for (let i = 0; i < diceCount; i++) {
      let x = Math.floor(Math.random() * (6 - 1) + 1);
      arr.push(x);
    }
    setDiceData([...arr]);
  };

  return (
    <div className={styles.roleDiceContainer}>
      <h2 className={styles.heading}>Role dice</h2>
      <div>
        <input
          autoFocus
          type="number"
          onKeyUp={handleClick}
          defaultValue={diceCount}
          className={styles.inputBox}
          placeholder="Enter no of dice"
        />
        {diceCount === 0 ? (
          <button className={styles.flipDiceBtn} disabled>
            Dice flip
          </button>
        ) : (
          <button className={styles.flipDiceBtn} onClick={handleDiceFlip}>
            Dice flip
          </button>
        )}
      </div>
      <p className={styles.para}>
        No of dice flip : <span style={{ color: "purple" }}>{diceCount}</span>
      </p>
      <div className={styles.diceContainer}>
        {diceData &&
          diceData.map((elem, index) => {
            return (
              <div className={styles.diceImg}>
                <img
                  width={100}
                  key={index}
                  height="100px"
                  className="App-logo"
                  alt={`dice ${elem}`}
                  src={`/dice/${elem}.png`}
                  style={{ border: "1px solid" }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RoleDice;
