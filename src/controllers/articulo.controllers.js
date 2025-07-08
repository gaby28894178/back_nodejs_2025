// controller
import articuloService from "../services/articulo.service.js";

const getProducts = async (req, res) => {
  try {
    const products = await articuloService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;
    
    // Validar campos requeridos
    if (!nombre || !precio) {
      return res.status(400).json({ message: "nombre y precio son requeridos" });
    }

    // Validar que precio sea un número
    const precioNum = parseFloat(precio);
    if (isNaN(precioNum)) {
      return res.status(400).json({ message: "precio debe ser un número" });
    }

    const newProduct = {
      nombre,
      precio: precioNum,
      disponible: disponible || false,
    };

    await articuloService.createProduct(newProduct);
    res.status(201).json({ message: "Producto creado", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

export default { getProducts, createProduct };