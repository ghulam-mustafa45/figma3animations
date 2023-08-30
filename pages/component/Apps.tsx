import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Apps = () => {
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
<div className='  m-auto w-fit sm:p-16 sm:pt-16 pt-10 pb-16'data-aos="zoom-in">
            <p className='text-black sm:text-4xl text-4xl font-bold m-auto text-center font-evolventa sm:mt-0 sm:w-auto w-[90%] '>Apps, websites, logos & more.</p>

        <div className='border-4 sm:p-10 p-6 m-auto mt-9 sm:mt-14 border-gray-400 w-fit rounded-3xl sm:flex sm:space-x-8 '>

            <div className='' id='col1'>

                    <p className='mb-3'>Websites</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Mobile apps</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Logos & branding</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Design systems</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>SAAS</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Wireframes</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Stationery</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Pitch decks</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

            </div>

            <div className='' id='col2'>

                    <p className='mb-3'>Slide decks</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Direct mail</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Infographics</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Brochures</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Signage</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Brand guides</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Social media graphics</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Billboards</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

            </div>

            <div className='' id='col3'>

                    <p className='mb-3'>Trade show banners</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Email graphics</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Resumes</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Business cards</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Packaging</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>WBlog graphics</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Digital ads</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

                    <p className='mb-3'>Icons</p>
                    <div className='border-2 rounded-full border-gray-400 w-64 mb-3'></div>

            </div>

        </div>
</div>
    </>
  )
}

export default Apps
