import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import Light from "src/images/light-theme.svg";
import Dark from "src/images/dark-theme.svg";
import LightActive from "src/images/light-theme-active.svg";
import DarkActive from "src/images/dark-theme-active.svg";

interface IMenu {
  isOpen: boolean;
}

const Menu: FC<IMenu> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const theme = useSelector(({ theme }) => theme);
  return (
    <div className={`menu ${isOpen ? "" : "hidden"}`}>
      <nav className="navbar">
        <div className="nav-top">
          <Link to="#">User</Link>
          <Link to="/blog">home</Link>
          <Link to="#">add post</Link>
        </div>
        <div className="nav-bottom">
          <div className="toggle-theme">
            <div>
              <img
                src={theme === 'dark' ? DarkActive : Dark}
                alt="dark"
                className="dark-theme"
                onClick={() =>
                  dispatch({ type: "TOGGLE_THEME", payload: "dark" })
                }
              />
            </div>
            <div>
              <img
                src={theme === 'light' ? LightActive : Light}
                alt="light"
                className="light-theme"
                onClick={() =>
                  dispatch({ type: "TOGGLE_THEME", payload: "light" })
                }
              />
            </div>
          </div>
          <div className="logout">LOGOUT</div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
