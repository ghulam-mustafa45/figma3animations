import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import email from './email.json';
import watch from './watch.json'
import loading from './loading.json'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Digitalmarketing = () => {
  useEffect(() => {
    AOS.init({
      duration:600, // Animation duration
      offset: 30,   // Offset (in px) from the top of the element
      easing: 'ease-in-out', // Animation easing
      once: true,    // Whether animation should occur only once
    });
  }, []);

    const logo1 = {
        loop: true,
        autoplay: true, 
        animationData: email,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const logo2 = {
        loop: true,
        autoplay: true, 
        animationData: watch,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const logo3 = {
        loop: true,
        autoplay: true, 
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
  return (
    <>
    <div className='pb-16 ' data-aos="zoom-in">
    <p className='sm:text-3xl text-base sm:w-[45%] w-64 font-bold text-center  justify-center m-auto pt-10 sm:pt-16  font-evolventa'>Digital Marketing subscriptions to scale your business.</p>
    
 <div className='sm:flex m-auto w-fit sm:mt-16 space-x-14'>
    
            <div className='sm:w-60 w-80 mb-7'>
            <div className='w-24 m-auto '> <Lottie options={logo1}/></div>
            <p className='font-bold text-lg text-center pt-2 pb-2 font-evolventa'>Subscribe</p>
                <p className='text-center font-epilogue sm:w-auto w-52 m-auto'>Subscribe to a plan & request  designs as you'd like.</p>
            </div>

            <div className='w-56 mb-9'>
            <div className='w-24  m-auto'> <Lottie options={logo2}/></div>
            <p className='font-bold text-lg text-center pt-2 pb-2 font-evolventa'>Fast Delivery</p>
                <p className='text-center font-epilogue'>Receive your design within a few business days average.</p>
            </div>

            <div className='w-56  '>
            <div className='w-24 m-auto'> <Lottie options={logo3}/></div>
            <p className='font-bold text-lg text-center pt-2 pb-2 font-evolventa'>Revisions</p>
                <p className='text-center font-epilogue'>We'll revise the designs until you're 100% satisfied.</p>
            </div>


 </div>
 </div>
    </>
  )
}

export default Digitalmarketing
