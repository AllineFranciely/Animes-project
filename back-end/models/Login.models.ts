import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../Interfaces/Users.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection
      .execute('SELECT * FROM users');
    const [rows] = result;
    return rows as User[];
  }

  public async create(user: User): Promise<User> {
    const { nome, senha } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users (nome, senha) VALUES (?, ?)',
      [nome, senha],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}