import React, { useEffect } from "react";
import {
  Routes,
  Route,
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
import { decodeJwt, expToMinutes, updateAccessToken } from "./helpers";
import AddPost from "./components/AddPost/AddPost";
import MyPosts from "./components/MyPosts/MyPosts";

export let remainingMinutes: number;

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("access");
  const startTokenRefreshTimer = () => {
    if (!token) return null;
    const expirationTimestamp = decodeJwt(token).payload.exp;
    const currentTime = Date.now();
    const timeUntilExpiration = expirationTimestamp * 1000 - currentTime;

    if (timeUntilExpiration > 20000) {
      setInterval(updateAccessToken, timeUntilExpiration - 20000);
    } else {
      localStorage.removeItem("access");
    }
    if (token) {
      const JWTData = decodeJwt(token);
      let expTimestamp = JWTData.payload.exp;
      let remainingMinutes = expToMinutes(expTimestamp);
      console.log("remaining:" + remainingMinutes);
    }
  };

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      console.log(event);
      if (event.key === "access" && event.newValue === null) {
        navigate("/sign-in");
      }
    });
    startTokenRefreshTimer();
  }, []);

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
        <Route path="/myposts" element={<MyPosts />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="*" element={<Navigate to="/blog" />} />
      </Routes>
      {location.pathname === "/" && <Navigate to="/blog" />}
    </>
  );
}

export default App;
