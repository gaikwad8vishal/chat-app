import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-700 flex items-center">
            🍵 Chai-Chai
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600">Products</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-green-600">Dashboard</Link>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link to="/signin">
              <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-100">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-4 py-2 text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="block px-4 py-2 text-gray-700" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/dashboard" className="block px-4 py-2 text-gray-700" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/signin" className="block px-4 py-2 text-green-600 border-t" onClick={() => setIsOpen(false)}>Sign In</Link>
          <Link to="/signup" className="block px-4 py-2 bg-green-600 text-white" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
