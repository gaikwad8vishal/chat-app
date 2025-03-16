import express from "express";
import { PrismaClient } from "@prisma/client";
import orderRoutes from "./routes/orderRoutes"; 
import authRoute from "./routes/authRoute";


const app = express();
const prisma = new PrismaClient();
app.use(express.json()); // JSON data handle karne ke liye


// ✅ Create order
app.use("/orders", orderRoutes);

// ✅ User
app.use("/auth", authRoute);
// ✅ Get All Users
app.get("/all-users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

  
// ✅ Get All Products
app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});






const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
