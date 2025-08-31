import React from 'react'
import aboutMe from '../../assets/images/aboutme.jpg'
import devnest from '../../assets/images/devnest.png'
import { Slide, Fade, Zoom, Bounce } from 'react-awesome-reveal'

export default function AboutMe() {
  return (
    <>
    <div id='about' className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      {/* Enhanced Background Elements */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute inset-0' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Floating Particles */}
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
        
        {/* Animated Circles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className='absolute border-2 border-blue-500/20 rounded-full animate-spin'
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${20 + i * 5}s`,
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
            }}
          ></div>
        ))}
        
        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`line-${i}`}
            className='absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse'
            style={{
              width: `${200 + i * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className='container mx-auto py-20 px-4 md:max-w-[1200px] relative z-10'>
        {/* Enhanced Header Section */}
        <Fade direction="down" duration={1000} triggerOnce>
          <div className='text-center mb-20'>
            <div className='relative inline-block mb-6'>
              <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 relative z-10'>
                About Our Team
              </h1>
              <div className='absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full'></div>
            </div>
            <div className='w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full mb-8 shadow-lg shadow-purple-500/50'></div>
            <p className='text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-relaxed'>
              We are a passionate team of full-stack developers specializing in MERN stack applications 
              and cloud deployment solutions
            </p>
          </div>
        </Fade>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          
          {/* Enhanced Left Side - Team Profile */}
          <Slide direction="left" duration={1200} triggerOnce>
            <div className='relative group'>
              <div className='absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              {/* Main Card */}
              <div className='bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 relative'>
                
                {/* Enhanced Team Image */}
                <div className='mb-10'>
                  <div className='w-64 h-48 mx-auto relative'>
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500'></div>
                    <img 
                      src={devnest} 
                      className='w-full h-full object-contain rounded-2xl border-4 border-slate-700 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500 bg-white' 
                      alt="Team DevNest" 
                    />
                  </div>
                </div>

                {/* Enhanced Status Badge */}
                <div className='text-center mb-8'>
                  <div className='inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-green-500/30'>
                    <div className='w-3 h-3 bg-white rounded-full animate-pulse'></div>
                    Team Available
                  </div>
                </div>

                {/* Enhanced Team Info */}
                <div className='text-center mb-10'>
                  <h2 className='text-4xl font-bold text-white mb-3'>Team DevNest</h2>
                  <p className='text-purple-400 font-semibold text-xl mb-2'>Full-Stack Development Team</p>
                  <p className='text-gray-400 text-lg'>MERN And Mean Stack Specialists</p>
                </div>

                {/* Enhanced Tech Stack Badges */}
                <div className='flex flex-wrap justify-center gap-3 mb-10'>
                  {['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Docker'].map((tech, index) => (
                    <Bounce key={tech} delay={index * 100} triggerOnce>
                      <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105'>
                        {tech}
                      </span>
                    </Bounce>
                  ))}
                </div>

                {/* Enhanced Social Links */}
                <div className='flex justify-center gap-6'>
                  {[
                    { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/youssef-hassan-professional1/', label: 'LinkedIn' },
                    { icon: 'fa-brands fa-github', href: 'https://github.com/Youssef-Hassan-Git', label: 'GitHub' },
                    { icon: 'fa-brands fa-whatsapp', href: 'http://Wa.me/201062065931', label: 'WhatsApp' },
                    { icon: 'fa-solid fa-envelope', href: 'mailto:youssefhasssan7666@gmail.com', label: 'Email' }
                  ].map((social, index) => (
                    <Zoom key={social.label} delay={index * 150} triggerOnce>
                      <a 
                        key={social.label}
                        href={social.href} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='group relative'
                      >
                        <div className='bg-slate-700/60 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30'>
                          <i className={`${social.icon} text-2xl text-gray-300 group-hover:text-white transition-colors duration-300`}></i>
                        </div>
                        <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg'>
                          {social.label}
                        </div>
                      </a>
                    </Zoom>
                  ))}
                </div>
              </div>
            </div>
          </Slide>

          {/* Enhanced Right Side - About Content */}
          <Slide direction="right" duration={1200} triggerOnce>
            <div className='space-y-10'>
              
              {/* Enhanced Mission Statement */}
              <div className='relative group'>
                <div className='absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                <div className='bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 relative'>
                  <div className='flex items-center gap-4 mb-8'>
                    <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                      <i className='fas fa-rocket text-white text-2xl'></i>
                    </div>
                    <h3 className='text-3xl font-bold text-white'>Our Mission</h3>
                  </div>
                  <p className='text-gray-300 leading-relaxed text-lg'>
                    We transform ideas into powerful, scalable web applications using cutting-edge technologies. 
                    Our team's expertise in MERN stack and AWS deployment ensures your projects are built for success.
                  </p>
                </div>
              </div>

              {/* Enhanced Services */}
              <div className='relative group'>
                <div className='absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                <div className='bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 relative'>
                  <div className='flex items-center gap-4 mb-8'>
                    <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                      <i className='fas fa-code text-white text-2xl'></i>
                    </div>
                    <h3 className='text-3xl font-bold text-white'>What We Do</h3>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {[
                      { icon: 'fas fa-mobile-alt', title: 'Frontend Development', desc: 'React, Next.js, Angular' },
                      { icon: 'fas fa-server', title: 'Backend Development', desc: 'Node.js, Express, MongoDB' },
                      { icon: 'fas fa-cloud', title: 'Cloud Deployment', desc: 'AWS, Docker, CI/CD' },
                      { icon: 'fas fa-paint-brush', title: 'UI/UX Design', desc: 'Modern, Responsive Design' }
                    ].map((service, index) => (
                      <Fade key={index} delay={index * 200} triggerOnce>
                        <div className='group/service bg-slate-700/50 hover:bg-slate-700/70 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-slate-600/50'>
                          <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover/service:scale-110 transition-transform duration-300 shadow-lg'>
                              <i className={`${service.icon} text-white text-lg`}></i>
                            </div>
                            <div>
                              <h4 className='text-white font-bold text-base group-hover/service:text-blue-400 transition-colors duration-300'>{service.title}</h4>
                              <p className='text-gray-400 text-sm'>{service.desc}</p>
                            </div>
                          </div>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Stats */}
              <div className='grid grid-cols-3 gap-6'>
                {[
                  { number: '50+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
                  { number: '100%', label: 'Client Satisfaction', icon: 'fas fa-heart' },
                  { number: '24/7', label: 'Team Support', icon: 'fas fa-headset' }
                ].map((stat, index) => (
                  <Bounce key={index} delay={index * 200} triggerOnce>
                    <div className='group relative'>
                      <div className='absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      <div className='bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 relative'>
                        <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                          <i className={`${stat.icon} text-white text-xl`}></i>
                        </div>
                        <div className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2'>
                          {stat.number}
                        </div>
                        <div className='text-gray-400 text-sm font-medium'>{stat.label}</div>
                      </div>
                    </div>
                  </Bounce>
                ))}
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
    </>
  )
}
