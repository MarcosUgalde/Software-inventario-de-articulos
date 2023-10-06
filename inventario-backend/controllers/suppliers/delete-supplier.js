const { eliminateSupplier } = require("../../models/suppliers");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;

  const elimination = await eliminateSupplier(await db)(id);

  if (!elimination.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};
