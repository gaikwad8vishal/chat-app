"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";
// ✅ Middleware to authenticate user
const authenticateUser = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.split(" ")[1]; // ✅ Token extract kar
        if (!token) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }
        // ✅ Token verify 
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.userId = decoded.userId; // ✅ Request object me userId store 
        next(); // ✅ Agle middleware ya route ko call 
    }
    catch (error) {
        res.status(403).json({ error: "Invalid or expired token" });
    }
};
exports.authenticateUser = authenticateUser;
