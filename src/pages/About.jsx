import { useEffect } from 'react'

import Abouthero from '../component/Abouthero'
import Aboutdetail from '../component/Aboutdetail'

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='overflow-x-hidden'>
        <Abouthero/>
        <Aboutdetail/>
    </div>
  )
}

export default About