const express = require("express");
const { postAnswer } = require("../controllers/answers.controller.js");
const answerRouter = express.Router();

answerRouter.patch("/post/:id", postAnswer);

module.exports = answerRouter;
