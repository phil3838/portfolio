import React from 'react';
import { Award, Users, Code, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Computer Science Graduate",
      description: "Recent graduate with strong foundation in software engineering"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "1+ year experience building modern web applications"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "DevOps Enthusiast",
      description: "Passionate about CI/CD, containerization, and cloud deployment"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recent graduate passionate about creating innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                As a recent Computer Science graduate with 1+ year of hands-on experience in 
                full-stack development and DevOps, I'm passionate about building scalable web 
                applications and streamlining deployment processes. My journey combines academic 
                knowledge with practical industry experience.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                I specialize in modern web technologies like React, Node.js, and cloud platforms, 
                with a strong focus on DevOps practices including CI/CD pipelines, containerization, 
                and infrastructure automation. I'm eager to contribute to innovative projects and 
                continue growing my technical expertise.
              </p>

              <p className="text-lg leading-relaxed">
                Currently seeking opportunities to apply my skills in a dynamic environment where 
                I can contribute to meaningful projects while continuing to learn and develop as 
                a software engineer.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">CS Graduate</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">1+ Year Experience</span>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl flex items-center justify-center">
                <div className="text-6xl font-bold text-gray-400">Photo</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;