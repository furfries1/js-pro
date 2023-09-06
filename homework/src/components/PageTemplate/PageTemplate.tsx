import React, { FC, ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

interface IPageTemplate {
  title: string;
  children: ReactNode;
}

const PageTemplate: FC<IPageTemplate> = ({ title, children }) => {
  const location = useLocation();
  const theme = useSelector(({ theme }) => theme);
  const isLoading = useSelector(({ isLoading }) => isLoading);
  return (
    <div className={`page-template ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <div className="title">{title}</div>
      <main className={` ${theme === "dark" ? "dark" : ""}`}>
        {location.pathname !== "/blog" && <Link to="/blog">Back to home</Link>}
        <div className="children-container">{isLoading ? <Loader /> : children}</div>
      </main>
      <footer className={` ${theme === "dark" ? "dark" : ""}`}>
        <span>2022</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
};

export default PageTemplate;
