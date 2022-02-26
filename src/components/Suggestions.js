import { useEffect, useState } from "react";
import HttpService from "../http-service/HttpService";
import "../styles/suggestions.scss";
import Profile from "./Profile";
const service = new HttpService();
function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    service.get("/api/suggestions").then((res) => {
      setSuggestions(res);
    });
  }, []);

  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      {suggestions.map((suggestion, index) => (
        <Profile
          key={index}
          username={suggestion.username}
          caption={`Followed By ${suggestion.followers[0]} + ${
            suggestion.followers.length - 1
          }`}
          urlText="Follow"
          iconSize="medium"
          captionSize="small"
          storyBorder={true}
          image={suggestion.profileImage}
        />
      ))}
    </div>
  );
}

export default Suggestions;
