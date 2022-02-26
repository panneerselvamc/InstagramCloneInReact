import "../styles/stories.scss";
import Story from "./Story";
import HorizontalScroll from "react-scroll-horizontal";
import HttpService from "../http-service/HttpService";
import { useEffect, useState } from "react";
const service = new HttpService();
function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    service.get("/api/stories").then((res) => {
      setStories(res);
    });
  }, []);
  return (
    <div className="stories">
      <HorizontalScroll className="scroll" reverseScroll={true}>
        {stories.map((story, index) => (
          <Story key={index} story={story} />
        ))}
        {/* Next 3 lines has to removed once the DB has some more data - just added to have some <Story/> */}
        {stories.map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </HorizontalScroll>
    </div>
  );
}

export default Stories;
