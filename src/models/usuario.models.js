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

const usuarioCollection = collection(dbProductos, "usuario");

export const getAllUsers = async () => {
    try {
        const userList = await getDocs(usuarioCollection);
        const users = [];
        userList.forEach((doc) => {
          const userData = doc.data();
          users.push({
            id: doc.id,
            ...userData,
            createdAt: userData.createdAt?.toDate(),
            updatedAt: userData.updatedAt?.toDate()
          });
        });
        return users;
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw new Error(`Error al obtener usuarios: ${error.message}`);
      }
    }

    export const saveUser = async (user) => {
      try {
        const newUser = await addDoc(usuarioCollection, {
          ...user,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        return { id: newUser.id, ...user };
      } catch (error) {
        console.error('Error al crear usuario:', error);
        throw new Error(`Error al crear usuario: ${error.message}`);
      }
    }
    