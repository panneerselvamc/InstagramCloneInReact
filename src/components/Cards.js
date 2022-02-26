import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";
import { useEffect, useState } from "react";
import HttpService from "../http-service/HttpService";

const service = new HttpService();
function Cards() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.get("/api/posts").then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <div className="cards">
      <Stories />
      {posts.map((post, index) => (
        <Card
          accountName={post.poster.username}
          storyBorder={post.hasStory}
          image={post.postImage}
          comments={post.comments}
          likedByText={post.recentLikeBy}
          likedByNumber={post.likesCount - 1}
          hours={post.timestamp}
        />
      ))}
    </div>
  );
}

export default Cards;
