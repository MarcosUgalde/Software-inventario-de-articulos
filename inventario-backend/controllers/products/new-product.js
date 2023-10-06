const { createProduct } = require("../../models/products");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const {
    product_name,
    product_description,
    product_quantity,
    _supplier_product_name,
    supplier_id,
  } = req.body;

  const newProduct = await createProduct(await db)(
    product_name,
    product_description,
    product_quantity,
    _supplier_product_name,
    supplier_id
  );

  if (!newProduct.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};
