import React, { FC, ReactNode, useState } from "react";
import Header from "../Header/Header";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

interface IPageTemplate {
  title: string;
  children: ReactNode;
}

const PageTemplate: FC<IPageTemplate> = ({ title, children }) => {
  const [isDark, setIsDark] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  return (
    <div className={`page-template ${isDark ? "dark" : ""}`}>
      <Header value={inputValue} setInputValue={setInputValue} />
      <main>
        {location.pathname !== "/blog" && <Link to="/blog">Back to home</Link>}
        <div className="title-wrapper">
          <h1>{title}</h1>
          <button onClick={() => setIsDark((prevState) => !prevState)}>
            Toggle theme
          </button>
        </div>
        <div className="children-container">{children}</div>
      </main>
      <footer>
        <span>2022</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
};

export default PageTemplate;
