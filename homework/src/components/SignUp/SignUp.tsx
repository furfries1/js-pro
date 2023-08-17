import React, { useState } from "react";
import Input from "../Input/Input";
import "./style.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <form>
      <Input
        value={name}
        onChange={setName}
        label="Name"
        placeholder="Your Name"
        type="text"
      />
      <Input
        value={email}
        onChange={setEmail}
        label="Email"
        placeholder="Your Email"
        type="text"
      />
      <Input
        value={password}
        onChange={setPassword}
        label="Password"
        placeholder="Your password"
        type="password"
      />
      <Input
        label="Confirm password"
        placeholder="Confirm password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
      />
      <button className="form-button">sign up</button>
    </form>
  );
};

export default SignUp;
