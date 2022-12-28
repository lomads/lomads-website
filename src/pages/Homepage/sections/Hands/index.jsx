import './Hands.style.css';

import left from '../../../../assets/left.svg';
import right from '../../../../assets/right.svg';

const Hands = () => {
    return (
        <section className='hands-container' data-scroll-section style={{ perspective: '1px' }}>
            <img className='left-img' src={left} alt="left" data-scroll data-scroll-class="rotate-right" data-scroll-repeat={true} />
            <img className='right-img' src={right} alt="left" data-scroll data-scroll-class="rotate-left" data-scroll-repeat={true} />

            <h1 className='hands-title' data-scroll data-scroll-speed={4}>You <span>use</span><br />You <span>own</span></h1>
            <p className='hands-p' data-scroll data-scroll-speed={4}>The future of customer-platform relationships is here.<br />Here, everyone matters, everyone contributes, and<br /> everyone thrives, together.</p>

            <div className='hands-section-row'>
                <div className='hands-section' data-scroll data-scroll-speed={4}>
                    <h1>A piece of Lomads</h1>
                    <p>Pay for what you use in USDC or fiat, and in return own a piece of the platform.</p>
                </div>
                <div className='hands-section' data-scroll data-scroll-speed={4}>
                    <h1>A voice in Lomads</h1>
                    <p>Have a say in the decisions related to the platform</p>
                </div>
            </div>
        </section>
    )
}

export default Hands;