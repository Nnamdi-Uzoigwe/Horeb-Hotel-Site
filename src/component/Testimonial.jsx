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
            text: 'The service at Paradise View was outstanding. Every concern was promptly addressed with effective solutions, ensuring a seamless experience. We were particularly impressed with how the team anticipated our needs, providing proactive support throughout the process. Many clients have praised the quality of the properties, the professionalism of the staff, and the overall commitment to customer satisfaction. Notably, the expertise and dedication of the team reflect a deep investment in ensuring successful transactions. As someone who often provides feedback for improvement, I can confidently say that Paradise View has set the bar incredibly high.',
            date: '2 March, 2023'
        },
        {
            id:2,
            image: testimony2,
            person: 'Regina Gella',
            text: "Paradise View exceeded all expectations in delivering top-tier real estate services. From the initial consultation to the final transaction, their team demonstrated professionalism, market expertise, and a genuine commitment to finding the perfect property. Their proactive approach ensured that every detail was handled efficiently, making the entire process smooth and stress-free. The quality of their listings, combined with their dedication to customer satisfaction, truly sets them apart. I highly recommend Paradise View to anyone looking for a reliable and trustworthy real estate firm in South Korea.",
            date: '25 June, 2023'
        },
        {
            id:3,
            image: testimony3,
            person: 'Jamiyu Aliyu',
            text: "Working with Paradise View was an absolute pleasure. The team went above and beyond to understand our needs and match us with the perfect property. Their attention to detail, responsiveness, and in-depth knowledge of the market made the experience seamless. It’s clear that they take pride in their work and prioritize client satisfaction. From the quality of the properties to the outstanding service, Paradise View has set a new standard in the real estate industry. I wouldn’t hesitate to work with them again in the future!",
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