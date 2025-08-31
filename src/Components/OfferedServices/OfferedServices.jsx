import React from 'react'
import { Slide } from 'react-awesome-reveal'

export default function OfferedServices() {
  return (
    <>
    {/* offered services */}
    <Slide direction="up" distance="20px" duration={1500} triggerOnce className='py-30'>
    <div id='offeredServices' className='  mx-auto  md:max-w-[1100px] bg-[#121214] rounded-xl shadow-xl shadow-blue-700'>  

<div className='grid grid-cols-1 items-center justify-center'>
    {/* title */}
  <div className='flex justify-center items-center relative py-3'>
    <div className='text-white absolute top-7 after:content-[""] after:absolute after:top-12 after:left-0 after:w-full after:h-[3px] after:bg-gray-500'>
      <h3 className='text-4xl font-semibold'>Offered Services</h3>
      </div>
      <div className=' text-gray-700 font-bold'>
      <h3 className='text-6xl'>Offered Services</h3>
      </div>
  </div>  
 </div>

 {/* content */}
 <div className='grid grid-cols-1 items-center justify-center py-10 max-w-[800px] mx-auto'>
  <h3 className='text-white text-center text-2xl font-semibold'>I offer a range of services to help you achieve your goals.</h3>
</div>

    <div className='grid md:grid-cols-3 grid-cols-1 items-center justify-center py-15 gap-4 p-5 gap-y-8 '>
    {/* first service */}
    <div className='flex flex-col items-center justify-center gap-4 bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-700 hover:shadow-blue-700'>
      <i className='fa-solid fa-code text-4xl text-white bg-blue-600 rounded-xl p-3 py-4 border-5 border-blue-400 hover:bg-blue-400 hover:border-blue-600 transition-all duration-500'></i>
      <h3 className='text-2xl font-semibold text-white'>Web Development</h3>
      <p className='text-gray-400 text-center'>I create responsive and user-friendly websites using React.js, Next.js, Angular, and Tailwind CSS.</p>
    </div>
    {/* second service */}
    <div className='flex flex-col items-center justify-center gap-4 bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-700 hover:shadow-blue-700'>
      <i className='fa-solid fa-mobile text-4xl text-white bg-blue-600 rounded-xl p-3 py-4 border-5 border-blue-400 hover:bg-blue-400 hover:border-blue-600 transition-all duration-500'></i>
      <h3 className='text-2xl font-semibold text-white'>Mobile-First Design</h3>
      <p className='text-gray-400 text-center'>Ensuring your website looks and works perfectly on all devices, from mobile phones to desktop computers.</p>
    </div>
    {/* third service */}
    <div className='flex flex-col items-center justify-center gap-4 bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-700 hover:shadow-blue-700'>
      <i className='fa-solid fa-server text-4xl text-white bg-blue-600 rounded-xl p-3 py-4 border-5 border-blue-400 hover:bg-blue-400 hover:border-blue-600 transition-all duration-500'></i>
      <h3 className='text-2xl font-semibold text-white'>API Integration</h3>
      <p className='text-gray-400 text-center'>Connecting frontend interfaces with RESTful APIs, handling data binding, and managing asynchronous operations..</p>
    </div>
    {/* fourth service */}
    <div className='flex flex-col items-center justify-center gap-4 bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-700 hover:shadow-blue-700'>
      <i className='fa-solid fa-globe text-4xl text-white bg-blue-600 rounded-xl p-3 py-4 border-5 border-blue-400 hover:bg-blue-400 hover:border-blue-600 transition-all duration-500'></i>
      <h3 className='text-2xl font-semibold text-white'>Single Page Applications</h3>
      <p className='text-gray-400 text-center'>Creating smooth, dynamic user experiences with single-page applications (SPAs) using React.js, Angular, and Next.js.</p>  
    </div>
    {/* fifth service */}
    <div className='flex flex-col items-center justify-center gap-4 bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-700 hover:shadow-blue-700'>
      <i className='fa-brands fa-figma text-4xl text-white bg-blue-600 rounded-xl p-3 py-4 border-5 border-blue-400 hover:bg-blue-400 hover:border-blue-600 transition-all duration-500'></i>
      <h3 className='text-2xl font-semibold text-white'>UI/UX Implementation</h3>
      <p className='text-gray-400 text-center'>Translate Figma, Adobe XD, into fully functional, user interfaces using Tailwind CSS, Bootstrap 5, and Material UI. </p>
    </div>
    {/* sixth service */}
    <div className='flex flex-col items-center justify-center gap-4 bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-700 hover:shadow-blue-700'>
      <i className='fa-solid fa-file-code text-4xl text-white bg-blue-600 rounded-xl p-3 py-4 border-5 border-blue-400 hover:bg-blue-400 hover:border-blue-600 transition-all duration-500'></i>
      <h3 className='text-2xl font-semibold text-white'>Technical Documentation</h3>
      <p className='text-gray-400 text-center'>Writing clear, concise technical documentation for your projects, ensuring easy understanding and maintenance.</p>
    </div>

    </div>
    </div>
    </Slide>
      
    </>
  )
}
