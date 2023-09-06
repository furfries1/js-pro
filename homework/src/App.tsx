import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SuccessSignIn from "./components/SignIn/SuccessSignIn/SuccessSignIn";
import SelectedPostContainer from "./components/SelectedPostContainer/SelectedPostContainer";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import SignUp from "./components/SignUp/SignUp";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import SearchResultsContainer from "./components/SearchResultsContainer/SearchResultsContainer";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SelectedPostContainer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/success" element={<SuccessSignIn />} />
        <Route path="/search" element={<SearchResultsContainer />} />        
      </Routes>
      {location.pathname === "/" && <Navigate to="/blog" />}
    </>
  );
}

export default App;
