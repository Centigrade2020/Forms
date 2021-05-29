import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <h1 className="logo">Forms</h1>
        <div className="profile">
          <p className="profile-name">Your Name</p>
          <div className="profile-pic-container">
            <img src="" alt="" />
          </div>
        </div>
      </nav>
      <div className="line"></div>
    </div>
  );
}

export default NavBar;
