import React from "react";
import { IPost } from "src/types/types";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector  } from "react-redux";
import Fav from 'src/images/fav.svg'

const Post = ({ post, size }: IPost) => {
  const { date, title, image, id, text } = post;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  const openModal = () => {
    if (!modalInfo.isOpen) {
      dispatch({ type: "TOGGLE_MODAL", payload: id });
    }
    else {
      return;
    }
  };
  return (
    <div className={`post-${size}`} onClick={() => openModal()}>
      <div className={`post-body-${size}`}>
        <div className={`post-description-${size}`}>
          <div className={`post-date-${size}`}>
            {date}{" "}
            {modalInfo.id === id && modalInfo.isOpen && size === "modal" ? (
              <span
                className="close-modal"
                onClick={() => dispatch({ type: "TOGGLE_MODAL", payload: id })}
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
      <div className={`post-footer-${size}`}>
        <div className={`like-container-${size}`}>
          <div className="like"></div>
          <div className="dislike"></div>
        </div>
        <div className={`fav-container-${size}`}>
          <div className="fav" onClick={() => dispatch({ type: "SET_FAVORITE", payload: id })}><img src={Fav} alt="fav" /></div>
          <div
            className="dots"
            onClick={() => navigate(`/blog/${post.id}`)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
