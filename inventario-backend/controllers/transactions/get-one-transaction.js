const { getOneTransaction } = require("../../models/transactions");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const transaction = await getOneTransaction(await db)(id);

  if (!transaction.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: transaction.response,
  });
};
