import React, { FC, useState } from "react";
import "./style.css";

interface IInput {
  label: string;
  placeholder: string;
  type: "password" | "text";
  value: string;
  onChange: (value: string) => void;
}

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
