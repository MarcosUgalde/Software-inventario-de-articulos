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

export const infoOneSupplier = (client) => async (id) => {
  try {
    const { data: response } = await client.get(`/suppliers/:${id}`);
    console.info("> SUpplier info: ", response);
    return response.data;
  } catch (error) {
    console.info("Supplier info error: ", error.message);
    return null;
  }
};
