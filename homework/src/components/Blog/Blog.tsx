import React, { useEffect, useState } from "react";
import { IPosts } from "src/types/types";
import "./style.css";
import Post from "../Post/Post";
import TabsContainer from "../Tabs/TabsContainer";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      await fetch("https://studapi.teachmeskills.by/blog/posts/?limit=12")
        .then((res) => res.json())
        .then((res) => {
          let data = res.results;
          setPosts(data);
        })
        .catch((err) => console.log(err.message));
    };
    getPosts();
  }, []);
  return (
    <>
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
    </>
  );
};

export default Blog;
