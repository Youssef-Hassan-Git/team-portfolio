import React from 'react'
import { Slide } from 'react-awesome-reveal'
export default function Education() {
  return (
    <>

    {/* education */}
    <Slide direction="up" distance="20px" duration={1500} triggerOnce className='py-30'>
    <div id='education' className='container mx-auto   md:max-w-[1100px] bg-[#121214] rounded-xl shadow-xl shadow-blue-700'>  

    <div className='grid grid-cols-1  items-center justify-center'>
    {/* title */}
  <div className='flex justify-center items-center relative py-3'>
    <div className='text-white absolute top-7 after:content-[""] after:absolute after:top-12 after:left-0 after:w-[135px] after:h-[3px] after:bg-gray-500'>
      <h3 className='text-4xl font-semibold'>Education</h3>
      </div>
      <div className=' text-gray-700 font-bold'>
      <h3 className='text-6xl'>Education</h3>
      </div>
  </div>  

  {/* content */}

<div className='text-white p-8'>
  <h3 className='font-bold text-2xl text-blue-400'>Bachelor of Computer Science</h3>
  <div className='flex justify-between items-center'>
  <p className='font-bold p-3'>Canadian International College, New Cairo, Egypt.  <span className='text-gray-400 ps-2'>Class of 2021-2025</span></p>
  <p className='font-bold p-3 border-2 border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition-all duration-300'>GPA: 3.7/4.0</p>
  </div>
  <p className='font-bold p-3'>Major: Data Science, Minor: Software Engineering.</p>
  <p className='font-bold pt-3'>Relevant Courses: Data Structures, Algorithms, Database Management Systems, Software Engineering, Artificial Intelligence, Machine Learning, Computer Networks, Operating Systems, Computer Architecture, Computer Graphics, and more.</p>
</div>
 </div>

    </div>
    </Slide>
    </>
  )
}
