import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "src/axiosConfig";
import { IAddPost, IUser } from "src/types/types";

export const GET_POSTS = (sortBy: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      instance.get(`/blog/posts/?limit=12&ordering=${sortBy}`).then((data) => {
        let posts = data.data.results;
        dispatch({ type: "SET_POSTS", payload: posts });
      });
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

export const GET_SELECTED_POST = (id: number, type: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      let responce = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/${id}`
      );
      let selectedPost = await responce.json();
      type === "selected"
        ? dispatch({ type: "SET_SELECTED_POST", payload: selectedPost })
        : dispatch({ type: "SET_MODAL_POST", payload: selectedPost });
      return selectedPost;
    } catch (err) {
      console.log(err);
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
      let refresh = data.refresh;
      if (access) {
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        navigate("/blog");
      }
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
      let token = localStorage.getItem("access");
      let getUserData = await fetch(
        "https://studapi.teachmeskills.by/auth/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

export const ADD_POST = ({
  image,
  text,
  lesson_num,
  title,
  description,
}: IAddPost) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    const newPost = new FormData();
    newPost.append("image", image);
    newPost.append("text", text);
    newPost.append("lesson_num", lesson_num.toString());
    newPost.append("title", title);
    newPost.append("description", description);
    try {
      instance
        .post(`/blog/posts/`, newPost, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => {});
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const SHOW_MORE_POSTS = (length: number, sortBy: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      instance
        .get(`/blog/posts/?limit=12&offset=${length}&ordering=${sortBy}`)
        .then((data) => {
          const newPosts = data.data.results;
          dispatch({ type: "ADD_POSTS", payload: newPosts });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const GET_MY_POSTS = (sortBy: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      instance
        .get(`/blog/posts/my_posts/?limit=10&ordering=${sortBy}`)
        .then((data) => {
          dispatch({ type: "SET_MY_POSTS", payload: data.data.results });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const SHOW_MORE_MY_POSTS = (length: number, sortBy: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      instance
        .get(
          `/blog/posts/my_posts/?limit=10&offset=${length}&ordering=${sortBy}`
        )
        .then((data) => {
          const newMyPosts = data.data.results;
          dispatch({ type: "ADD_MORE_MY_POSTS", payload: newMyPosts });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
