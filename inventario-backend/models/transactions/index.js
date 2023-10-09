const { insertTransaction, selectTransactions } = require("./queries");

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

const getTransactions = (db) => async () => {
  try {
    const response = await db.query(selectTransactions());

    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("> Transactions selection error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createTransaction,
  getTransactions,
};
