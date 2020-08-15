const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
import PostSchema from "./Post";

const ProfileSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      maxlength: 32,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      maxlength: 32,
      required: true,
      trim: true,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
    bio: {
      type: String,
      maxlength: 2000,
      required: true,
    },
    link: String,
    photo: {
      data: Buffer,
      contentType: String,
    },
    boomarks: [PostSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
