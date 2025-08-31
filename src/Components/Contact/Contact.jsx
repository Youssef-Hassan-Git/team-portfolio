import React from 'react'
import { Slide, Fade, Zoom } from 'react-awesome-reveal'

export default function Contact() {
  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      value: 'youssefhassan7666@gmail.com',
      link: 'mailto:youssefhassan7666@gmail.com',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      value: '+20 106 206 5931',
      link: 'tel:+201062065931',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      value: '+20 106 206 5931',
      link: 'http://Wa.me/201062065931',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'Youssef Hassan',
      link: 'https://www.linkedin.com/in/youssef-hassan-professional1/',
      color: 'from-blue-600 to-blue-700'
    }
  ];



  return (
    <>
    <div id='contact' className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-20'>
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
              Get In Touch
            </h1>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full'></div>
            <p className='text-gray-300 text-lg mt-6 max-w-3xl mx-auto'>
              Ready to start your next project? Let's discuss how our team can help bring your vision to life. 
              We're here to answer any questions and provide you with the best solution for your needs.
            </p>
          </div>
        </Fade>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          
          {/* Contact Information */}
          <Slide direction="left" duration={1200} triggerOnce>
            <div className='space-y-8'>
              <div className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-blue-500/20'>
                <h2 className='text-3xl font-bold text-white mb-6'>Let's Connect</h2>
                <p className='text-gray-300 mb-8 leading-relaxed'>
                  We're always excited to hear about new projects and opportunities. 
                  Reach out to us through any of the channels below, and we'll get back to you within 24 hours.
                </p>
                
                <div className='space-y-6'>
                  {contactMethods.map((method, index) => (
                    <Zoom key={index} delay={index * 200} triggerOnce>
                      <a 
                        href={method.link} 
                        target={method.link.startsWith('http') ? '_blank' : '_self'}
                        rel={method.link.startsWith('http') ? "noopener noreferrer" : ""}
                        className='group flex items-center gap-4 p-4 bg-slate-700/50 hover:bg-slate-700/70 rounded-xl transition-all duration-300 transform hover:scale-105'
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <i className={`${method.icon} text-white text-xl`}></i>
                        </div>
                        <div>
                          <h3 className='text-white font-semibold'>{method.title}</h3>
                          <p className='text-gray-400 group-hover:text-blue-400 transition-colors duration-300'>{method.value}</p>
                        </div>
                      </a>
                    </Zoom>
                  ))}
                </div>
              </div>

              {/* Team Availability */}
              <div className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-purple-500/20'>
                <h3 className='text-2xl font-bold text-white mb-6'>Team Availability</h3>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between p-4 bg-slate-700/50 rounded-xl'>
                    <div className='flex items-center gap-3'>
                      <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                      <span className='text-white font-medium'>Available for New Projects</span>
                    </div>
                    <span className='text-green-400 text-sm font-medium'>Ready</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-slate-700/50 rounded-xl'>
                    <div className='flex items-center gap-3'>
                      <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                      <span className='text-white font-medium'>Response Time</span>
                    </div>
                    <span className='text-blue-400 text-sm font-medium'>Within 24h</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-slate-700/50 rounded-xl'>
                    <div className='flex items-center gap-3'>
                      <div className='w-3 h-3 bg-purple-500 rounded-full'></div>
                      <span className='text-white font-medium'>Project Timeline</span>
                    </div>
                    <span className='text-purple-400 text-sm font-medium'>2-8 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* Contact Info */}
          <Slide direction="right" duration={1200} triggerOnce>
            <div className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-purple-500/20'>
              <h2 className='text-3xl font-bold text-white mb-6'>Get In Touch</h2>
              <p className='text-gray-300 mb-8'>
                Ready to start your next project? Contact us through any of the channels below and we'll get back to you within 24 hours.
              </p>
              
              <div className='space-y-6'>
                <div className='text-center'>
                  <h3 className='text-xl font-semibold text-white mb-4'>Preferred Contact Methods</h3>
                  <div className='flex flex-wrap justify-center gap-4'>
                    <a 
                      href="mailto:youssefhassan7666@gmail.com"
                      className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2'
                    >
                      <i className='fas fa-envelope'></i>
                      Send Email
                    </a>
                    <a 
                      href="http://Wa.me/201062065931"
                      target='_blank'
                      rel="noopener noreferrer"
                      className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2'
                    >
                      <i className='fab fa-whatsapp'></i>
                      WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className='text-center pt-4'>
                  <p className='text-gray-400 text-sm'>
                    We typically respond within 24 hours and are available for video calls to discuss your project requirements in detail.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </div>

        {/* Additional Info */}
        <Fade direction="up" duration={1200} triggerOnce>
          <div className='mt-16 text-center'>
            <div className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-blue-500/20'>
              <h3 className='text-2xl font-bold text-white mb-4'>Why Choose Our Team?</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                {[
                  { icon: 'fas fa-clock', title: 'Fast Delivery', desc: 'Quick turnaround times without compromising quality' },
                  { icon: 'fas fa-shield-alt', title: 'Secure & Reliable', desc: 'Enterprise-grade security and robust infrastructure' },
                  { icon: 'fas fa-headset', title: '24/7 Support', desc: 'Round-the-clock support for all your needs' }
                ].map((feature, index) => (
                  <div key={index} className='text-center'>
                    <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                      <i className={`${feature.icon} text-white text-2xl`}></i>
                    </div>
                    <h4 className='text-white font-semibold mb-2'>{feature.title}</h4>
                    <p className='text-gray-400 text-sm'>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
    </>
  )
}
