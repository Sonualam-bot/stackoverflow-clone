const express = require("express");

const questionRouter = express.Router();

const {
  AskQuestion,
  getAllQuestions,
  deleteQuestion,
  voteQuestion,
} = require("../controllers/question.controller");

questionRouter.post("/Ask", AskQuestion);
questionRouter.get("/get", getAllQuestions);
questionRouter.delete("/delete/:id", deleteQuestion);
questionRouter.patch("/vote/:id", voteQuestion);

module.exports = questionRouter;
