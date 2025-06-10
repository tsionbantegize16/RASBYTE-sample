import React from "react";
import { Shield, Lock, Code, Server, Cloud, Brain } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Comprehensive security solutions to protect against sophisticated cyber threats and attacks."
    },
    {
      icon: Lock,
      title: "Security Architecture",
      description: "Design and implementation of robust security architectures for enterprise systems."
    },
    {
      icon: Code,
      title: "Secure Development",
      description: "Secure coding practices and application security throughout the development lifecycle."
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Protection of critical infrastructure and network security solutions."
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud environments and hybrid infrastructures."
    },
    {
      icon: Brain,
      title: "AI & ML Security",
      description: "Advanced security solutions leveraging artificial intelligence and machine learning."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Our Capabilities</h1>
          <p className="text-lg text-primary-700 max-w-3xl mx-auto">
            Leveraging cutting-edge technology and expertise to deliver comprehensive
            cybersecurity solutions that protect your digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <capability.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-primary-700">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary-900 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Security?</h2>
          <p className="text-lg text-primary-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how our capabilities can help protect your organization
            and drive your business forward.
          </p>
          <button className="bg-white text-primary-900 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Capabilities; 