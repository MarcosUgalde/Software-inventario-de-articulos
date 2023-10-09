const { getTransactions } = require("../../models/transactions");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const transactions = await getTransactions(await db)();

  if (!transactions.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: transactions.response,
  });
};
