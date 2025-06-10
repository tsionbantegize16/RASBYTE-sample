import React from "react";

const Clients = () => {
  const clients = [
    {
      name: "Enterprise Solutions",
      logo: "/assets/images/clients/enterprise.png",
      description: "Leading provider of enterprise software solutions"
    },
    {
      name: "Tech Innovators",
      logo: "/assets/images/clients/tech.png",
      description: "Pioneering technology research and development"
    },
    {
      name: "Global Systems",
      logo: "/assets/images/clients/global.png",
      description: "International systems integration specialists"
    },
    // Add more clients as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Our Valued Clients</h1>
          <p className="text-lg text-primary-700 max-w-3xl mx-auto">
            We are proud to partner with industry leaders and innovative organizations
            that trust us with their cybersecurity needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="h-24 mb-6 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                {client.name}
              </h3>
              <p className="text-primary-700">{client.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">
            Join Our Growing Client Family
          </h2>
          <p className="text-lg text-primary-700 mb-8 max-w-3xl mx-auto">
            Experience the difference of working with a cybersecurity partner that
            truly understands your needs and delivers exceptional results.
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
            Become a Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients; 