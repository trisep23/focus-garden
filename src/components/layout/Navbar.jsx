import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-4xl">🌱</span>

        <h1 className="text-4xl font-bold text-green-700">
          Focus Garden
        </h1>
      </div>

      {/* Button */}
      <div className="flex items-center gap-6">

        <Link
          to="/login"
          className="text-green-700 hover:text-green-900 font-medium transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;