//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Cart = require('./models/Cart');
const Product = require('./models/Product');
const Order = require('./models/Order');
const CartProducts = require('./models/CartProducts');
const OrderProducts = require('./models/OrderProducts');

// Associations
User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Cart.belongsToMany(Product, {
  through: 'cart_products'
});
Product.belongsToMany(Cart, {
  through: 'cart_products'
});

Order.belongsToMany(Product, {
  through: 'order_products'
});
Product.belongsToMany(Order, {
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
