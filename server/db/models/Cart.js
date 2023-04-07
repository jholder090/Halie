const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total: {
    type: Sequelize.FLOAT,
    // allowNull: false
  }
});

module.exports = Cart
