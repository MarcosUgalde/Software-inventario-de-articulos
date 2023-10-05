const router = require("express").Router();

const authRoutes = require("./auth");
const usersRoutes = require("./users");
const suppliersRoutes = require("./suppliers");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/user", usersRoutes());
  router.use("/suppliers", suppliersRoutes(db));

  return router;
};
