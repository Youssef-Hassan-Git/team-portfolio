import React from 'react'
import aboutMe from '../../assets/images/aboutme.jpg'
import { Slide, Fade, Zoom   } from 'react-awesome-reveal'

export default function AboutMe() {
  return (
    <>
    <div id='about' className='container mx-auto py-10  md:max-w-[1100px] pt-22'>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-10 items-center justify-center'>

      {/* left side */}
      <Zoom  duration={1500} triggerOnce>
        <div className='bg-[#121214] rounded-xl py-8 shadow-xl shadow-blue-700 '>

    <img src={aboutMe} className=' w-5/12  rounded-full shadow-2xl shadow-blue-700 mx-auto mb-14 ' alt="aboutMe" />
     <h2 className='text-2xl font-bold text-white text-center mb-4'>Youssef Hassan</h2>
     <p className='text-gray-400 text-center'>I am a Front End Developer</p>
     <p className='text-gray-400 text-center'>React, Next and Angular based in Egypt</p>
      <div className='flex justify-center items-center'>
        <a href="https://www.linkedin.com/in/youssef-hassan-professional1/" target='_blank' className='text-2xl text-gray-400 pt-4'>
        <i className="fa-brands fa-linkedin  border-2 border-gray-500 rounded-lg  p-2 me-3 hover:bg-gray-500 hover:text-white transition-all duration-300"></i>
        </a>
        <a href="https://github.com/Youssef-Hassan-Git" target='_blank' className='text-2xl text-gray-400 pt-4'>
        <i className="fa-brands fa-github  border-2 border-gray-500 rounded-lg  p-2 me-3 hover:bg-gray-500 hover:text-white transition-all duration-300"></i>
        </a>
        <a href="http://Wa.me/201062065931" target='_blank' className='text-2xl text-gray-400 pt-4'>
        <i className="fa-brands fa-whatsapp  border-2 border-gray-500 rounded-lg  p-2 me-3 hover:bg-gray-500 hover:text-white transition-all duration-300"></i>
        </a>        
        <a href="mailto:youssefhasssan7666@gmail.com" target='_blank' className='text-2xl text-gray-400 pt-4'>
        <i className="fa-solid fa-envelope  border-2 border-gray-500 rounded-lg  p-2 me-3 hover:bg-gray-500 hover:text-white transition-all duration-300"></i>
        </a>
      </div>
        </div>
        </Zoom>

        {/* right side */}
        
        <Zoom duration={1500} triggerOnce>
        <div className='bg-[#121214] rounded-xl py-13 shadow-xl shadow-blue-700'>


          {/* title */}
          <div className='flex justify-center items-center relative py-3'>


          <div className='text-white absolute top-8 after:content-[""] after:absolute after:top-10 after:left-0 after:w-[135px] after:h-[3px] after:bg-gray-500'>
             <h3 className='text-3xl font-semibold'>About Me</h3>
            </div>
            <div className=' text-gray-700 font-bold'>
            <h3 className='text-6xl'>About Me</h3>
            </div>
         </div>

          {/* content */}

            <div className='text-white p-8'>
              <p>I’m a Front-End Developer with a strong focus on building responsive, high-performance web applications using modern technologies like React.js, Next.js, Angular, and Redux Toolkit for efficient state management.

I specialize in crafting clean, maintainable, and scalable user interfaces with JavaScript (ES6+), HTML5, and CSS3, complemented by experience with styling frameworks such as Tailwind CSS, Bootstrap 5, and Material UI. My development approach prioritizes performance, accessibility, and cross-browser compatibility to deliver seamless user experiences.

Driven by curiosity and a commitment to growth, I stay up-to-date with industry best practices and emerging technologies. I thrive in collaborative environments where I can help create robust, user-centric applications that deliver real value.</p>
            </div>


        </div>
        </Zoom>
        </div>
    </div>
    </>
  )
}
