const { sql } = require("slonik");

const insertTransaction = (
  transaction_type,
  product_id,
  transaction_quantity
) => sql.unsafe`
    INSERT INTO transactions (
        transaction_type, product_id, transaction_quantity
    ) VALUES (
        ${transaction_type}, ${product_id}, ${transaction_quantity}
    )
`;

module.exports = {
  insertTransaction,
};
