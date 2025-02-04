import React from 'react'

function ContactForm() {
  return (
    <div className='w-[100%] overflow-x-hidden '>
        <div className='bg-white flex items-center w-[100%]'>
            <form action="" className='flex flex-col items-center w-[100%] gap-3 lg:gap-8 py-10'>
                <div className='flex gap-3 lg:gap-9 flex-col lg:flex-row w-[80%]  lg:justify-center'>
                    <div className='flex flex-col gap-2'>
                        <label >Full Name</label>
                    <input type="text" className=' w-[100%] h-[30px] lg:w-[400px] lg:h-[60px] outline outline-[1px] px-2' placeholder='John Doe' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Email Address </label>
                    <input type="text" className=' w-[100%] h-[30px] lg:w-[400px] lg:h-[60px] outline outline-[1px] px-2' placeholder='Ex. johnDoe@gmail.com' />
                    </div>
                </div>
                <div className='flex flex-col  w-screen items-center justify-center gap-2'>
                    <div className='w-[80%] lg:w-[829px] '>
                    <label className=' text-left lg:text-start'>Message</label>

                    </div>
                    <textarea name="message" className=' w-[80%] lg:w-[829px] lg:h-[200px] outline outline-[1px] px-4 py-2' placeholder='Message' ></textarea>
                </div>
                <div className='w-[100%] flex items-center justify-center'>
                    <button className='w-[80%] h-[40px]   lg:w-[829px] lg:h-[60px] text-white bg-[#7C6A46]'>Contact Us</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm