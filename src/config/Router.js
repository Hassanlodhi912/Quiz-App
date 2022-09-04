import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../pages/main/Main";
import Quiz from "../pages/quiz/Quiz";
import Result from "../pages/result/Result";
import React, { useState } from "react";
import axios from "axios";

function Router() {
  const [userName, setUserName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <Box className="App" 
      // style={{ 
        // backgroundImage: "url(./ques1.png)" }}
        >
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                userName={userName}
                setUserName={setUserName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route path="/1" element={<Quiz 
          userName={userName}
          questions={questions}
          setQuestions={setQuestions}
          score={score}
          setScore={setScore}

          />} />
          <Route path="/2" element={<Result 
          userName={userName} score={score} />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
