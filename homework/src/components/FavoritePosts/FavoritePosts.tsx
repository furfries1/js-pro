import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IPosts } from "src/types/types";
import Post from "../Post/Post";
import PageTemplate from "../PageTemplate/PageTemplate";
import TabsContainer from "../Tabs/TabsContainer";
import "./style.css";

const FavoritePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts);
  useEffect(() => {
    dispatch({ type: "SET_TAB", payload: "favorite" });
  }, []);

  return (
    <PageTemplate title="Favorites">
      <TabsContainer />
      <div className="fav-posts">
        {posts
          .filter((post: IPosts) => post.isFavorite)
          .map((post: IPosts) => (
            <Post key={post.id} post={post} size="search" />
          ))}
      </div>
    </PageTemplate>
  );
};

export default FavoritePosts;
