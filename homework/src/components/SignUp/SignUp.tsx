import React, { useState } from "react";
import Input from "../Input/Input";
import "./style.css";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useDispatch } from "react-redux";
import { CREATE_USER } from "src/actions/actions";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <PageTemplate title="Sign Up">
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
      {/* @ts-expect-error */}
      <button className="form-button" onClick={() => dispatch(CREATE_USER({username: name, email, password}))}>sign up</button>
    </form>
    </PageTemplate>
  );
};

export default SignUp;
