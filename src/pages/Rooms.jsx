import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Room from '../component/Room'
import RoomHero from '../component/RoomHero'

function Rooms() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <RoomHero/>
        <Room/>
        <Footer/>
    </div>
  )
}

export default Rooms