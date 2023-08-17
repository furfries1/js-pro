import React from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SuccessSignIn from "./components/SignIn/SuccessSignIn/SuccessSignIn";
import SelectedPostContainer from "./components/SelectedPostContainer/SelectedPostContainer";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import PageTemplate from "./components/PageTemplate/PageTemplate";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <PageTemplate title="Title">
        {/* <Blog /> */}
        {/* <SelectedPostContainer /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <SuccessSignIn /> */}
      </PageTemplate>
    </div>
  );
}

export default App;
