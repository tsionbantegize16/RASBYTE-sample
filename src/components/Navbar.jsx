import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary-800 text-primary-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 text-2xl font-bold">
          <img src="/assets/images/rasbyte-logo.png" alt="Rasbyte Logo" className="h-10 w-auto rounded bg-primary-900 p-1" />
          <span className="text-primary-400">Rasbyte</span>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 