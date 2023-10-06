const router = require("express").Router();
const { authorizer } = require("../middlewares");

const productsControllers = require("../controllers/products");

module.exports = (db) => {
  router.post("/new", authorizer(), productsControllers.addProduct(db));
  router.get("/all", authorizer(), productsControllers.getProducts(db));

  return router;
};
