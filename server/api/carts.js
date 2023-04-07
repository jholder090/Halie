const router = require("express").Router();
const {
  models: { User, Cart, Order, Product, CartProduct },
} = require("../db");
module.exports = router;

// CART GET SINGLE CART'S PRODUCTS
// api/cart/:id
router.get('/:id', async (req, res, next) => {
  try {
    const cart = await CartProduct.findAll({
      where: {cartId: req.params.id},
      // include: { model: Product}
    });
    res.json(cart)
  } catch (error) {
    next (error)
  }
})

// CUSTOMER POST PRODUCT TO CART /api/users/customer/:id
router.post('/customer/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      where: {
        role: "CUST"
      },
      include: {
        model: Cart,
        // as: "userCart",
        include: {
          model: Product,
          // as: "cartProducts"
        }
      },
    })
    const products = user.cart.products
    console.log("OLD API PRODUCTS", products)
    await products.push(req.body);
    console.log("NEW API PRODUCTS", products)
    res.send(products)
  } catch (error) {
    next(error)
  }
});
