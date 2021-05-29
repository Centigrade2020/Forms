import "./NavBar.css";
import { Profile } from "../Symbols";

function NavBar() {
  const name = "Dharun";

  return (
    <div className="nav-container">
      <nav>
        <h1 className="logo">Forms</h1>
        <div className="profile">
          <p className="profile-name">{name}</p>
          <Profile fill="#c5c6c7" size="40" />
        </div>
      </nav>
      <div className="line"></div>
    </div>
  );
}

export default NavBar;
