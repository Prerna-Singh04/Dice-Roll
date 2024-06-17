import PersonDiceRoll from "./component/personDiceRoll";
import RoleDice from "./component/roll-dice";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="routeContainer">
          <Link className="routeLinks" to="/">
            Home
          </Link>
          <Link className="routeLinks" to="/dice-game">
            Dice Game
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<RoleDice />} />
          <Route path="/dice-game" element={<PersonDiceRoll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
