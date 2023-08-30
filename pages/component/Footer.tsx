import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
          duration:600, // Animation duration
          offset: 30,   // Offset (in px) from the top of the element
          easing: 'ease-in-out', // Animation easing
          once: true,    // Whether animation should occur only once
        });
      }, []);
  return (
 <>
<div className='bg-black sm:p-24 pt-8 pr-6 pl-6 pb-16 'data-aos="zoom-in">
            <p className='font-evolventa sm:text-4xl text-3xl font-bold text-white m-auto sm:w-80 text-center w-[70%]'>See if Meemulla is right for you</p>
            <p className='font-epilogue text-white text-center sm:w-[48%] m-auto sm:mt-7 mt-5  '>Get a guided tour through Meemulla, and find out how you and your team can change the way you source design, forever.</p>
            <button id='btn' className=" font-evolventa text-2xl font-bold rounded-md border-white border-2 text-white bg-transparent sm:p-12 p-3 shadow-lg shadow-gray-800 mt-12 sm:mt-14 float-left sm:ml-[28%] ml-10 mb-8 sm:mb-16 sm:w-[44%] w-56 ">Get started</button>
       
        <div className='text-white '>
                <div >
                    <p className='font-evolventa sm:text-3xl text-xl font-bold text-white w-fit'>Meemulla</p>
                </div>

                <div className='sm:space-x-16 space-x-4 flex float-right text-center sm:text-base text-xs'>
                        <div className='font-epilogue '>
                            <p>Pricing</p>
                            <p>Contact</p>
                        </div>

                        <div className='font-epilogue'>
                            <p>Client Login</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                        
                </div>
        </div>
</div>
</>
  )
}

export default Footer
