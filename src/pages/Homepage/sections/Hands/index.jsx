
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './Hands.style.css';

import left from '../../../../assets/left.svg';
import right from '../../../../assets/right.svg';

const Hands = () => {


    useEffect(() => {
        setTimeout(() => {
        window.gsap.set('.left-img', {xPercent: -5});
        window.gsap.set('.right-img', {xPercent: 0});

        window.gsap.timeline({
            scrollTrigger:{
              trigger: ".hands-container",
              pin: false,
              scrub:0.2,
              start: 'top-=50%',
              end:'+=10000',
            }
          })
          .to('.left-img', {
            rotation:-360*0.7,
            duration: 5, ease:'none',
          })

          window.gsap.timeline({
            scrollTrigger:{
              trigger: ".hands-container",
              pin: false,
              scrub:0.2,
              start: 'top-=50%',
              end:'+=10000',
            }
          })
          .to('.right-img', {
            rotation:360*0.4,
            duration: 5, ease:'none',
          })

        }, [50])
    }, [])

    return (
        <section className='hands-container'>
            <img className='left-img' src={left} alt="left" />
            <img className='right-img' src={right} alt="left"  />

            <h1 data-speed="1.5" className='hands-title'>You <span>use</span><br />You <span>own</span></h1>
            <div data-speed="1.5" className='hands-p-container'>
                <p className='hands-p'>The future of customer-platform relationships is here. Here, everyone matters, everyone contributes, and everyone thrives, together.</p>
            </div>

            <div data-speed="1.5" className='hands-section-row'>
                <div className='hands-section'>
                    <h1>A piece of Lomads</h1>
                    <p>Pay for what you use in USDC or fiat, and in return own a piece of the platform.</p>
                </div>
                <div className='hands-section'>
                    <h1>A voice in Lomads</h1>
                    <p>Have a say in the decisions related to the platform</p>
                </div>
            </div>
        </section>
    )
}

export default Hands;