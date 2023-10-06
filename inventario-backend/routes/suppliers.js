const router = require("express").Router();
const { authorizer } = require("../middlewares");

const suppliersControllers = require("../controllers/suppliers");

module.exports = (db) => {
  router.post("/new", authorizer(), suppliersControllers.addSupplier(db));
  router.get("/all", authorizer(), suppliersControllers.getSuppliers(db));

  return router;
};
