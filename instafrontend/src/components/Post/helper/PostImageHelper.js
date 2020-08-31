import React from "react";

const PostImageHelper = ({ value }) => {
  const loadImages = () => {
    return <img src={value} width={100} height={100} />;
  };

  return <div>{loadImages()}</div>;
};

export default PostImageHelper;
