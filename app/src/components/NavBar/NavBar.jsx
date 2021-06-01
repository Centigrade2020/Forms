import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import fb from "../../services/firebase";
import Symbols from "../Symbols";
import ProfileTab from "../ProfileTab";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [username, setUsername] = useState("");
  const history = useHistory();

  useEffect(() => {
    const uid = localStorage.getItem("userId");
    var docRef = fb.firestore.collection("users").doc(uid);

    docRef.get().then((doc) => {
      setUsername(doc.data().UserName);
    });
  }, []);

  return (
    <div className="nav-container">
      <nav>
        <h1
          className="logo"
          onClick={() => {
            history.push("/");
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
          <p className="profile-name">{username}</p>
          <Symbols.Profile fill="#c5c6c7" size="40" />
        </div>
        <ProfileTab />
      </nav>

      <div className="line"></div>
    </div>
  );
}

export default NavBar;
