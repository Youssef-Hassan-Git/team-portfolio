import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import OfferedServices from '../OfferedServices/OfferedServices'
import Contact from '../Contact/Contact'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ScrollTop from '../Scroll/ScrollTop'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <ScrollTop />
        <AboutMe />
        <Skills />
        <Projects />
        <OfferedServices />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
