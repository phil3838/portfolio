import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-1/2 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="animate-fade-in-up animation-delay-300">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Philippe <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Côté</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
            Full Stack Developer & DevOps Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fresh Software Engineering grad from École de technologie supérieure with an insatiable 
            curiosity for technology and a drive to build meaningful applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              View My Work
              <ExternalLink size={20} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">1</div>
              <div className="text-sm text-gray-600">Year Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">20+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;