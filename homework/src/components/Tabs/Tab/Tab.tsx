import React from "react";
import { ITab } from "src/types/types";

const Tab = ({ children, isActive }: ITab) => {
  return <div className={isActive ? "tab-active" : "tab"}>{children}</div>;
};

export default Tab;
