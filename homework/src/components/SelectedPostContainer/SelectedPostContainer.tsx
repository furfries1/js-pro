import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useParams } from "react-router-dom";

import SelectedPost from "./SelectedPost/SelectedPost";
import "./style.css";
import PageTemplate from "../PageTemplate/PageTemplate";


const SelectedPostContainer = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const { id } = useParams<{ id: string }>();
  const selectedPost = useSelector(({ selectedPost }) => selectedPost);
  useEffect(() => {
    dispatch({ type: "TOGGLE_MODAL", payload: id });
  }, []);

  return (
    <PageTemplate title="Selected post">
      <div className="posts-container">
        {selectedPost && <SelectedPost post={selectedPost} size="selected" />}
      </div>
    </PageTemplate>
  );
};

export default SelectedPostContainer;
