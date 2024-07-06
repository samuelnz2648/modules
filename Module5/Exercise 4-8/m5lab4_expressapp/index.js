// index.js

const express = require("express");
const friendRoutes = require("./routes/friendRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const port = 3000;

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

// serve static files from the 'public' directory
app.use("/", express.static("public"));

// use friend routes
app.use("/friends", friendRoutes);

// setup Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
