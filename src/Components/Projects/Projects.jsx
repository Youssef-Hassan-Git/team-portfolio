import React from 'react'
import { Slide, Fade, Zoom } from 'react-awesome-reveal'
import startFramework from '../../assets/images/startframework.png'
import games from '../../assets/images/games.png'
import ecommerce from '../../assets/images/commerce.png'
import freshcart from '../../assets/images/freshcart.webp'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "FreshCart E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React.js and Tailwind CSS. Features include user authentication, product management, shopping cart, and payment integration.",
      image: freshcart,
      technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      category: "E-Commerce",
      github: "https://github.com/Youssef-Hassan-Git/E-commerce-React-Freshcart",
      live: "https://e-commerce-react-freshcart.vercel.app/login",
      featured: true
    },
    {
      id: 2,
      title: "StartFramework React Template",
      description: "A modern, responsive website template built with React.js and Tailwind CSS. Designed for startups and businesses looking for a professional online presence.",
      image: startFramework,
      technologies: ["React.js", "Tailwind CSS", "Responsive Design"],
      category: "Web Template",
      github: "https://github.com/Youssef-Hassan-Git/startFrameworkReactJs",
      live: "https://start-framework-react-js.vercel.app/"
    },
    {
      id: 3,
      title: "Interactive Games Platform",
      description: "A dynamic gaming website featuring multiple interactive games built with vanilla JavaScript using Object-Oriented Programming principles.",
      image: games,
      technologies: ["JavaScript", "OOP", "Bootstrap 5", "HTML5/CSS3"],
      category: "Gaming",
      github: "https://github.com/Youssef-Hassan-Git/Games-Website",
      live: "https://youssef-hassan-git.github.io/Games-Website/"
    },
    {
      id: 4,
      title: "Full-Stack E-Commerce Solution",
      description: "A comprehensive e-commerce platform built with Angular, Node.js, and Tailwind CSS. Complete with admin panel, user management, and payment processing.",
      image: ecommerce,
      technologies: ["Angular", "Node.js", "Tailwind CSS", "REST APIs"],
      category: "E-Commerce",
      github: "https://github.com/Youssef-Hassan-Git/E-Commerce-FullStack",
      live: "https://github.com/Youssef-Hassan-Git/E-Commerce-FullStack"
    }
  ];

  return (
    <>
    <div id='projects' className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-20'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className='container mx-auto px-4 md:max-w-[1200px] relative z-10'>
        {/* Header Section */}
        <Fade direction="down" duration={1000} triggerOnce>
          <div className='text-center mb-16'>
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4'>
              Our Portfolio
            </h1>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full'></div>
            <p className='text-gray-300 text-lg mt-6 max-w-3xl mx-auto'>
              Explore our diverse portfolio of successful projects. From e-commerce platforms to interactive web applications, 
              we deliver innovative solutions that drive business growth and user engagement.
            </p>
          </div>
        </Fade>

        {/* Featured Project */}
        <Slide direction="up" duration={1200} triggerOnce>
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-white text-center mb-8'>Featured Project</h2>
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={project.id} className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-purple-500/20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                  <div className='relative group'>
                    <img 
                      src={project.image} 
                      className='w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500' 
                      alt={project.title} 
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl'></div>
                    <div className='absolute bottom-4 left-4'>
                      <span className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className='space-y-6'>
                    <div>
                      <h3 className='text-3xl font-bold text-white mb-3'>{project.title}</h3>
                      <p className='text-gray-300 leading-relaxed'>{project.description}</p>
                    </div>
                    
                    <div>
                      <h4 className='text-white font-semibold mb-3'>Technologies Used:</h4>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className='bg-slate-700/50 text-blue-400 px-3 py-1 rounded-full text-sm border border-slate-600'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className='flex flex-wrap gap-4'>
                      <a 
                        href={project.github} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2'
                      >
                        <i className='fab fa-github'></i>
                        View Code
                      </a>
                      <a 
                        href={project.live} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2'
                      >
                        <i className='fas fa-external-link-alt'></i>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slide>

        {/* All Projects Grid */}
        <Slide direction="up" duration={1200} triggerOnce>
          <div>
            <h2 className='text-3xl font-bold text-white text-center mb-8'>All Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.filter(p => !p.featured).map((project, index) => (
                <Zoom key={project.id} delay={index * 200} triggerOnce>
                  <div className='group relative'>
                    <div className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl shadow-blue-500/20 hover:shadow-purple-500/40 transition-all duration-500 transform hover:scale-105'>
                      {/* Project Image */}
                      <div className='relative mb-6 overflow-hidden rounded-xl'>
                        <img 
                          src={project.image} 
                          className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500' 
                          alt={project.title} 
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                        <div className='absolute top-4 right-4'>
                          <span className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium'>
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className='space-y-4'>
                        <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
                          {project.title}
                        </h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div>
                          <h4 className='text-white font-semibold text-sm mb-2'>Tech Stack:</h4>
                          <div className='flex flex-wrap gap-1'>
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span key={techIndex} className='bg-slate-700/50 text-blue-400 px-2 py-1 rounded text-xs border border-slate-600'>
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className='bg-slate-700/50 text-gray-400 px-2 py-1 rounded text-xs border border-slate-600'>
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className='flex gap-3 pt-2'>
                          <a 
                            href={project.github} 
                            target='_blank' 
                            rel="noopener noreferrer"
                            className='flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center'
                          >
                            <i className='fab fa-github mr-2'></i>
                            Code
                          </a>
                          <a 
                            href={project.live} 
                            target='_blank' 
                            rel="noopener noreferrer"
                            className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center'
                          >
                            <i className='fas fa-external-link-alt mr-2'></i>
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>
        </Slide>

        {/* CTA Section */}
        <Fade direction="up" duration={1200} triggerOnce>
          <div className='text-center mt-16'>
            <div className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-blue-500/20'>
              <h3 className='text-2xl font-bold text-white mb-4'>Ready to Start Your Project?</h3>
              <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
                Let's collaborate to bring your vision to life. Our team is ready to create something amazing for your business.
              </p>
              <a 
                href="#contact" 
                className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40'
              >
                <i className='fas fa-rocket'></i>
                Start Your Project
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
    </>
  )
}
