import { useEffect } from 'react'
import Maps from '../component/Maps'
import Contacthero from '../component/Contacthero'
import ContactForm from '../component/ContactForm'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' overflow-x-hidden'>
        <Contacthero/>
        <ContactForm/>
        <div className='h-[500px]'>
         <Maps/>
        </div>
    </div>
  )
}

export default Contact