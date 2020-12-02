import React from "react";
import Paper from "../components/Paper/paperClass";
import Container from "../layout/Container";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Paper>
      <Container
      /* flexDirection="column"
        justifyContent="space-between"
        height="100%" */
      />
      <h1>This is About Page</h1>
      <Link to="/">Home Page</Link>
    </Paper>
  );
};

export default About;
