import React from 'react'

function Footer() {
  return (
    <div className='bg-[#7C6A46] flex flex-col '>
      <div className='flex justify-between p-6 items-center lg:items-start text-center lg:text-start lg:p-24 flex-col gap-8 lg:gap-0 lg:flex-row'>
        <div className='text-white  flex flex-col gap-2'>
          <p className='font-bold'>Paradise View</p>
          <p className='w-[277px] text-[12px] text-white'> The service at the Hotel Monteleone was exceptional. 
            There was absolutely no issue that was not addressed timely 
            and with satisfactory results. We were particulary impressed 
            with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)</p>
        </div>
        <div className='text-white flex flex-col gap-2'>
          <p className='font-bold'>Quick links</p>
          <ul className='text-[12px] text-white flex flex-col gap-3'>
            <li>Room Booking</li>
            <li>Rooms</li>
            <li>Contact</li>
            <li>Explore</li>
          </ul>
        </div>
        <div className='text-white flex flex-col gap-2'>
        <p className='font-bold'>Company</p>
          <ul className='text-[12px] text-white flex flex-col gap-3'>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>F.A.Q</li>
            <li>About</li>
          </ul>
        </div>
        <div className='text-white flex flex-col gap-2'>
        <p className='font-bold' >Social media</p>
          <ul className='text-[12px] text-white flex flex-col gap-3'>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className='text-white flex flex-col gap-2 '>
          <p className='font-bold'>Newsletter</p>
          <p className='lg:w-[234px] w-[100%]  text-[12px] text-white pb-2 '>Kindly subscribe to our newsletter to get
              latest deals on our rooms and vacation
              discount.
          </p>
          {/* <form action="" className='bg-white w-[360px] h-fit p-2 rounded-md'>
            <input type="text" placeholder='Enter your Email' className='w-[190px] text-[13px] outline-none' /><button className='bg-[#7C6A46] w-[150px] h-[40px] text-white rounded-md '>Subscribe</button>
          </form> */}
        </div>
      </div>
      <hr />
      <div>
        <p className='font-semibold text-white pb-10 pt-10 text-center'>Paradise view 2023</p>
      </div>
    </div>
  )
}

export default Footer