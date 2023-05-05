const Hash = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password, phoneNumber, photo, idCardImg } = req.body;
      const newPass = Hash.create(password);
      const status = "unverified";
      await User.create({
        name,
        email,
        newPass,
        phoneNumber,
        photo,
        idCardImg,
        status
      });

      res
        .status(201)
        .json({ message: `User ${name} has succesfully registered` });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || email === undefined) throw { name: "empty_email" };
      if (!password || password === undefined) throw { name: "empty_password" };

      const selectedUser = await User.findOne({email});
      if (!selectedUser) {
        throw { name: "unauthorized" };
      }
      if (!Hash.verify(password, selectedUser.password)) {
        throw { name: "unauthorized" };
      }

      const token = generateToken({ id: selectedUser.id });
      res.status(200).json({
        access_token: token,
        username: selectedUser.name,
        email: selectedUser.email,
        phoneNumber: selectedUser.phoneNumber,
        photo: selectedUser.photo,
        reting: selectedUser.rating,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = UserController;
