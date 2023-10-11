import axios from "axios";
import { register, logout, signin } from "./auth";
import { info } from "./user";
import { getProduct } from "./products";

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
};

export { auth, user, products };
