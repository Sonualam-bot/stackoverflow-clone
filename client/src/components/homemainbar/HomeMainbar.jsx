import "./HomeMainbar.css";
import { Link, useLocation } from "react-router-dom";
import QuestionList from "./QuestionList";

function HomeMainbar() {
  const questionsList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      askedOn: "jan 1",
    },
    {
      id: 2,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      askedOn: "jan 1",
    },
    {
      id: 3,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      askedOn: "jan 1",
    },
    {
      id: 4,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      askedOn: "jan 1",
    },
    {
      id: 5,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It is meant to be",
      questionTags: ["java", "node js", "react js", "mongoDb"],
      userPosted: "renon",
      askedOn: "jan 1",
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
