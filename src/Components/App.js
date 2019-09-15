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

  //* Add picture to state, does not allow duplicates
  const handleSaveImage = imageObject => {
    if (!savedImages.includes(imageObject)) {
      setSavedImages([...savedImages, imageObject]);
    }
  };

  //* Clear state and localStorage of all pictures
  const clearSavedImages = () => {
    localStorage.clear();
    setSavedImages([]);
  };

  //* Set savedImages to localStorage for persistance
  useEffect(() => {
    localStorage.setItem("savedImages", JSON.stringify(savedImages));
  }, [savedImages]);

  return (
    <div className="app">
      <ImageSearch handleSaveImage={handleSaveImage} />
      <SavedImages
        savedImages={savedImages}
        clearSavedImages={clearSavedImages}
      />
    </div>
  );
}

export default App;
