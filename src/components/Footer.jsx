import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-primary-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/assets/images/rasbyte-logo.png" alt="Rasbyte Logo" className="h-14 rounded-lg shadow-lg bg-primary-900 p-2" />
            <p className="text-lg font-semibold text-primary-400">We Babysit Your Binary Digit!</p>
            <p className="text-primary-200 leading-relaxed">
              Rasbyte is a cybersecurity firm helping businesses protect their digital assets through comprehensive security solutions and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-primary-400 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-200 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-primary-400 mb-6">Services</h3>
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
                    className="text-primary-200 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-primary-400 mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-primary-200">
                  16708 Richmond Hwy,<br />
                  Suite 111 Dumfries, VA 22026
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+15713889886" className="text-primary-200 hover:text-accent transition-colors">
                  +1 (571) 388-9886
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:contact@rasbyte.com" className="text-primary-200 hover:text-accent transition-colors">
                  contact@rasbyte.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-700 mt-12 pt-8 text-center">
          <p className="text-primary-300">
            © {new Date().getFullYear()} RASBYTE - We Babysit Your Binary Digit - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 