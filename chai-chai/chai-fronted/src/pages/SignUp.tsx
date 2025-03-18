import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function SignUp() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const { data } = await axios.post("http://localhost:3000/user/signup", formData);

      setSuccess("Signup successful! Redirecting...");
      setTimeout(() => navigate("/signin"), 2000); // Redirect after 2 seconds
    } catch (err: any) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md border p-6 rounded-lg shadow-lg bg-slate-100">
        <div className="text-center">
          <Link to="/" className="text-4xl font-bold text-green-700 mb-8 flex items-center justify-center">
            🍵 Chai-Chai
          </Link>
          <h1 className="text-3xl font-bold text-green-700">Sign Up</h1>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account? <Link to="/signin" className="text-green-700 font-bold">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
