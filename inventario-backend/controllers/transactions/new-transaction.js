const { createTransaction } = require("../../models/transactions");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { transaction_type, product_id, transaction_quantity } = req.body;

  const newTransaction = await createTransaction(await db)(
    transaction_type,
    product_id,
    transaction_quantity
  );

  if (!newTransaction) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};
