// server1.js
const express = require("express");
const app1 = express();
const port1 = 3001;

app1.get("/", (req, res) => {
  res.send("Hello from server 1!");
});

app1.listen(port1, () => {
  console.log(`Server 1 listening at http://localhost:${port1}`);
});
