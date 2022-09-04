import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import "./Main.css";
import Categories from "../../Data/Categories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/errormessage/ErrorMessage";
const Main = ({ setUserName, fetchQuestions }) => {
  const [hassan, setHassan] = useState();
  const [error, setError] = useState(false);
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (category == null || difficulty ==  null || hassan == null) {
      setError(true);
      return;
    } else {
      setError(false);
      setUserName(hassan);
      fetchQuestions(category, difficulty);
      navigate("/1");
    }
  };

  // if(!category || !difficulty ||!hassan){
  // setError(true);
  // return;
  // }
  // else{
  //   setError(false);
  //   fetchQuestions(category,difficulty)
  //   navigate("/1")

  return (
    <div className="content">
      <div className="setting">
        <span style={{ fontSize: 30 }}>Quiz Setting</span>
        <div className="settings__select">
          {error && <ErrorMessage>Fill all the Field</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(event)=>setHassan(event.target.value)}
          />
          <TextField
            select
            label="Choose Category"
            variant="outlined"
            value={category}
            style={{ marginBottom: 30 }}
            onChange={(event)=>setCategory(event.target.value)}
          >
            {Categories.map((lodhi) => (
              // Key or Value samjhni hain ache se
              <MenuItem key={lodhi.category} value={lodhi.value}>
                {lodhi.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Choose Difficulty"
            value={difficulty}
            onChange={(event)=>setDifficulty(event.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quizApp.svg" className="banner" alt="quiz img" />
    </div>
  );
};

export default Main;
