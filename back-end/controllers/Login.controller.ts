import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/Login.service';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.loginService.getAll();
    res.status(StatusCodes.OK).json(users);
  };
}

export default LoginController;