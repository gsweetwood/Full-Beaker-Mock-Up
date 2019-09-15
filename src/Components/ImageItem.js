import React, { useState } from "react";
import iconStar from "../Images/iconStar.png";
import iconLike from "../Images/iconLike.png";

const ImageItem = props => {
  //* Extract tags from comma delimited string into an array
  const tags = props.imageObject.tags.split(",");

  const [isSaved, setIsSaved] = useState(false);

  const handleToggleSaved = () => {
    setIsSaved(true);
  };

  return (
    <div className="image-item">
      <div className="image">
        <img
          src={props.imageObject.webformatURL}
          alt={props.searchTerm}
          onClick={() => {
            props.handleSaveImage(props.imageObject);
            handleToggleSaved();
          }}
        />
        <div className={isSaved ? "label-saved" : "label-not-saved"}>SAVED</div>
      </div>

      <div className="tag-container">
        {tags.map(tag => {
          return (
            <div key={tag} className="tag">
              {tag}
            </div>
          );
        })}
      </div>
      <div className="likes">
        <div>
          <img className="icon" src={iconLike} alt="like icon" />
          {props.imageObject.likes}
        </div>
        <div>
          <img className="icon" src={iconStar} alt="star icon" />
          {props.imageObject.favorites}
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
