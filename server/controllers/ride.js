const { Op } = require("sequelize");
const { Ride, Vehicle, UserRide, User } = require("../models");
const midtransClient = require("midtrans-client");
const axios = require("axios");
// const { checkPaymentStatus } = require("../helpers/checkPayment");
const nodemailer = require("nodemailer");
const mailTransporter = require("../helpers/nodemailer");

class RideController {
  static async getAllRide(req, res, next) {
    try {
      const data = await Ride.findAll({
        order: [["updatedAt", "DESC"]],
        include: [
          {
            model: UserRide,
            where: {
              status: "creator",
            },
            include: [
              {
                model: User,
                attributes: {
                  exclude: "password",
                },
              },
            ],
          },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createRide(req, res, next) {
    try {
      let userId = req.user.id;
      const {
        startLocation,
        destination,
        departureTime,
        arrivalTime,
        price,
        seats,
      } = req.body;

      if (seats <= 0) {
        throw { name: "invalid_seats" };
      }

      let user = await User.findByPk(userId, {
        include: Vehicle,
      });

      if (!user.Vehicle) {
        throw { name: "no_vehicle" };
      }

      let ride = await Ride.create({
        startLocation,
        destination,
        departureTime,
        arrivalTime,
        price,
        seats,
        createdBy: userId,
        VehicleId: user.Vehicle.id,
      });

      let newUserRide = await UserRide.create({
        UserId: ride.createdBy,
        RideId: ride.id,
        status: "creator",
      });

      const message = `New ride with ${ride.id} created`;
      res.status(201).json({ message });
    } catch (error) {
      next(error);
    }
  }

  static async deleteRide(req, res, next) {
    try {
      let id = req.params.id;
      let ride = await Ride.findByPk(id);

      if (!ride) {
        throw { name: "not_found" };
      }

      await Ride.destroy({ where: { id } });

      const message = `Ride with id ${ride.id} is deleted`;
      res.status(200).json({ message });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async ridePerUser(req, res, next) {
    try {
      const { id } = req.user;
      // console.log(id,"<<<<<");
      const ridesPerUser = await UserRide.findAll({
        order: [["updatedAt", "DESC"]],
        where: {
          [Op.and]: [{ UserId: id }, { status: { [Op.not]: "creator" } }],
        },
        include: Ride,
      });
      res.status(200).json(ridesPerUser);
    } catch (error) {
      next(error);
    }
  }

  static async updateRide(req, res, next) {
    try {
      const id = req.params.id;
      let ride = await Ride.findByPk(id, {
        include: [{ model: UserRide }],
      });

      let {
        startLocation,
        destination,
        departureTime,
        arrivalTime,
        price,
        seats,
      } = req.body;

      if (ride.UserRides.length > 1) {
        seats = seats - (ride.UserRides.length - 1);
      }

      let rideUpdate = await Ride.update(
        {
          startLocation,
          destination,
          departureTime,
          arrivalTime,
          price,
          seats,
        },
        {
          where: {
            id,
          },
        }
      );
      const message = `Ride with id ${ride.id} updated`;

      res.status(200).json({ message });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async genMidtransToken(req, res, next) {
    try {
      // console.log(1, "<<<<<<<<");

      const checkUser = await UserRide.findByPk(req.user.id, {
        include: User,
      });

      // console.log(checkUser.User.email, "<<<<<< checkUser.isPremium");

      if (checkUser.status === "paid") {
        throw { name: "ALREADY_BOOKED" };
      }

      // console.log(3, "<<<<<<<<");

      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: "SB-Mid-server-xvUL2muo6OumITLOfsgy0pMP",
      });

      // console.log(4, "<<<<<<<<");

      let parameter = {
        transaction_details: {
          order_id:
            "TRANSACTION_" +
            Math.floor(
              Math.random() * (9999999999 - 100000000 + 1) + 100000000
            ),
          gross_amount: 2000000, // 1juta
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          email: checkUser.User.email,
        },
      };

      // console.log(5, "<<<<<<<<");

      const midtransToken = await snap.createTransaction(parameter);

      // console.log(6, "<<<<<<<<");

      res.status(200).json(midtransToken);

      // const paymentStatus = await checkPaymentStatus(orderId);

      // if (!paymentStatus.success) {
      //   throw { name: 'PAYMENT_FAILED', message: paymentStatus.message };
      // }

      // Update UserRide payment status to 'paid'
      let details = {
        from: "ridetest321@gmail.com",
        to: checkUser.User.email,
        subject: "Share-a-ride notification ",
        text: "Share-a-ride payment is succeed",
      };

      mailTransporter.sendMail(details, (err) => {
        if (err) console.log(err);
        else console.log("e-mail has sent");
      });

      await checkUser.update({ status: "paid" });
      const ride = await Ride.findByPk(checkUser.RideId);
      await Ride.update(
        { seats: ride.seats - 1 },
        { where: { id: checkUser.RideId } }
      );
      // masuk duit ke pemberi tumpangan
      const creator = await User.findByPk(ride.createdBy);
      await User.update(
        { money: creator.money + ride.price },
        { where: { id: ride.createdBy } }
      );
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }

  static async orderRide(req, res, next) {
    try {
      const rideId = req.params.id;
      const userId = req.user.id;
      // console.log(req.user);
      // console.log(checkUser.User.email, "<<<<<<<<<");

      const ride = await Ride.findByPk(rideId, {
        include: [{ model: UserRide }],
      });
      // console.log(ride.createdBy);
      const checkUser = await User.findByPk(ride.createdBy);
      // console.log(checkUser.email);
      // check if user is in the ride
      if (!ride) {
        throw { name: "not_found" };
      }
      if (ride.UserRides.find((el) => el.UserId == userId)) {
        throw { name: "invalid_order" };
      }
      if (ride.seats <= 0) {
        throw { name: "full_booked" };
      }

      let newUserRide = await UserRide.create({
        RideId: rideId,
        UserId: userId,
        status: "requested",
      });

      let details = {
        from: "ridetest321@gmail.com",
        to: checkUser.email,
        subject: "Share-a-ride notification ",
        text: "Share-a-ride payment is succeed",
      };

      mailTransporter.sendMail(details, (err) => {
        if (err) console.log(err);
        else console.log("e-mail has sent");
      });
      const message = "Order received";
      res.status(201).json({ message });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async cancelOrder(req, res, next) {
    try {
      const id = req.params.id;
      // const userId = req.user.id;

      // const order = await UserRide.findByPk(id);
      // if (!order) {
      //   throw { name: "not_found" };
      // }
      // if (order.UserId !== userId) {
      //   throw { name: "invalid_user" };
      // }

      // await UserRide.destroy({ where: { id } });

      const checkUser = await UserRide.findAll({
        where: { RideId: id },
        include: {
          model: User,
          attributes: ["name", "email"],
        },
      });
      // console.log(checkUser);

      // let details = {
      //   from: "ridetest321@gmail.com",
      //   to: checkUser.User.email,
      //   subject: "Share-a-ride notification ",
      //   text: "Share-a-ride payment is succeed",
      // };

      // mailTransporter.sendMail(details, (err) => {
      //   if (err) console.log(err);
      //   else console.log("e-mail has sent");
      // });

      const message = `Order is cancelled`;
      res.status(200).json({ message, checkUser });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getRideById(req, res, next) {
    try {
      const { id } = req.params;
      const ride = await Ride.findByPk(id, {
        include: [
          { model: Vehicle },
          {
            model: UserRide,
            include: [
              {
                model: User,
                attributes: {
                  exclude: "password",
                },
              },
            ],
          },
        ],
      });
      if (!ride) {
        throw { name: "not_found" };
      }
      // console.log(ride);
      res.status(200).json(ride);
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async changeStatusOrder(req, res, next) {
    try {
      const id = req.params.id;
      const userId = req.user.id;
      const { status } = req.body;

      const orderToUpdate = await UserRide.findByPk(id, {
        include: [
          { model: Ride },
          { model: User, attributes: ["name", "email"] },
        ],
      });

      if (!orderToUpdate) {
        throw { name: "not_found" };
      }

      let details = {
        from: "ridetest321@gmail.com",
        to: orderToUpdate.User.email,
        subject: "Share-a-ride notification ",
      };

      if (status === "accepted") {
        details.text =
          "Share-a-ride ride is accepted, please complete the payment";
      } else if (status === "rejected") {
        details.text =
          "Share-a-ride ride is canceled by the driver, please book your new ride";
      }

      console.log(details.text);
      mailTransporter.sendMail(details, (err) => {
        if (err) console.log(err);
        else console.log("e-mail has sent");
      });

      if (orderToUpdate.Ride.createdBy !== userId) {
        throw { name: "invalid_user" };
      }

      const order = await UserRide.update(
        { status },
        {
          where: {
            [Op.and]: [{ id }, { status: "requested" }],
          },
          returning: true,
        }
      );

      const message = `Order request is ${status}`;
      res.status(200).json({ message });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getRequests(req, res, next) {
    try {
      const { id } = req.user;
      // console.log(id,"<<<<<");
      const ridesPerUser = await Ride.findAll({
        where: { createdBy: id },
        include: [
          {
            model: UserRide,
            where: {
              status: "requested",
            },
          },
        ],
      });
      res.status(200).json(ridesPerUser);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RideController;
