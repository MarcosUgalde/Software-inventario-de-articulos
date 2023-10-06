const { updateSupplierInfo } = require("../../models/suppliers");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const { supplier_name, contact_sup, supplier_description } = req.body;
  const supplier = await updateSupplierInfo(await db)(
    supplier_name,
    contact_sup,
    supplier_description,
    id
  );

  if (!supplier) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: supplier.data,
  });
};
