import './Fit.style.css';

import { HiOutlineArrowRight } from 'react-icons/hi'

const Fit = () => {
    return (
        <div className='fit-container'>
            <h1 className='fit-title'>You don’t<br />have to <span>fit in</span></h1>
            <p className='fit-p'>Lomads plugs seamlessly into your web3 organization.</p>
            <p className='fit-content'>Imagine Lomads as a lego set of web3 tools. Simply get on Lomads with your gang and keep adding tool-legos as your needs evolve.</p>
            <button>GET EARLY ACCESS <HiOutlineArrowRight size={22} /></button>

            <div className='bars-row'>
                <div className='bars-gray' style={{ width: '338px' }}></div>
                <div className='bars-gray' style={{ width: '338px' }}></div>
                <div className='bars-gray' style={{ width: '338px' }}></div>
                <div className='bars-gray' style={{ width: '338px' }}></div>
            </div>
        </div>
    )
}

export default Fit;