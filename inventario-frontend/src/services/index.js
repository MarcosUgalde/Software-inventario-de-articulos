import axios from "axios";
import { register, logout, signin } from "./auth";
import { info } from "./user";
import { getProduct, addProduct, editProduct, getOneProduct } from "./products";
import { infoSuppliers, infoOneSupplier, insertSupplier } from "./suppliers";

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
  getOnseProduct: getOneProduct(client),
  addProduct: addProduct(client),
  editProduuct: editProduct(client),
};

const suppliers = {
  getSuppliers: infoSuppliers(client),
  getOneSupplier: infoOneSupplier(client),
  addSupplier: insertSupplier(client),
};

export { auth, user, products, suppliers };
