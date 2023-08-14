import React from "react";
import { IPost } from "../../types/types";
import "./style.css";

const Post = ({ post }: IPost) => {
  const { date, title, image, text, lesson_num, author } = post;
  return (
    <div className="post">
      <div className="post-date">{date}</div>
      <div className="post-title">{title}</div>
      <img src={image} alt="img" className="post-img" />
      <div className="post-text"> {text} </div>
      <div className="author-container">
        <div className="post-lesson">Lesson: {lesson_num}</div>
        <div className="post-author">Author: {author}</div>
      </div>
    </div>
  );
};

export default Post;
