const express = require("express");
const router = express.Router();
const { isSignIn, isAuthenticated } = require("../controller/Auth");

router.param("userId", getUserById);
