import React from 'react'
import pic from '../image/room2.jpg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function RoomDetail() {

    let {userId} = useParams();


  return (
    <div className='relative overflow-x-hidden'>
        <Navbar/>
        <div className=' blur-sm'>
            <div id='roomhero'>

            </div>
        </div>
        <div className='py-14 overflow-x-hidden absolute top-4 bottom-4  h-[45%] lg:h-[60%] md:h-[51%]   '>
        <div className='w-screen h-fit  flex items-center flex-col py-10'>
            <div className='flex flex-col bg-white w-[90%] lg:w-[60%]  p-4 shadow-xl'>
                <div><p className='text-center text-[18px] font-semibold'>{userId.toUpperCase()} ROOM</p></div>
                <hr />
                <div><img src={pic} alt="" className='w-[100%] lg:h-[450px] h-[350px] py-2'/></div>
                <hr />
                <div className='py-4'>
                    <p className='font-semibold text-gray-400 text-[16px]'>Description</p>
                    <p className='p-4'>Extra 15 sq. m/161 sq. ft., city and mountain view, high floor, WiFi. Stretch out in this spacious art deco-style room featuring a large bathroom. Start your day with a fresh coffee prepared in your room. Catch up with work at the desk and stay connected with WiFi access. Relax on the sofa and choose one of our on-demand movies to watch on the 48-inch TV. Freshen up in the spacious bathroom that features a separate bath tub, large walk-in shower, \
                        toilet and bidet before slipping in the bathrobe and slippers. Sleeps 2 adults and 1 child on a rollaway.
                    </p>
                    <div className='flex items-center justify-center'>
                       <Link to={'/payment'}>  <button className=' text-[16px] font-semibold text-white w-[250px] rounded-md py-2 bg-[#7C6A46]'>Book Now</button> </Link>
                    </div>

                </div>
                <hr />
                <div className='py-4'>
                    <p className='font-semibold text-gray-400 text-[16px]'>Room Highlights</p>
                    <ul className='list-disc px-4 py-4'>
                       <li>Sleeps 3</li> 
                       <li>Separate bathtub and shower</li>
                       <li>Hand-held shower</li>
                       <li>Hairdryer</li>
                       <li>Iron/ironing board</li>
                       <li>Bathrobe</li>
                       <li>Bath slippers</li>
                       <li>Mini bar</li>
                    </ul>
                </div>
                <hr />
                <div className='flex justify-between gap-2 lg:pr-14 py-4'>
                    <div>
                    <p className='font-semibold text-gray-400 text-[16px] pb-4'>Comfort Amenities</p>
                    <ul className=' list-disc px-4'>
                       <li>Sleeps 3</li> 
                       <li>Separate bathtub and shower</li>
                       <li>Hand-held shower</li>
                       <li>Hairdryer</li>
                       <li>Iron/ironing board</li>
                       <li>Bathrobe</li>
                       <li>Bath slippers</li>
                       <li>Mini bar</li>
                       <li>Bathrobe</li>
                       <li>Bath slippers</li>
                       <li>Mini bar</li>
                    </ul>
                    </div>
                    <div>
                    <p className='font-semibold text-gray-400 text-[16px] pb-4'>Convenience Amenities</p>
                    <ul className='list-disc px-4'>
                       <li>Sleeps 3</li> 
                       <li>Separate bathtub and shower</li>
                       <li>Hand-held shower</li>
                       <li>Hairdryer</li>
                       <li>Iron/ironing board</li>
                       <li>Bathrobe</li>
                       <li>Bath slippers</li>
                       <li>Mini bar</li>
                       <li>Bathrobe</li>
                       <li>Bath slippers</li>
                       <li>Mini bar</li>
                    </ul>
                    </div>
                </div>
                <hr />
                <div className='py-4'>
                <p className='font-semibold text-gray-400 text-[16px] pb-4'>Confidence Amenities</p>
                    <ul className='list-disc px-4'>
                       <li>Sleeps 3</li> 
                       <li>Separate bathtub and shower</li>
                       <li>Hand-held shower</li>
                       <li>Hairdryer</li>
                       <li>Iron/ironing board</li>
                       <li>Bathrobe</li>
                       <li>Bath slippers</li>
                       <li>Mini bar</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default RoomDetail