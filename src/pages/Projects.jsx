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
    <div className="min-h-screen py-20 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 font-sans">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-50 mb-12 text-center">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-primary-50 rounded-2xl shadow-lg overflow-hidden p-8 flex flex-col gap-4">
              <div className="text-5xl mb-2">{project.image}</div>
              <h3 className="text-2xl font-semibold text-primary-500 mb-1">{project.title}</h3>
              <p className="text-primary-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-accent-400 text-primary-500 px-3 py-1 rounded-full text-sm font-bold shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 