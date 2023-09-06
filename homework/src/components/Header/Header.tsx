import React from "react";
import Burger from "../Burger/Burger";
import "./style.css";
import SearchIcon from "src/images/search-icon.svg";
import Person from "src/images/person.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(({ searchValue }) => searchValue);
  return (
    <header className="header">
      <Burger />
      <div className="search-container">
        <input
          type="text"
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
      <Link to="/signin">
        {" "}
        <img src={Person} alt="person" className="person-icon" />{" "}
      </Link>
      {searchValue.length >= 2 ? (
        <Navigate to="/search" />
      ) : null}
    </header>
  );
};

export default Header;
