import React from "react";

const ImageItem = props => {
  return (
    <div className="image-item">
      <img src={props.imageURL}></img>
      <div className="tags">tags</div>
      <div className="likes">likes and favorites</div>
    </div>
  );
};

export default ImageItem;
