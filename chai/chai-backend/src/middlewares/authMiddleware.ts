import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

// ✅ Create AuthRequest interface
export interface AuthRequest extends Request {
  userId?: string;
}

// ✅ Middleware to authenticate user
export const authenticateUser = (
  req: AuthRequest, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; // ✅ Token extract kar
    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    // ✅ Token verify 
    const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
    req.userId = decoded.userId; // ✅ Request object me userId store 

    next(); // ✅ Agle middleware ya route ko call 
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
};
