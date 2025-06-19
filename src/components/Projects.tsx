import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Calendar, Users, Code2 } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode toggle, and optimized performance.',
      category: 'frontend',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      role: 'Full Stack Developer',
      team: 'Solo Project',
      duration: '2 weeks',
      features: [
        'Responsive design with mobile-first approach',
        'Smooth scroll animations and transitions',
        'Interactive skill progress bars',
        'Contact form with validation',
        'SEO optimized and performance focused'
      ]
    },
    {
      id: 2,
      title: 'Task Management API',
      description: 'RESTful API for task management with user authentication, CRUD operations, and real-time updates. Built with Node.js and PostgreSQL.',
      category: 'backend',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Socket.io'],
      liveUrl: 'https://api.example.com',
      githubUrl: 'https://github.com',
      role: 'Backend Developer',
      team: 'Solo Project',
      duration: '3 weeks',
      features: [
        'JWT-based authentication system',
        'CRUD operations for tasks and projects',
        'Real-time updates with WebSockets',
        'Input validation and error handling',
        'Comprehensive API documentation'
      ]
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: 'https://shop.example.com',
      githubUrl: 'https://github.com',
      role: 'Full Stack Developer',
      team: '2 developers',
      duration: '6 weeks',
      features: [
        'User registration and authentication',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Payment processing with Stripe',
        'Order history and tracking'
      ]
    },
    {
      id: 4,
      title: 'DevOps Pipeline Setup',
      description: 'Automated CI/CD pipeline using GitHub Actions, Docker, and AWS. Includes automated testing, building, and deployment.',
      category: 'devops',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      technologies: ['Docker', 'GitHub Actions', 'AWS', 'Nginx', 'Linux'],
      liveUrl: 'https://pipeline.example.com',
      githubUrl: 'https://github.com',
      role: 'DevOps Engineer',
      team: 'Solo Project',
      duration: '2 weeks',
      features: [
        'Automated testing and code quality checks',
        'Docker containerization',
        'AWS EC2 deployment automation',
        'Nginx reverse proxy configuration',
        'Environment-specific deployments'
      ]
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'React-based weather dashboard with location search, 5-day forecast, and interactive charts. Responsive design with clean UI.',
      category: 'frontend',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveUrl: 'https://weather.example.com',
      githubUrl: 'https://github.com',
      role: 'Frontend Developer',
      team: 'Solo Project',
      duration: '1 week',
      features: [
        'Current weather and 5-day forecast',
        'Location search with autocomplete',
        'Interactive weather charts',
        'Responsive design for all devices',
        'Local storage for favorite locations'
      ]
    },
    {
      id: 6,
      title: 'Blog CMS',
      description: 'Content Management System for blogging with markdown support, user roles, and admin dashboard. Built with modern web technologies.',
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      technologies: ['React', 'Node.js', 'MySQL', 'Markdown', 'JWT'],
      liveUrl: 'https://blog.example.com',
      githubUrl: 'https://github.com',
      role: 'Full Stack Developer',
      team: 'Solo Project',
      duration: '4 weeks',
      features: [
        'Markdown editor with live preview',
        'User authentication and role management',
        'Admin dashboard for content management',
        'SEO-friendly URLs and meta tags',
        'Comment system with moderation'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'devops', label: 'DevOps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and learning journey
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200'
              }`}
            >
              <Filter size={16} />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Code2 size={14} />
                    <span>{project.role}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 rounded-2xl border border-blue-100">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Interested in working together?
              </h3>
              <p className="text-gray-600">
                Let's discuss your next project and bring your ideas to life.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;