"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class AnimeModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM animes');
            const [rows] = result;
            return rows;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('SELECT * FROM animes WHERE id=?', [id]);
            const [rows] = result;
            const [anime] = rows;
            return anime;
        });
    }
    create(anime) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, temporadas, plataforma, situacao } = anime;
            const result = yield this.connection.execute('INSERT INTO animes (nome, temporadas, plataforma, situacao) VALUES (?, ?, ?, ?)', [nome, temporadas, plataforma, situacao]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, anime);
        });
    }
    update(id, anime) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, temporadas, plataforma, situacao } = anime;
            yield this.connection.execute('UPDATE animes SET nome=?, temporadas=?, plataforma=?, situacao=? WHERE id=?', [nome, temporadas, plataforma, situacao, id]);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute('DELETE FROM animes WHERE id=?', [id]);
        });
    }
}
exports.default = AnimeModel;
