import React, { useState } from "react";
import ImageItem from "./ImageItem";

const ImageSearch = props => {
  //* Local constants
  //* Categories to be as options for filtering
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

  //* Set searchTerm state, not case sensitive and remove whitespace REQUIREMENT
  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelection = event => {
    setCategory(event.target.value);
  };

  //* Fetch images from Pixabay API
  const handleSubmit = async event => {
    //* Prevent page refresh and validate user typed a term and chose a category
    event.preventDefault();
    try {
      if (searchTerm === "") {
        alert(`Please provide a search term. Maybe cats...`);
        return;
      }
      if (category === "") {
        alert(`Please choose a category.`);
        return;
      }
      const searchQuery = searchTerm.toLowerCase().trim();
      const response = await fetch(
        `https://pixabay.com/api/?key=13136421-266c28a6d61717bc2e4e6a83e&q=${searchQuery}&category=${category}&per_page=10`
      );
      const json = await response.json();
      setSearchResults(json.hits);
      localStorage.setItem("searchResults", JSON.stringify(searchResults));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="image-search">
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
      {searchResults.length > 0 ? (
        <h2>Click any image to save it!</h2>
      ) : (
        <h2>Try searching for an image!</h2>
      )}
      {searchResults.length > 0
        ? searchResults.map(result => {
            return (
              <ImageItem
                key={result.id}
                imageObject={result}
                handleSaveImage={props.handleSaveImage}
                searchTerm={searchTerm}
              />
            );
          })
        : null}
    </section>
  );
};

export default ImageSearch;
