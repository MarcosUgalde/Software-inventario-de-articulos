const { editTransaction } = require("../../models/transactions");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const {
    transaction_date,
    transaction_type,
    product_id,
    transaction_quantity,
  } = req.body;
  const transaction = await editTransaction(await db)(
    transaction_date,
    transaction_type,
    product_id,
    transaction_quantity,
    id
  );

  if (!transaction.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};
