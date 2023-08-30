import React, {useState} from "react";
import Menu from "./Menu";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onBurgerClick = () => {
    setIsOpen((prevState) => !prevState)
  };
  return (
    <div className="burger">
      <div onClick={() => onBurgerClick()}>{isOpen ? '✖' : '☰'}</div>
      <Menu isOpen={isOpen}/>
    </div>
  );
};

export default Burger;