import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Abouthero from '../component/Abouthero'
import Aboutdetail from '../component/Aboutdetail'

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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