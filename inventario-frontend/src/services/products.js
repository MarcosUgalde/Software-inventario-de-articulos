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
