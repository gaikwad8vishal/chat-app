import express from "express";
import { Response } from "express";
import { authenticateUser } from "../middlewares/authMiddleware"; // ✅ Use AuthRequest from middleware

const router = express.Router();
//@ts-ignore
router.post("/", authenticateUser, async (req: AuthRequest, res: Response) => {
  res.json({
    message: "Order placed successfully",
    userId: req.userId, // ✅ Now TypeScript recognizes `userId`
  });
});

export default router;
