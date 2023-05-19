const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  total: {
    type: Sequelize.FLOAT,
    // allowNull: false
  }
});

module.exports = Cart
