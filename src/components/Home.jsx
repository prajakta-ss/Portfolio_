import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";




function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 scroll-smooth  z-50  '>
        <div className='flex  flex-col md:flex-row'>

        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        
        <span className='text-xl'>Welcome in My Feed</span>
       
        

        <h1 className='text-2xl'>Hello I'm a </h1>
       
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <span className='text-red-700 font-bold'> Full Stack Developer</span>
        </div>
        <br />
        <p className='text-md md:text-md text-justify'>Wish to work with reputed organization, where I can learn new skills and expand my knowledge. 
            To get an opportunity where I can give my best and contribute to organizational growth by sharing ideas and 
            thoughts.</p>
            <h1 className='font-bold text-lg items-center'>Email:prajaktasshinde52@gmail.com</h1>

            <br />
            {/* Social Media */}
            <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>

            <div className='space-y-2 items-center'>
            
                <h1 className='font-bold text-lg items-center'>Available On</h1>
              <ul >
                <li>
                 <a href="https://www.linkedin.com/in/prajakta-shinde-591820325" target='_blank'>
                <FaLinkedin className='text-2xl cursor-pointer text-center '/>
                </a>
                </li>
              </ul>

            </div>
            {/* Currently Working */}
            <div className='space-y-2 items-center'>
                <h1 className='font-bold text-lg  items-center'>Currently Working on</h1>
                <div className='flex space-x-5'>
                <SiMongodb className='text-xl md:tect-2xl hover:scale-110 duration-200 ' />
                <SiExpress className='text-xl md:tect-2xl hover:scale-110 duration-200 ' />
                <SiReact className='text-xl md:tect-2xl hover:scale-110 duration-200 ' />
                <FaNodeJs className='text-xl md:tect-2xl hover:scale-110 duration-200 ' />


                </div>
            </div>
            </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8'>
         <img src="/me.jpg" alt="myself" className='rounded-full md:w-[450px] md:h-[450px]  w-[450px] h-[450px] px-2' />
        
        </div>
        </div>
    </div>
 
   
    </>
  )
}

export default Home