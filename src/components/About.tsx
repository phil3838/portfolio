import React from 'react';
import { Award, Users, Code, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Software Engineer Graduate",
      description: "Graduated from ÉTS with hands-on training in DevOps, OS, and software architecture"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Fullstack Intern @ Flare Systems",
      description: "Improved an AI assistant, deployed Python services, and boosted client satisfaction"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "DevOps-Focused Developer",
      description: "Optimized CI/CD at Hydro-Québec & Loto-Québec; automated Prometheus and Grafana deployment"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Leader & Organizer",
      description: "President of Lan ETS; managed $320K+ budget and earned 'Esport Event of the Year' in 2023"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                I'm Philippe, a software engineer from ÉTS with hands-on experience in full-stack and DevOps roles across organizations like Flare Systems, Hydro-Québec, and Loto-Québec. I’ve developed production-grade systems, optimized pipelines, and contributed to significant operational savings.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I love working on impactful projects—from improving an AI Assistant’s performance to deploying Grafana dashboards at scale. I’ve also launched open-source quiz platforms, containerized microservices with observability tools, and explored AIOps for smarter monitoring.
              </p>

              <p className="text-lg leading-relaxed">
                Beyond code, I lead large-scale events as President of Lan ETS and Ops Team Lead at Dreamhack. I'm always seeking opportunities where I can merge technical skills with initiative to create, optimize, and lead.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Montreal, QC</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Software Engineer Graduate</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">1 Year Experience</span>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl flex items-center justify-center">
                <img
                  src="/philippe.jpg" // Replace with your image path
                  alt="Philippe Côté"
                  className="object-cover w-full h-full rounded-2xl"
                />
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