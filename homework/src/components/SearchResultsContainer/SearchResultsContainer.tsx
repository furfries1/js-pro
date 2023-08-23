import React, { useEffect, useState, FC } from "react";
import { IPosts } from "src/types/types";
import Post from "../Post/Post";
import { getPosts } from "src/helpers";

interface ISearchResults {
  value: string;
}

const SearchResultsContainer: FC<ISearchResults> = ({ value }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts(setPosts, 12);
  }, []);

  let searchPosts = posts.filter((e: IPosts) =>
    e.title.toLowerCase().includes(value)
  );

  return (
    <>
      {value.length >= 2
        ? searchPosts.map((post: IPosts) => (
            <Post key={post.id} post={post} size="search" />
          ))
        : null}
    </>
  );
};

export default SearchResultsContainer;
