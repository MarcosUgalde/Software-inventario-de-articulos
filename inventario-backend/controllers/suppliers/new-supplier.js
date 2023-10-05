const { createSupplier } = require("../../models/suppliers");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { supplier_name, contact_sup, supplier_description } = req.body;

  const newSupplier = await createSupplier(await db)(
    supplier_name,
    contact_sup,
    supplier_description
  );
  console.log(newSupplier.data);

  if (!newSupplier.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};
