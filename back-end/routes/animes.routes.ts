import { Router } from 'express';
import AnimesController from '../controllers/Animes.controller';

const router = Router();

const animesController = new AnimesController();

router.get('/animes', animesController.getAll);
router.get('/animes/:id', animesController.getById);

export default router;