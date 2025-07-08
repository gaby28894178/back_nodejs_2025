// services
import { getAllUsers, saveUser } from "../models/usuario.models.js";

const getAll = async () => {
  return await getAllUsers();
};

const createUser = async (user) => {
  return await saveUser(user);
};

export default { getAll, createUser };