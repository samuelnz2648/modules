const express = require("express");
const path = require("path");
const app = express();
const calculatorRoutes = require("./routes/calculatorRoutes");

app.use(express.static(path.join(__dirname, "public")));

app.use("/calculator", calculatorRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
