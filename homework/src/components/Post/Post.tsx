import React, { useEffect, useState } from "react";
import { IPost } from "src/types/types";
import "./style.css";

const Post = ({ post, size }: IPost) => {
  const { date, title, image } = post;
  return (
    <div className={`post-${size}`}>
      <div className={`post-body-${size}`}>
        <div className={`post-description-${size}`}>
          <div className={`post-date-${size}`}>{date}</div>
          <div className={`post-title-${size}`}>
            {title} <br />
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className={`post-img-${size}`}>
          <img src={image} alt="image" />
        </div>
      </div>
      <div className={`post-footer-${size}`}>
        <div className={`like-container-${size}`}>
          <div className="like"></div>
          <div className="dislike"></div>
        </div>
        <div className={`fav-container-${size}`}>
          <div className="fav"></div>
          <div className="dots"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
