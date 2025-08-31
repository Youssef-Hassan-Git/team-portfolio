import React from 'react'
import Slider from 'react-slick'
import { Slide } from 'react-awesome-reveal'
import nti from '../../assets/images/download.png'
export default function Trainings() {
  return (
    <>

    <Slide direction="up" distance="20px" duration={1500} triggerOnce className='py-30'>
    <div id='trainings' className='container mx-auto   md:max-w-[1100px] bg-[#121214] rounded-xl shadow-xl shadow-blue-700'>  
    {/* title */}
      <div className='flex justify-center items-center relative py-3'>
    <div className='text-white absolute top-7 after:content-[""] after:absolute after:top-12 after:left-0 after:w-[135px] after:h-[3px] after:bg-gray-500'>
      <h3 className='text-4xl font-semibold'>Trainings</h3>
      </div>
      <div className=' text-gray-700 font-bold'>
      <h3 className='text-6xl'>Trainings</h3>
      </div>
  </div> 
  {/* content */}
  <div className='grid grid-cols-1 items-center justify-center py-5 text-center mx-auto gap-3'>
       <img className='w-3/12 mx-auto py-4' src={nti} alt="nti" />
        <h3 className='text-2xl font-bold text-white'>Mean Stack NTI Freelance Training</h3>
        <p className='text-gray-400'>Attended NTI Mean Stack Freelance Training composed of 180 hours of training  in 2025.</p>
  </div>
  </div>
  </Slide>
  </>
  )
}
