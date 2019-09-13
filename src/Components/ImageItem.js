import React from "react";

const ImageItem = props => {
  //* Extract tags from comma delimited string into an array
  const tags = props.imageObject.tags.split(",");

  return (
    <div className="image-item">
      <div className="image">
        <img
          src={props.imageObject.webformatURL}
          alt={props.searchTerm}
          onClick={() => props.handleSaveImage(props.imageObject)}
        ></img>
      </div>
      <div className="tags">
        {tags.map(tag => {
          return (
            <div key={tag} className="tag">
              {tag}
            </div>
          );
        })}
      </div>
      <div className="likes">
        <div>Likes: {props.imageObject.likes}</div>
        <div>Favorites: {props.imageObject.favorites}</div>
      </div>
    </div>
  );
};

export default ImageItem;
