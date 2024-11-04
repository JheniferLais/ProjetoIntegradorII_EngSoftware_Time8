import { Router } from 'express';
import { carteiraHandler } from '../controllers/WalletController';
import { tokenUtils } from "../utils/TokenUtils";

const route: Router = Router();

route.post('/addFunds/:id', tokenUtils.checkToken, carteiraHandler.addFunds);
route.post('/withdrawFunds/:id', tokenUtils.checkToken, carteiraHandler.withdrawFunds);

export default route;