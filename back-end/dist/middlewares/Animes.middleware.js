"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const properties = ['id', 'nome', 'temporadas', 'plataforma', 'situacao'];
function validateProperties(anime) {
    for (let i = 0; i < properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(anime, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
}
function validateValues(anime) {
    const entries = Object.entries(anime);
    for (let i = 0; i < entries.length; i += 1) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validationAnime(req, res, next) {
    const anime = req.body;
    let [valid, property] = validateProperties(anime);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(`O campo ${property} é obrigatório.`);
    }
    [valid, property] = validateValues(anime);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(`O campo ${property} não pode ser nulo ou vazio.`);
    }
    next();
}
exports.default = validationAnime;
