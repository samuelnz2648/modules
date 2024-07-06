// Home.jsx
import React from "react";
import { Container, Typography } from "@mui/material";

function Home() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1">Welcome to the home page.</Typography>
    </Container>
  );
}

export default Home;
