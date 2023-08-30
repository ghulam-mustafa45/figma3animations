import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recentwork = () => {
  useEffect(() => {
    AOS.init({
      duration:800, // Animation duration
      offset: 30,   // Offset (in px) from the top of the element
      easing: 'ease-in-out', // Animation easing
      once: true,    // Whether animation should occur only once
    });
  }, []);
  return (
    <div className='w-full relative' data-aos="zoom-in">
      <img className='absolute inset-0 sm:w-full h-full object-cover' src="./images/divm1.svg" alt="error" />
      <div className='relative m-auto w-fit'>
        <p className='text-white sm:text-4xl text-3xl font-bold sm:pt-14 pt-8 m-auto text-center font-evolventa'>Recent work</p>
        <p className='text-white sm:pt-4 w-fit m-auto sm:pb-5 pb-3 text-center font-epilogue'>Winning designs, and nothing less.</p>
        <button className="rounded-md text-black bg-white p-3 mt-3 sm:mt-1 w-52 m-auto sm:ml-[15%] ml-[16%] mb-4 sm:mb-0 font-evolventa font-bold">View recent works</button>
      </div>

      <div className='relative mt-14 m-auto w-fit p-5'>
        <img className='p-2 sm:w-auto float-left' src="./images/divr1.svg" alt="error" />
        <img className='p-2 sm:w-auto' src="./images/divr2.svg" alt="error" />
        <img className='p-2 sm:w-auto float-left' src="./images/divr3.svg" alt="error" />
        <img className='p-2 sm:w-auto ' src="./images/divr4.svg" alt="error" />
      </div>

      <div className='bg-transparent relative pb-20 mt-8'>
        <p className='text-white sm:pt-6 w-fit m-auto sm:pb-5 pb-5 text-center font-epilogue'>Designs commonly featured by</p>
        
        <div className='flex  sm:space-x-12 space-x-6 w-fit m-auto'>
            <img className='w-14 sm:w-auto' src="./images/divr5.svg" alt="error" />
            <img className='w-14 sm:w-auto' src="./images/divr6.svg" alt="error" />
            <img className='w-14 sm:w-auto' src="./images/divr7.svg" alt="error" />
            <img className='w-16 sm:w-auto' src="./images/divr8.svg" alt="error" />
        </div>
      </div>
    </div>
  );
}

export default Recentwork;
