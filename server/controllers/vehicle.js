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
      if (
        type === vehicleToUpdate.type &&
        plateNumber === vehicleToUpdate.plateNumber
      ) {
        throw { name: "no_change" };
      }

      await Vehicle.update({
        type,
        plateNumber,
      });

      const message = `Edit success`;
      res.status(200).json({ message });
    } catch (error) {
      next(error);
    }
  }

  static async deleteVehicle(req, res, next) {
    try {
      const userId = req.user.id;
      const { id } = req.params;

      const vehicleToUpdate = await Vehicle.findByPk(id);

      if (!vehicleToUpdate) {
        throw { name: "not_found" };
      }
      if (
        type === vehicleToUpdate.type &&
        plateNumber === vehicleToUpdate.plateNumber
      ) {
        throw { name: "no_change" };
      }

      await Vehicle.destroy({ where: { id } });

      const message = `Vehicle deleted`;
      res.status(200).json({ message });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = VehicleController;
