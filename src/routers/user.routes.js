import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/users.controllers.js';


const userRouter = Router();
//! si no esta logiado no puede ver los demoas  usuarios 
userRouter.get('/',getAllUsers);

userRouter.post('/', createUser);

userRouter.put('/:id', (req, res) => {
    res.status(501).json({ message: "Método no implementado" });
});
userRouter.delete('/:id', (req, res) => {
    res.status(501).json({ message: "Método no implementado" });
});



export default userRouter;

