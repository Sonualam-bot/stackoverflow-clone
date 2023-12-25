import "./HomeMainbar.css";
import { Link, useLocation } from "react-router-dom";
import QuestionList from "./QuestionList";

function HomeMainbar() {
  const questionsList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kashif",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kashif",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 3,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kashif",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 4,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kashif",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 5,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kashif",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];

  const location = useLocation();

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <Link to="/AskQuestion" className="ask-btn">
          Ask a Question
        </Link>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
}

export default HomeMainbar;
