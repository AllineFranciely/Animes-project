import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Anime from '../Interfaces/Animes.interface';

const properties = ['id', 'nome', 'temporadas', 'plataforma', 'situacao'];

function validateProperties(anime: Anime): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(anime, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(anime: Anime): [boolean, string | null] {
  const entries = Object.entries(anime);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validationAnime(req: Request, res: Response, next: NextFunction) {
  const anime: Anime = req.body;

  let [valid, property] = validateProperties(anime);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(anime);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  next();
}

export default validationAnime;