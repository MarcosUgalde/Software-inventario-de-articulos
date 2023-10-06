const { getOneSupplier } = require("../../models/suppliers");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const supplier = await getOneSupplier(await db)(id);

  if (!supplier.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: supplier.response,
  });
};
