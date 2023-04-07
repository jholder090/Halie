const router = require("express").Router();
const {
  models: { User, Cart, Order, Product, CartProduct },
} = require("../db");
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
        // as: "userCart",
        include: {
          model: Product,
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

// CUSTOMER POST PRODUCT TO CART /api/users/customer/:id
// router.post('/customer/:id', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id, {
//       where: {
//         role: "CUST"
//       },
//       include: {
//         model: Cart,
//         // as: "userCart",
//         include: {
//           model: Product,
//           // as: "cartProducts"
//         }
//       },
//     })
//     const products = user.cart.products
//     console.log("OLD API PRODUCTS", products)
//     await products.push(req.body);
//     console.log("NEW API PRODUCTS", products)
//     res.send(products)
//   } catch (error) {
//     next(error)
//   }
// });

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
