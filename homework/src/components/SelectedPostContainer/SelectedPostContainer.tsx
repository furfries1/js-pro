import React, { useEffect, useState, useContext } from "react";
import { IPosts } from "src/types/types";
import SelectedPost from "./SelectedPost/SelectedPost";
import { getPosts } from "src/helpers";
import "./style.css";
import { useParams } from "react-router-dom";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useSelector } from "react-redux";

const SelectedPostContainer = () => {
  const { id } = useParams<{ id: string }>();
  const posts = useSelector(({posts}) => posts)

  return (
    <PageTemplate title='Selected post'>
    <div className="posts-container">
      {id && <SelectedPost post={posts[+id - 1]} size="selected" />}
    </div>
    </PageTemplate>
  );
};

export default SelectedPostContainer;
