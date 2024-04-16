import axios from "../axios";
import { Product } from "../types/products";

export const getProducts = async () => {
  const response = await axios.get("/products");
  return response;
};
export const postProduct = async (product: Product) => {
  const response = await axios.post("/products", product);
  return response;
};

export const deleteProductRequest = async (id: number) => {
  const response = await axios.delete(`products/${id}`);
  return response;
};
