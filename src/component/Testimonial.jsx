import React from 'react'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {BiSolidQuoteLeft, BiSolidQuoteRight} from 'react-icons/bi'
import testimony1 from '../image/testimony1.png'
import testimony2 from '../image/testimony2.png'
import testimony3 from '../image/testimony3.png'


function Testimonial() {

    const testimony = [
        {
            id:1,
            image: testimony1,
            person: 'Anthony Bruff',
            text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
            date: '2 March, 2023'
        },
        {
            id:2,
            image: testimony2,
            person: 'Regina Gella',
            text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
            date: '25 March, 2023'
        },
        {
            id:3,
            image: testimony3,
            person: 'Jamiyu Aliyu',
            text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
            date: '5 Apr, 2023'
        },
    ]

  return (
    <div className='flex flex-col lg:pl-20 gap-9 lg:gap-16 pt-16 pb-16'>
        <div>
            <p id='testimonytitle' className='font-medium text-[35px] lg:text-[50px] text-center'>Testimonies</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-16 lg:overflow-x-hidden lg:hover:overflow-x-scroll'> 
            {
                testimony.map(testimony => (
                <div key={testimony.id} className=' bg-[whitesmoke] w-[90%] lg:w-fit flex flex-col gap-10 p-6'>
                    <div className='flex justify-between'>
                        <p>{testimony.date}</p>
                        <div className=' text-yellow-400 flex'>
                            <BsStarFill  className='text-[12px] lg:text-[15px]'/>
                            <BsStarFill  className='text-[12px] lg:text-[15px]'/>
                            <BsStarFill  className='text-[12px] lg:text-[15px]'/>
                            <BsStarFill  className='text-[12px] lg:text-[15px]'/>
                            <BsStarHalf className='text-[12px] lg:text-[15px]'/>
                        </div>

                    </div>
                    <div>
                        <BiSolidQuoteLeft className='text-[#7C6A46]'/><p className='w-[100%] lg:w-[414px] text-center text-[13px] lg:text-[15px]'> {testimony.text}</p><BiSolidQuoteRight className='text-[#7C6A46]'/>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={testimony.image} alt="" />
                        <p className='text-[11px] lg:text-[13px]'>{testimony.person}</p>
                    </div>
                </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Testimonial