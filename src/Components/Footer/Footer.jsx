import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-slate-700/50'>
        <div className='container mx-auto px-4 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            
            {/* Company Info */}
            <div className='md:col-span-2'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                  <i className='fas fa-code text-white text-xl'></i>
                </div>
                <div>
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                    Team DevNest
                  </h3>
                  <p className='text-gray-400 text-sm'>MERN Stack & AWS Experts</p>
                </div>
              </div>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                We are a passionate team of full-stack developers specializing in MERN stack applications 
                and cloud deployment solutions. Let's build something amazing together.
              </p>
              <div className='flex gap-4'>
                {[
                  { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/youssef-hassan-professional1/', label: 'LinkedIn' },
                  { icon: 'fab fa-github', href: 'https://github.com/Youssef-Hassan-Git', label: 'GitHub' },
                  { icon: 'fab fa-whatsapp', href: 'http://Wa.me/201062065931', label: 'WhatsApp' },
                  { icon: 'fas fa-envelope', href: 'mailto:youssefhassan7666@gmail.com', label: 'Email' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className='w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110'
                    title={social.label}
                  >
                    <i className={`${social.icon} text-gray-300 hover:text-white transition-colors duration-300`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='text-white font-semibold text-lg mb-4'>Quick Links</h4>
              <ul className='space-y-3'>
                {[
                  { name: 'About Team', href: '#about' },
                  { name: 'Our Services', href: '#services' },
                  { name: 'Portfolio', href: '#projects' },
                  { name: 'Technologies', href: '#skills' },
                  { name: 'Contact Us', href: '#contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className='text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2'
                    >
                      <i className='fas fa-chevron-right text-xs'></i>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className='text-white font-semibold text-lg mb-4'>Our Services</h4>
              <ul className='space-y-3'>
                {[
                  'Full-Stack Development',
                  'Cloud Deployment',
                  'API Development',
                  'UI/UX Design',
                  'Maintenance & Support'
                ].map((service, index) => (
                  <li key={index}>
                    <span className='text-gray-400 flex items-center gap-2'>
                      <i className='fas fa-check text-green-500 text-xs'></i>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='border-t border-slate-700/50 mt-8 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <div className='text-gray-400 text-sm'>
                <p>&copy; {currentYear} Team DevNest. All rights reserved.</p>
              </div>
              <div className='flex items-center gap-6 text-sm'>
                <span className='text-gray-400'>Made with</span>
                <div className='flex items-center gap-2'>
                  <i className='fas fa-heart text-red-500'></i>
                  <span className='text-gray-400'>by our amazing team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
