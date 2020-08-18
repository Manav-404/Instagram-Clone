const Notification = require("../models/Notification");
const { check } = require("express-validator");

exports.getNotificationById = (req, res, next, id) => {
  Notification.findById(id).exec((error, notification) => {
    if (error || !notification) {
      return res.status(400).json({
        error: "Unable to find the notification",
      });
    }

    req.notification = notification;
    next();
  });
};

exports.getNotifications = (req, res) => {
  Notification.find({ to_user: req.user._id })
    .populate("from_user")
    .sort("-createdDate")
    .exec((error, notifications) => {
      if (error) {
        return res.status(400).json({
          error: "No notifications found",
        });
      }

      return res.json({
        notifications,
      });
    });
};

exports.createNotification = (req, res) => {
  let to_user = req.body;
  let from_user = req.user;

  let checker = false;

  to_user.update(
    { _id: to_user._id },
    { $addToSet: { followers: { $each: [from_user] } } },
    (error, user) => {
      if (!error) {
        from_user.update(
          { _id: from_user._id },
          { $addToSet: { following: { $each: [to_user] } } },
          (error, user) => {
            if (!error || user) {
              checker = true;
            }
          }
        );
      }
    }
  );

  if (checker === true) {
    Notification.save({ from_user, to_user }).exec((error, notification) => {
      if (error) {
        return res.status(400).json({
          error: "Error creating notification",
        });
      }

      return res.json({
        notification,
      });
    });
  } else {
    return res.status(400).json({
      error: "Error creating notification",
    });
  }
};

exports.deleteNotification = (req, res) => {};
