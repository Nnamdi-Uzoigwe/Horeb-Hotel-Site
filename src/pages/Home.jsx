import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Facilities from '../component/Facilities'
import Luxury from '../component/Luxury'
import Testimonial from '../component/Testimonial'


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Hero />
        <Luxury/>
        <Facilities/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home