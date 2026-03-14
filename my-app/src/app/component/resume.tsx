'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Award, Users, Trophy, Star } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  logo: string;
  description: string;
  gpa?: string;
}

interface Activity {
  id: number;
  title: string;
  organization: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

const ResumePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    }
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Science Honours in Information Technology",
      institution: "University of Moratuwa",
      duration: "2023 - 2027",
      logo: "/images/uom.png",
      description: "Specialized in Software Engineering and Web Development"
    },
    {
      id: 2,
      degree: "Advanced Level in Physical Science",
      institution: "Sujatha Vidyalaya Matara",
      duration: "2021",
      logo: "/images/svm.jpg",
      description: "Mathematics, Chemistry, & Physics  - 2A & B passes"
    },
    {
      id: 3,
      degree: "Ordinary Level",
      institution: "Sujatha Vidyalaya Matara",
      duration: "2017",
      logo: "/images/svm.jpg",
      description: "9As"
    }
  ];

  const activities: Activity[] = [
  {
    id: 1,
    title: "Web & PR Director",
    organization: "Leo Club of University of Moratuwa (2024/2025)",
    description: "Managing club publicity, website updates, social media presence, and event promotions",
    icon: Users,
    color: "from-purple-600 to-purple-800"
  },
 
  {
    id: 2,
    title: "Dancer",
    organization: "University of Moratuwa Dancing Society",
    description: "Active performer with regular dance practices and participation in university events",
    icon: Trophy,
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 4,
    title: "Girl Guide(President Awarded)",
    organization: "Sri Lanka Girl Guides Association",
    description: "Former school-level Girl Guide involved in leadership, teamwork, and community activities",
    icon: Award,
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 5,
    title: "Member",
    organization: "IEEE Student Branch, University of Moratuwa",
    description: "Participating in tech workshops, webinars, and IEEE community events",
    icon: Star,
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 6,
    title: "Member",
    organization: "Rotaract Club of University of Moratuwa",
    description: "Contributing to social service projects, community development, and leadership programs",
    icon: Users,
    color: "from-purple-600 to-purple-800"
  },
];

  return (
    <div className="min-h-screen text-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1200 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text">Resume</span>
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Skills Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="group relative overflow-hidden"
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Card */}
                <div className="relative bg-gradient-to-br from-slate-900/90 to-gray-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-5 sm:p-8 hover:bg-gradient-to-br hover:from-slate-800/90 hover:to-gray-800/90 transition-all duration-500 group-hover:transform group-hover:-translate-y-1 group-hover:shadow-xl" style={{
                  borderColor: categoryIndex % 3 === 0 ? 'var(--gradient-start)' : categoryIndex % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)',
                  boxShadow: categoryIndex % 3 === 0 ? '0 0 20px rgba(183, 29, 238, 0.1)' : categoryIndex % 3 === 1 ? '0 0 20px rgba(201, 77, 135, 0.1)' : '0 0 20px rgba(216, 118, 49, 0.1)'
                }}>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Title */}
                  <div className="relative z-10 mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="group/skill relative p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
                        style={{ transitionDelay: `${skillIndex * 100}ms` }}
                      >
                        {/* Skill Icon */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-white/20 to-white/10 group-hover/skill:from-purple-500/30 group-hover/skill:to-purple-600/30 transition-all duration-400 group-hover/skill:scale-110">
                            <Image 
                              src={skill.icon} 
                              alt={skill.name} 
                              width={32} 
                              height={32} 
                              className="object-contain filter group-hover/skill:brightness-125 group-hover/skill:drop-shadow-lg transition-all duration-400" 
                            />
                          </div>
                          <span className="text-sm font-semibold text-white/90 group-hover/skill:text-white transition-colors duration-300 text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                        
                        {/* Modern glow effect */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 -z-10">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-xl blur-lg"></div>
                        </div>
                        
                        {/* Subtle border glow */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/30 via-purple-300/30 to-purple-400/30 p-[1px]">
                            <div className="w-full h-full rounded-xl bg-transparent"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Clean minimal effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-600/5 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <h2 className="text-3xl font-bold text-center mb-12">My Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={edu.id} className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl`} style={{
                borderColor: index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)',
                boxShadow: index % 3 === 0 ? '0 0 20px rgba(183, 29, 238, 0.2)' : index % 3 === 1 ? '0 0 20px rgba(201, 77, 135, 0.2)' : '0 0 20px rgba(216, 118, 49, 0.2)',
                transitionDelay: `${index * 200}ms`
              }}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-800/50 border flex items-center justify-center overflow-hidden transition-all duration-300" style={{
                      borderColor: index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)'
                    }}>
                      <Image src={edu.logo} alt={edu.institution} width={64} height={64} className="object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white transition-colors duration-300" style={{
                        color: index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)'
                      }}>{edu.degree}</h3>
                      <div className="flex items-center gap-2" style={{
                        color: index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)'
                      }}>
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{edu.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={16} className="text-gray-400" />
                      <span className="text-gray-300 font-medium">{edu.institution}</span>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{edu.description}</p>
                    {edu.gpa && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-3 py-1 text-sm rounded-full border" style={{
                          backgroundColor: index % 3 === 0 ? 'rgba(183, 29, 238, 0.2)' : index % 3 === 1 ? 'rgba(201, 77, 135, 0.2)' : 'rgba(216, 118, 49, 0.2)',
                          color: index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)',
                          borderColor: index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)'
                        }}>
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: index % 3 === 0 ? 'linear-gradient(to right, var(--gradient-start)/5, var(--gradient-mid)/5)' : index % 3 === 1 ? 'linear-gradient(to right, var(--gradient-mid)/5, var(--gradient-end)/5)' : 'linear-gradient(to right, var(--gradient-end)/5, var(--gradient-start)/5)'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <h2 className="text-3xl font-bold text-center mb-12">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={activity.id} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl" style={{
                  borderColor: index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)',
                  boxShadow: index % 3 === 0 ? '0 0 20px rgba(183, 29, 238, 0.2)' : index % 3 === 1 ? '0 0 20px rgba(201, 77, 135, 0.2)' : '0 0 20px rgba(216, 118, 49, 0.2)',
                  transitionDelay: `${index * 150}ms`
                }}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`} style={{
                    background: index % 3 === 0 ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))' : index % 3 === 1 ? 'linear-gradient(135deg, var(--gradient-mid), var(--gradient-end))' : 'linear-gradient(135deg, var(--gradient-end), var(--gradient-start))'
                  }}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 mb-2" style={{
                    color: index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)'
                  }}>{activity.title}</h3>
                  <p className="font-medium mb-3" style={{
                    color: index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)'
                  }}>{activity.organization}</p>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">{activity.description}</p>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                    <div className={`absolute inset-0 rounded-2xl blur-xl`} style={{
                      background: index % 3 === 0 ? 'linear-gradient(135deg, var(--gradient-start)/5, var(--gradient-mid)/5)' : index % 3 === 1 ? 'linear-gradient(135deg, var(--gradient-mid)/5, var(--gradient-end)/5)' : 'linear-gradient(135deg, var(--gradient-end)/5, var(--gradient-start)/5)'
                    }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
