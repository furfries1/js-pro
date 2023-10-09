import React, { useEffect } from "react";
import { IPosts } from "src/types/types";
import "./style.css";
import Post from "../Post/Post";
import TabsContainer from "../Tabs/TabsContainer";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "../PostModal/PostModal";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { SHOW_MORE_POSTS } from "src/actions/actions";
import { useNavigate } from "react-router-dom";
import instance from "src/axiosConfig";

const Blog = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  const posts = useSelector(({ posts }) => posts);
  const sortBy = useSelector(({ sortBy }) => sortBy);
  useEffect(() => {
    instance.get(`/blog/posts/?limit=12&ordering=${sortBy}`).then((data) => {
      let posts = data.data.results;
      dispatch({ type: "SET_POSTS", payload: posts });
      dispatch({ type: "SET_TAB", payload: "all" });
      sortBy === ""
        ? navigate(`/blog/?limit=12`)
        : navigate(`/blog/?limit=12&sortBy=${sortBy}`);
    });
  }, [sortBy]);
  const showMore = () => {
    dispatch(SHOW_MORE_POSTS(posts.length, sortBy));
  };
  return (
    <>
      <PageTemplate title="Blog">
        <TabsContainer />
        {!!posts.length && (
          <div className={`blog-container ${modalInfo.isOpen ? "blur" : ""}`}>
            <div>
              <div className="posts-grid">
                {posts.map((post: IPosts, i: number) => (
                  <div className="grid-item">
                    {i % 4 === 0 || i % 4 === 1 ? (
                      <Post key={post.id} post={post} size="big" />
                    ) : (
                      <Post key={post.id} post={post} size="small" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="nav-container">
          <button className="show-more" onClick={showMore}>
            show more
          </button>
        </div>
        {modalInfo.isOpen && modalInfo.type === "blog" && <PostModal />}
      </PageTemplate>
    </>
  );
};

export default Blog;
