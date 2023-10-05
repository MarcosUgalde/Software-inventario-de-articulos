const router = require("express").Router();
const { authorizer } = require("../middlewares");

const suppliersControllers = require("../controllers/suppliers");

module.exports = (db) => {
  router.post("/new", authorizer(), suppliersControllers.addSupplier(db));

  return router;
};
