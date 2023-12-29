const express = require("express");

const questionRouter = express.Router();

const {
  AskQuestion,
  getAllQuestions,
} = require("../controllers/question.controller");

questionRouter.post("/Ask", AskQuestion);
questionRouter.get("/get", getAllQuestions);

module.exports = questionRouter;
