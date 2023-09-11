import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageModal from "src/components/ImageModal/ImageModal";
import { IPost, IPosts } from "src/types/types";
import Like from "src/images/like.svg";
import Dislike from "src/images/dislike.svg";
import Fav from "src/images/fav.svg";
import FavActive from "src/images/fav-active.svg";

const SelectedPost = ({ post }: IPost) => {
  const dispatch = useDispatch();
  const modalImg = useSelector(({ modalImgInfo }) => modalImgInfo);
  const posts = useSelector(({ posts }) => posts);
  const { date, title, image, text, description, isFavorite, id, likes } = post;
  const selectedPosts = posts.filter((post: IPosts) => post.id === id);
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
          {text} {description} Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. In autem tempore reprehenderit ex sed aspernatur
          laudantium doloribus! Omnis iure, consectetur pariatur, quisquam
          ducimus veritatis aliquid, ipsam id libero quidem architecto? Eius
          dolor deserunt, modi quibusdam pariatur possimus. Possimus quo atque
          illo rem id, quasi sint, nihil delectus tempore perspiciatis earum
          illum, dignissimos suscipit ducimus explicabo veniam quae.
        </div>
        <div className="selected-post-footer">
          <div className="like-container">
            <div className="like">
              <img
                src={Like}
                alt="like"
                onClick={() => dispatch({ type: "ADD_LIKE", payload: id })}
              />
            </div>
            <span>{selectedPosts[0].likes || 0}</span>
            <div className="dislike">
              <img
                src={Dislike}
                alt="dislike"
                onClick={() => dispatch({ type: "REMOVE_LIKE", payload: id })}
              />
            </div>
          </div>
          <div
            className="fav"
            onClick={() => dispatch({ type: "SET_FAVORITE_POST", payload: id })}
          >
            <img
              src={selectedPosts[0].isFavorite ? FavActive : Fav}
              alt="fav"
            />
          </div>
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
