const express = require("express");

const questionRouter = express.Router();

const {
  AskQuestion,
  getAllQuestions,
  deleteQuestion,
} = require("../controllers/question.controller");

questionRouter.post("/Ask", AskQuestion);
questionRouter.get("/get", getAllQuestions);
questionRouter.delete("/delete/:id", deleteQuestion);

module.exports = questionRouter;
