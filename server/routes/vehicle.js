const express = require("express");
const vehicleRouter = express.Router();
const VehicleController = require("../controllers/vehicle");
const userAuthorization = require("../middlewares/authorization");

vehicleRouter.post("/", VehicleController.createVehicle);
vehicleRouter.put("/:id", userAuthorization, VehicleController.editVehicle);
vehicleRouter.delete(
  "/:id",
  userAuthorization,
  VehicleController.deleteVehicle
);

module.exports = vehicleRouter;
