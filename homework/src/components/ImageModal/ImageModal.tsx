import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { useOnClickOutside } from "src/hooks/useOutsideClick";

const ImageModal = () => {
  const dispatch = useDispatch();
  const modalImg = useSelector(({ modalImgInfo }) => modalImgInfo);
  const modalImgRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalImgRef, () => {
    if (modalImg.isOpen) {
      setTimeout(() => dispatch({ type: "TOGGLE_IMG_MODAL" }), 150);
    }
  });
  return (
    <div className="img-modal" ref={modalImgRef}>
      <div
        className="close-img-modal"
        onClick={() => dispatch({ type: "TOGGLE_IMG_MODAL" })}
      >
        ✖
      </div>
      <img src={modalImg.src} alt="modal-pic" />
    </div>
  );
};

export default ImageModal;
