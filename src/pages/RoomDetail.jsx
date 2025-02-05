import React, { useCallback, useEffect, useState } from 'react'
import pic from '../image/room2.jpg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {roomlay1} from '../component/Array'
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import Testimonial from '../component/Testimonial'
import { motion } from "framer-motion";



function RoomDetail() {
    const [count, setCount] = useState(0)


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const {userId} = useParams();
    const room1 = roomlay1.find((room) => room.id === parseInt(userId));

    const handleNext = useCallback(() => {
        requestAnimationFrame(() => {
            setCount(prev => (prev + 1) % room1.image.length);
        });
    }, [room1.image.length]);

    const handlePrev = useCallback(() => {
        requestAnimationFrame(() => {
            setCount(prev => (prev - 1 + room1.image.length) % room1.image.length);
        });
    }, [room1.image.length]);


    

    if (!room1) {
        return <h2>Property not found</h2>;
      }


  return (
    <div className='relative overflow-x-hidden'>
        <Navbar/>
        {/* <div className=' blur-sm'>
            <div id='roomhero'>

            </div>
        </div> */}
        <div className='py-14 overflow-x-hidden  top-4 bottom-4  h-[45%] lg:h-[60%] md:h-[51%]   '>
        <div className='w-screen h-fit  flex items-center flex-col py-10'>
            <div className='flex flex-col bg-white w-[90%] lg:w-[60%] overflow-x-hidden  lg:p-4 shadow-xl'>
                <div><p className='text-center text-[24px] font-bold'>Luxury {room1.type}</p></div>
                <hr />
                <div className='relative '>
                    <img src={room1.image[count]} alt="" className='w-[100%] lg:h-[450px] transition-all duration-300 ease-in-out py-2'/>
                {/* <motion.img
                key={count} // Forces re-render to trigger animation
                src={room1?.image?.[count]}
                alt=""
                className="w-full lg:h-[450px] py-2 "
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction} // Pass direction to variants
            /> */}
                <div className='absolute top-[50%] left-[1vw] shadow-lg bg-white p-4 rounded-full cursor-pointer' onMouseDown={handlePrev}> <FaLessThan/></div>
                <div className='absolute top-[50%] right-[1vw] shadow-lg bg-white p-4 rounded-full cursor-pointer' onMouseDown={handleNext}> <FaGreaterThan/></div>
                <button className={` px-6 py-2 text-white text-[14px] bg-[#7C6A46]`}>{room1.for}</button>
                </div>
                <hr />
                <div className='py-4'>
                    <p className='font-semibold text-gray-400 text-[16px]'>Description</p>
                    <p className='p-4'>{room1.description}
                    </p>
                    {/* <div className='flex items-center justify-center'>
                       <Link to={'/payment'}>  <button className=' text-[16px] font-semibold text-white w-[250px] rounded-md py-2 bg-[#7C6A46]'>Book Now</button> </Link>
                    </div> */}

                </div>
                <div className='py-4'>
                    <p className='font-semibold text-gray-400 text-[16px]'>Remark</p>
                    <p className='p-4 text-red-500 italic font-bold'>{room1.note}
                    </p>
                    {/* <div className='flex items-center justify-center'>
                       <Link to={'/payment'}>  <button className=' text-[16px] font-semibold text-white w-[250px] rounded-md py-2 bg-[#7C6A46]'>Book Now</button> </Link>
                    </div> */}

                </div>
                <hr />
                <div>
                    <p className='text-[#7C6A46] font-bold'>Price</p>
                    <p className='lg:text-[24px] text-[18px] font-semibold'> {room1.price} </p>
                </div>
                <div className='py-4'>
                    <p className='font-semibold text-gray-400 text-[16px]'>Room Highlights</p>
                    <ul className='list-disc px-2 py-4 grid grid-cols-2 lg:grid-cols-3 gap-2'>
                       <li className='flex flex-col  '><span className='font-bold italic '>Bedrooms: </span> <span className='text-[14px] lg:text-[24px]'>{room1.rooms}</span> </li> 
                       <li className='flex flex-col  '><span className='font-bold italic '>Bathrooms: </span> <span className='text-[14px] lg:text-[24px]'>{room1.bath}</span> </li> 
                       <li className='flex flex-col  '><span className='font-bold italic '>Interior/Exterior: </span> <span className='text-[14px] lg:text-[24px]'>{room1.interior}</span> </li> 
                       <li className='flex flex-col '><span className='font-bold italic '>Property Type: </span> <span className='text-[14px] lg:text-[24px]'>{room1.type}</span></li> 
                       <li className='flex flex-col '><span className='font-bold italic '>Status: </span> <span className='text-[14px] lg:text-[24px]'>{room1.status}</span></li> 
                       <li className='flex flex-col '><span className='font-bold italic '>Style: </span> <span className='text-[14px] lg:text-[24px]'>{room1.style}</span></li> 
                       
                    </ul>
                </div>
                <hr />
                <div className='flex justify-between gap-2 lg:pr-14 py-4'>
                    <div>
                    <p className='font-semibold text-gray-400 text-[16px] pb-4'>Comfort Amenities</p>
                    <ul className=' list-disc px-4'>
                       <li>Parking Space</li> 
                       <li>Swimming Pool</li>
                       <li>Gym</li>
                       <li>Movie Room</li>
                       <li>Secured Environment</li>
                    </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    <Testimonial />
    <Footer/>
    </div>
    
  )
}

export default RoomDetail