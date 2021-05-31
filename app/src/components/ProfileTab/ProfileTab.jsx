import fb from "../../services/firebase";
import "./ProfileTab.css";

function ProfileTab() {
  const signout = () => {
    fb.auth.signOut();
  };

  return (
    <div className="profile-tab" id="profile-tab">
      <button onClick={signout}>Log Out</button>
    </div>
  );
}

export default ProfileTab;
