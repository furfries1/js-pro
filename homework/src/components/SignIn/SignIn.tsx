import React, { useState } from "react";
import Input from "../Input/Input";
import "./style.css";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useDispatch } from "react-redux";
import { SIGN_IN } from "src/actions/actions";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  return (
    <PageTemplate title="Sign In">
      <form action="/success">
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

        <button
          className="form-button"
          onClick={() => dispatch(SIGN_IN(email, password, navigate))}
        >
          sign in
        </button>
        <p className="signup">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </PageTemplate>
  );
};

export default SignIn;
