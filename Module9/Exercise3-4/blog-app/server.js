const express = require("express");
const { sequelize } = require("./models");
const app = express();
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
require("dotenv").config();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", weatherRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
});
