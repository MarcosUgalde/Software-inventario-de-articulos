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

export const addProduct =
  (client) =>
  async ({ payload }) => {
    try {
      const { data } = await client.post("/product/new", payload);
      console.info("> Product insertion info: ", data);
      return data;
    } catch (error) {
      console.info("> Product insertion error: ", error.message);
      return { success: false };
    }
  };
