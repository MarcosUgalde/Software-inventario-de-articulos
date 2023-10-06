const { insertTransaction } = require("./queries");

const createTransaction =
  (db) => async (transaction_type, product_id, transaction_quantity) => {
    try {
      const transaction = await db.query(
        insertTransaction(transaction_type, product_id, transaction_quantity)
      );

      return {
        ok: true,
        data: transaction,
      };
    } catch (error) {
      console.info("> Transaction insertion error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

module.exports = {
  createTransaction,
};
