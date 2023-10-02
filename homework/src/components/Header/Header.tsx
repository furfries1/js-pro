import React, { useEffect } from "react";
import Burger from "../Burger/Burger";
import "./style.css";
import SearchIcon from "src/images/search-icon.svg";
import Person from "src/images/person.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { GET_USER_DATA } from "src/actions/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Header = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const searchValue = useSelector(({ searchValue }) => searchValue);
  const user = useSelector(({ user }) => user);
  const token = localStorage.getItem("access");
  useEffect(() => {
    if (token) {
      dispatch(GET_USER_DATA());
    }
  }, []);
  return (
    <header className="header">
      <Burger />
      <div className="search-container">
        <input
          type="search"
          placeholder="type to search..."
          className="search-input"
          value={searchValue}
          onChange={(e) =>
            dispatch({
              type: "SET_SEARCH",
              payload: e.currentTarget.value.toLowerCase(),
            })
          }
        />
        <img src={SearchIcon} alt="search" className="search-icon" />
      </div>
      <Link to="/signup" className="username">
        {" "}
        <img src={Person} alt="person" className="person-icon" />{" "}
        <span>{user.username || null}</span>
      </Link>
      {searchValue.length >= 2 ? <Navigate to="/search" /> : null}
    </header>
  );
};

export default Header;
