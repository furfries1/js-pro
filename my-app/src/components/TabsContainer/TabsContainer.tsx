import React from "react";
import Tab from "../Tab/Tab";
import "./style.css";

const TabsContainer = () => {
  return (
    <div className="tabs-container">
      <div className="tabs-title-container">
        <h4 className="tabs-title">Tabs</h4>
      </div>
      <div className="tabs-section">
        <Tab isActive>All</Tab>
        <Tab>My Favourites</Tab>
        <Tab>Popular</Tab>
      </div>
    </div>
  );
};

export default TabsContainer;
