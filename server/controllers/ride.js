const { Ride, Vehicle } = require("../models");

class RideController {
  static async getAllRide(req, res, next) {
    try {
      const data = await Ride.findAll();
      if (!data) {
        throw { name: "not_found" };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async createRide(req, res, next) {
    try {
    } catch (error) {}
  }
}
module.exports = RideController;
