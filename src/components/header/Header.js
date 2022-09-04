import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./header.css";
const Header = () => {
  return (
    <Box className="header">
      <Link to="/" className="title">
       Quiz App
      </Link>
      <hr className="divider" />
    </Box>
  );
};

export default Header;
