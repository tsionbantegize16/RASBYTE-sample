import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-primary-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="inline-block">
              <img src="/assets/images/image.png" alt="Rasbyte Logo" className="h-20" />
            </div>
            <p className="text-xl font-bold text-primary-300">We Babysit Your Binary Digit!</p>
            <p className="text-primary-200 leading-relaxed text-sm">
              Rasbyte is a cybersecurity firm helping businesses protect their digital assets through comprehensive security solutions and expert guidance.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-full hover:bg-primary-800/50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary-300 hover:text-primary-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary-300 mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-200 hover:text-primary-300 transition-colors flex items-center gap-3 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary-400 transform group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-primary-300 mb-8 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "Penetration Testing",
                "Security Posture Assessment",
                "Cybersecurity Consulting",
                "IT Asset Management (ITAM)",
                "Cloud | AI | MLSecOps"
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-200 hover:text-primary-300 transition-colors flex items-center gap-3 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary-400 transform group-hover:translate-x-1" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-300 mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-400 rounded-full"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary-300" />
                <span className="text-primary-200 text-sm">
                  16708 Richmond Hwy,<br />
                  Suite 111 Dumfries, VA 22026
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary-300" />
                <a href="tel:+15713889886" className="text-primary-200 hover:text-primary-300 transition-colors text-sm">
                  +1 (571) 388-9886
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary-300" />
                <a href="mailto:contact@rasbyte.com" className="text-primary-200 hover:text-primary-300 transition-colors text-sm">
                  contact@rasbyte.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 mt-16 pt-8 text-center">
          <p className="text-primary-300 text-sm">
            © {new Date().getFullYear()} RASBYTE - We Babysit Your Binary Digit - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 