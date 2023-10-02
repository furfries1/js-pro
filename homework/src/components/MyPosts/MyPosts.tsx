import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import TabsContainer from "../Tabs/TabsContainer";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { GET_MY_POSTS, SHOW_MORE_MY_POSTS } from "src/actions/actions";
import Post from "../Post/Post";
import { IPosts } from "src/types/types";
import PostModal from "../PostModal/PostModal";

const MyPosts = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const myPosts = useSelector(({ myPosts }) => myPosts);
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  const sortByMyPosts = useSelector(({ sortByMyPosts }) => sortByMyPosts);
  useEffect(() => {
    dispatch(GET_MY_POSTS(sortByMyPosts));
    dispatch({ type: "SET_TAB", payload: "myposts" });
  }, []);
  const showMore = () => {
    dispatch(SHOW_MORE_MY_POSTS(myPosts.length, sortByMyPosts));
  };
  return (
    <PageTemplate title="My Posts">
      <TabsContainer />
      <div className={`fav-posts ${modalInfo.isOpen ? "blur" : ""}`}>
        {myPosts.map((post: IPosts) => (
          <Post key={post.id} post={post} size="search" />
        ))}
      </div>
      <div className="nav-container">
        {myPosts.length > 9 ? (
          <button className="show-more" onClick={showMore}>
            show more
          </button>
        ) : null}
      </div>
      {modalInfo.isOpen && modalInfo.type === "myposts" && <PostModal />}
    </PageTemplate>
  );
};

export default MyPosts;
