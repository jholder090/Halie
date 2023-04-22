const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;

// PRODUCTS GET /api/products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// SINGLE PRODUCT GET /api/products/:productId
router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    console.log("API SINGLE PRODUCT", product)
    res.json(product);
  } catch (err) {
    next(err);
  }
});


