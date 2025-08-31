import React from 'react'
import { Slide, Fade, Zoom } from 'react-awesome-reveal'

export default function OfferedServices() {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Full-Stack Development',
      description: 'Complete web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) with modern architecture and best practices.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Real-time Features'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Web Design',
      description: 'Mobile-first, responsive designs that work seamlessly across all devices and screen sizes with modern CSS frameworks.',
      features: ['Mobile-First', 'Cross-Browser', 'Performance', 'Accessibility'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Deployment & DevOps',
      description: 'AWS cloud infrastructure setup, CI/CD pipelines, and automated deployment solutions for scalable applications.',
      features: ['AWS Services', 'Docker', 'CI/CD', 'Monitoring'],
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: 'fas fa-database',
      title: 'Database & API Development',
      description: 'Custom API development, database design, and integration services for robust backend solutions.',
      features: ['REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Implementation',
      description: 'Transform design mockups into pixel-perfect, interactive user interfaces using modern frameworks and libraries.',
      features: ['Figma to Code', 'Component Libraries', 'Animations', 'User Testing'],
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your applications running smoothly and securely.',
      features: ['Bug Fixes', 'Updates', 'Security', 'Performance'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <>
    <div id='services' className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-20'>
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
              Our Services
            </h1>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full'></div>
            <p className='text-gray-300 text-lg mt-6 max-w-3xl mx-auto'>
              We offer comprehensive web development services tailored to your business needs. 
              From concept to deployment, our team handles every aspect of your project.
            </p>
          </div>
        </Fade>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {services.map((service, index) => (
            <Zoom key={index} delay={index * 200} triggerOnce>
              <div className='group relative'>
                <div className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-blue-500/20 hover:shadow-purple-500/40 transition-all duration-500 transform hover:scale-105 h-full'>
                  
                  {/* Service Icon */}
                  <div className='mb-6'>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <i className={`${service.icon} text-white text-2xl`}></i>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
                      {service.title}
                    </h3>
                    <p className='text-gray-300 leading-relaxed'>
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className='pt-4'>
                      <h4 className='text-white font-semibold mb-3 text-sm'>Key Features:</h4>
                      <div className='grid grid-cols-2 gap-2'>
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className='flex items-center gap-2'>
                            <div className='w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full'></div>
                            <span className='text-gray-400 text-sm'>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>

        {/* Process Section */}
        <Slide direction="up" duration={1200} triggerOnce>
          <div className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-purple-500/20'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-white mb-4'>Our Development Process</h2>
              <p className='text-gray-300 max-w-2xl mx-auto'>
                We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
              </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements and project goals', icon: 'fas fa-lightbulb' },
                { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and architecture', icon: 'fas fa-tasks' },
                { step: '03', title: 'Development', desc: 'Building your application with best practices', icon: 'fas fa-code' },
                { step: '04', title: 'Deployment', desc: 'Launching and maintaining your application', icon: 'fas fa-rocket' }
              ].map((process, index) => (
                <Fade key={index} delay={index * 200} triggerOnce>
                  <div className='text-center group'>
                    <div className='relative mb-6'>
                      <div className='w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300'>
                        <i className={`${process.icon} text-white text-xl`}></i>
                      </div>
                      <div className='absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center'>
                        <span className='text-white text-sm font-bold'>{process.step}</span>
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>{process.title}</h3>
                    <p className='text-gray-400 text-sm'>{process.desc}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </Slide>


      </div>
    </div>
    </>
  )
}
