"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
//@ts-ignore
router.post("/signup", authController_1.signUp);
//@ts-ignore
router.post("/signin", authController_1.signIn);
exports.default = router;
