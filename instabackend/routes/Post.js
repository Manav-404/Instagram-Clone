const express = require("express");
const { getUserById, photo } = require("../controller/Profile");
const { isSignIn, isAuthenticated } = require("../controller/Auth");
const router = express.Router();
const {
  getPostById,
  getPostsForUserId,
  createPost,
  createPostComment,
  getAllPostCommentsByPostId,
  createBookmarks,
  getBookmarksByUserId,
} = require("../controller/Post");

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

router.get("/posts/comment/:postId", isSignIn, getAllPostCommentsByPostId);

router.post(
  "/posts/bookmark/:postId/:userId",
  isSignIn,
  isAuthenticated,
  createBookmarks
);

router.get(
  "/posts/bookmark/:userId",
  isSignIn,
  isAuthenticated,
  getBookmarksByUserId
);

module.exports = router;
