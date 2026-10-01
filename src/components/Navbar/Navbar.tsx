import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-gray-900"
        >
          <span className="h-3 w-3 rounded-full bg-indigo-600"></span>
          PROFINE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <Link to="/" className="font-medium text-gray-700 hover:text-indigo-600">
            Home
          </Link>

          <Link to="/journey" className="font-medium text-gray-700 hover:text-indigo-600">
            Journey
          </Link>

          <Link to="/products" className="font-medium text-gray-700 hover:text-indigo-600">
            Products
          </Link>

          <Link to="/projects" className="font-medium text-gray-700 hover:text-indigo-600">
            Projects
          </Link>

          <Link to="/offers" className="font-medium text-gray-700 hover:text-indigo-600">
            Offers
          </Link>

          <Link to="/about" className="font-medium text-gray-700 hover:text-indigo-600">
            About
          </Link>

          <Link to="/contact" className="font-medium text-gray-700 hover:text-indigo-600">
            Contact
          </Link>

        </nav>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden md:block rounded-lg bg-indigo-700 px-6 py-3 font-semibold text-white hover:bg-indigo-800"
        >
          Book a Call
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">

          <nav className="flex flex-col px-6 py-6 space-y-5">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/journey" onClick={() => setMenuOpen(false)}>
              Journey
            </Link>

            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>

            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>

            <Link to="/offers" onClick={() => setMenuOpen(false)}>
              Offers
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-indigo-700 px-6 py-3 text-center font-semibold text-white hover:bg-indigo-800"
            >
              Book a Call
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}

export default Navbar;