import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Users, Code, Server, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-primary-100 to-primary-300 font-sans">
      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-24 text-center overflow-hidden bg-gradient-to-r from-primary-500 to-primary-300 mb-16 shadow-lg">
        <img src="/assets/images/about-hero.jpg" alt="About Rasbyte" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none rounded-b-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <img src="/assets/images/rasbyte-logo.png" alt="Rasbyte Logo" className="h-20 mx-auto rounded-lg bg-primary-500 p-2 mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-50 mb-6 drop-shadow-lg">About Rasbyte</h1>
          <p className="text-xl md:text-2xl text-primary-100 leading-relaxed mb-4">
            Securing your digital assets with industry-leading cybersecurity expertise.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button className="bg-primary-400 text-primary-50 px-8 py-4 rounded-full hover:bg-primary-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-full hover:bg-primary-50 transition-all transform hover:scale-105 flex items-center gap-2">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 md:px-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-primary-400 font-semibold tracking-wider mb-4 block">OUR STORY</span>
                <h2 className="text-4xl font-bold text-primary-500 mb-6">Proactive Cybersecurity for a Safer Digital World</h2>
                <p className="text-primary-400 text-lg leading-relaxed mb-8">
                  In today's rapidly evolving digital landscape, cyber adversaries are becoming increasingly sophisticated. 
                  At Rasbyte, we take a proactive approach to monitor, detect, and mitigate cyber risks. Through our 
                  alliances with top-notch cybersecurity firms, we address cyber risks and test digital footprints.
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary-400" />
                    <span className="text-primary-500">24/7 Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary-400" />
                    <span className="text-primary-500">Expert Team</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary-300/10 rounded-3xl transform rotate-6"></div>
                <img
                  src="/assets/images/cyber-security-team.jpg"
                  alt="Cybersecurity Team"
                  className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Started Section */}
      <section className="py-24 px-6 md:px-24 bg-gradient-to-b from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-primary-400 font-semibold tracking-wider mb-4 block">WHERE WE STARTED</span>
                <h2 className="text-4xl font-bold text-primary-500 mb-6">Our Foundation</h2>
                <p className="text-primary-400 text-lg leading-relaxed mb-8">
                  Headquartered in Woodbridge, VA, we help organizations strengthen their cybersecurity posture 
                  through consultation, technical support, IT asset management, health informatics, and tailored 
                  cybersecurity best practices.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-primary-50 p-6 rounded-xl shadow-lg">
                    <h4 className="font-semibold text-primary-500 mb-2">Founded</h4>
                    <p className="text-primary-400">2020</p>
                  </div>
                  <div className="bg-primary-50 p-6 rounded-xl shadow-lg">
                    <h4 className="font-semibold text-primary-500 mb-2">Location</h4>
                    <p className="text-primary-400">Woodbridge, VA</p>
                  </div>
                </div>
                <button className="bg-primary-400 text-primary-50 px-8 py-4 rounded-full hover:bg-primary-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Visit our headquarters <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary-300/10 rounded-3xl transform -rotate-6"></div>
                <img
                  src="/assets/images/office-building.jpg"
                  alt="Rasbyte Headquarters"
                  className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Efforts Section */}
      <section className="py-24 px-6 md:px-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-pattern"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 font-semibold tracking-wider mb-4 block">OUR EFFORTS</span>
            <h2 className="text-4xl font-bold text-primary-500 mb-6">Comprehensive Cybersecurity Strategy</h2>
            <p className="text-primary-400 text-lg max-w-3xl mx-auto">
              We implement a robust strategy to protect your critical data through three key pillars:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="mb-6 bg-primary-100 p-4 rounded-xl inline-block">
                <Shield className="w-12 h-12 text-primary-400" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-primary-500">Data Protection</h4>
              <p className="text-primary-400 leading-relaxed">Protecting PII, PHI, and intellectual property with state-of-the-art encryption and security protocols.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="mb-6 bg-primary-200 p-4 rounded-xl inline-block">
                <Server className="w-12 h-12 text-primary-400" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-primary-500">Network Security</h4>
              <p className="text-primary-400 leading-relaxed">Preventing cybercriminals from infiltrating corporate networks with advanced threat detection.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="mb-6 bg-primary-300 p-4 rounded-xl inline-block">
                <Code className="w-12 h-12 text-primary-400" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-primary-500">Best Practices</h4>
              <p className="text-primary-400 leading-relaxed">Implementing industry best practices and tailored frameworks for optimal security.</p>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-primary-400 text-primary-50 px-8 py-4 rounded-full hover:bg-primary-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
              Explore our services <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="py-24 px-6 md:px-24 bg-gradient-to-b from-primary-100 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-primary-400 font-semibold tracking-wider mb-4 block">OUR EXPERTS</span>
                <h2 className="text-4xl font-bold text-primary-500 mb-6">Subject Matter Experts</h2>
                <p className="text-primary-400 text-lg leading-relaxed mb-8">
                  Our team comprises SMEs with expertise in penetration testing, risk management, and consultancy services. 
                  We believe in proactive cyber strategy and leverage defense-in-depth and industry best practices.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Penetration Testing",
                    "Risk Management",
                    "Security Architecture",
                    "Compliance",
                    "Incident Response"
                  ].map((expertise, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-primary-50 p-4 rounded-xl shadow-lg flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0" />
                      <span className="text-primary-500 font-medium">{expertise}</span>
                    </motion.div>
                  ))}
                </div>

                <button className="bg-primary-400 text-primary-50 px-8 py-4 rounded-full hover:bg-primary-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Meet our team <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary-400/10 rounded-3xl transform rotate-6"></div>
                <img
                  src="/assets/images/team-meeting.jpg"
                  alt="Expert Team Meeting"
                  className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-24 bg-gradient-to-r from-primary-700 to-primary-400 text-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 cyber-pattern-light"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to secure your digital assets?
            </h2>
            <p className="text-xl mb-12 text-primary-100">
              Contact our team for a consultation to strengthen your cybersecurity posture.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-primary-50 text-primary-700 px-8 py-4 rounded-full font-semibold hover:bg-primary-100 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                Schedule a consultation <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-primary-50 px-8 py-4 rounded-full font-semibold hover:bg-primary-50/10 transition-all transform hover:scale-105 flex items-center gap-2">
                Learn more
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
