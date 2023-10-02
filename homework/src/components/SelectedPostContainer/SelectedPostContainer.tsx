import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SelectedPost from "./SelectedPost/SelectedPost";
import "./style.css";
import PageTemplate from "../PageTemplate/PageTemplate";

const SelectedPostContainer = () => {
  const { id } = useParams<{ id: string }>();
  const selectedPost = useSelector(({ selectedPost }) => selectedPost);

  return (
    <PageTemplate title="Selected post">
      <div className="posts-container">
        {selectedPost && <SelectedPost post={selectedPost} size="selected" />}
      </div>
    </PageTemplate>
  );
};

export default SelectedPostContainer;
