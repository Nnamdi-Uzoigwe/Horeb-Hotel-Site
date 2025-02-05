import React, {useRef} from 'react';
import roompic from '../image/room3.jpg'
import {PiTelevisionSimple, PiShower, PiWifiHighLight} from 'react-icons/pi'
import { Link } from 'react-router-dom';
import {roomlay1} from "./Array"
import { IoLocationOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";



function Room() {

    
    const roomlay2 = [
        {
            id: 7,
            image: roompic,
            locate: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/7',
        },
        {
            id: 8,
            image: roompic,
            locate: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/8',
        },
        {
            id: 9,
            image: roompic,
            locate: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/9',
        },
        {
            id: 10,
            image: roompic,
            locate: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/10',
        },
        {
            id: 11,
            image: roompic,
            locate: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/11',
        },
        {
            id: 12,
            image: roompic,
            locate: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/12',
        },
        
    ];

    const roomlay3 = [
        {
            id: 13,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/13',
        },
        {
            id: 14,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/14',
        },
        {
            id: 15,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/15',
        },
        {
            id: 16,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/16',
        },
        {
            id: 17,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/17',
        },
        {
            id: 18,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/18',
        },
        
    ];

    const roomlay4 = [
        {
            id: 19,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/19',
        },
        {
            id: 20,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/20',
        },
        {
            id: 21,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/21',
        },
        {
            id: 22,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/22',
        },
        {
            id: 23,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/23',
        },
        {
            id: 24,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/24',
        },
        
    ];


    const all = useRef(null);
    const quest = useRef(null);
    const suite = useRef(null);
    const exec = useRef(null);
    const all1 = useRef(null);
    const quest1 = useRef(null);
    const suite1 = useRef(null);
    const exec1 = useRef(null);
    const blur = useRef(null);


   const allclick = () => {
        if(all.current){
            all.current.style.borderBottom = '4px solid #7C6A46'
            all.current.style.color = '#7C6A46'
            quest.current.style.borderBottom = 'none'
            quest.current.style.color = '#A5A5A5'
            suite.current.style.borderBottom = 'none'
            suite.current.style.color = '#A5A5A5'
            exec.current.style.borderBottom = 'none'
            exec.current.style.color = '#A5A5A5'
            all1.current.style.display = 'grid'
            quest1.current.style.display = 'none'
            suite1.current.style.display = 'none'
            exec1.current.style.display = 'none'


        }
    }

    const questclick = () => {
        if(quest.current){
            quest.current.style.borderBottom = '4px solid #7C6A46'
            quest.current.style.color = '#7C6A46'
            all.current.style.borderBottom = 'none'
            all.current.style.color = '#A5A5A5'
            suite.current.style.borderBottom = 'none'
            suite.current.style.color = '#A5A5A5'
            exec.current.style.borderBottom = 'none'
            exec.current.style.color = '#A5A5A5'
            all1.current.style.display = 'none'
            quest1.current.style.display = 'grid'
            suite1.current.style.display = 'none'
            exec1.current.style.display = 'none'

        }
    }

    const suiteclick = () => {
        if(suite.current){
            suite.current.style.borderBottom = '4px solid #7C6A46'
            suite.current.style.color = '#7C6A46'
            quest.current.style.borderBottom = 'none'
            quest.current.style.color = '#A5A5A5'
            all.current.style.borderBottom = 'none'
            all.current.style.color = '#A5A5A5'
            exec.current.style.borderBottom = 'none'
            exec.current.style.color = '#A5A5A5'
            all1.current.style.display = 'none'
            quest1.current.style.display = 'none'
            suite1.current.style.display = 'grid'
            exec1.current.style.display = 'none'

        }
    }

    const execclick = () => {
        if(exec.current){
            exec.current.style.borderBottom = '4px solid #7C6A46'
            exec.current.style.color = '#7C6A46'
            quest.current.style.borderBottom = 'none'
            quest.current.style.color = '#A5A5A5'
            suite.current.style.borderBottom = 'none'
            suite.current.style.color = '#A5A5A5'
            all.current.style.borderBottom = 'none'
            all.current.style.color = '#A5A5A5'
            all1.current.style.display = 'none'
            quest1.current.style.display = 'none'
            suite1.current.style.display = 'none'
            exec1.current.style.display = 'grid'

        }
    }





  return (
    <div className=' overflow-x-hidden'>
        <div ref={blur} className=''>

        <hr />
        <div className='flex items-center justify-evenly text-[20px] font-bold text-gray-400'>
            <div><button ref={all} onClick={allclick} className='text-[#7C6A46] py-4 lg:w-[250px] border-b-[4px]  border-[#7C6A46]'>All</button></div>
            {/* <div><button ref={quest} onClick={questclick} className='hover:text-[#7C6A46] py-4 lg:w-[250px]  border-[#7C6A46]'>Quest Rooms</button></div>
            <div><button ref={suite} onClick={suiteclick} className='hover:text-[#7C6A46] py-4 lg:w-[250px]  border-[#7C6A46]'>Suites</button></div>
            <div><button ref={exec} onClick={execclick} className='hover:text-[#7C6A46] py-4 lg:w-[250px]  border-[#7C6A46]'>Executive</button></div> */}
        </div>
        <hr />


        <div ref={all1} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-5  lg:px-20 gap-16'>
            {roomlay1.map(room =>(
                <Link to={`rooms/${room.id}`}>
                <div key={room.id} className='w-fit h-fit bg-white shadow-xl text-[#7C6A46]  '>
                <div>
                    <img src={room.image[0]} alt="roompic"  className='w-[410px]'/>
                </div>
                <div className='flex justify-between p-2'>
                    <p className='text-[20px] font-semibold'>Luxury {room.type}</p>
                    <p className={` text-white px-2 flex items-center italic rounded-lg bg-[#7C6A46]`}>{room.for}</p>
                </div>
                <span className='flex items-center gap-1 px-2'>
                    <IoLocationOutline />
                    <p className='text-[14px]'>{room.locate}</p>
                </span>
                <span className='flex items-center gap-1 px-2 text-[14px]'>
                    <p> {room.rooms} Bedrooms</p>
                    <RxDotFilled />
                    <p>{room.interior}</p>
                </span>
                <div className='p-2'>
                    <p className='text-[15px] font-semibold'>{room.price} </p>
                </div>
                <hr />
                <div className='flex justify-between p-2 items-center'>
                    <div className=' w-[70%]'>
                    <p className='pt-2 italic font-bold text-[12px] text-red-500'>{room.note}</p>
                        {/* <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiTelevisionSimple size={25}/>
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiShower size={25} />
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiWifiHighLight size={25}/>
                        </div> */}
                    </div>
                    <div>
                      <Link to={`rooms/${room.id}`}><button className={` px-6 py-2 text-white text-[14px] ${room.status === "Pending" && "bg-yellow-500"  } ${room.status === "Available" && "bg-green-500"  } ${room.status === "On Hold" && "bg-red-500"  } `}>{room.status}</button></Link>  
                    </div>
                </div>
            </div>
                </Link>
            ))}
        </div>



        <div ref={quest1} className='hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-5  lg:px-20 gap-16'>
            {roomlay2.map(room =>(
                <div key={room.id} className='w-fit h-fit bg-white shadow-xl text-[#7C6A46]  '>
                <div>
                    <img src={room.image} alt="roompic"  className='w-[410px]'/>
                </div>
                <div className='flex justify-between p-2'>
                    <p className='text-[20px] font-semibold'>{room.type}</p>
                    <p>Available: Yes</p>
                </div>
                <div className='p-2'>
                    <p className='text-[15px] font-semibold'>{room.price} </p>
                </div>
                <hr />
                <div className='flex justify-between p-2 items-center'>
                    <div className='flex gap-2'>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiTelevisionSimple size={25}/>
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiShower size={25} />
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiWifiHighLight size={25}/>
                        </div>
                    </div>
                    <div>
                    <Link to={room.link}><button className='bg-[#7C6A46] px-6 py-2 text-white'>Book Now</button></Link>  
                    </div>
                </div>
            </div>
            ))}
        </div>



        <div ref={suite1} className='hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-5  lg:px-20 gap-16'>
            {roomlay3.map(room =>(
                <div key={room.id} className='w-fit h-fit bg-white shadow-xl text-[#7C6A46]  '>
                <div>
                    <img src={room.image} alt="roompic"  className='w-[410px]'/>
                </div>
                <div className='flex justify-between p-2'>
                    <p className='text-[20px] font-semibold'>{room.type}</p>
                    <p>Available: Yes</p>
                </div>
                <div className='p-2'>
                    <p className='text-[15px] font-semibold'>{room.price} </p>
                </div>
                <hr />
                <div className='flex justify-between p-2 items-center'>
                    <div className='flex gap-2'>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiTelevisionSimple size={25}/>
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiShower size={25} />
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiWifiHighLight size={25}/>
                        </div>
                    </div>
                    <div>
                    <Link to={room.link}><button className='bg-[#7C6A46] px-6 py-2 text-white'>Book Now</button></Link>  
                    </div>
                </div>
            </div>
            ))}
        </div>



        <div ref={exec1} className='hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-5  lg:px-20 gap-16'>
            {roomlay4.map(room =>(
                <div key={room.id} className='w-fit h-fit bg-white shadow-xl text-[#7C6A46]  '>
                <div>
                    <img src={room.image} alt="roompic"  className='w-[410px]'/>
                </div>
                <div className='flex justify-between p-2'>
                    <p className='text-[20px] font-semibold'>{room.type}</p>
                    <p>Available: Yes</p>
                </div>
                <div className='p-2'>
                    <p className='text-[15px] font-semibold'>{room.price} </p>
                </div>
                <hr />
                <div className='flex justify-between p-2 items-center'>
                    <div className='flex gap-2'>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiTelevisionSimple size={25}/>
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiShower size={25} />
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiWifiHighLight size={25}/>
                        </div>
                    </div>
                    <div>
                    <Link to={room.link}><button className='bg-[#7C6A46] px-6 py-2 text-white'>Book Now</button></Link>  
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Room