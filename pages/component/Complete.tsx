import React, { useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Complete = () => {
    useEffect(() => {
        AOS.init({
          duration:800, // Animation duration
          offset: 30,   // Offset (in px) from the top of the element
          easing: 'ease-in-out', // Animation easing
          once: true,    // Whether animation should occur only once
        });
      }, []);
  return (
    <>
<div className='w-full relative sm:p-16 p-4' data-aos="zoom-in">
    <img className=' absolute sm:w-full h-full inset-0 object-cover' src="./images/divap1.svg" alt="error" />

        <div className='relative m-auto w-fit pt-4'>
            <p className='text-white sm:text-4xl text-2xl font-bold  sm:w-[75%] m-auto  text-center font-evolventa pb-2'>The complete media stack</p>
            <p className='text-white  sm:pt-6  m-auto sm:pb-5 pb-5 sm:w-[67%] w-[90%] sm:text-base text-sm text-center font-epilogue'>Full stack marketing ensures you’re not missing an opportunity. We’re a team of specialist marketers that deploy all the tools necessary to get the job done.</p>
        </div>

        <div className='bg-white relative sm:mt-12 w-fit sm:p-7 p-4 rounded-xl m-auto '>
            <div className='relative flex sm:space-x-16 space-x-5 '>
                <a href="/"><img className='sm:w-14 w-8' src="./images/instag.svg" alt="error" /></a>
                <a href="/"><img className='sm:w-14 w-8' src="./images/tiktok.svg" alt="error" /></a>
                <a href="/"><img className='sm:w-14 w-8' src="./images/google.svg" alt="error" /></a>
                <a href="/"><img className='sm:w-14 w-8' src="./images/shopify.svg" alt="error" /></a>
                <a href="/"><img className='sm:w-14 w-8' src="./images/fb.svg" alt="error" /></a>
            </div>
                
       
            <div className=' relative flex sm:mt-8 mt-5 sm:ml-16 sm:space-x-20 space-x-12 ml-2'>
                    <a href="/"><img className='sm:w-28 w-20 ' src="./images/webflow.svg" alt="error" /></a>
                    <div className='inline-flex'>
                    <a className='text-black text-2xl pr-3' href="/"><FaYoutube/></a>
                    <a href="/"><img className='sm:w-24 w-16' src="./images/yt.svg" alt="error" /></a> </div>
            </div>
        </div>
</div>
    </>
  )
}

export default Complete
