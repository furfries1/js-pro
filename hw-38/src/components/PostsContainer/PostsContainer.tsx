import React, { useState } from "react";
import Post from "../Post/Post";
import { IPosts } from "../../types/types";
import "./style.css";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [hideButton, setHideButton] = useState(false);
  async function fetchPosts() {
    await fetch("https://studapi.teachmeskills.by/blog/posts/?limit=10")
      .then((res) => res.json())
      .then((res) => {
        let data = res.results;
        setPosts(data);
      })
      .catch((err) => console.log(err.message));
  }
  const onButtonClick = () => {
    fetchPosts();
    setHideButton(true);
  };
  return (
    <div className="wrapper">
      <button
        onClick={() => onButtonClick()}
        className={hideButton ? "button-hidden" : "button"}
      >
        get posts
      </button>
      <div className="posts-container">
        {posts.map((post: IPosts) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsContainer;
