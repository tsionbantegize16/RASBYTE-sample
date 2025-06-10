import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 via-primary-100 to-primary-300 font-sans">
      <div className="text-center p-10 bg-primary-50 rounded-2xl shadow-lg">
        <div className="text-7xl mb-6 text-primary-400">🚫</div>
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary-400 mb-6">Page Not Found</h2>
        <p className="text-primary-400 mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-accent-400 text-primary-500 px-8 py-3 rounded-full font-bold hover:bg-primary-300 hover:text-accent-400 transition-colors text-lg shadow"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 