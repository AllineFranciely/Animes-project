import { Router } from 'express';
import LoginController from '../controllers/Login.controller';

const router = Router();

const loginController = new LoginController();

router.get('/login', loginController.getAll);

export default router;