const { getSuppliers } = require("../../models/suppliers");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const suppliers = await getSuppliers(await db)();

  if (!suppliers.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: suppliers.response,
  });
};
