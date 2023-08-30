import React, { FC } from "react";
import Burger from "../Burger/Burger";
import "./style.css";
import SearchIcon from "src/images/search-icon.svg";
import Person from "src/images/person.svg";
import { Link } from "react-router-dom";

interface IHeader {
  value: string;
  setInputValue: (value: string) => void;
}

const Header: FC<IHeader> = ({ value, setInputValue }) => {
  return (
    <header className="header">
      <Burger />
      <div className="search-container">
        <input
          type="text"
          placeholder="type to search..."
          className="search-input"
          value={value}
          onChange={(e) => setInputValue(e.currentTarget.value.toLowerCase())}
        />
        <img src={SearchIcon} alt="search" className="search-icon" />
      </div>
      <Link to='/signin'> <img src={Person} alt="person" className="person-icon" /> </Link>
    </header>
  );
};

export default Header;
