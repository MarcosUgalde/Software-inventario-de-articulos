export const infoSuppliers = (client) => async () => {
  try {
    const { data: response } = await client.get("/suppliers/all");
    console.info("> Suppliers info: ", response);
    return response.data;
  } catch (error) {
    console.info("Info suppliers error: ", error.message);
    return null;
  }
};
