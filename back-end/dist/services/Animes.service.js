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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const Animes_models_1 = __importDefault(require("../models/Animes.models"));
const restify_errors_1 = require("restify-errors");
class AnimesService {
    constructor() {
        this.model = new Animes_models_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const animes = yield this.model.getAll();
            return animes;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const anime = yield this.model.getById(id);
            return anime;
        });
    }
    create(anime) {
        return this.model.create(anime);
    }
    update(id, anime) {
        return __awaiter(this, void 0, void 0, function* () {
            const animeFound = yield this.model.getById(id);
            if (!animeFound) {
                throw new restify_errors_1.NotFoundError('NotFoundError');
            }
            return this.model.update(id, anime);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const animeFound = yield this.model.getById(id);
            if (!animeFound) {
                throw new restify_errors_1.NotFoundError('NotFoundError');
            }
            this.model.remove(id);
        });
    }
}
exports.default = AnimesService;
