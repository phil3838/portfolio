import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Philippe Côté
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Developer & DevOps Engineer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>


          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 animate-pulse" />
                <span>and</span>
                <Code size={16} className="text-blue-400" />
                <span>by Philippe Côté</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 mx-auto flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white hover:shadow-lg transition-all duration-200 transform hover:scale-110"
          >
            <div className="w-4 h-4 border-l-2 border-t-2 border-white transform rotate-45 translate-y-0.5"></div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;