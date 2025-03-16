import express from "express";
import { signUp, signIn } from "../controllers/authController";

const router = express.Router();

//@ts-ignore
router.post("/signup", signUp );
//@ts-ignore

router.post("/signin", signIn );

export default router;