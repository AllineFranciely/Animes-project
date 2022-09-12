import connection from '../models/connection';
import AnimesModel from '../models/Animes.models';
import Anime from '../Interfaces/Animes.interface';
import { NotFoundError } from 'restify-errors';

class AnimesService {
    public model: AnimesModel;

    constructor() {
        this.model = new AnimesModel(connection);
    }

    public async getAll(): Promise<Anime[]> {
        const animes = await this.model.getAll();
        return animes;
    }

    public async getById(id: number): Promise<Anime> {
        const anime = await this.model.getById(id);
        return anime;
    }

    public create(anime: Anime): Promise<Anime> {
        return this.model.create(anime);
    }

    public async update(id: number, anime: Anime): Promise<void> {
        const animeFound = await this.model.getById(id);
        if (!animeFound) {
            throw new NotFoundError('NotFoundError');
        }

        return this.model.update(id, anime);
    }
}

export default AnimesService;
