import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

interface ITab {
  children: ReactNode;
  isActive?: boolean;
}

const Tab = ({ children, isActive }: ITab) => {
  const tab = useSelector(({ tab }) => tab);
  return <div className={isActive ? "tab-active" : "tab"}>{children}</div>;
};

export default Tab;
