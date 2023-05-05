const express = require('express')
const RideController = require('../controllers/ride')
const rideRouter = express.Router()

rideRouter.get("/", RideController.getAllRide )
rideRouter.post("/", RideController.createRide)
rideRouter.patch("/:id", RideController.updateStatusPayment)

module.exports = rideRouter