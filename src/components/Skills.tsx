import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  Smartphone, 
  Server,
  Globe,
  Wrench
} from 'lucide-react';

const Skills = () => {
  const [filter, setFilter] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState<Set<number>>(new Set());
  const PROFICIENCY_LABEL = 'Proficiency: ';

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Globe className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'database', label: 'Database', icon: <Database className="w-4 h-4" /> },
    { id: 'devops', label: 'DevOps', icon: <Cloud className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> }
  ];

  const skills = [
  { name: 'Java',         category: 'backend',  proficiency: 60, color: 'from-red-600 to-red-700' },
  { name: 'Python',       category: 'backend',  proficiency: 70, color: 'from-yellow-500 to-blue-600' },
  { name: 'SQL',          category: 'database', proficiency: 70, color: 'from-blue-700 to-blue-800' },
  { name: 'PostgreSQL',   category: 'database', proficiency: 50, color: 'from-blue-700 to-blue-800' },
  { name: 'HTML',         category: 'frontend', proficiency: 80, color: 'from-orange-500 to-red-500' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 50, color: 'from-cyan-500 to-blue-500' },
  { name: 'TypeScript',   category: 'frontend', proficiency: 60, color: 'from-blue-600 to-blue-700' },
  { name: 'ReactJS',      category: 'frontend', proficiency: 70, color: 'from-blue-500 to-cyan-500' },
  { name: 'VueJS',        category: 'frontend', proficiency: 60, color: 'from-green-500 to-green-600' },
  { name: 'Ansible',      category: 'devops',   proficiency: 50, color: 'from-blue-600 to-blue-700' },
  { name: 'AWS',          category: 'devops',   proficiency: 40, color: 'from-orange-500 to-yellow-500' },
  { name: 'Docker',       category: 'devops',   proficiency: 60, color: 'from-blue-600 to-blue-700' },
  { name: 'Git',          category: 'tools',    proficiency: 80, color: 'from-orange-600 to-red-600' },
  { name: 'Postman',      category: 'tools',    proficiency: 60, color: 'from-orange-500 to-red-500' },
];

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = document.querySelectorAll('[data-skill-bar]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:shadow-md border border-gray-200'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              data-index={index}
              data-skill-bar
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{PROFICIENCY_LABEL}</span>
                  <span className="text-sm font-semibold text-gray-900">{skill.proficiency}%</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: animatedSkills.has(index) ? `${skill.proficiency}%` : '0%'
                    }}
                  />
                </div>
                <div className="absolute -top-1 right-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-sm" 
                     style={{
                       right: animatedSkills.has(index) ? `${100 - skill.proficiency}%` : '100%',
                       transition: 'right 1000ms ease-out'
                     }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{skills.length}</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1</div>
              <div className="text-sm text-gray-600">Year Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">5+</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;