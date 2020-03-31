import express from 'express';
import { addPlayer, getAll } from '../controllers/userController';
let userRouter = express.Router();

//userRouter.post('/', addPlayer);
userRouter.get('/', getAll);
export default userRouter;