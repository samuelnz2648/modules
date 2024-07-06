// Login.jsx
import React from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

function Login() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Login Page
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <div>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
