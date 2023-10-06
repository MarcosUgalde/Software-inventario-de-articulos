const { insertProduct, selectProducts } = require("./queries");

const createProduct =
  (db) =>
  async (
    product_name,
    product_description,
    product_quantity,
    _supplier_product_name,
    supplier_id
  ) => {
    try {
      const product = await db.query(
        insertProduct(
          product_name,
          product_description,
          product_quantity,
          _supplier_product_name,
          supplier_id
        )
      );
      return {
        ok: true,
        data: product,
      };
    } catch (error) {
      console.info("> Create product error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

const getProducts = (db) => async () => {
  try {
    const response = await db.query(selectProducts());

    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("> Products selection error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createProduct,
  getProducts,
};
