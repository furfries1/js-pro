import React, { useEffect, useState } from "react";
import { IPosts } from "src/types/types";
import SelectedPost from "./SelectedPost/SelectedPost";
import { getPosts } from "src/helpers";
import './style.css'

const SelectedPostContainer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts(setPosts, 1)
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
