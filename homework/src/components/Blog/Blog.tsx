import React, { useEffect } from "react";
import { IPosts } from "src/types/types";
import "./style.css";
import Post from "../Post/Post";
import TabsContainer from "../Tabs/TabsContainer";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "../PostModal/PostModal";

const Blog = () => {
  const dispatch = useDispatch();
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  const posts = useSelector(({ posts }) => posts);
  useEffect(() => {
    dispatch({ type: "SET_TAB", payload: "all" });
  }, []);
  return (
    <>
      <PageTemplate title="Blog">
        <TabsContainer />
        {!!posts.length && (
          <div className={`blog-container ${modalInfo.isOpen ? "blur" : ""}`}>
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
        )}
        <div className="nav-container">
          <div className="prev"></div>
          <div className="next"></div>
        </div>
        {modalInfo.isOpen && <PostModal />}
      </PageTemplate>
    </>
  );
};

export default Blog;
