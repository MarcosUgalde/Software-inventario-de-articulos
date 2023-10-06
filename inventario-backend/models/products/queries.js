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

const selectProducts = () => sql.unsafe`
      SELECT * FROM products
`;

const selectOneProduct = (id) => sql.unsafe`
      SELECT * FROM products
      WHERE id = ${id}
`;

module.exports = {
  insertProduct,
  selectProducts,
  selectOneProduct,
};
