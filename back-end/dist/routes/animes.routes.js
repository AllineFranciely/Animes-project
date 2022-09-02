"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Animes_controller_1 = __importDefault(require("../controllers/Animes.controller"));
const router = (0, express_1.Router)();
const animesController = new Animes_controller_1.default();
router.get('/animes', animesController.getAll);
exports.default = router;
