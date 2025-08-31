import React from 'react'
import { Slide } from 'react-awesome-reveal'
import startFramework from '../../assets/images/startframework.png'
import games from '../../assets/images/games.png'
import ecommerce from '../../assets/images/commerce.png'
export default function Projects() {
  return (
    <>
    {/* projects */}
    <Slide direction="up" distance="20px" duration={1500} triggerOnce className='py-30'>
    <div id='projects' className='  mx-auto  md:max-w-[1100px] bg-[#121214] rounded-xl shadow-xl shadow-blue-700'>  

<div className='grid grid-cols-1  items-center justify-center'>
    {/* title */}
  <div className='flex justify-center items-center relative py-3'>
    <div className='text-white absolute top-7 after:content-[""] after:absolute after:top-12 after:left-0 after:w-full after:h-[3px] after:bg-gray-500'>
      <h3 className='text-4xl font-semibold'>Projects</h3>
      </div>
      <div className=' text-gray-700 font-bold'>
      <h3 className='text-6xl'>Projects</h3>
      </div>
  </div>  
 </div>

 {/* content */}
<div className='grid grid-cols-1 items-center justify-center py-10 max-w-[800px] mx-auto'>
  <h3 className='text-white text-center text-2xl font-semibold'>Dive into my front-end work—where clean code meets responsive design and effortless user experiences.</h3>
</div>
 
 <div className='grid md:grid-cols-3 grid-cols-1 items-center justify-center py-15 gap-4 p-5'>
  {/* first project */}
  <div className=' bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-700'>
    <img className='w-10/12 mx-auto' src={startFramework} alt="startFramework" />
    <p className='text-white text-center text-xl p-3 '>This Project is a website made by using React.js and Tailwind CSS deployed on vercel</p>
    <div className='flex justify-center items-center gap-4'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'><a target='_blank' href="https://github.com/Youssef-Hassan-Git/startFrameworkReactJs"><i className='fa-brands fa-github pe-2'></i>Github</a></button>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'><a target='_blank' href="https://start-framework-react-js.vercel.app/"><i className='fa-solid fa-globe pe-2'></i>Live Demo</a></button>
    </div>
  </div>
  {/* second project */}
  <div className=' bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-700'>
    <img className='w-10/12 mx-auto' src={games} alt="games website" />
    <p className='text-white text-center text-xl p-3 '>This Project is a games website made by using JS Vanila OOP and bootstrap 5</p>
    <div className='flex justify-center items-center gap-4'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'><a target='_blank' href="https://github.com/Youssef-Hassan-Git/Games-Website"><i className='fa-brands fa-github pe-2'></i>Github</a></button>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'><a target='_blank' href="https://youssef-hassan-git.github.io/Games-Website/"><i className='fa-solid fa-globe pe-2'></i>Live Demo</a></button>
    </div>
  </div>
  {/* third project */}
  <div className=' bg-gray-800 rounded-xl p-4 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-700'>
    <img className='w-10/12 mx-auto' src={ecommerce} alt="commerce website" />
    <p className='text-white text-center text-xl p-3 '>This Project is a ecommerce website made by using Angular, Node.js, and Tailwind CSS</p>
    <div className='flex justify-center items-center gap-4'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'><a target='_blank' href="https://github.com/Youssef-Hassan-Git/E-Commerce-FullStack"><i className='fa-brands fa-github pe-2'></i>Github</a></button>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'><a target='_blank' href="https://github.com/Youssef-Hassan-Git/E-Commerce-FullStack"><i className='fa-solid fa-globe pe-2'></i>Live Demo</a></button>
    </div>
  </div>
 </div>

    </div>
    </Slide>
    </>
  )
}
