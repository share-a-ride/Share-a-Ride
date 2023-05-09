const { where } = require("sequelize");
const { Vehicle } = require("../models");

class VehicleController {
  static async createVehicle(req, res, next) {
    try {
      const userId = req.user.id;
      const { type, plateNumber } = req.body;
      await Vehicle.create({
        type,
        plateNumber,
        UserId: userId,
      });

      const message = `Vehicle ${type} is registered successfully`;
      res.status(201).json({ message });
    } catch (error) {
      next(error);
    }
  }

  static async editVehicle(req, res, next) {
    try {
      const userId = req.user.id;
      const { type, plateNumber } = req.body;
      const { id } = req.params;

      const vehicleToUpdate = await Vehicle.findByPk(id);

      if (!vehicleToUpdate) {
        throw { name: "not_found" };
      }

      await Vehicle.update(
        {
          id,
          type,
          plateNumber,
          UserId: userId,
        },
        { where: { id } }
      );

      const message = `Edit success`;
      res.status(200).json({ message });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async deleteVehicle(req, res, next) {
    try {
      // const userId = req.user.id;
      const { id } = req.params;
      // console.log("masuk");
      const vehicleToDelete = await Vehicle.findByPk(id);

      if (!vehicleToDelete) {
        throw { name: "not_found" };
      }

      await Vehicle.destroy({ where: { id } });

      const message = `Vehicle deleted`;
      res.status(200).json({ message });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }
}

module.exports = VehicleController;
