import { Router } from "express";
import controller from "../controllers/articulo.controllers.js";

const articulosRouter = Router();

// Obtener todos los productos
articulosRouter.get('/', controller.getProducts);

// Crear un nuevo producto
articulosRouter.post('/', controller.createProduct);

// Actualizar un producto
articulosRouter.put('/:id', (req, res) => {
    res.status(501).json({ message: "Método no implementado" });
});

// Eliminar un producto
articulosRouter.delete('/:id', (req, res) => {
    res.status(501).json({ message: "Método no implementado" });
});

export default articulosRouter;
