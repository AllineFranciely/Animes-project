import connection from '../models/connection';
import AnimesModel from '../models/Animes.models';
import Anime from '../Interfaces/Animes.interface';

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

export default AnimesService;
