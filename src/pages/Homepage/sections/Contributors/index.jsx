import './Contributors.style.css';

import nishant from '../../../../assets/team/Nishant.jpg';
import naman from '../../../../assets/team/Naman.jpg';
import harish from '../../../../assets/team/Harish.jpg';
import Fred from '../../../../assets/team/Fred.jpg';
import Tamaghna from '../../../../assets/team/Tamaghna.jpeg';
import Zohaib from '../../../../assets/team/Zohaib.png';
import Roshi from '../../../../assets/team/Roshi.jpeg';
import Joshua from '../../../../assets/team/Joshua.jpg';

import { useEffect } from 'react';

const Contributors = () => {

    useEffect(() => {
        if (window.innerWidth >= 426) {
            setTimeout(() => {
                window.ScrollTrigger.create({
                    trigger: '.contributors-container',
                    start: "top top",
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
            <div className="overlay"></div>
            <div className="scale">
                <h1 className='contributors-title'>{`We <3 `}<span>web3</span></h1>
                <p className='contributors-p'>Meet our core contributors and backers.</p>

                <div className='contributor-row'>

                    <div className='contributor-card' style={{ transform: 'rotate(-10.65deg)', zIndex: '1' }}>
                        <img src={nishant} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Nishant<br />Bhaskar</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '2' }}>
                        <img src={naman} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Naman<br />Negi</h1>
                            <p>Co founder</p>
                        </div>
                    </div>

                    {/* <div className='contributor-card' style={{ transform: 'rotate(-4.26deg)', zIndex: '3' }}>
                        <img src={harish} alt="nishant"  />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Harish<br />S N</h1>
                            <p>Full stack dev Sr.</p>
                        </div>
                    </div> */}

                    <div className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '4' }}>
                        <img src={Fred} alt="nishant" />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Frederic<br />Ranet</h1>
                            <p>BD & Ops</p>
                        </div>
                    </div>

                    {/* <div className='contributor-card' style={{ transform: 'rotate(13.48deg)', zIndex: '5' }}>
                        <img src={Tamaghna} alt="nishant"  />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Tamaghna<br />Chowdhury</h1>
                            <p>Product Mngt.</p>
                        </div>
                    </div> */}

                    <div className='contributor-card' style={{ transform: 'rotate(5.84deg)', zIndex: '6' }}>
                        <img src={Zohaib} alt="nishant" style={{ height: '100%' }} />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Zohaib<br />Kibria</h1>
                            <p>Full stack dev Jr.</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(-0.71deg)', zIndex: '7' }}>
                        <img src={Roshi} alt="nishant" style={{ height: '100%' }}  />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Roshi<br />Sharma</h1>
                            <p>Legal</p>
                        </div>
                    </div>

                    <div className='contributor-card' style={{ transform: 'rotate(11.81deg)', zIndex: '8' }}>
                        <img src={Joshua} alt="nishant" style={{ height: '100%' }}  />
                        <div className='contributor-overlay'></div>
                        <div className='contributor-content'>
                            <h1>Joshua<br /></h1>
                            <p>Marketing</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contributors;