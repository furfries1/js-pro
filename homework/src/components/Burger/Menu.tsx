import React, { FC, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import Light from "src/images/light-theme.svg";
import Dark from "src/images/dark-theme.svg";
import LightActive from "src/images/light-theme-active.svg";
import DarkActive from "src/images/dark-theme-active.svg";
import { useOnClickOutside } from "src/hooks/useOutsideClick";

interface IMenu {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Menu: FC<IMenu> = ({ isOpen, setIsOpen}) => {
  const dispatch = useDispatch();
  const theme = useSelector(({ theme }) => theme);
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => {
    if(isOpen) {
      setTimeout(() => setIsOpen(false), 250) 
    }
  });
  return (
    <div className={`menu ${isOpen ? "" : "hidden"}`} ref={menuRef}>
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
                src={theme === "dark" ? DarkActive : Dark}
                alt="dark"
                className="dark-theme"
                onClick={() =>
                  dispatch({ type: "TOGGLE_THEME", payload: "dark" })
                }
              />
            </div>
            <div>
              <img
                src={theme === "light" ? LightActive : Light}
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
