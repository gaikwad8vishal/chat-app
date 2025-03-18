import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN" | "DELIVERY_PERSON";
  isBlocked: boolean;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // ✅ Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try { 
        const response = await axios.get("http:localhost:3000/admin/users", { withCredentials: true });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // ✅ Block/Unblock User
  const toggleBlockUser = async (userId: string) => {
    try {
      await axios.patch(`/admin/users/block-unblock/${userId}`, {}, { withCredentials: true });
      setUsers(users.map(user => user.id === userId ? { ...user, isBlocked: !user.isBlocked } : user));
    } catch (error) {
      console.error("Error toggling user block status:", error);
    }
  };

  // ✅ Delete User
  const deleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`/admin/users/${userId}`, { withCredentials: true });
      setUsers(users.filter(user => user.id !== userId)); // Remove user from UI
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // ✅ Update User Role
  const updateUserRole = async (userId: string, newRole: string) => {
    try {
      await axios.put(`/admin/update-role/${userId}`, { role: newRole }, { withCredentials: true });
      setUsers(users.map(user => user.id === user.id ? { ...user, role: user.role } : user));
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading users...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={user.role}
                  onChange={(e) => updateUserRole(user.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="DELIVERY_PERSON">Delivery</option>
                </select>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.isBlocked ? "Blocked" : "Active"}
              </td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <button
                  onClick={() => toggleBlockUser(user.id)}
                  className={`px-3 py-1 text-white rounded ${user.isBlocked ? "bg-green-500" : "bg-red-500"}`}
                >
                  {user.isBlocked ? "Unblock" : "Block"}
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="px-3 py-1 bg-gray-700 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
