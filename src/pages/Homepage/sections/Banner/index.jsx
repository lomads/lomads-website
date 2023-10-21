import React from "react";
import './Banner.style.css';

import pill1 from '../../../../assets/pill1.svg';
import pill2 from '../../../../assets/pill2.svg';
import safe from '../../../../assets/logoSafe.svg';

import box1 from '../../../../assets/bannerBox1.svg'
import box2 from '../../../../assets/bannerBox2.svg'
import box3 from '../../../../assets/bannerBox3.svg'

import { HiOutlineArrowRight } from 'react-icons/hi'

const Banner = () => {

    return (
        <section className="banner-container">
            <div className="heading-section">
                <div className="heading-container">
                    <h1 data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="animate__animated animate__fadeIn animate__fast"> <br /> </h1>
                    <h1 data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="animate__animated animate__fadeIn animate__fast">CommandCentral<span></span></h1>
                    <h1 data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="animate__animated animate__fadeIn animate__fast">for <span>Collectives</span></h1>
                </div>
                <div data-speed={window.innerWidth > 1024 ? "0.8" : "1"} className="heading-pill pos1 animate__animated animate__bounceIn animate__delay-2s animate__faster">
                    <img src={pill1} alt="pill1" />
                    <span>+1</span>
                </div>
                <div data-speed={window.innerWidth > 1024 ? "0.8" : "1"} className="heading-pill pos2 animate__animated animate__bounceIn animate__delay-2s animate__faster">
                    <img src={pill2} alt="pill1" />
                    <span>+1</span>
                </div>
            </div>
            <p data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="animate__animated animate__fadeIn animate__delay-1s"><br /> Lomads Offers A Crisp Framework To Streamline And Formalize Operations</p>
            <div style={{ display: "flex", alignItems: "center"}}>
            <button data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="access-btn animate__animated animate__fadeIn animate__delay-1s" style={{ backgroundColor:'white', color:'#C94B32' }} onClick={() => { window.open("https://app.lomads.xyz/login")}}>Launch App </button>
            <button data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="access-btn animate__animated animate__fadeIn animate__delay-1s" onClick={() => { window.open("https://calendly.com/lomads-nishant/lomads-intro")}}>Book a Demo </button>
            </div>
            <div style={{ display: "flex", alignItems: "center"}}>
            <p data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="animate__animated animate__fadeIn animate__delay-1s"><br /> Powered by</p>
            <img data-speed={window.innerWidth > 1024 ? "1.2" : "1"} className="animate__animated animate__fadeIn animate__delay-1s" style={{ width:'100px', paddingLeft:'10px', marginTop:'5px'}} src={safe}/>
            </div>
            <div id="hero-section" className="hero-section animate__animated animate__fadeInUp animate__slow">
                <img src="https://raw.githubusercontent.com/lomads/lomads-website/main/src/assets/HERO.svg" className="hero-img" alt="hero" data-speed="1" />
                <img src={box1} className="whitebox pos1" alt="box1" data-speed={window.innerWidth > 1024 ? "1.2" : "1"} />
                <img src={box2} className="whitebox pos2" alt="box2" data-speed={window.innerWidth > 1024 ? "1.5" : "1"} />
                <img src={box3} className="whitebox pos3" alt="box3" data-speed={window.innerWidth > 1024 ? "1.2" : "1"} />
            </div>
        </section>
    )
}

export default Banner;
