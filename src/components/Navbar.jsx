import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 bg-primary-400/80 backdrop-blur-md shadow-lg font-sans">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-0">
        <Link to="/" className="flex items-center gap-3 text-2xl font-extrabold tracking-tight">
          <img src="/assets/images/image.png" alt="Logo" className="h-12 w-12 rounded-full bg-primary-50 p-1 shadow-md border-2 border-primary-100" />
          <span className="text-primary-900 font-black text-2xl tracking-widest">Rasbyte</span>
        </Link>
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 hover:bg-primary-50 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400 ${location.pathname === link.to ? 'bg-primary-50 text-primary-400 shadow' : 'text-primary-50'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2 rounded-full bg-accent-400 text-primary-900 font-bold shadow-lg hover:bg-primary-50 hover:text-accent-400 border-2 border-accent-400 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
        {/* Mobile menu button (optional for future expansion) */}
      </div>
    </nav>
  );
};

export default Navbar; 