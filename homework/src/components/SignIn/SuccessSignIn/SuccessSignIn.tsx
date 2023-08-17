import React from "react";
import PageTemplate from "../../PageTemplate/PageTemplate";
import "./style.css";

const SuccessSignIn = () => {
  return (
    <div className="succes-wrapper">
      <p>
        Email confirmed <br />
        Your registration is now completed!
      </p>
      <button className="home-button">Go to home</button>
    </div>
  );
};

export default SuccessSignIn;
