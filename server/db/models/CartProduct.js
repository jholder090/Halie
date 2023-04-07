const Sequelize = require("sequelize");
const db = require("../db");

const CartProduct = db.define("cart_products", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT
  }
});

module.exports = CartProduct
