const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  invoiceNum: {
    type: Sequelize.STRING,
    allowNull: false
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  dateTimeGroup: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = Order
