const express = require("express");
const RideController = require("../controllers/ride");
const rideRouter = express.Router();
const userAuthorization = require("../middlewares/authorization");

rideRouter.get("/", RideController.getAllRide);
rideRouter.post("/", RideController.createRide);
rideRouter.delete("/:id", userAuthorization, RideController.deleteRide);
rideRouter.get("/:id", RideController.getRideById);
rideRouter.patch("/:id", RideController.updateStatusPayment); //! belum dimasukkin api docs
rideRouter.put("/:id", userAuthorization, RideController.updateRide);
rideRouter.post("/generate-midtrans-token", RideController.genMidtransToken); //! belum dimasukkin api docs
rideRouter.post("/order/:id", RideController.orderRide);
rideRouter.delete("/order/:id", RideController.cancelOrder);

module.exports = rideRouter;
