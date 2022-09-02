import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AnimesService from '../services/Animes.service';

class AnimesController {
    constructor(private animesService = new AnimesService()) { } 

    public getAll = async (_req: Request, res: Response) => {
        const animes = await this.animesService.getAll();
        res.status(StatusCodes.OK).json(animes);
    };
}

export default AnimesController;