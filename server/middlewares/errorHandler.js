const errorHandler = (err, req, res, next) => {
  // console.log(err)
  let message = "Internal server error";
  let code = 500;

  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError" ||
    err.name === "ValidationErrorItem"
  ) {
    message = err.errors[0].message;
    code = 400;
  } else if (err.name === "empty_email") {
    message = "Email is required";
    code = 400;
  } else if (err.name === "empty_password") {
    message = "Password is required";
    code = 400;
  } else if (err.name === "not_found") {
    message = "Data not found";
    code = 400;
  } else if (err.name === "unauthorized") {
    message = "Email / Password is wrong";
    code = 401;
  } else if (err.name === "invalid_token" || err.name === "JsonWebTokenError") {
    message = "Forbidden";
    code = 403;
  } else if (err.name === "access_token_missing") {
    message = "Access Token Missing";
    code = 400;
  } else if (err.name === "no_change") {
    message = "No changes has been made";
    code = 400;
  } else if (err.name === "invalid_status") {
    message = "Invalid status";
    code = 404;
  } else if (err.name === "ALREADY_BOOKED") {
    message = "You are already a booked"
  }

  res.status(code).json({ message });
};

module.exports = errorHandler;
