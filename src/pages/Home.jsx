import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-primary-900">
      <section className="bg-primary-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-800 mb-6">
            Welcome to Rasbyte
          </h1>
          <p className="text-xl text-primary-600 mb-8">
            We build innovative solutions for your digital needs
          </p>
          <button className="bg-primary-600 text-primary-50 px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home; 