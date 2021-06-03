import { useHistory } from "react-router-dom";
import fb from "../../services/firebase";
import "./ProfileTab.css";

function ProfileTab() {
  const history = useHistory();
  const signout = () => {
    fb.auth.signOut();
    localStorage.clear();
    history.push("login");
  };

  return (
    <div className="profile-tab" id="profile-tab">
      <button onClick={signout}>Log Out</button>
    </div>
  );
}

export default ProfileTab;
