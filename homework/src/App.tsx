import React, { useState, createContext } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SuccessSignIn from "./components/SignIn/SuccessSignIn/SuccessSignIn";
import SelectedPostContainer from "./components/SelectedPostContainer/SelectedPostContainer";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import PageTemplate from "./components/PageTemplate/PageTemplate";
import SignUp from "./components/SignUp/SignUp";
import SearchResultsContainer from "./components/SearchResultsContainer/SearchResultsContainer";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <PageTemplate
        title={`Search results for "${inputValue}"`}
        value={inputValue}
        setInputValue={setInputValue}
      >
        {/* <Blog /> */}
        {/* <SelectedPostContainer /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <SuccessSignIn /> */}
        <SearchResultsContainer value={inputValue} />
      </PageTemplate>
    </div>
  );
}

export default App;
