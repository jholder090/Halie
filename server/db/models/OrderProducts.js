const Sequelize = require("sequelize");
const db = require("../db");

const OrderProducts = db.define("order_products", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = OrderProducts
