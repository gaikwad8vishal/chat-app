import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Social icons

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-700">🍵 Chai-Chai</span>
          </div>

          {/* Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/products" className="hover:text-green-600">Products</Link>
            <Link to="/dashboard" className="hover:text-green-600">Dashboard</Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-green-600"><Facebook size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-green-600"><Twitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-green-600"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Chai-Chai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
