import { useHistory } from "react-router-dom";
import fb from "../../services/firebase";
import Symbols from "../Symbols";
import ProfileTab from "../ProfileTab";
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
        <div
          className="profile"
          onClick={() => {
            document
              .getElementById("profile-tab")
              .classList.toggle("profile-tab-active");
          }}
        >
          <p className="profile-name">{name}</p>
          <Symbols.Profile fill="#c5c6c7" size="40" />
        </div>
        <ProfileTab />
      </nav>

      <div className="line"></div>
    </div>
  );
}

export default NavBar;
