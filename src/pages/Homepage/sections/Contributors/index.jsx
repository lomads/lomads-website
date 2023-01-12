import './Contributors.style.css';

import nishant from '../../../../assets/team/Nishant.jpg';
import naman from '../../../../assets/team/Naman.jpg';
import harish from '../../../../assets/team/Harish.png';
import Fred from '../../../../assets/team/Fred.jpg';
import Tamaghna from '../../../../assets/team/Tamaghna.jpg';
import Zelie from '../../../../assets/team/Zelie.jpg';
import Zohaib from '../../../../assets/team/Zohaib.png';
import Roshi from '../../../../assets/team/Roshi.jpg';
import Joshua from '../../../../assets/team/Joshua.jpg';

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
                        trigger: ".contributors-container",
                        start: "top top",
                        toggleActions: "play none none reverse"
                    },
                });

            }, 50)
        }
    }, [])

    return (
        <section className='contributors-container'>
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="overlay"></div>
                <div className="scale">
                    <h1 className='contributors-title'>{`We <3 `}<span>web3</span></h1>
                    <p className='contributors-p'>Meet our core contributors and backers.</p>

                    <div className='contributor-row'>

                        <div className='contributor-card' style={{ transform: 'rotate(-10.65deg)', zIndex: '1' }} onClick={() => { window.open("https://twitter.com/nbhaskar888") }}>
                            <img src={nishant} alt="nishant" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaTwitter size={20} color="#FFF" />
                                <h1>Nishant<br />Bhaskar</h1>
                                <p>Co founder</p>
                            </div>
                        </div>

                        <div className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '2' }} onClick={() => { window.open("https://www.linkedin.com/in/namansnegi/") }}>
                            <img src={naman} alt="nishant" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Naman<br />Negi</h1>
                                <p>Co founder</p>
                            </div>
                        </div>

                        <div className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '4' }} onClick={() => { window.open("https://twitter.com/FredericRamet") }}>
                            <img src={Fred} alt="nishant" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaTwitter size={20} color="#FFF" />
                                <h1>Frederic<br />Ramet</h1>
                                <p>BD & Ops</p>
                            </div>
                        </div>


                        <div className='contributor-card' style={{ transform: 'rotate(13.48deg)', zIndex: '5' }} onClick={() => { window.open("https://www.linkedin.com/in/zélie-dethorey-8ab09669/") }}>
                            <img src={Zelie} alt="nishant" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Zelie<br />Dethorey</h1>
                                <p>Full stack designer</p>
                            </div>
                        </div>

                        <div className='contributor-card' style={{ transform: 'rotate(-4.26deg)', zIndex: '3' }} onClick={() => { window.open("https://www.linkedin.com/in/rish6ix/") }}>
                            <img src={harish} alt="nishant" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Harish<br />S N</h1>
                                <p>Full stack dev Sr.</p>
                            </div>
                        </div>

                        <div className='contributor-card' style={{ transform: 'rotate(13.48deg)', zIndex: '5' }} onClick={() => { window.open("https://twitter.com/iam_tamaghna") }}>
                            <img src={Tamaghna} alt="nishant" />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaTwitter size={20} color="#FFF" />
                                <h1>Tamaghna<br />Chowdhury</h1>
                                <p>Product Mngt.</p>
                            </div>
                        </div>

                        <div className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '6' }} onClick={() => { window.open("https://www.linkedin.com/in/zohaib-kibria-221890137/") }}>
                            <img src={Zohaib} alt="nishant" style={{ height: '100%' }} />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Zohaib<br />Kibria</h1>
                                <p>Full stack dev.</p>
                            </div>
                        </div>

                        <div className='contributor-card' style={{ transform: 'rotate(-0.71deg)', zIndex: '7' }} onClick={() => { window.open("https://www.linkedin.com/in/roshi-sharma-lawbeam/") }}>
                            <img src={Roshi} alt="nishant" style={{ height: '100%' }} />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaLinkedin size={20} color="#FFF" />
                                <h1>Roshi<br />Sharma</h1>
                                <p>Legal</p>
                            </div>
                        </div>

                        <div className='contributor-card' style={{ transform: 'rotate(11.81deg)', zIndex: '8' }} onClick={() => { window.open("https://twitter.com/aethe_re") }}>
                            <img src={Joshua} alt="nishant" style={{ height: '100%' }} />
                            <div className='contributor-overlay'></div>
                            <div className='contributor-content'>
                                <FaTwitter size={20} color="#FFF" />
                                <h1>Joshua<br /></h1>
                                <p>Marketing</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contributors;