import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  theme: "light",
  modalInfo: { isOpen: false, id: null },
  modalImgInfo: { isOpen: false, src: null },
  posts: [],
  searchValue: "",
  isLoading: false,
  tab: "all",
  // user: {
  //   username: "string",
  //   email: "user@example.com",
  //   id: 0
  // }
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "TOGGLE_MODAL": {
      return {
        ...state,
        modalInfo: { isOpen: !state.modalInfo.isOpen, id: action.payload },
      };
    }
    case "TOGGLE_IMG_MODAL": {
      return {
        ...state,
        modalImgInfo: {
          isOpen: !state.modalImgInfo.isOpen,
          src: action.payload,
        },
      };
    }
    case "SET_POSTS": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "SET_SEARCH": {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case "SET_FAVORITE_POST": {
      return {
        ...state,
        posts: state.posts.map((post: { id: number; isFavorite?: boolean }) => {
          if (post.id === action.payload) {
            post = {
              ...post,
              isFavorite: !post.isFavorite,
            };
            return post;
          }
          return post;
        }),
      };
    }
    case "SET_TAB": {
      return {
        ...state,
        tab: action.payload,
      };
    }
    case "ADD_LIKE": {
      return {
        ...state,
        posts: state.posts.map((post: { id: number; likes?: number }) => {
          if (post.id === action.payload) {
            post = {
              ...post,
              likes: post.likes !== undefined ? post.likes + 1 : 1,
            };
            return post;
          }
          return post;
        }),
      };
    }
    case "REMOVE_LIKE": {
      return {
        ...state,
        posts: state.posts.map((post: { id: number; likes?: number }) => {
          if (post.id === action.payload) {
            post = {
              ...post,
              likes:
                post.likes !== undefined && post.likes > 0 ? post.likes - 1 : 0,
            };
            return post;
          }
          return post;
        }),
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
