const mongoose = require("mongoose");
const Question = require("../models/question.model");

const postAnswer = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const { noOfAnswers, answerBody, userAnswered } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({
        success: false,
        message: "question unavailable...",
      });
    }

    updateNoOfQuestions(_id, noOfAnswers);

    const updatedQuestion = await Question.findByIdAndUpdate(_id, {
      $addToSet: {
        answer: [{ answerBody, userAnswered, userId: req.userId }],
      },
    });

    res.status(200).json({
      success: true,
      message: "answering successfull",
      data: updatedQuestion,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Failed to find question ${error.message}`,
    });
  }
};

const updateNoOfQuestions = async (_id, noOfAnswers) => {
  try {
    await Question.findByIdAndUpdate(_id, {
      $set: { noOfAnswers: noOfAnswers },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postAnswer,
};
