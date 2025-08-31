import React from 'react'
import { Slide } from 'react-awesome-reveal'
import html from "../../assets/images/html5-icon.svg"
import css from "../../assets/images/css-icon.svg"
import bootstrap from "../../assets/images/bootstrap-icon.svg"
import tailwind from "../../assets/images/tailwindcss-icon.svg"
import react from "../../assets/images/react-1.svg"
import angular from "../../assets/images/angular-icon.svg"
import typescript from "../../assets/images/typescriptlang-icon.svg"
import javascript from "../../assets/images/javascript-icon.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    {/* skills */}
    <Slide direction="up" distance="20px" duration={1500} triggerOnce className='py-30'>
    <div id='skills' className='container mx-auto   md:max-w-[1100px] bg-[#121214] rounded-xl shadow-xl shadow-blue-700'>  

<div className='grid grid-cols-1  items-center justify-center'>
    {/* title */}
  <div className='flex justify-center items-center relative py-3'>
    <div className='text-white absolute top-7 after:content-[""] after:absolute after:top-12 after:left-0 after:w-full after:h-[3px] after:bg-gray-500'>
      <h3 className='text-4xl font-semibold'>Skills</h3>
      </div>
      <div className=' text-gray-700 font-bold'>
      <h3 className='text-6xl'>Skills</h3>
      </div>
  </div>  
 </div>

{/* content */}

<div className='grid grid-cols-1 items-center justify-center pt-15 p-30'>
  <Slider {...settings} className=" flex justify-center items-center gap-10">
      <img className='w-24 h-24 border-2 border-gray-500 rounded-lg ' src={html} alt="html" />
      <img className='w-24 h-24 border-2 border-gray-500 rounded-lg ' src={css} alt="css" />
      <img className='w-24 h-24 border-2 border-gray-500 rounded-lg ' src={bootstrap} alt="bootstrap" />
      <img className='w-24 h-24 border-2 border-gray-500 rounded-lg ' src={tailwind} alt="tailwind" />
      <img className='w-24 h-24 border-2 border-gray-500 rounded-lg ' src={react} alt="react" />
      <img className='w-24 h-24 border-2 border-gray-500 rounded-lg ' src={angular} alt="angular" />
      <img className='w-24 h-24 border-2 border-gray-500 rounded-lg ' src={typescript} alt="typescript" />
      <img className='w-24 h-24 border-2 border-gray-500 rounded-lg ' src={javascript} alt="javascript" />
  </Slider>
</div>

    </div>
    </Slide>
    </>
  )
}
