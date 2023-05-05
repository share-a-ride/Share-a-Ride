const { Op } = require("sequelize");
const { Ride, Vehicle, UserRide, User } = require("../models");

class RideController {
  static async getAllRide(req, res, next) {
    try {
      const data = await Ride.findAll();
      if (!data) {
        throw { name: "not_found" };
      }
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createRide(req, res, next) {
    try {
      let userId = req.user.id
      const { startLocation, destination, departureTime, arrivalTime, price, seats } = req.body

      let user = await User.findByPk(userId, {
        include: Vehicle
      })

      console.log(user.Vehicle, "{}{}{}{}{}{");
      let ride = await Ride.create({
        startLocation, destination, departureTime, arrivalTime, price, seats,
        VehicleId: user.Vehicle.id
      })
      const message = `new entity with ${ride.id} created`
      res.status(201).json(message)
    } catch (error) {
      next(error)
    }
  }

  static async deleteRide(req, res, next) {
    try {
      let id = req.params.id
      let ride = await Ride.findByPk(id)

      if (!ride) {
        throw { name: "not_found" }
      }

      await Ride.destroy({ where: { id } })

      const message = `entity with id ${ride.id} deleted`
      res.status(200).json({ message });

    } catch (error) {
      console.log(error);
      next(error)
    }
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