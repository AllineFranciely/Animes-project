import { Router } from 'express';
import AnimesController from '../controllers/Animes.controller';

const router = Router();

const animesController = new AnimesController();

router.get('/animes', animesController.getAll);

export default router;