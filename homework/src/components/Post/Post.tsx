import React from "react";
import { IPost } from "src/types/types";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Fav from "src/images/fav.svg";
import FavActive from "src/images/fav-active.svg";
import Dots from "src/images/dots.svg";
import Like from "src/images/like.svg";
import Dislike from "src/images/dislike.svg";
import { GET_SELECTED_POST } from "src/actions/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Post = ({ post, size }: IPost) => {
  const { date, title, image, id, text, isFavorite, likes } = post;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  const posts = useSelector(({ posts }) => posts);
  const openModal = () => {
    if (!modalInfo.isOpen) {
      dispatch(GET_SELECTED_POST(Number(post.id), "modal"));
      location.pathname === "/blog/"
        ? dispatch({ type: "TOGGLE_MODAL", payload: "blog" })
        : dispatch({ type: "TOGGLE_MODAL", payload: "myposts" });
    } else {
      return;
    }
  };
  const openSelectedPost = () => {
    dispatch(GET_SELECTED_POST(Number(post.id), "selected"));
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className={`post-${size}`} onClick={() => openModal()}>
      <div className={`post-body-${size}`}>
        <div className={`post-description-${size}`}>
          <div className={`post-date-${size}`}>
            {date}{" "}
            {size === "modal" ? (
              <span
                className="close-modal"
                onClick={() => dispatch({ type: "TOGGLE_MODAL", payload: "" })}
              >
                ✖
              </span>
            ) : null}
          </div>
          <div className={`post-title-${size}`}>
            {title} <br />
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className={`post-img-${size}`}>
          <img src={image} alt="image" />
        </div>
        {modalInfo.id === id && modalInfo.isOpen && size === "modal" ? (
          <div>{text}</div>
        ) : null}
      </div>
      <div
        className={`post-footer-${size}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`like-container-${size}`}>
          <div
            className="like"
            onClick={() => dispatch({ type: "ADD_LIKE", payload: id })}
          >
            <img src={Like} alt="like" />
          </div>
          <span>{likes || 0}</span>
          <div
            className="dislike"
            onClick={() => dispatch({ type: "REMOVE_LIKE", payload: id })}
          >
            <img src={Dislike} alt="dislike" />
          </div>
        </div>
        <div className={`fav-container-${size}`}>
          <div
            className="fav"
            onClick={() => dispatch({ type: "SET_FAVORITE_POST", payload: id })}
          >
            <img src={isFavorite ? FavActive : Fav} alt="fav" />
          </div>
          <div className="dots" onClick={() => openSelectedPost()}>
            <img src={Dots} alt="dots" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
