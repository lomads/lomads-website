
import React, { useEffect } from "react";
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

            <h1 data-speed={window.innerWidth > 1024 ? "1.5" : "1"} className='hands-title'>You <span>use</span><br />You <span>own</span></h1>
            <div data-speed={window.innerWidth > 1024 ? "1.5" : "1"} className='hands-p-container'>
                <p className='hands-p'>At Lomads, you're not just a user; you're a stakeholder vested in our collective future. Our platform is powered by our native token, LMD, and is geared towards progressive decentralization.</p>
            </div>

            <div data-speed={window.innerWidth > 1024 ? "1.5" : "1"} className='hands-section-row'>
                <div className='hands-section'>
                    <h1>Tokens with Benefits</h1>
                    <p>Lower your fees and unlock unique perks when you stake your Lomads tokens.<br/> </p>

                </div>
                <div className='hands-section'>
                    <h1>A Seat at the Table</h1>
                    <p>Stake tokens, steer the platform. Your input directly shapes our future, making Lomads work for you.</p>
                </div>
            </div>
        </section>
    )
}

export default Hands;
