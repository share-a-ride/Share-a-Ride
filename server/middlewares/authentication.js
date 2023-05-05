const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const userAuthentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "invalid_token" };
    }
    const payload = verifyToken(access_token);
    console.log(payload, "?????");
    const data = await User.findByPk(payload.id);
    console.log(data, "><><><><");
    if (!data) {
      throw { name: "invalid_token" };
    }
    req.user = payload;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = userAuthentication;
