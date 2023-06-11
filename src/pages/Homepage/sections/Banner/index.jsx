import React, { useEffect, useRef } from "react";
import './Banner.style.css';

import hero from '../../../../assets/HERO.svg';
import pill1 from '../../../../assets/pill1.svg';
import pill2 from '../../../../assets/pill2.svg';

import box1 from '../../../../assets/bannerBox1.svg'
import box2 from '../../../../assets/bannerBox2.svg'
import box3 from '../../../../assets/bannerBox3.svg'

import { HiOutlineArrowRight } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";

const Banner = () => {

    return (
        <section className="banner-container">
            <div className="heading-section">
                <h1 data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="animate__animated animate__fadeIn animate__fast">WHERE CAPITAL AND<br/> PEOPLE TANGO TO<bt/> GREATNESS</h1>
                <div data-speed={window.innerWidth > 1024 ? "0.8" : "1"} className="heading-pill pos1 animate__animated animate__bounceIn animate__delay-2s animate__faster">
                    <img src={pill1} alt="pill1" />
                    <span>+1</span>
                </div>
                <div data-speed={window.innerWidth > 1024 ? "0.8" : "1"} className="heading-pill pos2 animate__animated animate__bounceIn animate__delay-2s animate__faster">
                    <img src={pill2} alt="pill1" />
                    <span>+1</span>
                </div>
            </div>
            <p data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="animate__animated animate__fadeIn animate__delay-1s">Achieve unprecedented efficiency while empowering members<br/> of your organization with personal data sovereignty</p>
            <button data-speed={window.innerWidth > 1024 ? "1.2" : "1"}  className="access-btn animate__animated animate__fadeIn animate__delay-1s" onClick={() => { window.location.href = "/earlyAccess" }}>GET EARLY ACCESS <HiOutlineArrowRight size={20} /></button>

            <div id="hero-section" className="hero-section animate__animated animate__fadeInUp animate__slow">
                <img src={hero} alt="hero" data-speed="1" />
                <img src={box1} className="whitebox pos1" alt="box1" data-speed={window.innerWidth > 1024 ? "1.2" : "1"}  />
                <img src={box2} className="whitebox pos2" alt="box2" data-speed={window.innerWidth > 1024 ? "1.5" : "1"}  />
                <img src={box3} className="whitebox pos3" alt="box3" data-speed={window.innerWidth > 1024 ? "1.2" : "1"}  />
            </div>
        </section>
    )
}

export default Banner;