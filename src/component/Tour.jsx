import React from 'react'
import gym from '../image/gym.jpg'
import restaurant from '../image/restaurant.jpg'
import room from '../image/room.jpg'


function Tour() {

    const array = [
        {
            id: 1,
            type: 'Luxirous Rooms',
            text: 'The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design',
            img: room
        },
        {
            id: 2,
            type: 'Gym Center',
            text: 'The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design',
            img: gym
        },
        {
            id: 3,
            type: 'Restaurant',
            text: 'The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design',
            img: restaurant
        },
    ]

  return (
    <div className='overflow-x-hidden'>
        <div>
            <div className='flex flex-col w-screen items-center mb-[70px]'>
                <p className='text-[40px] py-10'>Take a Tour</p>
                <div className='flex items-center flex-col w-screen justify-center gap-24 '>
                    {
                        array.map(array => (
                        <div className='relative' key={array.id}>
                        <div className='flex flex-col items-center'  >
                        <img src={array.img} alt="" className='w-[90%] lg:[80%]'/>
                        <div className=' flex lg:flex md:flex flex-col items-center w-[70%] lg:w-fit h-fit bg-white shadow-lg p-3 lg:p-6 rounded-lg  absolute  bottom-[-30px] lg:bottom-[-50px] md:bottom-[-50px] '>
                            <p className='w-[700px] text-center text-[18px] lg:text-[24px] text-[#7C6A46] font-semibold'>{array.type}</p>
                            <p className='hidden lg:block md:block w-[100%] text-sm lg:w-[700px] lg:py-4 '>{array.text}</p>
                        </div>
                    </div>
                    </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tour