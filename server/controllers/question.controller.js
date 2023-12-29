const mongoose = require("mongoose");
const Question = require("../models/question.model");

const AskQuestion = async (req, res) => {
  try {
    const postQuestionData = req.body;

    const postQuestion = await new Question({
      ...postQuestionData,
      userId: req.userId,
    });
    const postedQuestion = await postQuestion.save();

    res.status(200).json({
      success: true,
      message: "Posted question successfully",
      data: postedQuestion,
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: `Failed to post a new question ${error} `,
    });
  }
};

module.exports = {
  AskQuestion,
};
