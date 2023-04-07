const Sequelize = require("sequelize");
const db = require("../db");

const CartProduct = db.define("cart_products", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT
  }
});

module.exports = CartProduct
