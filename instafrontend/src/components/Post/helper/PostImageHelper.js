import React from "react";
import { API } from "../../../backend";

const PostImageHelper = ({ post }) => {
  const imageUrl = `${API}/posts/photo/${post._id}`;
  const loadImages = () => {
    return <img src={imageUrl} width={293} height={293} />;
  };

  return <div>{loadImages()}</div>;
};

export default PostImageHelper;
