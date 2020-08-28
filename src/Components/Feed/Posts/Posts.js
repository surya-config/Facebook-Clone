import React, { useState, useEffect } from "react";
import "./Posts.css";
import Post from "./Post/Post";
import db from "../../../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Posts;
