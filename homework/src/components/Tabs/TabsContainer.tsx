import React, { useEffect } from "react";
import "./style.css";
import Tab from "./Tab/Tab";
import { GET_MY_POSTS, GET_POSTS } from "src/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const TabsContainer = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const posts = useSelector(({ posts }) => posts);
  const tab = useSelector(({ tab }) => tab);
  const sortBy = useSelector(({ sortBy }) => sortBy);
  const sortByMyPosts = useSelector(({ sortByMyPosts }) => sortByMyPosts);
  useEffect(() => {
    if (!posts.length) {
      dispatch(GET_POSTS(sortBy));
    }
  }, []);
  useEffect(() => {
    if (tab === "all") dispatch(GET_POSTS(sortBy));
    else if (tab === "myposts") dispatch(GET_MY_POSTS(sortByMyPosts));
  }, [sortBy, sortByMyPosts]);
  return (
    <div className="tabs-container">
      <div className="tabs-section">
        <Link to="/blog">
          <Tab isActive={tab === "all"}>All</Tab>
        </Link>
        <Link to="/favorite">
          <Tab isActive={tab === "favorite"}>My Favourites</Tab>
        </Link>
        {localStorage.getItem("access") ? (
          <Link to="/myposts">
            <Tab isActive={tab === "myposts"}>My Posts</Tab>
          </Link>
        ) : null}
      </div>
      {tab !== "favorite" ? (
        <div className="dropdown-section">
          <span>sorting:</span>
          <select
            name="dropdown"
            id="sort"
            className="dropdown"
            value={tab === "all" ? sortBy : sortByMyPosts}
            onChange={(e) =>
              tab === "all"
                ? dispatch({ type: "SET_SORT_BY", payload: e.target.value })
                : dispatch({
                    type: "SET_SORT_BY_MY_POSTS",
                    payload: e.target.value,
                  })
            }
          >
            <option value="">default</option>
            <option value="date">date</option>
            <option value="title">title</option>
            <option value="lesson_num">lesson</option>
            <option value="author">author</option>
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default TabsContainer;
