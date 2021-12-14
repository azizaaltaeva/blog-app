import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./search.scss";

const Search = () => {
  const searchResults = useSelector(
    (state) => state.searchReducer.searchResults
  );

  return (
    <div className="search">
      {searchResults && searchResults.map((item) => (
        <Link to={`/blogs/${item.id}`}>
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Search;
