import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import OfferedServices from '../OfferedServices/OfferedServices'
import Contact from '../Contact/Contact'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ScrollTop from '../Scroll/ScrollTop'
import Trainings from '../Training/Trainings'

export default function Layout() {
  return (
    <>
      <Navbar />
    <div className="bg-black">
      <ScrollTop />
      <AboutMe />
      <Education />
      <Skills />
      <Trainings />
      <Projects />
      <OfferedServices />
      <Contact />
    </div>
      <Footer />

      </>
  )
}
