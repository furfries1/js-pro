import React from "react";
import { IPosts } from "src/types/types";
import Post from "../Post/Post";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useSelector } from "react-redux";

const SearchResultsContainer = () => {
  const posts = useSelector(({ posts }) => posts);
  const searchValue = useSelector(({ searchValue }) => searchValue);
  let searchPosts = posts.filter((e: IPosts) =>
    e.title.toLowerCase().includes(searchValue)
  );
  return (
    <>
      <PageTemplate title={`Search results for '${searchValue}'`}>
        {searchValue.length >= 2
          ? searchPosts.map((post: IPosts) => (
              <Post key={post.id} post={post} size="search" />
            ))
          : null}
      </PageTemplate>
    </>
  );
};

export default SearchResultsContainer;
