import axios from "axios";

const API_BASE_URL = "http://localhost:3000/admin"; // Adjust if needed

// ✅ Get Order Statistics
export const getOrderStats = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/order-stats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Get All Users
export const getAllUsers = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Block/Unblock User
export const toggleUserBlock = async (token: string, userId: string) => {
  const response = await axios.patch(`${API_BASE_URL}/users/block-unblock/${userId}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Delete User
export const deleteUser = async (token: string, userId: string) => {
  const response = await axios.delete(`${API_BASE_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Get All Orders
export const getAllOrders = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/all-orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Update Order Status
export const updateOrderStatus = async (token: string, orderId: string, status: string) => {
  const response = await axios.put(`${API_BASE_URL}/update-status`, { orderId, status }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
