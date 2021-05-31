import { useHistory } from "react-router-dom";
import Symbols from "../Symbols";
import "./NavBar.css";

function NavBar() {
  const name = "Dharun";
  const history = useHistory();

  return (
    <div className="nav-container">
      <nav>
        <h1
          className="logo"
          onClick={() => {
            history.push("");
          }}
        >
          Forms
        </h1>
        <div className="profile">
          <p className="profile-name">{name}</p>
          <Symbols.Profile fill="#c5c6c7" size="40" />
        </div>
      </nav>
      <div className="line"></div>
    </div>
  );
}

export default NavBar;
