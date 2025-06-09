import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary-800 text-primary-50 p-5 shadow-lg font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 text-2xl font-extrabold tracking-tight">
          <img src="/assets/images/rasbyte-logo.png" alt="Rasbyte Logo" className="h-14 w-auto rounded bg-primary-900 p-2 shadow-md" />
          <span className="text-primary-400">Rasbyte</span>
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-accent-400 transition-colors font-medium">Home</Link>
          <Link to="/about" className="hover:text-accent-400 transition-colors font-medium">About</Link>
          <Link to="/services" className="hover:text-accent-400 transition-colors font-medium">Services</Link>
          <Link to="/projects" className="hover:text-accent-400 transition-colors font-medium">Projects</Link>
          <Link to="/contact" className="hover:text-accent-400 transition-colors font-medium">Contact</Link>
          <Link to="/contact" className="ml-4 px-5 py-2 rounded-full bg-accent-400 text-primary-900 font-bold shadow hover:bg-primary-400 hover:text-accent-400 transition-colors">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 