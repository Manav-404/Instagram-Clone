const express = require("express");
const router = express.Router();
const { isSignIn, isAuthenticated } = require("../controller/Auth");
const { getUserById } = require("../controller/User");

router.param("userId", getUserById);
router.param("username", getUserByUsername);

router.get("/profile/:userId", isSignIn, getProfileByUserId);
router.get("/profile/list/:username", isSignIn, getProfileBySearch);

router.post(
  "/profile/create/:userId",
  isSignIn,
  isAuthenticated,
  createProfile
);

router.put("/profile/edit/:userId", isSignIn, isAuthenticated, editProfile);

router.delete(
  "/profile/delete/:userId",
  isSignIn,
  isAuthenticated,
  deleteProfile
);
