'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ride extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ride.hasMany(models.UserRide, {
        foreignKey: "RideId",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      })
      Ride.belongsTo(models.Vehicle)
    }
  }
  Ride.init({
    startLocation: DataTypes.STRING,
    destination: DataTypes.STRING,
    departureTime: DataTypes.DATE,
    arivalTime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    seats: DataTypes.INTEGER,
    VehicleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ride',
  });
  return Ride;
};