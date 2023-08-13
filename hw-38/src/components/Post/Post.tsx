import React from "react";
import { IPost } from "../../types/types";
import "./style.css";

const Post = ({ post }: IPost) => {
  return (
    <div className="post">
      <div className="post-date">{post.date}</div>
      <div className="post-title">{post.title}</div>
      <img src={post.image} alt="img" className="post-img" />
      <div className="post-text"> {post.text} </div>
      <div className="author-container">
        <div className="post-lesson">Lesson: {post.lesson_num}</div>
        <div className="post-author">Author: {post.author}</div>
      </div>
    </div>
  );
};

export default Post;
