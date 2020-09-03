import React from "react";
import { API } from "../../../backend";

const PostImageHelper = ({ post, width, height }) => {
  const imageUrl = `${API}/posts/photo/${post._id}`;
  const loadImages = () => {
    return <img src={imageUrl} width={width} height={height} />;
  };

  return <div>{loadImages()}</div>;
};

export default PostImageHelper;
