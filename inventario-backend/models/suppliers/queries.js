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

const updateSupplier = (
  supplier_name,
  contact_sup,
  supplier_description,
  id
) => sql.unsafe`
      UPDATE suppliers
      SET supplier_name = ${supplier_name},
      contact_sup = ${contact_sup},
      supplier_description = ${supplier_description}
      WHERE suppliers.id = ${id}
`;

module.exports = {
  insertSupplier,
  selectSuppliers,
  selectOneSupplier,
  updateSupplier,
};
