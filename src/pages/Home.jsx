import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-primary-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 bg-gradient-to-br from-primary-500 via-primary-400 to-primary-300 rounded-b-3xl shadow-xl animate-fade-in-up">
        <img
          src="/assets/images/rasbyte-hero.jpg"
          alt="Cybersecurity Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none rounded-b-3xl"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary-50 mb-6 drop-shadow-lg animate-slide-in-left">
            Fortifying Your Digital Frontier
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-10 leading-relaxed animate-slide-in-right">
            Rasbyte combines deep expertise, advanced tools, and a client-first approach to solve complex IT and cybersecurity challenges, delivering tailored solutions and hands-on training.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-400 text-primary-900 font-bold px-12 py-5 rounded-full shadow-lg hover:bg-primary-300 hover:text-primary-50 transition-all duration-300 ease-in-out text-lg transform hover:scale-105 animate-bounce-subtle"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Why Choose Us Section - Transformed from cards to feature blocks */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-primary-900 mb-14 text-center animate-fade-in">Why Choose Rasbyte?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature Block 1 */}
          <div className="p-8 flex flex-col items-center border border-primary-100 rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-200 animate-fade-in-left delay-100">
            <span className="text-6xl mb-6 text-accent-400 transition-transform duration-300 hover:rotate-6">🛡️</span>
            <h3 className="text-2xl font-semibold text-primary-800 mb-3">Proactive Security</h3>
            <p className="text-primary-600 text-center leading-relaxed">We identify and address threats before they become problems, keeping your business safe and resilient.</p>
          </div>
          {/* Feature Block 2 */}
          <div className="p-8 flex flex-col items-center border border-primary-100 rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-200 animate-fade-in-left delay-200">
            <span className="text-6xl mb-6 text-accent-400 transition-transform duration-300 hover:rotate-6">💡</span>
            <h3 className="text-2xl font-semibold text-primary-800 mb-3">Expert Team</h3>
            <p className="text-primary-600 text-center leading-relaxed">Our certified professionals bring years of experience and industry best practices to every project, ensuring top-tier service.</p>
          </div>
          {/* Feature Block 3 */}
          <div className="p-8 flex flex-col items-center border border-primary-100 rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-200 animate-fade-in-left delay-300">
            <span className="text-6xl mb-6 text-accent-400 transition-transform duration-300 hover:rotate-6">🚀</span>
            <h3 className="text-2xl font-semibold text-primary-800 mb-3">Cutting-Edge Solutions</h3>
            <p className="text-primary-600 text-center leading-relaxed">We leverage the latest technology to deliver robust, scalable, and future-proof security solutions tailored for you.</p>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold text-primary-900 mb-14 animate-fade-in">Trusted by Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {/* Replace with actual partner logos, e.g., <img src="/path/to/logo1.png" alt="Partner 1" /> */}
          <div className="w-32 h-24 bg-primary-50 rounded-lg flex items-center justify-center shadow-sm opacity-80 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 animate-fade-in delay-100">
            <span className="text-primary-400 text-xl font-semibold">Partner A</span>
          </div>
          <div className="w-32 h-24 bg-primary-50 rounded-lg flex items-center justify-center shadow-sm opacity-80 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 animate-fade-in delay-200">
            <span className="text-primary-400 text-xl font-semibold">Partner B</span>
          </div>
          <div className="w-32 h-24 bg-primary-50 rounded-lg flex items-center justify-center shadow-sm opacity-80 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 animate-fade-in delay-300">
            <span className="text-primary-400 text-xl font-semibold">Partner C</span>
          </div>
          <div className="w-32 h-24 bg-primary-50 rounded-lg flex items-center justify-center shadow-sm opacity-80 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 animate-fade-in delay-400">
            <span className="text-primary-400 text-xl font-semibold">Partner D</span>
          </div>
          <div className="w-32 h-24 bg-primary-50 rounded-lg flex items-center justify-center shadow-sm opacity-80 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 animate-fade-in delay-500">
            <span className="text-primary-400 text-xl font-semibold">Partner E</span>
          </div>
          {/* Add more partner divs as needed */}
        </div>
      </section>

      {/* Our Services Section - Modified service items, less 'card-like' */}
      <section className="bg-primary-50 py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary-900 mb-14 text-center animate-fade-in">Our Comprehensive Services</h2>
          <p className="text-xl text-primary-700 mb-12 text-center max-w-3xl mx-auto animate-fade-in delay-100">
            Comprehensive cybersecurity solutions to protect your organization from evolving threats, tailored to your unique needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Item 1 */}
            <div className="p-8 border border-primary-100 rounded-2xl bg-white shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up delay-100">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4 flex items-center">
                <span className="text-4xl mr-3 text-accent-400">🕵️‍♂️</span> Penetration Testing
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Identify weaknesses or vulnerabilities in systems, networks, or physical assets to stress test security controls.
              </p>
              <a href="/services/penetration-testing" className="text-accent-400 font-semibold hover:underline transition-colors duration-200">
                Learn more →
              </a>
            </div>

            {/* Service Item 2 */}
            <div className="p-8 border border-primary-100 rounded-2xl bg-white shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4 flex items-center">
                <span className="text-4xl mr-3 text-accent-400">📊</span> Security Posture Assessment
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Beef up your security posture and minimize cyber threats in a proactive fashion with our expert analysis.
              </p>
              <a href="/services/security-posture-assessment" className="text-accent-400 font-semibold hover:underline transition-colors duration-200">
                Learn more →
              </a>
            </div>

            {/* Service Item 3 */}
            <div className="p-8 border border-primary-100 rounded-2xl bg-white shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up delay-300">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4 flex items-center">
                <span className="text-4xl mr-3 text-accent-400">✍️</span> Cybersecurity Policies
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Build comprehensive cybersecurity policies and procedures meticulously tailored to your organization's unique needs.
              </p>
              <a href="/services/cybersecurity-policies" className="text-accent-400 font-semibold hover:underline transition-colors duration-200">
                Learn more →
              </a>
            </div>

            {/* Service Item 4 */}
            <div className="p-8 border border-primary-100 rounded-2xl bg-white shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up delay-400">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4 flex items-center">
                <span className="text-4xl mr-3 text-accent-400">🚨</span> Vulnerability & Threat Intelligence
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Identify, prioritize, and assess the overall risks your organization faces with actionable threat intelligence.
              </p>
              <a href="/services/vulnerability-threat-intelligence" className="text-accent-400 font-semibold hover:underline transition-colors duration-200">
                Learn more →
              </a>
            </div>

            {/* Service Item 5 */}
            <div className="p-8 border border-primary-100 rounded-2xl bg-white shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up delay-500">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4 flex items-center">
                <span className="text-4xl mr-3 text-accent-400">🤝</span> Cybersecurity Consulting
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Transform your security posture with expert guidance for both on-premise and cloud environments, ensuring robust protection.
              </p>
              <a href="/services/cybersecurity-consulting" className="text-accent-400 font-semibold hover:underline transition-colors duration-200">
                Learn more →
              </a>
            </div>

            {/* Service Item 6 */}
            <div className="p-8 border border-primary-100 rounded-2xl bg-white shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up delay-600">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4 flex items-center">
                <span className="text-4xl mr-3 text-accent-400">💻</span> IT Asset Management (ITAM)
              </h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Optimize hardware and software while reducing inherent risks to an acceptable level, improving efficiency and security.
              </p>
              <a href="/services/it-asset-management" className="text-accent-400 font-semibold hover:underline transition-colors duration-200">
                Learn more →
              </a>
            </div>
          </div>
          <div className="text-center mt-16 animate-fade-in delay-700">
            <a
              href="/services"
              className="inline-block bg-accent-400 text-primary-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-primary-300 hover:text-primary-50 transition-colors duration-300 text-lg transform hover:scale-105"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      {/* Our Target Audience Section - Transformed to a simpler list */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-primary-900 mb-14 text-center animate-fade-in">Who We Serve</h2>
        <p className="text-xl text-primary-700 mb-12 text-center max-w-3xl mx-auto animate-fade-in delay-100">
          Rasbyte is dedicated to providing robust cybersecurity solutions across a diverse range of sectors, ensuring digital safety for all.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
          <li className="flex items-start bg-primary-50 p-6 rounded-lg shadow-sm border border-primary-100 animate-fade-in-up delay-100 transition-all duration-300 hover:shadow-md">
            <span className="text-3xl mr-4 text-accent-400">🏢</span>
            <div>
              <h3 className="text-2xl font-semibold text-primary-800 mb-2">Private Firms</h3>
              <p className="text-primary-600 leading-relaxed">Tailored cybersecurity strategies and implementation for businesses of all sizes.</p>
            </div>
          </li>
          <li className="flex items-start bg-primary-50 p-6 rounded-lg shadow-sm border border-primary-100 animate-fade-in-up delay-200 transition-all duration-300 hover:shadow-md">
            <span className="text-3xl mr-4 text-accent-400">🔬</span>
            <div>
              <h3 className="text-2xl font-semibold text-primary-800 mb-2">Academic & R&D Institutions</h3>
              <p className="text-primary-600 leading-relaxed">Protecting sensitive research data and intellectual property.</p>
            </div>
          </li>
          <li className="flex items-start bg-primary-50 p-6 rounded-lg shadow-sm border border-primary-100 animate-fade-in-up delay-300 transition-all duration-300 hover:shadow-md">
            <span className="text-3xl mr-4 text-accent-400">📈</span>
            <div>
              <h3 className="text-2xl font-semibold text-primary-800 mb-2">Small & Medium-sized Enterprises</h3>
              <p className="text-primary-600 leading-relaxed">Cost-effective yet robust security solutions for growing businesses.</p>
            </div>
          </li>
          <li className="flex items-start bg-primary-50 p-6 rounded-lg shadow-sm border border-primary-100 animate-fade-in-up delay-400 transition-all duration-300 hover:shadow-md">
            <span className="text-3xl mr-4 text-accent-400">🌍</span>
            <div>
              <h3 className="text-2xl font-semibold text-primary-800 mb-2">NGO's & International Organizations</h3>
              <p className="text-primary-600 leading-relaxed">Securing operations and data for non-profit and global entities.</p>
            </div>
          </li>
          <li className="flex items-start bg-primary-50 p-6 rounded-lg shadow-sm border border-primary-100 animate-fade-in-up delay-500 transition-all duration-300 hover:shadow-md">
            <span className="text-3xl mr-4 text-accent-400">🏛️</span>
            <div>
              <h3 className="text-2xl font-semibold text-primary-800 mb-2">Gov't Contracting Endeavors</h3>
              <p className="text-primary-600 leading-relaxed">Meeting stringent security requirements for government contracts.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Why Rasbyte (Benefits) Section - Transformed to feature blocks with icons */}
      <section className="bg-primary-50 py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary-900 mb-14 text-center animate-fade-in">Unlock the Rasbyte Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 flex flex-col items-center bg-white border border-primary-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-in-right delay-100">
              <span className="text-6xl mb-6 text-accent-400">⏱️</span>
              <h3 className="text-2xl font-semibold text-primary-800 mb-3">Save Time</h3>
              <p className="text-primary-600 text-center leading-relaxed">
                With quick and accurate responses to all your queries, you'll save valuable time and significantly boost your efficiency.
              </p>
            </div>
            <div className="p-8 flex flex-col items-center bg-white border border-primary-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-in-right delay-200">
              <span className="text-6xl mb-6 text-accent-400">🧑‍💻</span>
              <h3 className="text-2xl font-semibold text-primary-800 mb-3">Professional Support</h3>
              <p className="text-primary-600 text-center leading-relaxed">
                We provide dedicated technical support and a comprehensive knowledge base for all our services, allowing you to focus elsewhere.
              </p>
            </div>
            <div className="p-8 flex flex-col items-center bg-white border border-primary-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-in-right delay-300">
              <span className="text-6xl mb-6 text-accent-400">🔒</span>
              <h3 className="text-2xl font-semibold text-primary-800 mb-3">Cyber Resilience</h3>
              <p className="text-primary-600 text-center leading-relaxed">
                Conducting cyber resilience reviews to gauge organizational readiness and ensure continuity of operation in the event of a cyber attack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk & Map Section - Combined and Parallel */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary-900 mb-10 text-center animate-fade-in">Let's Talk</h2>
          <p className="text-xl text-primary-700 mb-12 text-center max-w-3xl mx-auto animate-fade-in delay-100">
            Have a question? We're here to help. Send us a message and we'll be in touch.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form Column */}
            <div className="p-8 md:p-12 bg-white rounded-2xl shadow-xl border border-primary-100 animate-fade-in-left">
              <h3 className="text-3xl font-bold text-primary-800 mb-8">Reach Out to Us</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-primary-700 text-lg font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full p-4 rounded-lg bg-primary-50 text-primary-900 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-primary-700 text-lg font-semibold mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full p-4 rounded-lg bg-primary-50 text-primary-900 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-primary-700 text-lg font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-4 rounded-lg bg-primary-50 text-primary-900 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all duration-200"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-primary-700 text-lg font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-4 rounded-lg bg-primary-50 text-primary-900 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all duration-200"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-primary-700 text-lg font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="w-full p-4 rounded-lg bg-primary-50 text-primary-900 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all duration-200 resize-y"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center mt-4">
                  <button
                    type="submit"
                    className="inline-block bg-accent-400 text-primary-900 font-bold px-12 py-5 rounded-full shadow-lg hover:bg-primary-300 hover:text-primary-50 transition-all duration-300 ease-in-out text-xl transform hover:scale-105"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>

            {/* Map Column */}
            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-bold text-primary-800 mb-8 text-center lg:text-left">Our Location</h3>
              <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-primary-100">
                {/* Replace with your actual Google Maps embed or another map solution */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.605995574447!2d37.3872241!3d11.5976589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16462fe434c9f131%3A0x7d6f5f9a6e1a4c8!2sBahir%20Dar!5e0!3m2!1sen!2set!4v1701234567890!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rasbyte Location on Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Footer */}
      <footer className="bg-primary-900 text-primary-300 text-center py-10 px-4 border-t border-primary-700">
        <p>© {new Date().getFullYear()} Rasbyte. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="/privacy-policy" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-accent-400 transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;