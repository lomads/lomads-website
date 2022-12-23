import React from "react";
import './Banner.style.css';

import hero from '../../../../assets/HERO.svg';
import pill1 from '../../../../assets/pill1.svg';
import pill2 from '../../../../assets/pill2.svg';

import box1 from '../../../../assets/bannerBox1.svg'
import box2 from '../../../../assets/bannerBox2.svg'
import box3 from '../../../../assets/bannerBox3.svg'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="heading-section">
                <h1>A <span>WOW</span> WAY <br />TO DAO</h1>
                <div className="heading-pill pos1">
                    <img src={pill1} alt="pill1" />
                    <span>+1</span>
                </div>
                <div className="heading-pill pos2">
                    <img src={pill2} alt="pill1" />
                    <span>+1</span>
                </div>
            </div>
            <p>Meet the ultimate operations and finance management dashboard<br />for web3 organizations, DAOs and beyond.</p>
            <button className="access-btn">GET EARLY ACCESS</button>

            <div className="hero-section">
                <img src={hero} alt="hero" />

                <img src={box1} className="whitebox pos1" alt="box1" />
                <img src={box2} className="whitebox pos2" alt="box2" />
                <img src={box3} className="whitebox pos3" alt="box3" />

            </div>
        </div>
    )
}

export default Banner;