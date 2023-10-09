import React, { FC, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Light from "src/images/light-theme.svg";
import Dark from "src/images/dark-theme.svg";
import LightActive from "src/images/light-theme-active.svg";
import DarkActive from "src/images/dark-theme-active.svg";
import { useOnClickOutside } from "src/hooks/useOutsideClick";
import { IMenu } from "src/types/types";

const Menu: FC<IMenu> = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector(({ theme }) => theme);
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 250);
    }
  });
  const logOut = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    dispatch({ type: "REMOVE_USER" });
    navigate("/signin");
  };
  return (
    <div className={`menu ${isOpen ? "" : "hidden"}`} ref={menuRef}>
      <nav className="navbar">
        <div className="nav-top">
          <Link to="#">user</Link>
          <Link to="/blog">home</Link>
          <Link to="/addpost">add post</Link>
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
          <div className="logout" onClick={() => logOut()}>
            {localStorage.getItem("access") ? "LOGOUT" : "SIGN IN"}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
