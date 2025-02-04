import React from 'react'
import {FaWifi, FaParking} from 'react-icons/fa'
import {GiChickenOven, GiGamepad} from 'react-icons/gi'
import {FaDumbbell} from 'react-icons/fa6'
import {HiLightBulb} from 'react-icons/hi'
import {MdLocalLaundryService} from 'react-icons/md'
import {FaPersonSwimming} from 'react-icons/fa6'

const tools = [
    {
        id: 1,
        icons: FaPersonSwimming,
        title: 'Swimming Pool'

    },
    {
        id: 2,
        icons: FaWifi,
        title: 'Internet'

    },
   
    {
        id: 4,
        icons: FaDumbbell,
        title: 'Gym'

    },
    {
        id: 5,
        icons: GiGamepad,
        title: 'Game Center'

    },
   
    {
        id: 7,
        icons: MdLocalLaundryService,
        title: 'Laundry'

    },
    {
        id: 8,
        icons: FaParking,
        title: 'Parking Space'

    },
]

function Facilities() {
  return (
    <div className='font-poppins flex flex-col items-center pt-16 pb-16 pr-4 pl-4  lg:pr-20 lg:pl-20 gap-20 w-screen'>
        <div className='flex flex-col items-center'>
            <p className='text-[30px] lg:text-[40px] font-medium '>Our Facilities</p>
            <p className='text-[10px] lg:text-[15px] font-medium'>We offer modern Home facilities for your comfort.</p>
        </div>
        
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-20'>
               {
                tools.map(items => (
                    <div key={items.id} className='w-[250px] h-[220px] lg:w-[280px] lg:h-[250px] shadow-lg flex flex-col items-center justify-center gap-2 text-[#7C6A46] hover:bg-[#7C6A46] hover:text-white transition-color duration-1000 ease-in-out '>
                    <items.icons size={40}/>
                    <p className='text-[20px] font-medium'>{items.title}</p>
                </div>
                ))
               }
                
            </div>
        </div>
    </div>
  )
}

export default Facilities