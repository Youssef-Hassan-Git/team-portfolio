import React from 'react'

export default function ScrollTop() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <>
      <div className='fixed bottom-5 right-5 p-3 z-50'>
        <i onClick={scrollToTop} className='fa-solid fa-arrow-up text-white bg-blue-500 rounded-xl p-3 hover:bg-blue-800 transition-all duration-300'></i>
      </div>
    </>
  )
}