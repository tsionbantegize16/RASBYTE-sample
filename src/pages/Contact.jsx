import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 font-sans">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-50 mb-12 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-primary-50 rounded-2xl shadow-lg p-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-primary-700 font-medium mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 bg-primary-100 text-primary-900" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-primary-700 font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 bg-primary-100 text-primary-900" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-primary-700 font-medium mb-2">Message</label>
              <textarea id="message" rows="6" className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 bg-primary-100 text-primary-900" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-accent-400 text-primary-900 px-6 py-3 rounded-lg font-bold hover:bg-primary-400 hover:text-accent-400 transition-colors">Send Message</button>
          </form>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent-400 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-accent-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-accent-400 transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="w-full md:w-1/2 h-40 bg-primary-200 rounded-xl flex items-center justify-center text-primary-600 font-semibold mt-6 md:mt-0">
              [Map Placeholder]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 