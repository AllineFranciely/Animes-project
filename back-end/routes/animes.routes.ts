import { Router } from 'express';
import AnimesController from '../controllers/Animes.controller';
import validationAnime from '../middlewares/Animes.middleware';

const router = Router();

const animesController = new AnimesController();

router.get('/animes', animesController.getAll);
router.get('/animes/:id', animesController.getById);
router.post('/animes/', validationAnime, animesController.create);
router.put('/animes/:id', validationAnime, animesController.update);

export default router;