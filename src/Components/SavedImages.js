import React, { useState } from "react";
import iconLink from "../Images/iconLink.png";

const SavedImages = props => {
  const [showSavedImages, setShowSavedImages] = useState(
    "saved-images is-closed"
  );

  const toggleShowSavedImages = () => {
    setShowSavedImages(
      showSavedImages === "saved-images is-closed"
        ? "saved-images is-open"
        : "saved-images is-closed"
    );
  };
  return (
    <section className={showSavedImages}>
      <h2 onClick={toggleShowSavedImages}>Saved Image Links</h2>
      {props.savedImages.map(imageUrl => {
        return (
          <div>
            <a
              key={imageUrl.id}
              href={imageUrl.webformatURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              #{imageUrl.id}
            </a>

            <img className="icon" src={iconLink} alt="external image icon" />
          </div>
        );
      })}
      <div className="clear-images" onClick={props.clearSavedImages}>
        Clear All Images
      </div>
    </section>
  );
};

export default SavedImages;
