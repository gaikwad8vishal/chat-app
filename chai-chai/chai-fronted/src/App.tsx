import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";


// Admin pages
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
// import AdminProducts from "./pages/admin/admin-products.ts";
import Users from "./pages/admin/Users";

// If you have a sidebar
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import AdminOrders from "./pages/admin/Orders";
import AddProduct from "./pages/admin/products/add";
import UpdateProduct from "./pages/admin/products/edit";
import AdminProducts from "./pages/admin/adminProducts";
import UserDashboard from "./pages/userDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/edit/:id" element={<UpdateProduct />} />

        {/* <Route path="/admin/products" element={<AdminProducts />} /> */}
        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
