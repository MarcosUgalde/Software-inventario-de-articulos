const router = require("express").Router();
const { authorizer } = require("../middlewares");

const transactionsControllers = require("../controllers/transactions");

module.exports = (db) => {
  router.post("/new", authorizer(), transactionsControllers.addTransaction(db));
  router.get("/all", authorizer(), transactionsControllers.getTransactions(db));

  return router;
};
