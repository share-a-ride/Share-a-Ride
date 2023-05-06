const express = require("express");
const RideController = require("../controllers/ride");
const rideRouter = express.Router();
const userAuthorization = require("../middlewares/authorization");

rideRouter.get("/", RideController.getAllRide);
rideRouter.post("/", RideController.createRide);
rideRouter.delete("/delete/:id", userAuthorization, RideController.deleteRide);
rideRouter.patch("/:id", RideController.updateStatusPayment);
rideRouter.put("/edit/:id", userAuthorization, RideController.updateRide);
rideRouter.post("/generate-midtrans-token", RideController.genMidtransToken);
rideRouter.post("/order/:id", RideController.orderRide);
rideRouter.delete("/cancel/:id", RideController.cancelOrder);

module.exports = rideRouter;
