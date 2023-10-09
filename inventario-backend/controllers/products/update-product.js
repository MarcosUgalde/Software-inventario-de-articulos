const { editProduct } = require("../../models/products");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const {
    product_name,
    product_description,
    product_quantity,
    _supplier_product_name,
  } = req.body;

  const product = await editProduct(await db)(
    product_name,
    product_description,
    product_quantity,
    _supplier_product_name,
    id
  );

  if (!product.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: product.response,
  });
};
