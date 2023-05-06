const express = require("express");
const AdminController = require("../controllers/admin");
const UserController = require("../controllers/user");
const adminRouter = express.Router();
const { adminAuthentication } = require("../middlewares/authentication");

adminRouter.post("/register", AdminController.adminRegister);
adminRouter.post("/login", AdminController.adminLogin);

//* get all users
adminRouter.get("/users", adminAuthentication, UserController.getAllUsers);

//* get user by id
adminRouter.get("/users/:id", adminAuthentication, UserController.getUserById);

//* edit user status
adminRouter.patch(
  "/users/:userId",
  adminAuthentication,
  UserController.changeUserStatus
);

module.exports = adminRouter;
