import React, { useEffect, useRef } from "react";
import './Banner.style.css';

import hero from '../../../../assets/HERO.svg';
import pill1 from '../../../../assets/pill1.svg';
import pill2 from '../../../../assets/pill2.svg';

import box1 from '../../../../assets/bannerBox1.svg'
import box2 from '../../../../assets/bannerBox2.svg'
import box3 from '../../../../assets/bannerBox3.svg'

import { HiOutlineArrowRight } from 'react-icons/hi'

const Banner = ({ toggleModal }) => {

    return (
        <section className="banner-container">
            <div className="heading-section">
                <h1 data-speed="1.2" className="animate__animated animate__fadeIn animate__fast">A <span>WOW</span> WAY <br />TO DAO</h1>
                <div data-speed="0.8" className="heading-pill pos1 animate__animated animate__bounceIn animate__delay-2s animate__faster">
                    <img src={pill1} alt="pill1" />
                    <span>+1</span>
                </div>
                <div data-speed="0.8" className="heading-pill pos2 animate__animated animate__bounceIn animate__delay-2s animate__faster">
                    <img src={pill2} alt="pill1" />
                    <span>+1</span>
                </div>
            </div>
            <p data-speed="1.2" className="animate__animated animate__fadeIn animate__delay-1s">Meet the ultimate operations and finance management dashboard<br />for web3 organizations, DAOs and beyond.</p>
            <button data-speed="1.2" className="access-btn animate__animated animate__fadeIn animate__delay-1s" onClick={() => toggleModal(true)}>GET EARLY ACCESS <HiOutlineArrowRight size={20} /></button>

            <div id="hero-section" className="hero-section animate__animated animate__fadeInUp animate__slow">
                <img src={hero} alt="hero" data-speed="1" />
                <img src={box1} className="whitebox pos1" alt="box1" data-speed="1.2" />
                <img src={box2} className="whitebox pos2" alt="box2" data-speed="1.5" />
                <img src={box3} className="whitebox pos3" alt="box3" data-speed="1.2" />
            </div>
        </section>
    )
}

export default Banner;