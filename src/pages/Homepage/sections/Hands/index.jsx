import './Hands.style.css';

import left from '../../../../assets/left.svg';
import right from '../../../../assets/right.svg';

const Hands = () => {
    return (
        <div className='hands-container'>
            <img className='left-img' src={left} alt="left" />
            <img className='right-img' src={right} alt="left" />

            <h1 className='hands-title'>You <span>use</span><br />You <span>own</span></h1>
            <p className='hands-p'>The future of customer-platform relationships is here.<br />Here, everyone matters, everyone contributes, and<br /> everyone thrives, together.</p>

            <div className='hands-section-row'>
                <div className='hands-section'>
                    <h1>A piece of Lomads</h1>
                    <p>Pay for what you use in USDC or fiat, and in return own a piece of the platform.</p>
                </div>
                <div className='hands-section'>
                    <h1>A voice in Lomads</h1>
                    <p>Have a say in the decisions related to the platform</p>
                </div>
            </div>
        </div>
    )
}

export default Hands;