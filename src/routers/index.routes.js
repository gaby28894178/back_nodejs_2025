import { Router } from "express";
import articulosRouter from './articulos.routes.js';
import userRouter from './user.routes.js';

const managerRouter = Router();

managerRouter.use('/articulos', articulosRouter);
managerRouter.use('/users', userRouter);

export default managerRouter;