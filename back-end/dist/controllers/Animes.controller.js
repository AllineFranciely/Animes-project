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
const http_status_codes_1 = require("http-status-codes");
const Animes_service_1 = __importDefault(require("../services/Animes.service"));
class AnimesController {
    constructor(animesService = new Animes_service_1.default()) {
        this.animesService = animesService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const animes = yield this.animesService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(animes);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const anime = yield this.animesService.getById(id);
            if (!anime) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND)
                    .json({ message: 'Anime not found!' });
            }
            res.status(http_status_codes_1.StatusCodes.OK).json(anime);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const anime = req.body;
            const animeCreated = yield this.animesService.create(anime);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(animeCreated);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const anime = req.body;
            yield this.animesService.update(id, anime);
            res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.animesService.remove(id);
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Anime deleted successfully' });
        });
    }
}
exports.default = AnimesController;
