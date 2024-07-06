// server2.js
const express = require("express");
const app2 = express();
const port2 = 3002;

app2.get("/", (req, res) => {
  res.send("Hello from server 2!");
});

app2.listen(port2, () => {
  console.log(`Server 2 listening at http://localhost:${port2}`);
});
