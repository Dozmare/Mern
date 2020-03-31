import express from 'express';
import { addPlayer, getAll } from '../controllers/playerController';
let playerRouter = express.Router();

playerRouter.post('/', addPlayer);
playerRouter.get('/', getAll);
export default playerRouter;
