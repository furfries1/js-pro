import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import Post from "../Post/Post";
import { useOnClickOutside } from "src/hooks/useOutsideClick";

const PostModal = () => {
  const posts = useSelector(({ posts }) => posts);
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  const modalPost = useSelector(({ modalPost }) => modalPost);
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, () => {
    if (modalInfo.isOpen) {
      setTimeout(
        () =>
          dispatch({ type: "TOGGLE_MODAL", payload: "" }) &&
          dispatch({ type: "SET_MODAL_POST", payload: [] }),
        150
      );
    }
  });
  return (
    <div className="modal" ref={modalRef}>
      {<Post post={modalPost} size="modal" />}
    </div>
  );
};

export default PostModal;
