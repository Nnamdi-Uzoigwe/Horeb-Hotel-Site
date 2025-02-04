import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Abouthero from '../component/Abouthero'
import Aboutdetail from '../component/Aboutdetail'

function About() {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Abouthero/>
        <Aboutdetail/>
        <Footer/>
    </div>
  )
}

export default About