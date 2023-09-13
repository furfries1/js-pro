import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IUser } from "src/types/types";

export const GET_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let responce = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=30"
      );
      let jsonPosts = await responce.json();
      let posts = jsonPosts.results;
      dispatch({ type: "SET_POSTS", payload: posts });
      return posts;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const CREATE_USER = (payload: IUser) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      let user = data.results;
      dispatch({ type: "SET_USER", payload: user });
      return user;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const ACTIVATE_USER = (uid: string, token: string, navigate: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let responce = await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
        {
          method: "POST",
          body: JSON.stringify({ uid, token }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: "SET_ACTIVATION", payload: true });
      navigate("/success");
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const GET_SELECTED_POST = (id: number) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let responce = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/${id}`
      );
      let selectedPost = await responce.json();
      dispatch({ type: "SET_SELECTED_POST", payload: selectedPost });
      return selectedPost;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const SIGN_IN = (email: string, password: string, navigate: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/create/",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      let access = data.access;
      if (access) {
        localStorage.setItem("access", access);
        navigate("/blog");
      }
      
      let token = localStorage.getItem('access')
      // let getUserData = await fetch(
      //   "https://studapi.teachmeskills.by/auth/users/me",
      //   {
      //     headers: {
      //       "Authorization": `Bearer ${token}`,
      //     },
      //   }

      // );
      // let userData = await getUserData.json();
      // localStorage.setItem("username", userData.username);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const GET_USER_DATA = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      let token = localStorage.getItem('access')
      let getUserData = await fetch(
        "https://studapi.teachmeskills.by/auth/users/me",
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      let userData = await getUserData.json();
      dispatch({ type: "SET_USER", payload: userData });
    } catch (err) {
      console.log(err);
    }
  };
};
