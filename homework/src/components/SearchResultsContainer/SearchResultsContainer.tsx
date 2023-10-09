import React, { useEffect, useState } from "react";
import { IPosts } from "src/types/types";
import Post from "../Post/Post";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useSelector } from "react-redux";
import instance from "src/axiosConfig";
import { useNavigate } from "react-router-dom";

const SearchResultsContainer = () => {
  const posts = useSelector(({ posts }) => posts);
  const searchValue = useSelector(({ searchValue }) => searchValue);
  const navigate = useNavigate();
  const [searchPosts, setSearchPosts] = useState<IPosts[]>([]);
  useEffect(() => {
    instance
      .get(`/blog/posts/?search=${searchValue}&limit=100`)
      .then((data) => {
        setSearchPosts(data.data.results);
      });
    if (!searchValue) navigate("/blog");
  }, [searchValue]);
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
