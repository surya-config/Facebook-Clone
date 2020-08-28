import React from "react";
import "./StoryReel.css";
import Story from "./Story/Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=369&q=80"
        profileSrc="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        title="Nature"
      />
      <Story
        image="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        profileSrc="https://intellectwrite.com/wp-content/uploads/2020/07/be-mine.png"
        title="Nature"
      />
      <Story
        image="https://physicsworld.com/wp-content/uploads/2017/05/2017-05-16-Johnston-tracking.jpg"
        profileSrc="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
        title="Nature"
      />
      <Story
        image="https://images.unsplash.com/photo-1576083895015-17223a61998e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        profileSrc="https://images.unsplash.com/photo-1576083895015-17223a61998e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        title="Nature"
      />
    </div>
  );
}

export default StoryReel;
