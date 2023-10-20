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
    const { data: response } = await client.get(`/suppliers/${id}`);
    console.info("> SUpplier info: ", response);
    return response.data;
  } catch (error) {
    console.info("Supplier info error: ", error.message);
    return null;
  }
};
export const insertSupplier = (client) => async (params) => {
  try {
    const { data } = await client.post("/suppliers/new", params);
    console.info("Supplier insertion completed: ", data);
    return data;
  } catch (error) {
    console.info("Insert supplier service error: ", error.message);
    return { success: false };
  }
};

export const editSupplier = (client) => async (params) => {
  try {
    const { data } = await client.put(`suppliers/${params.supplierId}`, params);
    console.info("Supplier update completed: ", data);
    return data;
  } catch (error) {
    console.info("Update supplier service error: ", error.message);
    return { success: false };
  }
};

export const deleteSupplier = (client) => async (params) => {
  try {
    const { data } = await client.delete(`suppliers/${params}`, params);
    console.info("Suppliers delete completed");
    return data;
  } catch (error) {
    console.info("Delete supplier service error: ", error.message);
    return { success: false };
  }
};
