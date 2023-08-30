import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import infinit from './infinit.json';
import light from './light.json'
import dollar from './dollar.json'
import topnotch from './topnotch.json'
import scale from './scale.json'
import finger from './finger.json'
import { FaYoutube } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Membership = () => {
  useEffect(() => {
    AOS.init({
      duration:800, // Animation duration
      offset: 30,   // Offset (in px) from the top of the element
      easing: 'ease-in-out', // Animation easing
      once: true,    // Whether animation should occur only once
    });
  }, []);

    const logo1 = {
        loop: true,
        autoplay: true, 
        animationData: infinit,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const logo2 = {
        loop: true,
        autoplay: true, 
        animationData: light,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const logo3 = {
        loop: true,
        autoplay: true, 
        animationData: dollar,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const logo4 = {
        loop: true,
        autoplay: true, 
        animationData: topnotch,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const logo5 = {
        loop: true,
        autoplay: true, 
        animationData: scale,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const logo6 = {
        loop: true,
        autoplay: true, 
        animationData: finger,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };

  return (
    <>
    <div className='pb-16 'data-aos="zoom-in">
    <p className='sm:text-3xl text-3xl  sm:w-[45%] w-64 font-bold text-center  justify-center m-auto pt-8 sm:pt-16 font-evolventa'>Membership benefits</p>
    <p className='font-epilogue text-center pt-3'>Perks so good you'll never need to go anywhere else for your design. Seriously.</p>
    <button className="rounded-md text-white bg-gray-950 p-2 mt-3 sm:mt-6 float-left w-36 ml-[30%] sm:ml-[45%] mb-4 sm:mb-0 ">See plans</button>
 
 <div className=' m-auto w-fit sm:mt-44 mt-28'>
          <div className='sm:flex sm:space-x-24'>
            <div className='w-60  '>
            <div className='w-24 m-auto '> <Lottie options={logo1}/></div>
            <p className='font-bold text-lg text-center pt-9 pb-2 font-evolventa'>Design board</p>
                <p className='text-center font-epilogue'>Add as many design requests as you'd like.</p>
            </div>

            <div className='w-56  sm:-mt-11 '>
            <div className='w-24  m-auto'> <Lottie options={logo2}/></div>
            <p className='font-bold text-lg text-center pt-2 pb-2 font-evolventa'>Lightning fast delivery</p>
            <p className='text-center font-epilogue'>Get your design one at a time in just a few days on average.</p>
            </div>

            <div className='w-56  sm:-mt-4'>
            <div className='w-24 m-auto'> <Lottie options={logo3}/></div>
            <p className='font-bold text-lg text-center pt-2 pb-2 font-evolventa'>Fixed monthly rate</p>
            <p className='text-center font-epilogue'>No surprises here! Pay the same fixed price each month.</p>
            </div>
            </div>
                <div className='sm:flex mt-10 sm:space-x-24'>
                    <div className='w-56 '>
                    <div className='w-24 m-auto'> <Lottie options={logo4}/></div>
                    <p className='font-bold text-lg text-center pt-2 pb-2 font-evolventa'>Top-notch quality</p>
                        <p className='text-center font-epilogue'>Insane design quality at your fingertips whenever you need it.</p>
                    </div>

                    <div className='w-56 '>
                    <div className='w-24 m-auto'> <Lottie options={logo5}/></div>
                    <p className='font-bold text-lg text-center pt-2 pb-2 font-evolventa'>Flexible and scalable</p>
                        <p className='text-center font-epilogue'>Scale up or down as needed, and pause or cancel at anytime.</p>
                    </div>

                    <div className='w-56 '>
                    <div className='w-24 m-auto'> <Lottie options={logo6}/></div>
                    <p className='font-bold text-lg text-center pt-2 pb-2 font-evolventa'>Unique and all yours</p>
                        <p className='text-center font-epilogue'>Each of your designs is made especially for you and is 100% yours.</p>
                    </div>
             </div>


 </div>
 </div>
    </>
  )
}

export default Membership
