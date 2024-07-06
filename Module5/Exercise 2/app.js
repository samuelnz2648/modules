// app.js
const express = require("express");
const app = express();
const port = 3000;
const calculatorRoutes = require("./routes/calculatorRoutes");

app.use(express.json());
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
