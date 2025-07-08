// model
import { dbProductos, appProductos, dbUsuarios, appUsuarios } from "../config/db.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const articulosCollection = collection(dbProductos, "articulos");

export const getAllProducts = async () => {
  try {
    const productList = await getDocs(articulosCollection);
    const products = [];
    productList.forEach((doc) => {
      const productData = doc.data();
      products.push({
        id: doc.id,
        ...productData,
        createdAt: productData.createdAt?.toDate(),
        updatedAt: productData.updatedAt?.toDate()
      });
    });
    return products;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw new Error(`Error al obtener productos: ${error.message}`);
  }
};

export const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(articulosCollection, {
      ...product,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return { id: newProduct.id, ...product };
  } catch (error) {
    console.error('Error al crear producto:', error);
    throw new Error(`Error al crear producto: ${error.message}`);
  }
};