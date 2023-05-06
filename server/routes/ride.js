const express = require('express')
const RideController = require('../controllers/ride')
const rideRouter = express.Router()

rideRouter.get("/", RideController.getAllRide)
rideRouter.post("/", RideController.createRide)
rideRouter.delete("/delete/:id", RideController.deleteRide)
rideRouter.patch("/:id", RideController.updateStatusPayment)
rideRouter.put("/edit/:id", RideController.updateRide)
rideRouter.post("/generate-midtrans-token", RideController.genMidtransToken)

module.exports = rideRouter