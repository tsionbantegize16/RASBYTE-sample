import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory management.',
      image: '🛍️',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates.',
      image: '📋',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS']
    },
    {
      title: 'Health & Fitness Tracker',
      description: 'Mobile app for tracking workouts and nutrition.',
      image: '💪',
      technologies: ['React Native', 'GraphQL', 'PostgreSQL']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-900 mb-12 text-center">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{project.title}</h3>
                <p className="text-primary-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 