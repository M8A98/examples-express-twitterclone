// routes/timelineController.js
const timelineController = require("express").Router();
// Moment to format dates
const moment = require("moment");

// Models
const Tweet = require("../models/Tweet");

timelineController.get("/", (req, res) => {
  Tweet
    .find({}, "user_name tweet created_at")
    .sort({ created_at: -1 })
    .exec((err, timeline) => {
      res.render("timeline/index", { timeline, moment });
  });
});

module.exports = timelineController;
