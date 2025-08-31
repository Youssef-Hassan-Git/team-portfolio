import React from 'react'
import { Slide } from 'react-awesome-reveal'

export default function Contact() {
  return (
    <>
    {/* contact */}
    <Slide direction="up" distance="20px" duration={1500} triggerOnce className='py-30'>
    <div id='contact' className='  mx-auto  md:max-w-[1100px] bg-[#121214] rounded-xl shadow-xl shadow-blue-700'>  

<div className='grid grid-cols-1 items-center justify-center'>
    {/* title */}
  <div className='flex justify-center items-center relative py-3'>
    <div className='text-white absolute top-7 after:content-[""] after:absolute after:top-12 after:left-0 after:w-full after:h-[3px] after:bg-gray-500'>
      <h3 className='text-4xl font-semibold'>Contact</h3>
      </div>
      <div className=' text-gray-700 font-bold'>
      <h3 className='text-6xl'>Contact</h3>
      </div>
  </div>  
 </div>

 {/* content */}
 <div className='grid grid-cols-1 items-center justify-center py-10 max-w-[800px] mx-auto'>
  <h3 className='text-white text-center text-2xl font-semibold py-4'>Let's connect and discuss your next project. I'm here to help you achieve your goals.</h3>
   <h3 className='text-blue-500 text-center text-2xl font-semibold py-4 hover:text-white transition-all duration-300'><i className='fa-solid fa-envelope pe-2'></i>Email: <span className='text-white transition-all duration-300'>youssefhassan7666@gmail.com</span></h3>
    <h3 className='text-blue-500 text-center text-2xl font-semibold py-4 hover:text-white transition-all duration-300'><i className='fa-solid fa-phone pe-2'></i>Phone: <span className='text-white transition-all duration-300'>+201062065931</span></h3>

</div>


    </div>
    </Slide>
    </>
  )
}
