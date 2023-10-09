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

const selectTransactions = () => sql.unsafe`
      SELECT * FROM transactions
`;

const selectOneTransaction = (id) => sql.unsafe`
      SELECT * FROM transactions
      WHERE id = ${id}
`;

module.exports = {
  insertTransaction,
  selectTransactions,
  selectOneTransaction,
};
