const { validationResult } = require("express-validator");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to signup",
      });
    }

    return res.json({
      name: user.username,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Unable to login",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email or Password does not match",
      });
    }

    const token = jwt.sign({ __id: user._id }, process.env.SECRET, {
      expiresIn: "24h",
    });

    res.cookie("token", token);
    const { _id, username, email } = user;
    return res.json({ token, user: { _id, username, email } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie();
  return res.json({
    message: "User signed out",
  });
};

exports.isSignIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
});

exports.isAuthenticated = (req, res, next) => {
  let checker = req.user && req.auth && req.user._id === req.auth._id;
  if (!checker) {
    res.status(401).json({
      error: "Access Denied",
    });
  }
  next();
};
