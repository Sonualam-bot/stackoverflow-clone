import { Link, useParams } from "react-router-dom";
import "./Questions.css";
import Avatar from "../../components/avatar/Avatar";

//icons
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import DisplayAnswer from "./DisplayAnswer";

function QuestionDetail() {
  const { id } = useParams();

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
          _id: 1,
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
          _id: 1,
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
          _id: 1,
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
          _id: 1,
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
          _id: 1,
          answerBody: "Answer",
          userAnswered: "kashif",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];

  const res = questionsList.find((question) => question._id === +id);

  const {
    _id,
    upVotes,
    downVotes,
    questionTitle,
    questionBody,
    questionTags,
    askedOn,
    userId,
    userPosted,
    noOfAnswers,
  } = res;

  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div key={_id}>
            <section className="question-details-container">
              <h1>{questionTitle}</h1>
              <div className="question-details-container-2">
                <div className="question-votes">
                  <TiArrowSortedUp className="votes-icon" />
                  <p> {upVotes - downVotes} </p>
                  <TiArrowSortedDown className="votes-icon" />
                </div>
                <div style={{ width: "100%" }}>
                  <p className="question-body"> {questionBody} </p>
                  <div className="question-details-tags">
                    {questionTags.map((tag) => {
                      return <p key={tag}>{tag}</p>;
                    })}
                  </div>
                  <div className="question-actions-user">
                    <div>
                      <button type="button">Share</button>
                      <button type="button">Delete</button>
                    </div>
                    <div>
                      <p>asked {askedOn} </p>
                      <Link
                        to={`User/${userId}`}
                        className="user-link"
                        style={{ color: "#0086d8" }}
                      >
                        <Avatar backgroundColor="orange" px="8px" py="5px">
                          {" "}
                          {userPosted.charAt(0).toUpperCase()}{" "}
                        </Avatar>
                        <div>{userPosted}</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {noOfAnswers !== 0 && (
              <section>
                <h3>{noOfAnswers} answers</h3>
                <DisplayAnswer key={_id} question={res} />
              </section>
            )}
            <section className="post-ans-container">
              <h3> Your Answer </h3>
              <form>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input
                  type="submit"
                  className="post-ans-btn"
                  value="Post Your Answer"
                />
              </form>
            </section>
            <p>
              Browse other Question tagged.
              {questionTags.map((tag) => {
                <Link to="/Tags" key={tag} className="ans-tags">
                  {tag}
                </Link>;
              })}{" "}
              or{" "}
              <Link
                to="/AskQuestion"
                style={{ textDecoration: "none", color: "#009dff" }}
              >
                ask your own question.
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default QuestionDetail;
