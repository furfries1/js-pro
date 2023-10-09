import React, { FC } from "react";
import "./style.css";
import { IInput } from "src/types/types";

const Input: FC<IInput> = ({ label, placeholder, type, value, onChange }) => {
  return (
    <div className="input-container">
      <p className="input-label">{label}</p>
      <input
        placeholder={placeholder}
        type={type}
        className="input"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Input;
