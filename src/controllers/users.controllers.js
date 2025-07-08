// controller

import usuarioService from "../services/usuario.service.js";
import { verifyJWT } from "../utils/verifyJWT.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
  try {

    const users = await usuarioService.getAll();
    res.status(200).json({ message: "Lista de usuarios", payload: users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

export  const createUser = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    
    // Validar campos requeridos
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: "nombre, email y password son requeridos" });
    }

    const hash = bcrypt.hashSync(password, 10);

    const newUser = {
      nombre,
      email,
      password: hash,
    };

    await usuarioService.createUser(newUser);
    res.status(201).json({ message: "Usuario creado", payload: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

// export default { getAllUsers, createUser };