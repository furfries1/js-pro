import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  theme: "light",
  modalInfo: { isOpen: false, type: "" },
  modalImgInfo: { isOpen: false, src: null },
  posts: [],
  myPosts: [],
  searchValue: "",
  isLoading: false,
  tab: "all",
  user: {
    username: "",
    email: "",
    id: null,
    isActivated: false,
  },
  selectedPost: [],
  modalPost: [],
  sortBy: "",
  sortByMyPosts: "",
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
        modalInfo: { isOpen: !state.modalInfo.isOpen, type: action.payload },
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
    case "ADD_POSTS": {
      return {
        ...state,
        posts: [...state.posts.concat(action.payload)],
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
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_ACTIVATION": {
      return {
        ...state,
        user: { ...state.user, isActivated: true },
      };
    }
    case "SET_SELECTED_POST": {
      return {
        ...state,
        selectedPost: action.payload,
      };
    }
    case "SET_MODAL_POST": {
      return {
        ...state,
        modalPost: action.payload,
      };
    }
    case "SET_MY_POSTS": {
      return {
        ...state,
        myPosts: action.payload,
      };
    }
    case "REMOVE_USER": {
      return {
        ...state,
        user: {
          ...state.user,
          username: "",
          email: "",
          id: null,
          isActivated: false,
        },
      };
    }
    case "SET_SORT_BY": {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case "SET_SORT_BY_MY_POSTS": {
      return {
        ...state,
        sortByMyPosts: action.payload,
      };
    }
    case "ADD_MORE_MY_POSTS": {
      return {
        ...state,
        myPosts: [...state.myPosts.concat(action.payload)],
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
