const {
  insertTransaction,
  selectTransactions,
  selectOneTransaction,
  updateTransaction,
  deleteTransaction,
} = require("./queries");

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

const getOneTransaction = (db) => async (id) => {
  try {
    const response = await db.query(selectOneTransaction(id));

    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("> One transaction selection error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const editTransaction =
  (db) =>
  async (
    transaction_date,
    transaction_type,
    product_id,
    transaction_quantity,
    id
  ) => {
    try {
      const response = await db.query(
        updateTransaction(
          transaction_date,
          transaction_type,
          product_id,
          transaction_quantity,
          id
        )
      );

      return {
        ok: true,
        response: response.rows,
      };
    } catch (error) {
      console.info("> Transaction update error: ", error.message);

      return {
        ok: false,
        message: error.message,
      };
    }
  };

const eliminateTransaction = (db) => async (id) => {
  try {
    await db.query(deleteTransaction(id));
    return {
      ok: true,
    };
  } catch (error) {
    console.info("> Transaction elimination error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createTransaction,
  getTransactions,
  getOneTransaction,
  editTransaction,
  eliminateTransaction,
};
