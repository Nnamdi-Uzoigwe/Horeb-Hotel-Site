import React from 'react'
import woman from '../image/woman.jpg'
import logo1 from '../image/nnpc.png'
import logo2 from '../image/cbn.png'
import logo3 from '../image/ncc.png'
import logo4 from '../image/who.png'
import logo5 from '../image/nirsal.png'


function Aboutdetail() {

    const images = [
        {
            id: 1,
            src: "https://awsstatic-sothebys-production.gtsstatic.net/resources/v_4_19_0_500/siteresources/my%20folder/images/logos/idx-logo-njmls.png"
        },
        {
            id: 2,
            src: "https://awsstatic-sothebys-production.gtsstatic.net/resources/v_4_19_0_500/siteresources/my%20folder/images/logos/mlssaz_logo.png"
        },
        
        {
            id: 4,
            src: logo4
        },
        {
            id: 5,
            src: logo5
        },
    ]

  return (
    <div className='lg:px-20 lg:py-14'>
        <div className='flex flex-col lg:flex-row  gap-20 justify-between items-center px-5 lg:pl-8'>
            <div className='bg-[#7C6A46] lg:w-[450px] lg:h-[513px] w-[350px] h-[413px]  relative'>
                <img src={"https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i0%2F6h0k4ecfh9ze4we5s4twqznf45i&option=N&permitphotoenlargement=false&w=320"} alt="ceo" className='lg:w-[450px] lg:h-[513px] w-[350px] h-[413px] absolute top-8 right-8 ' />
            </div>
            <div>
                <div className='py-2'>
                    <p className='font-bold text-[1.5rem]'>Doyoung Kim</p>
                    <p  className='font-bold italic'>Real Estate Professional</p>
                </div>
                <p className='w-[100%] lg:w-[579px] text-[15px]'>Paradise View is a premier real estate firm in South Korea, dedicated to helping clients find exceptional properties that match their lifestyle and investment goals. With years of expertise in the real estate market, we specialize in luxury residences, commercial spaces, and investment properties across the country’s most sought-after locations.

At Paradise View, we are committed to delivering personalized services, market insights, and seamless transactions. Our team of professionals works closely with buyers, sellers, and investors to provide tailored solutions that meet their unique needs. Whether you are looking for a dream home, a strategic business location, or a high-value investment, we ensure a smooth and rewarding experience.

Guided by integrity, innovation, and customer satisfaction, Paradise View continues to set new standards in the South Korean real estate industry. Let us help you turn your vision into reality.


                </p>
            </div>
            
        </div>
        {/* <div className='flex flex-col items-center py-20'>
            <div >
                <p className='text-[30px]'>Clients</p></div>
            <div className='flex items-center'>
                <div className='flex gap-4 lg:gap-10 items-center justify-center'>
                    {images.map(image => (
                        <img key={image.id} src={image.src} alt="" className='flex items-center h-[50px]' />
                    ))}
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Aboutdetail