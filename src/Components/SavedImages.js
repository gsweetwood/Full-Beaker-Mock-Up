import React from "react";

const SavedImages = props => {
  return (
    <section className="saved-images">
      <h2>Saved Image Links</h2>
      {props.savedImages.map(imageUrl => {
        return (
          <a
            key={imageUrl.id}
            href={imageUrl.webformatURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {imageUrl.id}
          </a>
        );
      })}
    </section>
  );
};

export default SavedImages;
