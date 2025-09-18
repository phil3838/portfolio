import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Calendar, Users, Code2 } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'New Job Notifier',
      description:
        'Python script that monitors job listings on specific company websites and send notifications via Discord when new job opportunities are discovered.',
      category: 'backend',
      image: '/job_notifier.png',
      technologies: ['Selenium', 'Discord_Webhook', 'Python'],
      githubUrl: 'https://github.com/phil3838/New-Job-Notifier',
      role: 'Backend Developer',
      team: 'Solo Project',
      duration: 'In progress',
      features: [
        'Daily webscraping',
        'Tracking and comparing job listings',
        'User notified by Discord',
        'JSON-based job listing storage',
      ]
    },
    {
      id: 2,
      title: 'Évalue ton savoir',
      description: 'Open-source interactive quiz platform for school - an alternative to Kahoot and Socrative',
      category: 'fullstack',
      image: '/evalsa.png',
      technologies: ['TypeScript', 'CSS', 'MongoDB'],
      liveUrl: 'https://evaluetonsavoir.vercel.app/',
      githubUrl: 'https://github.com/ets-cfuhrman-pfe/EvalueTonSavoir',
      role: 'Student',
      team: 'Team of 5',
      duration: '4 months',
      features: [
        'Interactive live quiz sessions with real-time feedback',
        'Intuitive quiz creation with LaTeX support for math and science formatting',
        'Flexible quiz import options to easily share content across formats for educators and students'
      ]
    },
    {
      id: 3,
      title: 'Trivia Training App',
      description:
        'Web application to help users improve at trivia using a dataset of over 4,000 questions and answers. Implements data-driven question selection and performance feedback. Python scripts (PyPDF2 & pandas) parse, lint and structurally organize all Q&A data.',
      category: 'fullstack',
      image: '/trivia-app.png',
      technologies: ['Angular', 'TypeScript', 'Python', 'PyPDF2', 'pandas'],
      liveUrl: 'https://geh-training.netlify.app/',
      githubUrl: 'https://github.com/phil3838/GEH-training',
      role: 'Full Stack Developer',
      team: 'Solo Project',
      duration: '4 weeks',
      features: [
        'Data-driven question selection and performance feedback',
        'Parsing, linting & structuring of 4,000+ Q&A with PyPDF2 and pandas'
      ]
    },
    {
      id: 4,
      title: 'End-to-End Observability in Microservices',
      description: 'Proof-of-concept microservice architecture focused on observability and proactive issue detection. The project showcases full-stack monitoring using OpenTelemetry, Jaeger, Loki, and Grafana. Real-time system health is tracked, with alerts pushed to Discord.',
      category: 'devops',
      image: '/observability.png',
      technologies: ['Docker', 'Grafana', 'OpenTelemetry', 'Loki'],
      liveUrl: '',
      githubUrl: 'https://github.com/JereDacosta/GameStoreMicroservices',
      role: 'Student',
      team: 'Team of 2',
      duration: '3 months',
      features: [
  'Containerized microservices built with Docker and C#',
  'Distributed tracing implemented with OpenTelemetry and Jaeger',
  'Centralized logging using Loki and visualization via Grafana',
  'Real-time Discord alerts for performance degradation',
  'Applied AIOps techniques for log analysis and predictive issue detection'
],
    },
    {
      id: 5,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and optimized performance.',
      category: 'frontend',
      image: '/web-portfolio.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: '',
      githubUrl: 'https://github.com/phil3838/portfolio',
      role: 'Full Stack Developer',
      team: 'Solo Project',
      duration: '1 week',
      features: [
        'Responsive design with mobile-first approach',
        'Smooth scroll animations and transitions',
        'Interactive skill progress bars',
        'Contact form with validation',
        'SEO optimized and performance focused'
      ]
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'devops', label: 'DevOps' },
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
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 ${filter === category.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200'
                }`}
            >
              <Filter size={16} />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
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
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

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

                <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg
      hover:border-blue-500 hover:text-blue-600 transition-all duration-200
      ${!project.liveUrl ? 'flex-none w-full justify-center' : ''}`}
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;