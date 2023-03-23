const router = require("express").Router();
const {
  models: { User, Cart, Order },
} = require("../db");
const Product = require("../db/models/Product");
module.exports = router;

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send("Access denied");
    }
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

// USERS GET /api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});


// CUSTOMERS GET /api/users/customers
// includes all Cart/Order/Product information
router.get("/customers", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        role: "CUST"
      },
      include: [{
        model: Cart,
        as: "userCart",
        include: {
          model: Product,
          as: "cartProducts"
        }
      },
      {
        model: Order,
        as: "userOrders",
        include: {
          model: Product,
          as: "orderProducts"
        }
      }]
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// ADMIN GET /api/users/admin
router.get("/admin", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        role: "ADMIN"
      }
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
