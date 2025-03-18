"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const _cart_routes_1 = __importDefault(require("./routes/ cart.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const delivery_routes_1 = __importDefault(require("./routes/delivery.routes"));
const auth_middleware_1 = require("./middleware/auth.middleware");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.use("/user", auth_routes_1.default);
app.use("/user", order_routes_1.default);
app.use("/api/cart", _cart_routes_1.default);
app.use("/admin", admin_routes_1.default);
//@ts-ignore
app.use("/delivery", auth_middleware_1.authenticate, auth_middleware_1.isDeliveryPerson, delivery_routes_1.default);
app.use(productRoutes_1.default); // 👈 Add this
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
