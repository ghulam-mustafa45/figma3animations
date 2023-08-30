import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Designcave = () => {
    useEffect(() => {
        AOS.init({
          duration:900, // Animation duration
          offset: 30,   // Offset (in px) from the top of the element
          easing: 'ease-in-out', // Animation easing
          once: true,    // Whether animation should occur only once
        });
      }, []);

  return (
    <>
<div className="designcave-container" data-aos="zoom-in">

        <img className='absolute sm:w-auto sm:h-auto ' src="./images/divap1.svg" alt="error" />
        <div className='relative m-auto w-fit' data-aos="slide-up">
            <p className='text-white sm:text-3xl text-2xl font-bold sm:pt-6 pt-6 w-fit m-auto font-evolventa'>designcave</p>
            <p className='text-white sm:text-4xl font-bold pt-1 pb-2 sm:pt-7 sm:w-[75%] m-auto  text-center font-evolventa'>A Digital Marketing agency </p>
            <p className='text-white sm:text-base text-sm sm:pt-6 sm:w-fit m-auto sm:pb-5 pb-5 font-epilogue'>Design subscriptions to scale your business.</p>
            <button className="rounded-md text-white bg-gray-950 p-2 sm:mt-4 float-left w-36 m-auto sm:ml-[35%] ml-24 mb-8 sm:mb-0 ">See plans</button>
        </div>

    <div className="carousel-wrapper sm:pt-[6%] sm:mt-5 w-full bg-transparent">
      <div className="relative bg-transparent flex sm:w-[100%] " >
                <div className='sm:w-[120%] sm:p-2 p-1 transition-transform hover:scale-110 shadow-gray-200'>
                <img src="./images/divap2.svg" alt="error" /></div>

                 <div className='sm:w-[120%] sm:p-2 p-1 transition-transform hover:scale-110'>
                <img src="./images/divap3.svg" alt="error" /></div>

                <div className='sm:w-[120%] sm:p-2 p-1 transition-transform hover:scale-110'>
                <img src="./images/divap4.svg" alt="error" />  </div>
                 
                 <div className='sm:w-[120%] sm:p-2 p-1 transition-transform hover:scale-110'>
                <img src="./images/divap5.svg" alt="error" /></div>
                         
                </div>
                
        <div/>
                
    </div>


    <div className='logos  overflow-hidden whitespace-nowrap' >
        <div className='logos-slide flex w-fit bg-black  content-center sm:space-x-20 '>

            <div className='slide sm:p-4 p-4 '>
                <img className='sm:w-20 w-20 m-auto' src="./images/divap6.svg" alt="error" />
            </div>

            <div className='slide p-4'>
                <img className='sm:w-20 w-20'  src="./images/divap7.svg" alt="error" />
            </div>

            <div className='slide p-4 mt-1 sm:mt-3'>
                <img className='sm:w-20 w-24'  src="./images/divap8.svg" alt="error" />
            </div>

            <div className='slide p-4'>
                <img className=' sm:w-10 w-12'  src="./images/divap9.svg" alt="error" />
            </div>

            <div className='slide p-4'>
                <img className='sm:w-20 w-28 mt-1 sm:mt-3'  src="./images/divap10.svg" alt="error" />
            </div>

            <div className='slide p-4'>
                <img className='sm:w-14 w-14'  src="./images/divap11.svg" alt="error" />
            </div>
            <div className='slide p-4 sm:pl-4'>
                <img className='sm:w-20 w-20'  src="./images/divap7.svg" alt="error" />
            </div>
        </div>


        <div className='logos-slide flex w-fit bg-black content-center sm:space-x-20 '>

                    <div className='slide sm:p-4 p-4 sm:ml-4'>
                        <img className='sm:w-20 w-20 m-auto' src="./images/divap6.svg" alt="error" />
                    </div>

                    <div className='slide p-4'>
                        <img className='sm:w-20 w-20'  src="./images/divap7.svg" alt="error" />
                    </div>

                    <div className='slide p-4 mt-1 sm:mt-3'>
                        <img className='sm:w-20 w-24'  src="./images/divap8.svg" alt="error" />
                    </div>

                    <div className='slide p-4'>
                        <img className=' sm:w-10 w-12'  src="./images/divap9.svg" alt="error" />
                    </div>

                    <div className='slide p-4'>
                        <img className='sm:w-20 w-28 mt-1 sm:mt-3'  src="./images/divap10.svg" alt="error" />
                    </div>

                    <div className='slide p-4'>
                        <img className='sm:w-14 w-14'  src="./images/divap11.svg" alt="error" />
                    </div>

                    <div className='slide p-4'>
                <img className='sm:w-20 w-20'  src="./images/divap7.svg" alt="error" />
            </div>
            
            
        </div>

    </div>

</div>
    </>
  )
}

export default Designcave
