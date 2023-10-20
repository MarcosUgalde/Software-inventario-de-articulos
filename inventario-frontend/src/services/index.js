import axios from "axios";
import { register, logout, signin } from "./auth";
import { info } from "./user";
import {
  getProduct,
  addProduct,
  editProduct,
  getOneProduct,
  deleteProduct,
} from "./products";
import {
  infoSuppliers,
  infoOneSupplier,
  insertSupplier,
  editSupplier,
} from "./suppliers";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  signin: signin(client),
  logout: logout(client),
};

const user = {
  info: info(client),
};

const products = {
  getProducts: getProduct(client),
  getOneProduct: getOneProduct(client),
  addProduct: addProduct(client),
  editProduuct: editProduct(client),
  deleteProduct: deleteProduct(client),
};

const suppliers = {
  getSuppliers: infoSuppliers(client),
  getOneSupplier: infoOneSupplier(client),
  addSupplier: insertSupplier(client),
  updateSupplier: editSupplier(client),
};

export { auth, user, products, suppliers };
