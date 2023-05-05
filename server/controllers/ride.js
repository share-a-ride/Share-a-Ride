const { Op } = require("sequelize");
const { Ride, Vehicle, UserRide } = require("../models");

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

  static async ridePerUser(req, res, next) {
    try {
      const { id } = req.user;
      // console.log(id,"<<<<<");
      const ridesPerUser = await UserRide.findAll({
        where: { UserId: 2 },
        include: Ride,
      });
      res.status(200).json(ridesPerUser);
    } catch (error) {
      next(error);
    }
  }

  static async updateStatusPayment(req, res, next) {
    try {
      const { id } = req.user;
      const userRideId = req.params.id;
      // console.log(id)
      const updatedRide = await UserRide.update(
        { paymentStatus: "paid" },
        {
          where: {
            UserId: id,
            [Op.and]: [{ UserId: id }, { id: userRideId }],
          },
          returning: true,
        }
      );
      // console.log(updatedRide, "<<<<<<<<<");
      res.status(200).json(updatedRide);
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }
}
module.exports = RideController;
