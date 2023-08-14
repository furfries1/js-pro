import React, { ReactNode } from "react";

interface ITab {
  children: ReactNode;
  isActive?: boolean;
}

const Tab = ({ children, isActive }: ITab) => {
  return <div className={isActive ? "tab-active" : "tab"}>{children}</div>;
};

export default Tab;
