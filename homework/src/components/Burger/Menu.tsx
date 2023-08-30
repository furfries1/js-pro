import React, { FC } from "react";
import "./style.css";
import { Link } from "react-router-dom";

interface IMenu {
  isOpen: boolean;
}

const Menu: FC<IMenu> = ({ isOpen }) => {
  return (
    <div className={`menu ${isOpen ? '': "hidden" }`}>
      <nav className="navbar">
        <div className="nav-top">
          <Link to="#">User</Link>
          <Link to="/blog">home</Link>
          <Link to="#">add post</Link>
        </div>
        <div className="nav-bottom">
            <div className="toggle-theme">
            {/* will be added using redux */}
                <span>TOGGLE THEME</span>  
            </div>
            <div className="logout">LOGOUT</div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
