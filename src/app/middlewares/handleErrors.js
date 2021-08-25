const { AppError } = require("../../shared/errors/AppError");

const handleErrorsMiddleware = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.status).send(err.message);
  }

  return res.status(500).send("Unexpected error");
};

exports.handleErrorsMiddleware = handleErrorsMiddleware;
