const { Op } = require("sequelize");
const { Ride, Vehicle, UserRide, User } = require("../models");
const midtransClient = require('midtrans-client')
const axios = require("axios");
const { checkPaymentStatus } = require("../helpers/checkPayment")

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
      let userId = req.user.id
      const { startLocation, destination, departureTime, arrivalTime, price, seats } = req.body

      let user = await User.findByPk(userId, {
        include: Vehicle
      })

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
      next(error)
    }
  }

  static async ridePerUser(req, res, next) {
    try {
      const { id } = req.user;
      // console.log(id,"<<<<<");
      const ridesPerUser = await UserRide.findAll({
        where: { UserId: id },
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
      const updatedRide = await UserRide.update(
        { paymentStatus: "paid" },
        {
          where: {
            [Op.and]: [{ UserId: id }, { id: userRideId }],
          },
          returning: true,
        }
      );
      if (!updatedRide[0]) {
        throw { name: "invalid_token" }
      }

      res.status(200).json(updatedRide);
    } catch (error) {
      next(error);
    }
  }

  static async updateRide(req, res, next) {
    try {
      const id = req.params.id
      let ride = await Ride.findByPk(id);

      if (!ride) {
        throw ({ name: "not_found" });
      }
      let { startLocation, destination, departureTime, arrivalTime, price, seats } = req.body

      if (!startLocation || !destination || !departureTime || !arrivalTime || !price || !seats) {
        throw ({ name: "empty" })
      }

      let rideUpdate = await Ride.update({
        startLocation,
        destination,
        departureTime,
        arrivalTime,
        price,
        seats
      }, {
        where: {
          id
        }
      })
      const message = `entity with id ${ride.id} updated`

      res.status(200).json({ message })
    } catch (error) {
      next(error)
    }
  }

  static async genMidtransToken(req, res, next) {
    try {
      const checkUser = await UserRide.findByPk(req.user.id, {
        include: [User, Ride]
      });

      if (checkUser.paymentStatus === 'paid') {
        throw { name: 'ALREADY_BOOKED' };
      }

      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: 'SB-Mid-server-xvUL2muo6OumITLOfsgy0pMP'
      });

      const parameter = {
        transaction_details: {
          order_id: 'TRANSACTION_' + Math.floor(Math.random() * (9999999999 - 100000000 + 1) + 100000000),
          gross_amount: checkUser.Ride.price // 1juta
        },
        credit_card: {
          secure: true
        },
        customer_details: {
          email: checkUser.User.email,
        }
      };

      const orderId = parameter.transaction_details.order_id;
      const midtransToken = await snap.createTransaction(parameter);

      res.status(200).json(midtransToken);
      
      // const paymentStatus = await checkPaymentStatus(orderId);

      // if (!paymentStatus.success) {
      //   throw { name: 'PAYMENT_FAILED', message: paymentStatus.message };
      // }

      // Update UserRide payment status to 'paid'
      await checkUser.update({ paymentStatus: 'paid' });

    } catch (err) {
      console.log(err);
      next(err);
    }
  }

}


module.exports = RideController;