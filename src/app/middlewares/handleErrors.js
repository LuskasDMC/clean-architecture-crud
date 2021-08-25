const { AppError } = require("../../shared/errors/AppError");

const handleErrorsMiddleware = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }

  console.log(err.message);
  return res.status(500).json({
    status: 500,
    message: "Unexpected error",
  });
};

exports.handleErrorsMiddleware = handleErrorsMiddleware;
