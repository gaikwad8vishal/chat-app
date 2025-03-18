import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { getOrderStats, getAllUsers, getAllOrders } from "../../api/admin";
import { Card, CardContent, CardTitle } from "../../components/ui/card";
import { Users, Package } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const Dashboard = () => {
  const [stats, setStats] = useState<{ 
    totalOrders: number; 
    totalUsers: number;
    pendingOrders: number;
    deliveredOrders: number;
    cancelledOrders: number;
  } | null>(null);

  const [recentOrders, setRecentOrders] = useState<{ id: string; status: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        // Fetch orders, users, and order stats simultaneously
        const [orderStats, users, orders] = await Promise.all([
          getOrderStats(token),
          getAllUsers(token),
          getAllOrders(token)
        ]);

        setStats({
          totalOrders: orderStats.totalOrders,
          totalUsers: users.length,
          pendingOrders: orderStats.pending,
          deliveredOrders: orderStats.delivered,
          cancelledOrders: orderStats.cancelled,
        });

        // Set recent orders (latest 5)
        setRecentOrders(orders.slice(0, 5));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Chart Data
  const chartData = [
    { name: "Total Orders", value: stats?.totalOrders || 0 },
    { name: "Pending", value: stats?.pendingOrders || 0 },
    { name: "Delivered", value: stats?.deliveredOrders || 0 },
    { name: "Cancelled", value: stats?.cancelledOrders || 0 },
    { name: "Users", value: stats?.totalUsers || 0 },
  ];

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Admin Dashboard</h1>

        {loading ? (
          <p className="text-lg text-center animate-pulse">Loading stats...</p>
        ) : (
          <>
            {/* Cards Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-gray-800 shadow-lg flex items-center p-4">
                <Package className="text-green-500" size={40} />
                <CardContent className="ml-4">
                  <CardTitle>Total Orders</CardTitle>
                  <p className="text-2xl font-bold">{stats?.totalOrders}</p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 shadow-lg flex items-center p-4">
                <Users className="text-blue-500" size={40} />
                <CardContent className="ml-4">
                  <CardTitle>Total Users</CardTitle>
                  <p className="text-2xl font-bold">{stats?.totalUsers}</p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 shadow-lg flex items-center p-4">
                <Package className="text-orange-500" size={40} />
                <CardContent className="ml-4">
                  <CardTitle>Pending Orders</CardTitle>
                  <p className="text-2xl font-bold">{stats?.pendingOrders}</p>
                </CardContent>
              </Card>
            </div>

            {/* Chart Section */}
            <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Order Statistics</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Orders Section */}
            <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
              <ul>
                {recentOrders.map(order => (
                  <li key={order.id} className="border-b py-2 flex justify-between">
                    <span>Order #{order.id}</span>
                    <span className={`font-semibold ${
                      order.status === "PENDING" ? "text-orange-500" :
                      order.status === "DELIVERED" ? "text-green-500" :
                      "text-red-500"
                    }`}>
                      {order.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>

  );
};

export default Dashboard;
