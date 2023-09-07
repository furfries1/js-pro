import React, { useEffect } from "react";
import "./style.css";
import Tab from "./Tab/Tab";
import { GET_POSTS } from "src/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const TabsContainer = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const posts = useSelector(({ posts }) => posts);
  const tab = useSelector(({ tab }) => tab);

  useEffect(() => {
    if (!posts.length) {
      dispatch(GET_POSTS());
    }
  }, []);
  return (
    <div className="tabs-container">
      <div className="tabs-section">
        <Link to="/blog">
          <Tab isActive={tab === "all"}>All</Tab>
        </Link>
        <Link to="/favorite">
          <Tab isActive={tab === "favorite"}>My Favourites</Tab>
        </Link>
        <Tab>Popular</Tab>
      </div>
    </div>
  );
};

export default TabsContainer;
