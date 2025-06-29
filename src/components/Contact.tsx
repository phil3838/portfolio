import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'pc@philcote.ca',
      href: 'mailto:pc@philcote.ca'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Montreal, QC',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/phil3838',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/philippecote1/',
      color: 'hover:text-blue-600'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
 
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-6">Follow Me</h4>
              <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white rounded-lg border border-gray-200 text-gray-600 ${social.color} hover:shadow-lg transition-all duration-200 transform hover:scale-110`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200 text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-800 text-lg">Available for Opportunities</span>
              </div>
              <p className="text-green-700">
                Currently seeking full-time positions and exciting projects to grow my career. 
                Expected response time: 24-48 hours.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;