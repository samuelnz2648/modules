// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Home from "./Home";
import Login from "./Login";
import BitcoinRates from "./BitcoinRates";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={NavLink} to="/" exact>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/login">
            Login
          </Button>
          <Button color="inherit" component={NavLink} to="/bitcoin-rates">
            Bitcoin Rates
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bitcoin-rates" element={<BitcoinRates />} />
      </Routes>
    </Router>
  );
}

export default App;
