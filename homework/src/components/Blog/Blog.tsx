import React, { useEffect, useState, useContext } from "react";
import { IPosts } from "src/types/types";
import "./style.css";
import Post from "../Post/Post";
import TabsContainer from "../Tabs/TabsContainer";
import { getPosts } from "src/helpers";
import PageTemplate from "../PageTemplate/PageTemplate";
import { PostsContext } from "src/App";


const Blog = () => {

  const { posts } = useContext(PostsContext);
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   getPosts(setPosts, 12)
  // }, []);
  return (
    <>
      <PageTemplate title="Blog">

      <TabsContainer />
      <div className="blog-container">
        <div className="big-posts">
          <div className="big-posts-left">
            {posts.slice(0, 3).map((post: IPosts) => (
              <Post key={post.id} post={post} size="big" />
            ))}
          </div>
          <div className="big-posts-right">
            {posts.slice(3, 6).map((post: IPosts) => (
              <Post key={post.id} post={post} size="big" />
            ))}
          </div>
        </div>
        <div className="small-posts">
          {posts.slice(6, 12).map((post: IPosts) => (
            <Post key={post.id} post={post} size="small" />
          ))}
        </div>
      </div>
      <div className="nav-container">
        <div className="prev"></div>
        <div className="next"></div>
      </div>
      </PageTemplate>
    </>
  );
};

export default Blog;
