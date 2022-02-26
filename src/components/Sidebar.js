import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";

function Sidebar({ user }) {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username={user.userName}
          caption={user.fullName}
          urlText="Switch"
          iconSize="big"
          image={user.profileImage}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;
