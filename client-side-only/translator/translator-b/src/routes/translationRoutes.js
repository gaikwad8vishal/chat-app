import express from "express";
import { translateText } from "../controllers/translationController.js";

const router = express.Router();

router.post("/", translateText);

export default router;
