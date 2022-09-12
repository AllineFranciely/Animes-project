"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Animes_controller_1 = __importDefault(require("../controllers/Animes.controller"));
const Animes_middleware_1 = __importDefault(require("../middlewares/Animes.middleware"));
const router = (0, express_1.Router)();
const animesController = new Animes_controller_1.default();
router.get('/animes', animesController.getAll);
router.get('/animes/:id', animesController.getById);
router.post('/animes/', Animes_middleware_1.default, animesController.create);
router.put('/animes/:id', Animes_middleware_1.default, animesController.update);
router.delete('/animes/:id', animesController.remove);
exports.default = router;
