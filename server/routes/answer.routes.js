const express = require("express");
const {
  postAnswer,
  deleteAnswer,
} = require("../controllers/answers.controller.js");
const answerRouter = express.Router();

answerRouter.patch("/post/:id", postAnswer);
answerRouter.patch("/delete/:id", deleteAnswer);

module.exports = answerRouter;
