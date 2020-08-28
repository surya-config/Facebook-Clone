import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender.js/MessageSender";
import Posts from "./Posts/Posts";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Posts />
    </div>
  );
}

export default Feed;
