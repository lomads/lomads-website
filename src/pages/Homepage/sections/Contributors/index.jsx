import './Contributors.style.css';
import React, { useCallback } from 'react';
import nishant from '../../../../assets/team/Nishant.webp';
import naman from '../../../../assets/team/Naman.webp';
import harish from '../../../../assets/team/Harish.webp';
import Fred from '../../../../assets/team/Fred.webp';
import Tamaghna from '../../../../assets/team/Tamaghna.webp';
import Zelie from '../../../../assets/team/Zelie.webp';
import Zohaib from '../../../../assets/team/Zohaib.webp';
import Roshi from '../../../../assets/team/Roshi.webp';
import Anais from '../../../../assets/team/Anais.jpeg';

import ChevronLeft from '../../../../assets/chevron-left.svg';
import ChevronRight from '../../../../assets/chevron-right.svg';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect } from 'react';

import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contributors = () => {

    useEffect(() => {
        if (window.innerWidth >= 426) {
            setTimeout(() => {
                window.ScrollTrigger.create({
                    trigger: '.contributors-container',
                    start: "top top",
                    end: "bottom",
                    pin: true,
                    pinSpacing: false
                });

                window.gsap.to(".scale", {
                    transform: "scale(0.95)",
                    scrollTrigger: {
                        trigger: ".contact-container",
                        start: "top+=100 bottom",
                        toggleActions: "play none none reverse"
                    },
                });

            }, 50)
        }
    }, [])

    const openPage = useCallback((link) => () => {
        window.open(link);
    }, []);
    
    return (
        <section className='contributors-container'>
            <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="overlay"></div>
                <div className="scale">
                    <h1 className='contributors-title'>{`We <3 `}<span>web3</span></h1>
                    <p className='contributors-p'>Meet our core contributors and backers.</p>
                    <ScrollMenu scrollContainerClassName="contributor-row-scroll" wrapperClassName="contributor-row" LeftArrow={LeftArrow} RightArrow={RightArrow}>
                        <div key={"Nishant"} onClick={openPage("https://twitter.com/nbhaskar888")} className='contributor-card' style={{ transform: 'rotate(-10.65deg) !important', zIndex: '1' }}>
                            <img src={nishant} alt="nishant" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaTwitter size={20} color="#FFF" />
                                <h1>Nishant</h1>
                                <p>Co founder</p>
                            </div>
                        </div>

                        <div onClick={openPage("https://www.linkedin.com/in/namansnegi/")} className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '2' }}>
                            <img src={naman} alt="naman" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Naman</h1>
                                <p>Co founder</p>
                            </div>
                        </div>

                        <div onClick={openPage("https://twitter.com/FredericRamet")} className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '4' }} >
                            <img src={Fred} alt="Fred" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaTwitter size={20} color="#FFF" />
                                <h1>Frederic</h1>
                                <p>BD & Ops</p>
                            </div>
                        </div>


                        <div onClick={openPage("https://www.linkedin.com/in/zélie-dethorey-8ab09669/")} className='contributor-card' style={{ transform: 'rotate(13.48deg)', zIndex: '5' }}>
                            <img src={Zelie} alt="Zelie" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Zelie</h1>
                                <p>Full stack designer</p>
                            </div>
                        </div>

                        <div onClick={openPage("https://www.linkedin.com/in/rish6ix/")} className='contributor-card' style={{ transform: 'rotate(-4.26deg)', zIndex: '3' }}>
                            <img src={harish} alt="harish" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Harish</h1>
                                <p>Full stack dev Sr.</p>
                            </div>
                        </div>

                        <div onClick={openPage("https://www.linkedin.com/in/anais-rachel-0a0b43a2")} className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '6' }}>
                            <img src={Anais} alt="anais" style={{ height: '100%' }} />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Anais</h1>
                                <p>Partnerships</p>
                            </div>
                        </div>

                        <div onClick={openPage("https://www.linkedin.com/in/roshi-sharma-lawbeam/")} className='contributor-card' style={{ transform: 'rotate(-0.71deg)', zIndex: '7' }}>
                            <img src={Roshi} alt="roshi" style={{ height: '100%' }} />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Roshi</h1>
                                <p>Legal</p>
                            </div>
                        </div>

                        <div onClick={openPage("https://twitter.com/iam_tamaghna")} className='contributor-card' style={{ transform: 'rotate(13.48deg)', zIndex: '5' }}>
                            <img src={Tamaghna} alt="tamaghna" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaTwitter size={20} color="#FFF" />
                                <h1>Tamaghna</h1>
                                <p>Product Mngt.</p>
                            </div>
                        </div>

                        {/* <div onClick={() => { window.open("https://twitter.com/aethe_re") }} className='contributor-card' style={{ transform: 'rotate(-0.71deg)', zIndex: '8' }}>
                            <img src={Joshua} alt="joshua" style={{ height: '100%' }} />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaTwitter size={20} color="#FFF" />
                                <h1>Joshua</h1>
                                <p>Partnerships</p>
                            </div>
                        </div>

                        <div onClick={() => { window.open("https://twitter.com/HypnoJimmy") }} className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '8' }}>
                            <img src={Jared} alt="jared" style={{ height: '100%' }} />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaTwitter size={20} color="#FFF" />
                                <h1>Jimmy</h1>
                                <p>Marketing</p>
                            </div>
                        </div>

                        <div onClick={() => { window.open("https://www.linkedin.com/in/fernandobcruzperez/") }} className='contributor-card' style={{ transform: 'rotate(-0.71deg)', zIndex: '8' }}>
                            <img src={Fernando} alt="fernando" style={{ height: '100%' }} />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Fernando</h1>
                                <p>Operations</p>
                            </div>
                        </div> */}
                    </ScrollMenu>
                </div>
            </div>
        </section>
    )
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <img style={{ height: 80, width: 40 }} src={ChevronLeft} alt="" />
        </div>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <img style={{ height: 80, width: 40 }} src={ChevronRight} alt="" />
        </div>
    );
}

export default Contributors;
