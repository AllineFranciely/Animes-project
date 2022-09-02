import connection from '../models/connection';
import LoginModel from '../models/Login.models';
import User from '../Interfaces/Users.interface';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }
}

export default LoginService;