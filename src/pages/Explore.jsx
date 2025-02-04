import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Tour from '../component/Tour'
import Explorehero from '../component/Explorehero'

function Explore() {
  return (
    <div>
        <Navbar/>
        <Explorehero/>
        <Tour/>
        <Footer/>
    </div>
  )
}

export default Explore