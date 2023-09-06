export const GET_POSTS = () => {
  return async (dispatch: any) => {
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

