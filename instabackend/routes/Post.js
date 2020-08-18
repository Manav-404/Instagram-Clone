const express = require("express");
const { getUserById, photo } = require("../controller/Profile");
const { isSignIn, isAuthenticated } = require("../controller/Auth");
const router = express.Router();

router.param("userId", getUserById);
router.param("postId", getPostById);

router.get("/posts/:userId", isSignIn, getPostsForUserId);

router.post("/posts/create/:userId", isSignIn, isAuthenticated, createPost);

router.post(
  "/posts/comment/create/:postId/:userId",
  isSignIn,
  isAuthenticated,
  createPostComment
);

router.get("/posts/comment/:postId", isSign, photo, getAllPostCommentsByPostId);

router.post(
  "/post/bookmark/:postId/:userId",
  isSignIn,
  isAuthenticated,
  createBookmarks
);

module.exports = router;
