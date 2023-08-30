import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SuccessSignIn from "./components/SignIn/SuccessSignIn/SuccessSignIn";
import SelectedPostContainer from "./components/SelectedPostContainer/SelectedPostContainer";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import SignUp from "./components/SignUp/SignUp";
import { getPosts } from "./helpers";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { IPosts, IPostsContext } from "./types/types";

export const PostsContext = createContext<IPostsContext>({ posts: [] });

function App() {
  const [posts, setPosts] = useState<IPosts[]>([]);
  useEffect(() => {
    getPosts(setPosts, 12);
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <PostsContext.Provider value={{ posts }}>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SelectedPostContainer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/success" element={<SuccessSignIn />} />
          <Route path="/success" element={<SuccessSignIn />} />
        </Routes>
        {location.pathname === "/" && <Navigate to="/blog" />}
      </PostsContext.Provider>
    </>
  );
}

export default App;
