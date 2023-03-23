//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Cart = require('./models/Cart');
const Product = require('./models/Product');
const Order = require('./models/Order');
const CartProducts = require('./models/CartProducts');
const OrderProducts = require('./models/OrderProducts');

// Associations
User.hasOne(Cart, {
  as: "userCart",
  foreignKey: "userId"
});
Cart.belongsTo(User, {
  as: "userCart",
  foreignKey: "userId"
});

User.hasMany(Order, {
  as: "userOrders",
  foreignKey: "userId"
});
Order.belongsTo(User, {
  as: "userOrders",
  foreignKey: "userId"
});

Cart.belongsToMany(Product, {
  as: "cartProducts",
  through: 'cart_products'
});
Product.belongsToMany(Cart, {
  as: "cartProducts",
  through: 'cart_products'
});

Order.belongsToMany(Product, {
  as: "orderProducts",
  through: 'order_products'
});
Product.belongsToMany(Order, {
  as: "orderProducts",
  through: 'order_products'
});





module.exports = {
  db,
  models: {
    User,
    Cart,
    Product,
    Order,
    CartProducts,
    OrderProducts
  },
};
