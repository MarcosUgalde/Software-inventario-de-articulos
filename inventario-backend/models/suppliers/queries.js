const { sql } = require("slonik");

const insertSupplier = (
  supplier_name,
  contact_sup,
  supplier_description
) => sql.unsafe`
    INSERT INTO suppliers (
        supplier_name, contact_sup, supplier_description
    ) VALUES (
        ${supplier_name}, ${contact_sup}, ${supplier_description}
    )
`;

const selectSuppliers = () => sql.unsafe`
      SELECT * FROM suppliers
`;

module.exports = {
  insertSupplier,
  selectSuppliers,
};
