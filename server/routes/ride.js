const express = require('express')
const RideController = require('../controllers/ride')
const rideRouter = express.Router()

rideRouter.get("/", RideController.getAllRide)
rideRouter.post("/", RideController.createRide)
rideRouter.patch("/", RideController.updateStatusPayment)
rideRouter.delete("/delete/:id", RideController.deleteRide)

module.exports = rideRouter