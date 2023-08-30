import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Memberslevle = () => {
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
<div className='w-full relative' data-aos="zoom-in">
            <img className=' absolute inset-0 sm:w-full h-full object-cover' src="./images/divm1.svg" alt="error" />
        <div className='relative m-auto '>
                    <p className='text-white sm:text-4xl text-4xl font-bold sm:pt-16 pt-10 m-auto text-center font-evolventa sm:w-auto w-[60%]'>Memberships levels</p>
                    <p className='text-white  sm:pt-6 pt-4 sm:w-fit w-[65%] m-auto sm:pb-5 pb-5 sm:text-base text-xl text-center font-epilogue'>Choose a plan that's right for you.</p>
         </div> 

              <div className='w-fit relative justify-center items-center m-auto sm:pb-24 pb-20'>
                        <div className='sm:flex justify-center sm:space-x-2'>
                                    <div className='bg-white sm:rounded-l-xl p-10 mt-5 w-fit '>
                                            <p className='font-evolventa sm:text-2xl text-xl font-bold sm:pt-5 w-fit'>Website Design</p>
                                            <p className='font-epilogue pt-1 text-xs'>Pause or cancel anytime.</p>
                                            <p className='text-xl font-bold font-evolventa pt-1'>$4,995</p>
                                            <button className="rounded-md text-white bg-gray-950 p-2 mt-3 sm:mt-6  m-auto mb-4 sm:mb-0 sm:w-72">Get started</button>
                                            <p className='font-bold font-evolventa pt-1 text-base sm:mt-14'>What's included :</p>
                                            <div className="bullet-list pb-7">                        
                                                    <p className='font-epilogue pt-1 font-bold text-xs '>Unlimited requests</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Unlimited revisions</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Unlimited stock photos</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Average 48 hour turnaround</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Easy credit card payments</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Pause or cancel anytime</p>
                                            </div>

                                    </div>

                                    <div className='bg-white sm:rounded-r-xl p-10 mt-5 w-fit '>
                                            <p className='font-evolventa sm:text-2xl text-xl font-bold sm:pt-5 w-fit'>Website Design</p>
                                            <p className='font-epilogue pt-1 text-xs'>Pause or cancel anytime.</p>
                                            <p className='text-xl font-bold font-evolventa pt-1'>$4,995</p>
                                            <button id='btn' className="rounded-md text-white bg-gray-950 p-2 mt-3 sm:mt-6  m-auto mb-4 sm:mb-0 sm:w-72">Get started</button>
                                            <p className='font-bold font-evolventa pt-1 text-base sm:mt-14'>What's included :</p>
                                            <div className="bullet-list pb-7">                        
                                                    <p className='font-epilogue pt-1 font-bold text-xs '>Unlimited requests</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Unlimited revisions</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Unlimited stock photos</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Average 48 hour turnaround</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Easy credit card payments</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Pause or cancel anytime</p>
                                            </div>

                                    </div>
                                    </div>

                        <div className='sm:flex justify-center sm:space-x-2'>
                                    <div className='bg-white sm:rounded-l-xl p-10 mt-5 w-fit f'>
                                            <p className='font-evolventa sm:text-2xl text-xl font-bold sm:pt-5 w-fit'>Website Design</p>
                                            <p className='font-epilogue pt-1 text-xs'>Pause or cancel anytime.</p>
                                            <p className='text-xl font-bold font-evolventa pt-1'>$4,995</p>
                                            <button className="rounded-md text-white bg-gray-950 p-2 mt-3 sm:mt-6  m-auto mb-4 sm:mb-0 sm:w-72">Get started</button>
                                            <p className='font-bold font-evolventa pt-1 text-base sm:mt-14'>What's included :</p>
                                            <div className="bullet-list pb-7">                        
                                                    <p className='font-epilogue pt-1 font-bold text-xs '>Unlimited requests</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Unlimited revisions</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Unlimited stock photos</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Average 48 hour turnaround</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Easy credit card payments</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Pause or cancel anytime</p>
                                            </div>

                                    </div>

                                    <div className='bg-white sm:rounded-r-xl p-10 mt-5 w-fit'>
                                            <p className='font-evolventa sm:text-2xl text-xl font-bold sm:pt-5 w-fit'>Website Design</p>
                                            <p className='font-epilogue pt-1 text-xs'>Pause or cancel anytime.</p>
                                            <p className='text-xl font-bold font-evolventa pt-1'>$4,995</p>
                                            <button className="rounded-md text-white bg-gray-950 p-2 mt-3 sm:mt-6  m-auto mb-4 sm:mb-0 sm:w-72">Get started</button>
                                            <p className='font-bold font-evolventa pt-1 text-base sm:mt-14'>What's included :</p>
                                            <div className="bullet-list pb-7">                        
                                                    <p className='font-epilogue pt-1 font-bold text-xs '>Unlimited requests</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Unlimited revisions</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Unlimited stock photos</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Average 48 hour turnaround</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Easy credit card payments</p>
                                                    <p className='font-epilogue pt-1 text-xs '>Pause or cancel anytime</p>
                                            </div>

                                    </div>

                                    </div>
                </div> 

        
</div>
    </>
  )
}

export default Memberslevle
