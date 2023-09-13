import React, { useState, createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SuccessSignIn from "./components/SignIn/SuccessSignIn/SuccessSignIn";
import SelectedPostContainer from "./components/SelectedPostContainer/SelectedPostContainer";
import Blog from "./components/Blog/Blog";
import SignUp from "./components/SignUp/SignUp";
import SearchResultsContainer from "./components/SearchResultsContainer/SearchResultsContainer";
import FavoritePosts from "./components/FavoritePosts/FavoritePosts";
import ActivateUser from "./components/ActivateUser/ActivateUser";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("access");
  return (
    <>
      <Routes>
        {!token && (
          <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/activate/:uid/:token" element={<ActivateUser />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/success" element={<SuccessSignIn />} />
          </>
        )}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SelectedPostContainer />} />
        <Route path="/search" element={<SearchResultsContainer />} />
        <Route path="/favorite" element={<FavoritePosts />} />
        <Route path="*" element={<Navigate to="/blog" />} />
      </Routes>
      {location.pathname === "/" && <Navigate to="/blog" />}
    </>
  );
}

export default App;
