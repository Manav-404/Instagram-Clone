const Post = require("../models/Post");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Comment = require("../models/Comment");
const User = require("../models/User");

exports.getPostById = (req, res, next, id) => {
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "Looks like theres no post :)",
      });
    }

    req.post = post;
    next();
  });
};

exports.getPostsForUserId = (req, res) => {
  Post.find({ user: req.user._id }).exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: "Error in finding posts",
      });
    }

    if (posts.length <= 0) {
      return res.status(400).json({
        error: "Looks like theres no post :)",
      });
    }

    return res.json(posts);
  });
};

exports.createPost = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, feilds, file) => {
    if (err) {
      return res.status(400).json({
        error: "Please try again",
      });
    }

    const { caption } = feilds;

    if (!caption) {
      return res.status(400).json({
        error: "All feilds are required",
      });
    }

    let post = new Post(feilds);

    if (file.photo) {
      if (file.photo.size > 4000000) {
        return res.status(400).json({
          error: "The size of the file is more than 4MB ",
        });
      }
    }

    post.user = req.user;
    post.photo.data = fs.readFileSync(file.photo.path);

    post.save((error, post) => {
      if (error) {
        return res.status(400).json({
          error: "Problem in creating post. Please try again.",
        });
      }

      return res.json(post);
    });
  });
};

exports.createPostComment = (req, res) => {
  let comment = new Comment(req.body);
  comment.user = req.user;
  comment.post = req.post;

  comment.save((error, comment) => {
    if (error) {
      return res.status(400).json({
        error: "PCould not post comment. Please try again.",
      });
    }
    comment.post = undefined;
    comment.user = undefined;
    return res.json(comment);
  });
};

exports.getAllPostCommentsByPostId = (req, res) => {
  Comment.find({ post: req.post._id }).exec((error, comments) => {
    if (error) {
      return res.status(400).json({
        error: "Error in finding comments",
      });
    }

    if (comments.length <= 0) {
      return res.status(400).json({
        error: "Looks like theres no comment on this post :)",
      });
    }

    return res.json(comments);
  });
};

exports.createBookmarks = (req, res) => {
  let post = req.post;
  let user = req.user;

  User.findByIdAndUpdate(
    { _id: user._id },
    { $addToSet: { bookmarks: { $each: [post] } } },
    (error, document) => {
      if (error) {
        return res.status(400).json({
          error: "Could not add to bookmarks",
        });
      }

      return res.json(document);
    }
  );
};

exports.getBookmarksByUserId = (req, res) => {
  let bookmarks = req.user.bookmarks;
  res.json(bookmarks);
};
