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
const selectOneSupplier = (id) => sql.unsafe`
      SELECT * FROM suppliers
      WHERE suppliers.id = ${id}
`;

module.exports = {
  insertSupplier,
  selectSuppliers,
  selectOneSupplier,
};
