const Sequelize = require("sequelize");
const db = require("../db");

const CartProducts = db.define("cart_products", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = CartProducts
