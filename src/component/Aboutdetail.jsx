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
            src: logo1
        },
        {
            id: 2,
            src: logo2
        },
        {
            id: 3,
            src: logo3
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
                <img src={woman} alt="ceo" className='lg:w-[450px] lg:h-[513px] w-[350px] h-[413px] absolute top-8 right-8 ' />
            </div>
            <div>
                <p className='w-[100%] lg:w-[579px] text-[15px]'>The United Nations is an international organization founded in 1945. Currently made up of 193 Member States, the UN and its work are guided by the purposes and principles contained in its founding Charter.
                                The UN has evolved over the years to keep pace with a rapidly changing world.
                                But one thing has stayed the same: it remains the one place on Earth where all the world’s nations can gather together, discuss common problems, and find shared solutions that benefit all of humanity. The Secretary-General is Chief Administrative Officer of the UN – and is also a symbol of the Organization's ideals and an advocate for all the world's peoples, especially the poor and vulnerable.

                                The Secretary-General is appointed by the General Assembly on the recommendation of the Security Council for a 5-year, renewable term.
                                The current Secretary-General, and the 9th occupant of the post, is António Guterres of Portugal, who took office on 1 January 2017.
                                On the 18th of June, 2021, Guterres was re-appointed to a second term, pledging as his priority to continue helping the world chart a course out of the COVID-19 pandemic.

                                The United Nations is an international organization founded in 1945. Currently made up of 193 Member States, the UN and its work are guided by the purposes and principles contained in its founding Charter.
                                The UN has evolved over the years to keep pace with a rapidly changing world.
                                But one thing has stayed the same: it remains the one place on Earth where all the world’s nations can gather together, discuss common problems, and find shared solutions that benefit all of humanity. The Secretary-General is Chief Administrative Officer of the UN – and is also a symbol of the Organization's ideals and an advocate for all the world's peoples, especially the poor and vulnerable.

                                The Secretary-General is appointed by the General Assembly on the recommendation of the Security Council for a 5-year, renewable term.
                                The current Secretary-General, and the 9th occupant of the post, is António Guterres of Portugal, who took office on 1 January 2017.
                                On the 18th of June, 2021, Guterres was re-appointed to a second term, pledging as his priority to continue helping the world chart a course out of the COVID-19 pandemic.
                </p>
            </div>
            
        </div>
        <div className='flex flex-col items-center py-20'>
            <div >
                <p className='text-[30px]'>Clients</p></div>
            <div className='flex items-center'>
                <div className='flex gap-4 lg:gap-10 items-center justify-center'>
                    {images.map(image => (
                        <img key={image.id} src={image.src} alt="" className='flex items-center' />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutdetail