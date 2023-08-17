import React, { useEffect, useState } from "react";
import { IPosts } from "src/types/types";
import SelectedPost from "./SelectedPost/SelectedPost";
import './style.css'

const SelectedPostContainer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      await fetch("https://studapi.teachmeskills.by/blog/posts/?limit=1")
        .then((res) => res.json())
        .then((res) => {
          let data = res.results;
          setPosts(data);
        })
        .catch((err) => console.log(err.message));
    };
    getPosts();
  }, []);
  return (
    <div className="posts-container">
    {posts.map((post: IPosts) => (
      <SelectedPost key={post.id} post={post} size="selected"/>
    ))}
  </div>
  )
};

export default SelectedPostContainer;
