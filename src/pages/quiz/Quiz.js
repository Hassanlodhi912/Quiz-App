import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import "./Quiz.css";
import ComQuestion from "../../components/comQuestion/ComQuestion";
const Quiz = ({ userName, score, questions, setQuestions, setScore }) => {
  const [option, setOption] = useState();
  const [currentQuestions, setCurrentQuestions] = useState(0);

  useEffect(() => {
    setOption(
      //handle Shuffle kese kam krha hain ye samjhna hain sahi se nh hain 
      questions &&
        handleShuffle([
          questions[currentQuestions]?.correct_answer,
          ...questions[currentQuestions]?.incorrect_answers,
        ])
    );
  }, [currentQuestions,questions]);
  console.log(questions);

  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome {userName}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currentQuestions].category}</span>
            <span> score :{score} </span>
          </div>
          <ComQuestion
          currentQuestions={currentQuestions}
          setCurrentQuestions={setCurrentQuestions}
          questions={questions}
          option={option}
          correct={questions[currentQuestions]?.correct_answer}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}

           />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={2}
        />
      )}
    </div>
  );
};

export default Quiz;
