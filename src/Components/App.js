import React, { useState, useEffect } from "react";
import "../Styles/App.scss";
import ImageSearch from "./ImageSearch";
import SavedImages from "./SavedImages";

function App() {
  //* State for saved images
  //* Check if there are saved images in localStorage, if none, initalize empty array
  const [savedImages, setSavedImages] = useState(
    JSON.parse(localStorage.getItem("savedImages")) || []
  );

  const handleSaveImage = imageObject => {
    setSavedImages([...savedImages, imageObject]);
  };

  //* Set savedImages to localStorage for persistance
  useEffect(() => {
    localStorage.setItem("savedImages", JSON.stringify(savedImages));
  }, [savedImages]);

  return (
    <div className="app">
      <ImageSearch handleSaveImage={handleSaveImage} />
      <SavedImages savedImages={savedImages} />
    </div>
  );
}

export default App;
