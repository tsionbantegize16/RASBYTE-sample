import React from "react";
import { Briefcase, Users, Award, Zap } from "lucide-react";

const Career = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement paths."
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with talented professionals in a supportive team environment."
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Comprehensive benefits package including health, wellness, and more."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Opportunity to work on cutting-edge cybersecurity solutions."
    }
  ];

  const openPositions = [
    {
      title: "Senior Security Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering"
    },
    {
      title: "Security Analyst",
      location: "Dumfries, VA",
      type: "Full-time",
      department: "Security Operations"
    },
    {
      title: "DevSecOps Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Join Our Team</h1>
          <p className="text-lg text-primary-700 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of cybersecurity. We're looking for
            passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Why Join Rasbyte?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-primary-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-primary-600">
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.department}</span>
                    </div>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-primary-900 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-lg text-primary-200 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and
            we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-primary-900 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors">
            Submit Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career; 