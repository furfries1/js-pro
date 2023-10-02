import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { IPageTemplate } from "src/types/types";

const PageTemplate: FC<IPageTemplate> = ({ title, children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useSelector(({ theme }) => theme);
  const isLoading = useSelector(({ isLoading }) => isLoading);
  return (
    <div className={`page-template ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <div className="title">{title}</div>
      <main className={` ${theme === "dark" ? "dark" : ""}`}>
        {location.pathname !== "/blog/" &&
          location.pathname !== "/blog" &&
          location.pathname !== "/signin" &&
          location.pathname !== "/signup" && (
            <Link
              to="/blog"
              onClick={() => dispatch({ type: "SET_SEARCH", payload: "" })}
            >
              Back to home
            </Link>
          )}
        <div className="children-container">
          {isLoading ? <Loader /> : children}
        </div>
      </main>
      <footer className={` ${theme === "dark" ? "dark" : ""}`}>
        <span>2022</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
};

export default PageTemplate;
