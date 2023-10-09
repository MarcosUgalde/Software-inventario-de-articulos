const router = require("express").Router();
const { authorizer } = require("../middlewares");

const transactionsControllers = require("../controllers/transactions");

module.exports = (db) => {
  router.post("/new", authorizer(), transactionsControllers.addTransaction(db));
  router.get("/all", authorizer(), transactionsControllers.getTransactions(db));
  router.get(
    "/:id",
    authorizer(),
    transactionsControllers.getOneTransaction(db)
  );
  router.put(
    "/:id",
    authorizer(),
    transactionsControllers.updateTransaction(db)
  );
  router.delete(
    "/:id",
    authorizer(),
    transactionsControllers.deleteTransaction(db)
  );

  return router;
};
