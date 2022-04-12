const express = require("express");

//middlewares
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const compression = require("compression");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");

//routes
const routes = require("./routes/v1");

const app = express();

//middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(xss());
app.use(compression());
app.use(errorHandler);
app.use(logger());

// v1 api routes
app.use("/api", routes);

const PORT = process.env.PORT || 1111;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
