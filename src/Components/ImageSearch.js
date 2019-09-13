import React, { useState } from "react";
import ImageItem from "./ImageItem";

const ImageSearch = props => {
  //* Local constants
  const CATEGORIES = [
    "fashion",
    "nature",
    "backgrounds",
    "science",
    "education",
    "people",
    "feelings",
    "religion",
    "health",
    "places",
    "animals",
    "industry",
    "food",
    "computer",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music"
  ];

  //* STATE
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //* Input handlers
  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelection = event => {
    setCategory(event.target.value);
  };

  //* Fetch images from Pixabay API
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch(
      `https://pixabay.com/api/?key=13136421-266c28a6d61717bc2e4e6a83e&q=${searchTerm}&category=${category}&per_page=10`
    );
    const json = await response.json();
    setSearchResults(json.hits);
  };

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Keyword..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        ></input>
        <select value={category} onChange={handleCategorySelection}>
          <option value="" disabled>
            Category...
          </option>
          {CATEGORIES.map(category => {
            return (
              <option key={category} value={category}>
                {category.toUpperCase()}
              </option>
            );
          })}
        </select>
        <button onClick={handleSubmit}>SEARCH</button>
      </form>
      {searchResults.length > 0
        ? searchResults.map(result => {
            return <ImageItem key={result.id} imageURL={result.webformatURL} />;
          })
        : null}
    </section>
  );
};

export default ImageSearch;
