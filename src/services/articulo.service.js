// services
import { getAllProducts, saveProduct } from "../models/articulo.models.js";

const getAll = async () => {
  return await getAllProducts();
};
const createProduct = async (product) => {
  return await saveProduct(product);
};

export default { getAll, createProduct };