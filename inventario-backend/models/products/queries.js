const { sql } = require("slonik");

const insertProduct = (
  product_name,
  product_description,
  product_quantity,
  _supplier_product_name,
  supplier_id
) => sql.unsafe`
    INSERT INTO products (
        product_name, product_description, product_quantity, _supplier_product_name, supplier_id
    ) VALUES (
        ${product_name}, ${product_description}, ${product_quantity}, ${_supplier_product_name}, ${supplier_id}
    )
`;

module.exports = {
  insertProduct,
};
