"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_controller_1 = __importDefault(require("../controllers/Login.controller"));
const router = (0, express_1.Router)();
const loginController = new Login_controller_1.default();
router.get('/login', loginController.getAll);
exports.default = router;
