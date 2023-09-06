import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {
  theme: "light",
  modalInfo: { isOpen: false, id: null },
  modalImgInfo: {isOpen: false, src: null},
  posts: [],
  searchValue: '',
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
        modalImgInfo: { isOpen: !state.modalImgInfo.isOpen, src: action.payload },
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
    // case "ADD_LIKE": {
    //   return {
    //     ...state,
    //     posts: state.posts.map((post: { id: number; likes?: number }) => {
    //       if (post.id === action.payload) {
    //         // post.likes ? post.likes++ : (post.likes = 0);
    //         post = {
    //           ...post,
    //           likes: post.likes !== undefined && post.likes > 0 ? post.likes + 1 : 0,
    //         };
    //         return post;
    //       }
    //       return post;
    //     }),
    //   };
    // }
    // case "REMOVE_LIKE": {
    //   return {
    //     ...state,
    //     posts: state.posts.map((post: { id: number; likes?: number }) => {
    //       if (post.id === action.payload) {
    //         // post.likes ? post.likes++ : (post.likes = 0);
    //         post = {
    //           ...post,
    //           likes: post.likes !== undefined && post.likes > 0 ? post.likes - 1 : 0,
    //         };
    //         return post;
    //       }
    //       return post;
    //     }),
    //   };
    // }
    default:
      return state;
  }
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;
