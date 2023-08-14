import React from "react";

const Burger = () => {
  const onBurgerClick = (str: string, num: number) => {
    return console.log(`${str + num}`);
  };
  return (
    <div className="burger">
      <div onClick={() => onBurgerClick("click", 1)}>☰</div>
    </div>
  );
};

export default Burger;
