import './Fit.style.css';

import { HiOutlineArrowRight } from 'react-icons/hi'

import dropbtn from '../../../../assets/drop-btn.svg'

const Fit = () => {
    return (
        <section className='fit-container' data-scroll-section style={{ perspective: '1px' }}>
            <h1 className='fit-title'>You don’t<br />have to <span>fit in</span></h1>
            <p className='fit-p'>Lomads plugs seamlessly into your web3 organization.</p>
            <p className='fit-content'>Imagine Lomads as a lego set of web3 tools. Simply get on Lomads with your gang and keep adding tool-legos as your needs evolve.</p>
            <button>GET EARLY ACCESS <HiOutlineArrowRight size={22} /></button>

            <div className='bars-row'>
                <div className='bars-gray' style={{ width: '338px' }}></div>
                <div className='bars-gray' style={{ width: '338px', marginLeft: '1rem' }}></div>
                <img src={dropbtn} data-scroll data-scroll-class="drop-animation" />
                <div className='bars-gray' style={{ width: '338px' }}></div>
                <div className='bars-gray' style={{ width: '338px', marginLeft: '1rem' }}></div>
            </div>
        </section>
    )
}

export default Fit;