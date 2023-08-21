import React from "react";
import "./style.css";
import Tab from "./Tab/Tab";

const TabsContainer = () => {
  return (
    <div className="tabs-container">
      <div className="tabs-section">
        <Tab isActive>All</Tab>
        <Tab>My Favourites</Tab>
        <Tab>Popular</Tab>
      </div>
    </div>
  );
};

export default TabsContainer;
