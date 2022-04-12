const express = require("express");
const config = require("./config/config");

//middlewares
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const compression = require("compression");
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
app.use(logger());

// v1 api routes
app.use("/api", routes);

const PORT = config.port || 1111;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
