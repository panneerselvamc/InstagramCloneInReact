import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

function Story(props) {
  const { name, profileImage } = props.story;
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} image={profileImage} />
      <span className="accountName">{name}</span>
    </div>
  );
}

export default Story;
