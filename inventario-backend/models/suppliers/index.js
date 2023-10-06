const {
  insertSupplier,
  selectSuppliers,
  selectOneSupplier,
  updateSupplier,
} = require("./queries");

const createSupplier =
  (db) => async (supplier_name, contact_sup, supplier_description) => {
    try {
      const supplier = await db.query(
        insertSupplier(supplier_name, contact_sup, supplier_description)
      );

      return {
        ok: true,
        data: supplier,
      };
    } catch (error) {
      console.info("> Supplier insertion error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

const getSuppliers = (db) => async () => {
  try {
    const response = await db.query(selectSuppliers());

    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("> Get suppliers error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const getOneSupplier = (db) => async (id) => {
  try {
    const response = await db.query(selectOneSupplier(id));

    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("> Get one supplier error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const updateSupplierInfo =
  (db) => async (supplier_name, contact_sup, supplier_description, id) => {
    try {
      const response = await db.query(
        updateSupplier(supplier_name, contact_sup, supplier_description, id)
      );

      return {
        ok: true,
        response: response.rows,
      };
    } catch (error) {
      console.info("> Update suppliers rows error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

module.exports = {
  createSupplier,
  getSuppliers,
  getOneSupplier,
  updateSupplierInfo,
};
