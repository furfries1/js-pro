import React, { useEffect, useState, useContext } from "react";
import SelectedPost from "./SelectedPost/SelectedPost";
import "./style.css";
import { useParams } from "react-router-dom";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useSelector, useDispatch } from "react-redux";

const SelectedPostContainer = () => {
  const { id } = useParams<{ id: string }>();
  const posts = useSelector(({ posts }) => posts);
  const dispatch = useDispatch();
  dispatch({ type: "TOGGLE_MODAL", payload: id });
  return (
    <PageTemplate title="Selected post">
      <div className="posts-container">
        {id && posts.length && <SelectedPost post={posts[+id - 1]} size="selected" />}
      </div>
    </PageTemplate>
  );
};

export default SelectedPostContainer;
