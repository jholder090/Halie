const {
  db,
  models: { User, Cart, Product, Order, CartProducts, OrderProducts },
} = require("../server/db");



/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // **********************************

  console.log("USER MAGIC METHODS: ", Object.keys(User.prototype));
  console.log("CART MAGIC METHODS: ", Object.keys(Cart.prototype));
  console.log("PRODUCT MAGIC METHODS: ", Object.keys(Product.prototype));
  console.log("ORDER MAGIC METHODS: ", Object.keys(Order.prototype));

  // **********************************

  const halie = await User.create({
    role: "ADMIN",
    firstName: "Halie",
    lastName: "Carley",
    email: "halie@gmail.com",
    password: "123"
  })

  const joe = await User.create({
    role: "CUST",
    firstName: "Joe",
    lastName: "Holder",
    email: "joe@gmail.com",
    password: "123"
  })

  const des = await User.create({
    role: "CUST",
    firstName: "Des",
    lastName: "Holder",
    email: "des@gmail.com",
    password: "123"
  })

  console.log(`users seeded successfully`);

  // ******************************************

  const joeCart = await Cart.create({
    userId: 2,
    total: 125.88
  });

  const desCart = await Cart.create({
    userId: 3,
    total: 127.87
  })

  console.log(`carts seeded successfully`);

  // ******************************************

  const products = [
    {
      name: "Hand Lotion",
      description: "Great for moistening dried and cracking skin.",
      price: 12.99,
      quantity: 50,
      imageUrl: 'https://i.postimg.cc/9Mw08wks/lotion.png'
    },
    {
      name: "Eye cream",
      description: "Get rid of those bags under your eyes.",
      price: 9.99,
      quantity: 30,
      imageUrl: 'https://i.postimg.cc/9Mw08wks/lotion.png'
    },
    {
      name: "Vitamin E Oil",
      description: "Heals scars and blemishes.",
      price: 7.99,
      quantity: 25,
      imageUrl: 'https://i.postimg.cc/9Mw08wks/lotion.png'
    }
  ]

  await Promise.all(products.map(product => Product.create(product)));

  console.log(`products seeded successfully`);

  // ******************************************

  const joeOrder1 = await Order.create({
    userId: 2,
    invoiceNum: "A23G5RT09BA",
    total: 174.85,
    dateTimeGroup: '2023-01-18 16:33:12z'
  })

  const joeOrder2 = await Order.create({
    userId: 2,
    invoiceNum: "B85TY45DV12",
    total: 154.87,
    dateTimeGroup: '2023-02-21 12:30:33z'
  })

  const desOrder1 = await Order.create({
    userId: 3,
    invoiceNum: "QR09H6G78DL",
    total: 87.90,
    dateTimeGroup: '2023-03-12 09:45:22z'
  })

  console.log(`orders seeded successfully`);

  // **************************************

  const cartProducts = [
    {
      cartId: 1,
      productId: 1,
      quantity: 4,
      price: products[0].price * 4
    },
    {
      cartId: 1,
      productId: 2,
      quantity: 5,
      price: products[1].price * 5
    },
    {
      cartId: 1,
      productId: 3,
      quantity: 3,
      price: products[2].price * 3
    },
    {
      cartId: 2,
      productId: 1,
      quantity: 2,
      price: products[0].price * 2
    },
    {
      cartId: 2,
      productId: 2,
      quantity: 7,
      price: products[1].price * 7
    },
    {
      cartId: 2,
      productId: 3,
      quantity: 4,
      price: products[2].price * 4
    }
  ]

  await Promise.all(cartProducts.map(cartProduct => CartProducts.create(cartProduct)));

  console.log(`cartProducts seeded successfully`);

  // **************************************

  const orderProducts = [
    {
      orderId: 1,
      productId: 1,
      quantity: 11,
      price: products[0].price * 11
    },
    {
      orderId: 1,
      productId: 3,
      quantity: 4,
      price: products[2].price * 4
    },
    {
      orderId: 2,
      productId: 1,
      quantity: 9,
      price: products[0].price * 9
    },
    {
      orderId: 2,
      productId: 2,
      quantity: 3,
      price: products[1].price * 3
    },
    {
      orderId: 2,
      productId: 3,
      quantity: 1,
      price: products[2].price
    },
    {orderId: 3,
      productId: 2,
      quantity: 4,
      price: products[1].price * 4
    },
    {
      orderId: 3,
      productId: 3,
      quantity: 6,
      price: products[2].price * 6
    },
  ]

  await Promise.all(orderProducts.map(orderProduct => OrderProducts.create(orderProduct)));

  console.log(`orderProducts seeded successfully`);
}

/*
   We've separated the `seed` function from the `runSeed` function.
   This way we can isolate the error handling and exit trapping.
   The `seed` function is concerned only with modifying the database.
  */
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
    Execute the `seed` function, IF we ran this module directly (`node seed`).
    `Async` functions always return a promise, so we can use `catch` to handle
    any errors that might occur inside of `seed`.
  */
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
