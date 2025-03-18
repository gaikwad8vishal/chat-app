import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-green-900 text-white flex flex-col p-5">
      <h2 className="text-2xl font-bold mb-6">🍵 Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/admin" className="hover:bg-green-700 p-2 rounded">📊 Dashboard</Link>
        <Link to="/admin/users" className="hover:bg-green-700 p-2 rounded">👥 Users</Link>
        <Link to="/admin/orders" className="hover:bg-green-700 p-2 rounded">📦 Orders</Link>
        <Link to="/admin/products" className="hover:bg-green-700 p-2 rounded">🍵 Products</Link>
      </nav>
    </div>
  );
}
