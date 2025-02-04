import React from 'react'
import room1 from '../image/room1.jpg'
import room2 from '../image/room2.jpg'
import room3 from '../image/room3.jpg'
import { Link } from 'react-router-dom'


function Luxury() {

    const rooms = [
        {
            id: 1,
            image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Ftpfamgajn9w7me6ah99a7xt511i215&option=N&h=472&permitphotoenlargement=false",
            text:'Seongsu-dong Seoul Si, South Korea',
            number: 6,
            price: "$17,696,564"
            
        },
        {
            id: 2,
            image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Fhdj2h8t2qvw145aymn4g9c9911i215&option=N&h=472&permitphotoenlargement=false",
            text:'Cheongdam-dong, Gangnam-gu Seoul Si, South Korea',
            number: 4,
            price: "$15,090,094"
        },
        {
            id: 3,
            image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2F3zj3b1m2gjqg45yd9gd2s278h4i215&option=N&h=472&permitphotoenlargement=false",
            text:'Cheongdam-dong, Gangnam-gu Seoul Si, South Korea',
            number: 5,
            price: "$13,776,570"
        },
    ]
    
  return (
    <div className='flex flex-col items-center gap-10 w-screen '>
        <div className="background-image-container">
     <div className='w-[100%] bg-[#7C6A46] bg-opacity-80 px-4'>
        <div className='lg:pr-20 lg:pl-20 pt-10 pb-10 flex flex-col items-center gap-12 w-full justify-center'>
            <div className='flex flex-col items-center text-white gap-2'>
                <p id='luxury1' className='font-medium text-[35px] lg:text-[50px] text-white'>Featured Properties </p>
                <div className='w-[138px] h-[3px] lg:h-[6px] bg-white'></div>
                <p className=' text-sm lg:text-inherit'>Handpicked properties by our team.</p>
            </div>
            
           <div className='flex flex-col lg:flex-row justify-between w-full items-center lg:items-start gap-5 lg:gap-0'>
           {
                    rooms.map(room => (
                        <Link to={'/rooms'}> 
                        
                            <div key={room.id} className='bg-white w-[98%] lg:w-[400px] p-4 relative rounded-lg hover:text-[#7C6A46]  '>
                                <p className='bg-[#7C6A46] text-white w-fit text-[11px] font-bold p-2 rounded-md absolute right-5 top-6 '>{room.number} Rooms Available</p>
                                <img src={room.image} alt="room" className='w-full h-[300px]' />
                                <p className='text-[17px] w-full pt-2  '>{room.text}</p>
                                <p className='font-bold pt-2 '> {room.price}</p>
                                <ul className='flex flex-col lg:flex-row  list-disc list-inside gap-2 pt-2 text-[14px]'>
                                    <li >5 Bedrooms</li>
                                    <li>5 bathroom</li>
                                    <li>3,595 sq ft</li>

                                </ul>
                                <p className='pt-2 italic font-bold text-[14px]'>Purchased by Mr&Mrs Keanu-Reeves Joan-Victoria Cruze, Outstanding balance cost $200,000.00, contact support to clear off payment.</p>
                                <p className=' italic pt-2'>Marketed By Korea Sotheby's International Realty</p>
                            </div>
                        </Link>
                    ))
                }
           </div>
               
            
        </div>
     </div>
    </div>
    <div><Link to={'/rooms'}><button className='bg-[#907d59] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#7C6A46]'>View All</button></Link></div>
    </div>

     )
}

export default Luxury