export const getProduct = (client) => async () => {
  try {
    const { data: response } = await client.get("/products/all");
    console.info("> Products info: ", response);
    return response.data;
  } catch (error) {
    console.info("> Products info error: ", error.message);
    return null;
  }
};

export const addProduct = (client) => async (params) => {
  try {
    const { data } = await client.post("/products/new", params);
    console.info("> Product insertion info: ", data);
    return data;
  } catch (error) {
    console.info("> Product insertion error: ", error.message);
    return { success: false };
  }
};

export const editProduct = (client) => async (params) => {
  try {
    const { data } = await client.put("/id", params);
    console.info("> Product successfully updated: ", data);
    return data;
  } catch (error) {
    console.info("> Product update error: ", error.message);
    return { success: false };
  }
};
