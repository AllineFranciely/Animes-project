import { Pool, ResultSetHeader } from 'mysql2/promise';
import Anime from '../Interfaces/Animes.interface';

export default class AnimeModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Anime[]> {
    const result = await this.connection
      .execute('SELECT * FROM animes');
    const [rows] = result;
    return rows as Anime[];
  }

  public async create(anime: Anime): Promise<Anime> {
    const { nome, temporadas, plataforma, situacao } = anime;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO animes (nome, temporadas, plataforma, situacao) VALUES (?, ?, ?, ?)',
      [nome, temporadas, plataforma, situacao],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...anime };
  }
}