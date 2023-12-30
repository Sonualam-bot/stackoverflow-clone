import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";

import "./Questions.css";
import Avatar from "../../components/avatar/Avatar";
import { postAnswer } from "../../actions/Question.action";

//icons
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import DisplayAnswer from "./DisplayAnswer";
import { useState } from "react";

function QuestionDetail() {
  const [userAnswer, setUserAnswer] = useState("");
  const { id } = useParams();
  const questionsList = useSelector((state) => state.QuestionReducer);
  const User = useSelector((state) => state.CurrentUserReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "http://localhost:5173";

  const res = questionsList?.data?.find((question) => question._id === id);

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
    answer,
  } = res;

  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();

    if (User === null) {
      alert("Login or Signup to answer  a question");
      navigate("/Auth");
    } else {
      if (userAnswer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: userAnswer,
            userAnswered: User?.result?.name,
          })
        );
        setUserAnswer("");
      }
    }
  };

  const handleShare = () => {
    copy(url + location?.pathname);
    alert("copied URL: " + url + location?.pathname);
  };

  return (
    <div className="question-details-page">
      {questionsList?.data === null ? (
        <>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
        </>
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
                      <button type="button" onClick={handleShare}>
                        Share
                      </button>
                      <button type="button">Delete</button>
                    </div>
                    <div>
                      <p>asked {moment(askedOn).fromNow()} </p>
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
                <h3>{noOfAnswers} Answers</h3>
                <DisplayAnswer
                  key={_id}
                  question={res.answer}
                  handleShare={handleShare}
                />
              </section>
            )}
            <section className="post-ans-container">
              <h3> Your Answer </h3>
              <form onSubmit={(e) => handlePostAnswer(e, answer.length)}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                ></textarea>
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
