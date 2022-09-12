import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AnimesService from '../services/Animes.service';

class AnimesController {
    constructor(private animesService = new AnimesService()) { } 

    public getAll = async (_req: Request, res: Response) => {
        const animes = await this.animesService.getAll();
        res.status(StatusCodes.OK).json(animes);
    };

    public getById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const anime = await this.animesService.getById(id);
    
        if (!anime) {
          return res.status(StatusCodes.NOT_FOUND)
            .json({ message: 'Anime not found!'});
        }
    
        res.status(StatusCodes.OK).json(anime);
      }

      public create = async (req: Request, res: Response) => {
        const anime = req.body;
    
        const animeCreated = await this.animesService.create(anime);
        res.status(StatusCodes.CREATED).json(animeCreated);
      };
}

export default AnimesController;