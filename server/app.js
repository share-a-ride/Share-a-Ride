if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const mainRouter = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const port = process.env.PORT || 4002;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(mainRouter);
app.use(errorHandler);

module.exports = app;
