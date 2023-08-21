import React, { useState } from "react";
import Input from "../Input/Input";
import "./style.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form action="#">
      <Input
        label="Email"
        placeholder="Your Email"
        type="text"
        value={email}
        onChange={setEmail}
      />
      <Input
        value={password}
        onChange={setPassword}
        label="Password"
        placeholder="Your password"
        type="password"
      />
      <p className="reset-password">
        <a href="#">Forgot password?</a>
      </p>
      <button className="form-button">sign in</button>
      <p className="signup">
        Don't have an account? <a href="#">Sign Up</a>
      </p>
    </form>
  );
};

export default SignIn;
