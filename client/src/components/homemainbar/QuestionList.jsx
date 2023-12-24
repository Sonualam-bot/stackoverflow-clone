import Questions from "./Questions";
import "./HomeMainbar.css";

function QuestionList({ questionsList }) {
  return (
    <div>
      {questionsList.map((question) => (
        <Questions question={question} key={question.id} />
      ))}
    </div>
  );
}

export default QuestionList;
