import Footer from ".././components/Footer";
import Navbar from ".././components/Navbar";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <header className="bg-yellow-100 text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Sip the Best, Enjoy the Rest!</h1>
        <p className="mt-4 text-gray-600">Premium organic teas, delivered to your door.</p>
        <Link to="/products">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Shop Now
          </button>
        </Link>
      </header>

      {/* Featured Teas */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold">Our Best Sellers</h2>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="p-4 border rounded-lg">🍵 Green Tea</div>
          <div className="p-4 border rounded-lg">🍂 Black Tea</div>
          <div className="p-4 border rounded-lg">🌿 Herbal Tea</div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="bg-gray-50 py-12 text-center">
        <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
        <p className="mt-4 text-gray-600">Organic, sustainable, and full of flavor.</p>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Chai-Chai. All rights reserved.</p>
      </footer>
      <Footer />
    </div>
  );
}
