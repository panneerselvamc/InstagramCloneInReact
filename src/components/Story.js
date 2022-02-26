import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";

function Story(props) {
  const { name, profileImage } = props.story;

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} image={profileImage} />
      <span className="accountName">{name}</span>
    </div>
  );
}

export default Story;
