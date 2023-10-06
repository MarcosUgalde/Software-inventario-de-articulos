const router = require("express").Router();

const authRoutes = require("./auth");
const usersRoutes = require("./users");
const suppliersRoutes = require("./suppliers");
const productsRoutes = require("./products");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/user", usersRoutes());
  router.use("/suppliers", suppliersRoutes(db));
  router.use("/products", productsRoutes(db));

  return router;
};
