const mongoose = require("mongoose");
const Question = require("../models/question.model");

const AskQuestion = async (req, res) => {
  try {
    const postQuestionData = req.body;

    const postQuestion = await new Question(postQuestionData);
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

const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Question.find({});
    if (questionList.length === 0) {
      res.status(404).json({
        success: false,
        message: "No questions in DB",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully fetched questions",
      data: questionList,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal Server error ${error} `,
    });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: "Question unavailable",
      });
    }

    const updatedDb = await Question.findByIdAndDelete(id);
    console.log(updatedDb);

    res.status(200).json({
      success: false,
      message: "Successfully Deleted...",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Failed to delete question ${error.message} `,
    });
  }
};

module.exports = {
  AskQuestion,
  getAllQuestions,
  deleteQuestion,
};
