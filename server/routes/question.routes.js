const express = require("express");

const questionRouter = express.Router();

const { AskQuestion } = require("../controllers/question.controller");

questionRouter.post("/Ask", AskQuestion);

module.exports = questionRouter;
