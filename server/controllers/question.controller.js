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

module.exports = {
  AskQuestion,
  getAllQuestions,
};
