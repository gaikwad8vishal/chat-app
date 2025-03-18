import { useEffect, useState } from "react";




export type OrderType = {
    id: string;
    status: string;
    customerName: string;
    totalAmount: number;
  };
  

const AdminOrders = () => {
    const [orders, setOrders] = useState<OrderType[]>([]);

  // 🚀 Orders Fetch Karna Backend Se
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // 📌 Order Status Update Karne Ka Function
  // 📌 Order Status Update Karne Ka Function
const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
  
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin - Manage Orders</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">User</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: any) => (
            <tr key={order.id} className="border-b">
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.user.name}</td>
              <td className="border p-2">₹{order.total}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">
                <button
                  onClick={() => updateOrderStatus(order.id, "OUT_FOR_DELIVERY")}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  Out for Delivery
                </button>
                <button
                  onClick={() => updateOrderStatus(order.id, "DELIVERED")}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Mark Delivered
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
