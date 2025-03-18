import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
  });
  console.log("product");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token") ;

    console.log("token", token);
    try {
        await axios.post("http://localhost:3000/admin/add-product", product, {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true, // Allow credentials (if using cookies)
          });
          
      alert("Product added successfully!");
      navigate("/admin/products");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="container mx-auto p-6">
        <Link to="/" className="text-4xl font-bold text-green-700 mb-8 flex items-center justify-center">
            🍵 Chai-Chai
          </Link>
      <h1 className="text-3xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required className="w-full  p-2 border rounded" />
        <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="imageUrl" placeholder="Image URL (optional)" value={product.imageUrl} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
