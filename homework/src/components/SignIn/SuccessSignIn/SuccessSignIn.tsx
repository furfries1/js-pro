import React from "react";
import PageTemplate from "../../PageTemplate/PageTemplate";
import "./style.css";
import { Link } from "react-router-dom";

const SuccessSignIn = () => {
  return (
    <PageTemplate title="Success">
    <div className="succes-wrapper">
      <p>
        Email confirmed <br />
        Your registration is now completed!
      </p>
      <Link to='/blog'><button className="home-button">Go to home</button></Link>
    </div>
    </PageTemplate>
  );
};

export default SuccessSignIn;
