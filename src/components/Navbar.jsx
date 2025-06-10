import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "News", path: "/news" },
    { name: "Career", path: "/career" }
  ];

  return (
    <nav className="bg-gradient-to-b from-primary-900 to-primary-950 text-primary-50 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/images/image.png"
              alt="Rasbyte Logo"
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-primary-200 hover:text-primary-300 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-primary-600 text-primary-50 px-6 py-2 rounded-lg hover:bg-primary-500 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-primary-200 hover:text-primary-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-950 border-t border-primary-800">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-primary-200 hover:text-primary-300 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-primary-600 text-primary-50 px-6 py-2 rounded-lg hover:bg-primary-500 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 