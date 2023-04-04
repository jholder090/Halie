const router = require("express").Router();
const {
  models: { User, Cart, Order, Product },
} = require("../db");
module.exports = router;



// USERS GET /api/carts
router.get("/", async (req, res, next) => {
  try {
    const carts = await Cart.findAll({
    });
    res.json(carts);
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

// CUSTOMERS GET /api/users/customer/:id
// includes all Cart/Order/Product information for particular user
router.get("/customer/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      where: {
        role: "CUST"
      },
      include: [{
        model: Cart,
        // as: "userCart",
        include: {
          model: Product,
          // as: "cartProducts"
        }
      },
      {
        model: Order,
        // as: "userOrders",
        include: {
          model: Product,
          // as: "orderProducts"
        }
      }]
    });
    res.json(user);
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
