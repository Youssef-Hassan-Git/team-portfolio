import React from 'react'
import { Slide, Fade, Zoom, Bounce } from 'react-awesome-reveal'
import html from "../../assets/images/html5-icon.svg"
import css from "../../assets/images/css-icon.svg"
import bootstrap from "../../assets/images/bootstrap-icon.svg"
import tailwind from "../../assets/images/tailwindcss-icon.svg"
import react from "../../assets/images/react-1.svg"
import angular from "../../assets/images/angular-icon.svg"
import typescript from "../../assets/images/typescriptlang-icon.svg"
import javascript from "../../assets/images/javascript-icon.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }
    ]
  };

  const techCategories = [
    {
      title: "Frontend Technologies",
      subtitle: "Modern UI/UX Development",
      technologies: [
        { name: "React", icon: react, level: "Expert" },
        { name: "Angular", icon: angular, level: "Advanced" },
        { name: "TypeScript", icon: typescript, level: "Expert" },
        { name: "JavaScript", icon: javascript, level: "Expert" },
        { name: "HTML5", icon: html, level: "Expert" },
        { name: "CSS3", icon: css, level: "Expert" },
        { name: "Tailwind CSS", icon: tailwind, level: "Expert" },
        { name: "Bootstrap", icon: bootstrap, level: "Advanced" }
      ]
    },
    {
      title: "Backend & Database",
      subtitle: "Robust Server-Side Solutions",
      technologies: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: "Expert" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: "Expert" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: "Expert" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: "Advanced" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", level: "Intermediate" }
      ]
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Scalable Infrastructure & Deployment",
      technologies: [
        { name: "AWS", icon: "fab fa-aws", level: "Expert" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: "Advanced" },
        { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: "Expert" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", level: "Intermediate" }
      ]
    }
  ];

  return (
    <>
    <div id='skills' className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-20'>
      {/* Enhanced Background Elements */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute inset-0' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className='container mx-auto px-4 md:max-w-[1200px] relative z-10'>
        {/* Enhanced Header Section */}
        <Fade direction="down" duration={1000} triggerOnce>
          <div className='text-center mb-20'>
            <div className='relative inline-block mb-6'>
              <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 relative z-10'>
                Our Tech Stack
              </h1>
              <div className='absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full'></div>
            </div>
            <div className='w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full mb-8 shadow-lg shadow-purple-500/50'></div>
            <p className='text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-relaxed'>
              We leverage cutting-edge technologies to build scalable, high-performance applications. 
              Our expertise spans the entire MERN stack and cloud deployment solutions.
            </p>
          </div>
        </Fade>

        {/* Enhanced Technology Categories */}
        <div className='space-y-16'>
          {techCategories.map((category, categoryIndex) => (
            <Slide direction="up" duration={1200} delay={categoryIndex * 200} triggerOnce key={categoryIndex}>
              <div className='relative group'>
                <div className='absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                <div className='bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 relative'>
                  <div className='text-center mb-12'>
                    <div className='inline-flex items-center gap-3 mb-4'>
                      <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center'>
                        <i className='fas fa-code text-white text-xl'></i>
                      </div>
                      <h2 className='text-4xl font-bold text-white'>{category.title}</h2>
                    </div>
                    <p className='text-purple-400 text-lg font-medium mb-4'>{category.subtitle}</p>
                    <div className='w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-lg'></div>
                  </div>
                  
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                    {category.technologies.map((tech, techIndex) => (
                      <Bounce key={techIndex} delay={techIndex * 150} triggerOnce>
                        <div className='group/tech relative'>
                          <div className='absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-2xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300'></div>
                          <div className='bg-slate-700/60 hover:bg-slate-700/80 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 border border-slate-600/50 relative'>
                            <div className='w-20 h-20 mx-auto mb-6 relative'>
                              {tech.icon.includes('http') ? (
                                <img 
                                  src={tech.icon} 
                                  className='w-full h-full object-contain rounded-2xl border-2 border-slate-600 group-hover/tech:border-blue-500 transition-all duration-300 shadow-lg' 
                                  alt={tech.name} 
                                />
                              ) : (
                                <div className='w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover/tech:scale-110 transition-transform duration-300 shadow-lg'>
                                  <i className={`${tech.icon} text-white text-3xl`}></i>
                                </div>
                              )}
                            </div>
                            <h3 className='text-white font-bold text-base mb-3 group-hover/tech:text-blue-400 transition-colors duration-300'>{tech.name}</h3>
                            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                              tech.level === 'Expert' ? 'bg-green-500/20 text-green-400 border-2 border-green-500/30 shadow-lg shadow-green-500/20' :
                              tech.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400 border-2 border-blue-500/30 shadow-lg shadow-blue-500/20' :
                              'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/20'
                            }`}>
                              {tech.level}
                            </span>
                          </div>
                        </div>
                      </Bounce>
                    ))}
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>

        {/* Enhanced Additional Skills Section */}
        <Slide direction="up" duration={1200} triggerOnce>
          <div className='mt-20 relative group'>
            <div className='absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 relative'>
              <div className='text-center mb-12'>
                <div className='inline-flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center'>
                    <i className='fas fa-tools text-white text-xl'></i>
                  </div>
                  <h2 className='text-4xl font-bold text-white'>Additional Expertise</h2>
                </div>
                <p className='text-gray-300 text-lg max-w-2xl mx-auto'>Tools and methodologies that enhance our development process</p>
                <div className='w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-4 shadow-lg'></div>
              </div>
              
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                {[
                  { name: "Git & GitHub", icon: "fab fa-github", desc: "Version Control", color: "from-gray-500 to-gray-700" },
                  { name: "REST APIs", icon: "fas fa-plug", desc: "API Development", color: "from-blue-500 to-purple-600" },
                  { name: "GraphQL", icon: "fas fa-project-diagram", desc: "Modern APIs", color: "from-pink-500 to-purple-600" },
                  { name: "Testing", icon: "fas fa-vial", desc: "Jest & Cypress", color: "from-green-500 to-blue-600" },
                  { name: "Performance", icon: "fas fa-tachometer-alt", desc: "Optimization", color: "from-yellow-500 to-orange-600" },
                  { name: "Security", icon: "fas fa-shield-alt", desc: "Best Practices", color: "from-red-500 to-pink-600" },
                  { name: "Agile", icon: "fas fa-users", desc: "Scrum & Kanban", color: "from-indigo-500 to-purple-600" },
                  { name: "Documentation", icon: "fas fa-book", desc: "Technical Writing", color: "from-teal-500 to-blue-600" }
                ].map((skill, index) => (
                  <Fade key={index} delay={index * 100} triggerOnce>
                    <div className='group/skill relative'>
                      <div className='absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300'></div>
                      <div className='bg-slate-700/50 hover:bg-slate-700/70 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-slate-600/50 relative'>
                        <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover/skill:scale-110 transition-transform duration-300 shadow-lg`}>
                          <i className={`${skill.icon} text-white text-2xl`}></i>
                        </div>
                        <h3 className='text-white font-bold text-sm mb-2 group-hover/skill:text-blue-400 transition-colors duration-300'>{skill.name}</h3>
                        <p className='text-gray-400 text-xs'>{skill.desc}</p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
    </>
  )
}
