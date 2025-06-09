import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-primary-900 font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-400">
        <img
          src="/assets/images/rasbyte-hero.jpg"
          alt="Cybersecurity Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none rounded-b-3xl"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary-50 mb-6 drop-shadow-lg">Protecting Your Digital World</h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8">
            Rasbyte delivers proactive, expert cybersecurity solutions for businesses of all sizes.
          </p>
          <a href="/contact" className="inline-block bg-accent-400 text-primary-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-primary-400 hover:text-accent-400 transition-colors text-lg">
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-primary-800 mb-10 text-center">Why Choose Rasbyte?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-primary-50 p-8 rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-5xl mb-4">🛡️</span>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Proactive Security</h3>
            <p className="text-primary-600 text-center">We identify and address threats before they become problems, keeping your business safe.</p>
          </div>
          <div className="bg-primary-50 p-8 rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-5xl mb-4">💡</span>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Expert Team</h3>
            <p className="text-primary-600 text-center">Our certified professionals bring years of experience and industry best practices to every project.</p>
          </div>
          <div className="bg-primary-50 p-8 rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-5xl mb-4">🚀</span>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Cutting-Edge Solutions</h3>
            <p className="text-primary-600 text-center">We leverage the latest technology to deliver robust, scalable, and future-proof security.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 