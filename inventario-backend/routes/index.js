const router = require("express").Router();

const authRoutes = require("./auth");
const usersRoutes = require("./users");
const suppliersRoutes = require("./suppliers");
const productsRoutes = require("./products");
const transactionsRoutes = require("./transactions");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/user", usersRoutes());
  router.use("/suppliers", suppliersRoutes(db));
  router.use("/products", productsRoutes(db));
  router.use("/transactions", transactionsRoutes(db));

  return router;
};
