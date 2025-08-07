import { useEffect } from 'react'
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
        <Hero />
        <Luxury/>
        <Facilities/>
        <Testimonial/>
    </div>
  )
}

export default Home