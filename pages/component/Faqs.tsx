import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react'

function Faqs () {
    useEffect(() => {
        AOS.init({
          duration:800, // Animation duration
          offset: 30,   // Offset (in px) from the top of the element
          easing: 'ease-in-out', // Animation easing
          once: true,    // Whether animation should occur only once
        });
      }, []);
    const [selected ,setselected]=useState<number | null>(null);

    const toggle=(i:number)=>{
        if (selected===i){
            return setselected(null)
        }
        setselected(i)
    }

  return (
    <>
    <div data-aos="zoom-in">
<div className='sm:pt-14 mt-12' >

        <p className='sm:text-5xl text-5xl font-evolventa font-bold m-auto w-fit '>FAQs</p>

    </div>
<div className='m-auto sm:w-fit w-[80%]'>
    <div className='wrapper flex justify-center content-center sm:w-[100vh] sm:h-[100vh] items-center text-justify sm:mt-1 mt-9 pb-6'>
        <div className='accordian sm:w-[100%]'>
            {data.map((item,i)=>(
                <div className='item mb-4'>
                    <div className='pb-5 title font-jakarta-sans sm:font-semibold font-bold flex justify-between items-center cursor-pointer sm:text-base text-sm sm:space-x-0 space-x-12 sm:w-auto' onClick={()=>toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected===i ? '-' : '+'}</span>
                    </div>
                    <hr />
                    <div className='sm:text-sm text-xs pt-2'>
                    <div className={selected===i ? 'content show' :'content' }>{item.answer}</div>
                </div>
                </div>
            )
            )}
        </div>
</div>
</div>
</div>
</>
  )
}

const data=[
    {
        question:'Is there a limit to how many requests I can have?',
        answer:'Once subscribed, youre able to add as many design requests to your queue as youd like, and they will be delivered one by one.'
    },

    {
        question:'How fast will I receive my designs?',
        answer:'On average, most requests are completed in just two days or less. However, more complex requests can take longer.'
    },
    {
        question:'Who are the designers?',
        answer:'You might be surprised to hear this, but Designjoy is actually an agency of one. This means youll work directly with me, founder of Designjoy. However, power-ups requests such as animations or custom illustrations are provided by partner designers.'
    },
    {
        question:'How does the pause feature work?',
        answer:'We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. Thats where pausing your subscription comes in handy.Billing cycles are based on 31 day period. Lets say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and youll have 10 days of service remaining to be used anytime in the future.'
    },
    {
        question:'How do I request designs?',
        answer:'Designjoy offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, its fair game.'
    },
    {
        question:'What if I dont like the design?',
        answer:'No worries! Well continue to revise the design until youre 100% satisfied.'
    },
    {
        question:'What if I only have a single request?',
        answer:'Thats fine. You can pause your subscription when finished and return  when you have additional design needs. Theres no need to let the remainder of your subscription go to waste.'
    },
    {
        question:'Are there any refunds if I dont like the service?',
        answer:'Due to the high quality nature of the work, there will be no refunds issued.'
    },
    {
        question:'Is there a limit to how many requests I can have?',
        answer:'Once subscribed, youre able to add as many design requests to your queue as youd like, and they will be delivered one by one.'
    },
]

export default Faqs
