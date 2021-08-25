require("../infra/database/index");

const express = require("express");
const { handleErrorsMiddleware } = require("./middlewares/handleErrors");
const { UserRouter } = require("./routes/userRoutes");

const app = express();

app.use("/users", UserRouter);

app.use(handleErrorsMiddleware);

module.exports = app;
