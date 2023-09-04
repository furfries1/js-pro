import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageModal from "src/components/ImageModal/ImageModal";
import { IPost } from "src/types/types";

const SelectedPost = ({ post }: IPost) => {
  const dispatch = useDispatch();
  const modalImg = useSelector(({ modalImgInfo }) => modalImgInfo);
  const {
    date,
    title,
    image,
    text,
    description,
    lesson_num,
    author,
    size,
    id,
  } = post;
  return (
    <>
    <div className={`selected-post ${modalImg.isOpen ? "blur" : ""}`}>
      <div className="title-container">
        <div className="selected-post-date">{date}</div>
        <div className="selected-post-title">{title}</div>
      </div>
      <img
        src={image}
        alt="img"
        className="selected-post-img"
        onClick={() => dispatch({ type: "TOGGLE_IMG_MODAL", payload: image })}
      />
      <div className="selected-post-text">
        {" "}
        {text} {description} Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. In autem tempore reprehenderit ex sed aspernatur laudantium
        doloribus! Omnis iure, consectetur pariatur, quisquam ducimus veritatis
        aliquid, ipsam id libero quidem architecto? Eius dolor deserunt, modi
        quibusdam pariatur possimus. Possimus quo atque illo rem id, quasi sint,
        nihil delectus tempore perspiciatis earum illum, dignissimos suscipit
        ducimus explicabo veniam quae.
      </div>
      <div className="selected-post-footer">
        <div className="like-container">
          <div className="like"></div>
          <div className="dislike"></div>
        </div>
        <div className="fav"></div>
      </div>
      <div className="nav-container">
        <div className="prev"></div>
        <div className="next"></div>
      </div>
    </div>
    {modalImg.isOpen ? <ImageModal /> : null}
    </>
  );
};

export default SelectedPost;
