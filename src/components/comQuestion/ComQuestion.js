import { useState } from "react";
import "./ComQuestion.css";
import ErrorMessage from "../errormessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
const ComQuestion = ({
  currentQuestions,
  setCurrentQuestions,
  questions,
  option,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

/// ye bhi samjhna hain 
  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currentQuestions > 8) {
      navigate("/2");
    } else if (selected) {
      setCurrentQuestions(currentQuestions + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrentQuestions(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1>Question {currentQuestions + 1} :</h1>

      <div className="singleQuestion">
        <h2><p dangerouslySetInnerHTML={{__html: questions[currentQuestions].question}}/></h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {option &&
            option.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currentQuestions > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComQuestion;